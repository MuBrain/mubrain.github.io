import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { extname, join, relative, resolve, sep } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const blogRoot = join(root, 'src', 'content', 'blog');
const okfRoot = join(root, 'knowledge', 'okf');
const supportedExtensions = new Set(['.md', '.mdx']);
const errors = [];

function listContentFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return listContentFiles(path);
    return supportedExtensions.has(extname(entry.name)) ? [path] : [];
  });
}

function normalizeContent(content) {
  return content.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
}

function parseScalar(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'));
  if (!match) return undefined;
  return match[1].replace(/^["']|["']$/g, '');
}

function parseEntry(path) {
  const content = normalizeContent(readFileSync(path, 'utf8'));
  const match = content.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!match) {
    errors.push(`${relative(root, path)}: frontmatter YAML absent ou invalide.`);
    return undefined;
  }

  const id = relative(blogRoot, path)
    .slice(0, -extname(path).length)
    .split(sep)
    .join('/');
  const frontmatter = match[1];

  return {
    path,
    id,
    content,
    locale: parseScalar(frontmatter, 'locale'),
    language: parseScalar(frontmatter, 'language'),
    translationKey: parseScalar(frontmatter, 'translationKey'),
    sourceOfTruth: parseScalar(frontmatter, 'sourceOfTruth'),
    translationOf: parseScalar(frontmatter, 'translationOf'),
    translationStatus: parseScalar(frontmatter, 'translationStatus'),
    sourceDigest: parseScalar(frontmatter, 'sourceDigest'),
    okfSource: parseScalar(frontmatter, 'okfSource'),
    draft: parseScalar(frontmatter, 'draft'),
  };
}

function digest(content) {
  return `sha256:${createHash('sha256').update(content).digest('hex')}`;
}

function parseOkfEntry(path, locale) {
  const content = normalizeContent(readFileSync(path, 'utf8'));
  const match = content.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!match) {
    errors.push(`${relative(root, path)}: frontmatter YAML absent ou invalide.`);
    return undefined;
  }

  const frontmatter = match[1];
  return {
    path,
    locale,
    content,
    language: parseScalar(frontmatter, 'language'),
    sourceOfTruth: parseScalar(frontmatter, 'source_of_truth'),
    translationOf: parseScalar(frontmatter, 'translation_of'),
    translationStatus: parseScalar(frontmatter, 'translation_status'),
    sourceDigest: parseScalar(frontmatter, 'source_digest'),
  };
}

const entries = listContentFiles(blogRoot).map(parseEntry).filter(Boolean);
const byId = new Map(entries.map((entry) => [entry.id, entry]));
const byLocaleAndKey = new Map();

for (const entry of entries) {
  const label = relative(root, entry.path);
  const pathLocale = entry.id.split('/')[0];

  if (!entry.translationKey) {
    errors.push(`${label}: translationKey est requis.`);
  } else {
    const pairKey = `${entry.locale}:${entry.translationKey}`;
    if (byLocaleAndKey.has(pairKey)) {
      errors.push(`${label}: translationKey dupliqué pour la locale ${entry.locale}.`);
    }
    byLocaleAndKey.set(pairKey, entry);
  }

  if (entry.locale !== pathLocale) {
    errors.push(`${label}: la locale doit correspondre au dossier ${pathLocale}.`);
  }

  const expectedLanguage = entry.locale === 'fr' ? 'fr-CA' : 'en-CA';
  if (entry.language !== expectedLanguage) {
    errors.push(`${label}: language doit être ${expectedLanguage}.`);
  }

  if (entry.locale === 'fr' && entry.sourceOfTruth !== 'true') {
    errors.push(`${label}: le contenu fr-CA doit être la source de vérité.`);
  }

  if (entry.locale === 'en' && entry.sourceOfTruth !== 'false') {
    errors.push(`${label}: une traduction en-CA ne peut pas être la source de vérité.`);
  }

  if (entry.okfSource) {
    const okfPath = resolve(root, entry.okfSource);
    if (!entry.okfSource.startsWith('knowledge/okf/') || !existsSync(okfPath)) {
      errors.push(`${label}: okfSource ne pointe pas vers un fichier OKF existant.`);
    }
  }
}

for (const entry of entries.filter((candidate) => candidate.locale === 'en')) {
  const label = relative(root, entry.path);
  const source = entry.translationOf ? byId.get(entry.translationOf) : undefined;

  if (!source || source.locale !== 'fr') {
    errors.push(`${label}: translationOf doit pointer vers un contenu fr-CA existant.`);
    continue;
  }

  if (source.translationKey !== entry.translationKey) {
    errors.push(`${label}: translationKey doit être identique à celui de la source fr-CA.`);
  }

  if (entry.draft !== 'true' && entry.translationStatus !== 'validated') {
    errors.push(`${label}: une traduction publiée doit avoir translationStatus: validated.`);
  }

  const expectedDigest = digest(source.content);
  if (entry.sourceDigest !== expectedDigest) {
    errors.push(
      `${label}: sourceDigest est périmé; la source fr-CA doit être retraduite et revalidée.`
    );
  }
}

for (const entry of entries.filter(
  (candidate) => candidate.locale === 'fr' && candidate.draft !== 'true'
)) {
  const translation = byLocaleAndKey.get(`en:${entry.translationKey}`);
  if (!translation || translation.draft === 'true') {
    errors.push(
      `${relative(root, entry.path)}: toute publication fr-CA doit avoir une traduction en-CA publiée.`
    );
  }
}

const okfSources = listContentFiles(join(okfRoot, 'fr-CA'))
  .map((path) => parseOkfEntry(path, 'fr-CA'))
  .filter(Boolean);
const okfTranslations = listContentFiles(join(okfRoot, 'en-CA'))
  .map((path) => parseOkfEntry(path, 'en-CA'))
  .filter(Boolean);
const translatedOkfSources = new Set();

for (const source of okfSources) {
  const label = relative(root, source.path);
  if (source.language !== 'fr-CA' || source.sourceOfTruth !== 'true') {
    errors.push(`${label}: un fichier OKF source doit déclarer fr-CA et source_of_truth: true.`);
  }
}

for (const translation of okfTranslations) {
  const label = relative(root, translation.path);
  if (translation.language !== 'en-CA' || translation.sourceOfTruth !== 'false') {
    errors.push(`${label}: une traduction OKF doit déclarer en-CA et source_of_truth: false.`);
  }

  if (!translation.translationOf) {
    errors.push(`${label}: translation_of est requis.`);
    continue;
  }

  const sourcePath = resolve(translation.path, '..', translation.translationOf);
  const source = okfSources.find((candidate) => candidate.path === sourcePath);
  if (!source) {
    errors.push(`${label}: translation_of ne pointe pas vers une source fr-CA existante.`);
    continue;
  }

  translatedOkfSources.add(source.path);
  if (!['review', 'validated'].includes(translation.translationStatus)) {
    errors.push(`${label}: translation_status doit être review ou validated.`);
  }
  if (translation.sourceDigest !== digest(source.content)) {
    errors.push(`${label}: source_digest est périmé; la traduction OKF doit être révisée.`);
  }
}

for (const source of okfSources) {
  if (!translatedOkfSources.has(source.path)) {
    errors.push(`${relative(root, source.path)}: traduction OKF en-CA manquante.`);
  }
}

if (errors.length > 0) {
  console.error(`Validation du contenu échouée (${errors.length} erreur(s)):\n`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Contenu bilingue validé: ${entries.length} publication(s) et ${okfTranslations.length} traduction(s) OKF.`
);
