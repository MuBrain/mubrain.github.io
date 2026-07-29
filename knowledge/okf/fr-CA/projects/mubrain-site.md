---
type: project
title: "Site MuBrain"
description: "Décisions structurantes liées à la reconstruction du site MuBrain avec Astro, Velocity, GitHub Pages et une base OKF."
tags:
  - mubrain
  - astro
  - velocity
  - github-pages
  - okf
timestamp: 2026-07-02
language: fr-CA
source_of_truth: true
status: active
---

# Site MuBrain

Le site MuBrain est reconstruit avec Astro à partir du thème Velocity.

## Décisions actuelles

- Le dépôt GitHub est `MuBrain/mubrain.github.io`.
- Le site est publié avec GitHub Pages.
- Le déploiement est réalisé avec GitHub Actions.
- Le thème de départ est Velocity.
- La langue principale du site est le français canadien.
- L’anglais canadien est conservé comme traduction validée.
- L’espagnol a été retiré pour éviter une langue fantôme.
- La base de connaissance OKF est placée dans le dossier `knowledge/`.

## Séparation importante

Le contenu public Astro vit dans :

```text
src/content/
```

La base de connaissance de référence vit dans :

```text
knowledge/okf/
```

Astro ne publie pas automatiquement le dossier `knowledge/`. Un article public
peut plutôt utiliser `okfSource` pour déclarer le fichier OKF qui l’a inspiré.

## Conventions de publication

- Les routes françaises n’ont pas de préfixe.
- Les routes anglaises utilisent `/en/`.
- Les métadonnées linguistiques utilisent `fr-CA` et `en-CA`.
- Chaque article possède un `translationKey` stable dans les deux langues.
- `sourceOfTruth` vaut `true` uniquement pour le contenu français canadien.
- Une traduction anglaise déclare son origine avec `translationOf`.
- Une traduction incomplète reste en brouillon et n’est ni publiée ni annoncée
  dans les liens `hreflang`.

## Hébergement

Le site reste publié à `https://mubrain.github.io` jusqu’à la configuration du
domaine `mubrain.com`. GitHub Pages étant statique, les formulaires devront
utiliser un service externe plutôt qu’une route API Astro.

Le fichier public `/llms.txt` est généré par Astro à chaque construction. Il
fournit aux agents IA un aperçu concis du site et des liens vers les contenus
publiés, conformément à la proposition de format de `llmstxt.org`.