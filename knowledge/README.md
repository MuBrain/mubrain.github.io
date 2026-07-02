---
type: index
title: "MuBrain Knowledge Base"
description: "Point d’entrée de la base de connaissance MuBrain structurée pour les humains, GitHub, Astro et les agents IA."
tags:
  - mubrain
  - knowledge
  - okf
  - llm-wiki
timestamp: 2026-07-02
language: fr-CA
source_of_truth: true
---

# MuBrain Knowledge Base

Ce dossier contient la base de connaissance de référence de MuBrain.

Il ne s’agit pas du contenu public du site Astro. Le site public se trouve dans `src/content` et dans les pages Astro. Ce dossier `knowledge` sert plutôt de référentiel structuré pour conserver les concepts, les décisions, les méthodes, les conventions éditoriales et les éléments de contexte qui doivent pouvoir être compris par des humains et par des agents IA.

## Principes

- Le français canadien (`fr-CA`) est la source de vérité.
- L’anglais canadien (`en-CA`) est une traduction validée humainement.
- Les fichiers sont écrits en Markdown.
- Les métadonnées sont placées dans le frontmatter YAML.
- Chaque fichier doit rester lisible directement dans GitHub.
- Les agents IA doivent pouvoir utiliser ce dossier comme contexte de référence.

## Structure

```text
knowledge/
  okf/
    fr-CA/
      concepts/
      methods/
      projects/
      publishing/
    en-CA/
      concepts/
      methods/
      projects/
      publishing/