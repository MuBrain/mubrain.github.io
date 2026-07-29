import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import siteConfig from '@/config/site.config';
import { defaultLocale, type Locale } from '@/i18n/config';
import { getLocalizedPath } from '@/i18n/helpers';

function escapeMarkdownLabel(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/\[/g, '\\[').replace(/\]/g, '\\]');
}

function normalizeDescription(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function getPostPath(id: string, locale: Locale): string {
  const slug = id.replace(`${locale}/`, '');
  const blogPath = getLocalizedPath('blog', locale);
  return `${blogPath}/${slug}/`;
}

export async function GET({ site }: APIContext) {
  const siteUrl = new URL(site?.toString() ?? siteConfig.url);
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sortedPosts = posts.sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf()
  );

  const formatPosts = (locale: Locale) =>
    sortedPosts
      .filter((post) => post.data.locale === locale)
      .map((post) => {
        const title = escapeMarkdownLabel(post.data.title);
        const url = new URL(getPostPath(post.id, locale), siteUrl).toString();
        const description = normalizeDescription(post.data.description);
        return `- [${title}](${url}): ${description}`;
      })
      .join('\n');

  const primaryPosts = formatPosts(defaultLocale);
  const englishPosts = formatPosts('en');
  const homeUrl = new URL(getLocalizedPath('home', defaultLocale), siteUrl).toString();
  const aboutUrl = new URL(getLocalizedPath('about', defaultLocale), siteUrl).toString();
  const blogUrl = new URL(getLocalizedPath('blog', defaultLocale), siteUrl).toString();
  const faqUrl = new URL(getLocalizedPath('faq', defaultLocale), siteUrl).toString();

  const content = `# ${siteConfig.name}

> ${siteConfig.description}

Le français canadien (fr-CA) est la source de vérité éditoriale de MuBrain. Les contenus en anglais canadien (en-CA) sont des traductions validées. Le site public Astro est distinct de la base de connaissance OKF interne.

## Pages principales

- [Accueil](${homeUrl}): Présentation de MuBrain et de son approche de la connaissance structurée.
- [À propos](${aboutUrl}): Mission, principes et organisation du projet MuBrain.
- [Blog](${blogUrl}): Publications publiques sur l'intelligence artificielle, les agents et le Knowledge Engineering.
- [FAQ](${faqUrl}): Réponses de référence sur MuBrain, OKF et l'approche bilingue.

## Publications de référence — FR-CA

${primaryPosts}

## Canadian English translations — EN-CA

${englishPosts}

## Optional

- [RSS](${new URL('/rss.xml', siteUrl).toString()}): Fil des publications françaises de référence.
- [Sitemap](${new URL('/sitemap-index.xml', siteUrl).toString()}): Liste des pages publiques indexables.
- [GitHub repository](https://github.com/MuBrain/mubrain.github.io): Source du site public et de la base de connaissance OKF.
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
