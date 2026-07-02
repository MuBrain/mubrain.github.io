# Développement local — MuBrain

Ce document explique comment travailler localement dans le dépôt MuBrain sans casser le site Astro, la configuration GitHub Pages ou la base de connaissance OKF.

## Objectif du dépôt

Ce dépôt contient deux choses différentes :

1. le site public MuBrain construit avec Astro et Velocity ;
2. la base de connaissance OKF / LLM-WIKI utilisée comme référentiel structuré.

Ces deux espaces ne doivent pas être confondus.

## Structure principale

```text
src/
  content/
    blog/
    pages/
    faqs/

knowledge/
  okf/
    fr-CA/
    en-CA/
    templates/

docs/