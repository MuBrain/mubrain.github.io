# MuBrain

Site public bilingue de MuBrain, construit avec Astro et publié sur GitHub Pages.

- Site actuel : <https://mubrain.github.io>
- Langue principale et source éditoriale : français canadien (`fr-CA`)
- Traduction : anglais canadien (`en-CA`)
- Déploiement : GitHub Actions vers GitHub Pages

## Développement

Node.js 22.12 ou plus récent et Corepack sont requis.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

La validation complète s’exécute avec :

```bash
pnpm validate
```

## Organisation du contenu

Le dépôt sépare strictement les deux couches suivantes :

```text
src/content/             Contenu public chargé et publié par Astro
knowledge/okf/fr-CA/     Base de connaissance de référence
knowledge/okf/en-CA/     Traductions validées de la base OKF
```

Astro ne charge pas directement `knowledge/`. Un contenu public peut déclarer un
`okfSource` dans son frontmatter afin de conserver une provenance explicite sans
publier automatiquement la base interne.

Les articles utilisent aussi :

- `language` : code BCP 47 (`fr-CA` ou `en-CA`);
- `translationKey` : identifiant stable partagé entre les langues;
- `sourceOfTruth` : `true` uniquement pour le français canadien;
- `translationOf` : référence au contenu français pour une traduction anglaise.

Ces règles sont validées par `src/content.config.ts` pendant la construction.

## Internationalisation

Le français canadien est servi sans préfixe (`/`, `/blog/`, `/about/`). L’anglais
canadien utilise le préfixe `/en/`. Les métadonnées HTML, Open Graph, sitemap et
`hreflang` emploient les codes régionaux `fr-CA` et `en-CA`.

## Publication

Le workflow `.github/workflows/deploy.yml` construit `main` et publie l’artefact
sur GitHub Pages avec `SITE_URL=https://mubrain.github.io`.
GitHub Pages étant un hébergement statique, aucun formulaire ne doit cibler une
route serveur locale; un futur formulaire devra utiliser un service externe.

Pour passer plus tard à `mubrain.com` :

1. configurer le domaine personnalisé dans GitHub Pages;
2. ajouter le fichier `public/CNAME`;
3. remplacer `SITE_URL` dans le workflow et dans `.env.example`;
4. configurer les enregistrements DNS recommandés par GitHub.
