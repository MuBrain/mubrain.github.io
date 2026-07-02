---
type: method
title: "Conventions de rédaction OKF MuBrain"
description: "Règles de rédaction, de structuration et de validation des fichiers OKF dans la base de connaissance MuBrain."
tags:
  - okf
  - llm-wiki
  - markdown
  - yaml
  - gouvernance
  - agents
timestamp: 2026-07-02
language: fr-CA
source_of_truth: true
status: active
---

# Conventions de rédaction OKF MuBrain

Ce document définit les règles de rédaction des fichiers OKF utilisés dans la base de connaissance MuBrain.

La base de connaissance MuBrain doit rester lisible par des humains, exploitable par des agents IA et maintenable dans GitHub.

## Principe central

Le français canadien est la source de vérité.

Toute connaissance structurante doit d’abord être créée, corrigée ou validée dans `fr-CA`.

La version `en-CA` est une traduction validée humainement. Elle ne doit pas être considérée comme la source principale, même si elle est publiée ou utilisée par des outils.

## Emplacement des fichiers

Les fichiers OKF vivent dans le dossier `knowledge/okf`.

Structure principale :

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