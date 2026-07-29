---
type: method
title: "MuBrain OKF Writing Conventions"
description: "Rules for writing, structuring, and validating OKF files in the MuBrain knowledge base."
tags:
  - okf
  - llm-wiki
  - markdown
  - yaml
  - governance
  - agents
timestamp: 2026-07-02
language: en-CA
source_of_truth: false
translation_of: "../../fr-CA/methods/okf-writing-conventions.md"
translation_status: review
source_digest: sha256:c5acd05b9d8f2a7ed00a7c0212b1fc3e45da884f93c11f9bc519ab160848eefb
status: active
---

# MuBrain OKF Writing Conventions

This document defines the writing rules for OKF files used in the MuBrain knowledge base.

The MuBrain knowledge base must remain readable by humans, usable by AI agents, and maintainable in GitHub.

## Core principle

Canadian French is the source of truth.

All foundational knowledge must first be created, corrected, or validated in `fr-CA`.

The `en-CA` version is a human-validated translation. It must not be considered the primary source, even if it is published or used by tools.

Public Astro content remains in `src/content`. When a publication
is derived from OKF knowledge, its frontmatter must declare `okfSource`.
A public translation must also declare `translationOf`,
`translationStatus`, and `sourceDigest` so that a change to the French
source explicitly marks the translation for review.

## File locations

OKF files live in the `knowledge/okf` folder.

Main structure:

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
