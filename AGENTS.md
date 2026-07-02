# Instructions pour les agents IA — MuBrain

Ce dépôt contient le site web MuBrain et sa base de connaissance structurée.

Les agents IA doivent respecter strictement la séparation entre le site public Astro et la base de connaissance OKF.

## Rôle du dépôt

Ce dépôt sert à maintenir :

- le site web public MuBrain ;
- les contenus publiés avec Astro ;
- la base de connaissance OKF / LLM-WIKI ;
- les conventions de rédaction ;
- les décisions de structure liées à MuBrain.

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