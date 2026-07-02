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