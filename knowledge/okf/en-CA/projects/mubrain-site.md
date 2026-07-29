---
type: project
title: "MuBrain Website"
description: "Structural decisions related to rebuilding the MuBrain website with Astro, Velocity, GitHub Pages, and an OKF knowledge base."
tags:
  - mubrain
  - astro
  - velocity
  - github-pages
  - okf
timestamp: 2026-07-02
language: en-CA
source_of_truth: false
translation_of: "../../fr-CA/projects/mubrain-site.md"
translation_status: review
source_digest: sha256:9691bacb31b66a6b437f382e6d882917cc857f4390af01c385a36311ad4940ff
status: active
---

# MuBrain Website

The MuBrain website is being rebuilt with Astro using the Velocity theme.

## Current decisions

- The GitHub repository is `MuBrain/mubrain.github.io`.
- The website is published with GitHub Pages.
- Deployment is performed with GitHub Actions.
- The starting theme is Velocity.
- The website's primary language is Canadian French.
- Canadian English is maintained as a validated translation.
- Spanish was removed to avoid a phantom language.
- The OKF knowledge base is located in the `knowledge/` folder.

## Important separation

Public Astro content lives in:

```text
src/content/
```

The reference knowledge base lives in:

```text
knowledge/okf/
```

Astro does not automatically publish the `knowledge/` folder. Instead, a public
article can use `okfSource` to declare the OKF file that inspired it.

## Publishing conventions

- French routes have no prefix.
- English routes use `/en/`.
- Language metadata uses `fr-CA` and `en-CA`.
- Each article has a stable `translationKey` in both languages.
- `sourceOfTruth` is `true` only for Canadian French content.
- An English translation declares its origin with `translationOf`.
- An incomplete translation remains a draft and is neither published nor announced
  in `hreflang` links.

## Hosting

The website remains published at `https://mubrain.github.io` until the
`mubrain.com` domain is configured. Because GitHub Pages is static, forms must
use an external service rather than an Astro API route.
