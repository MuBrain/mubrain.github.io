import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Blog collection with Content Layer API
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(100),
      description: z.string().max(200),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      author: z.string().default('Team'),
      image: image().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      locale: z.enum(['fr', 'en']).default('fr'),
      language: z.enum(['fr-CA', 'en-CA']),
      translationKey: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      sourceOfTruth: z.boolean(),
      translationOf: z.string().optional(),
      translationStatus: z.enum(['draft', 'review', 'validated']).optional(),
      sourceDigest: z.string().regex(/^sha256:[a-f0-9]{64}$/).optional(),
      okfSource: z.string().startsWith('knowledge/okf/').optional(),
    }).superRefine((data, ctx) => {
      const expectedLanguage = data.locale === 'fr' ? 'fr-CA' : 'en-CA';
      if (data.language !== expectedLanguage) {
        ctx.addIssue({
          code: 'custom',
          path: ['language'],
          message: `La locale ${data.locale} doit utiliser ${expectedLanguage}.`,
        });
      }
      if (data.sourceOfTruth !== (data.locale === 'fr')) {
        ctx.addIssue({
          code: 'custom',
          path: ['sourceOfTruth'],
          message: 'Seul le contenu fr-CA peut être une source de vérité.',
        });
      }
      if (data.locale === 'en' && !data.translationOf) {
        ctx.addIssue({
          code: 'custom',
          path: ['translationOf'],
          message: 'Une traduction en-CA doit référencer son contenu fr-CA.',
        });
      }
      if (data.locale === 'en' && !data.draft && data.translationStatus !== 'validated') {
        ctx.addIssue({
          code: 'custom',
          path: ['translationStatus'],
          message: 'Une publication en-CA doit être validée avant sa publication.',
        });
      }
      if (data.locale === 'en' && !data.sourceDigest) {
        ctx.addIssue({
          code: 'custom',
          path: ['sourceDigest'],
          message: 'Une traduction en-CA doit identifier la version fr-CA traduite.',
        });
      }
    }),
});

// Pages collection for static pages
const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedAt: z.coerce.date().optional(),
    locale: z.enum(['fr', 'en']).default('fr'),
  }),
});

// Authors collection
const authors = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      bio: z.string(),
      avatar: image().optional(),
      social: z
        .object({
          twitter: z.string().optional(),
          github: z.string().optional(),
          linkedin: z.string().optional(),
        })
        .optional(),
    }),
});

// FAQs collection (for JSON-LD FAQ schema)
const faqs = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string().optional(),
    order: z.number().default(0),
    locale: z.enum(['fr', 'en']).default('fr'),
  }),
});

export const collections = {
  blog,
  pages,
  authors,
  faqs,
};
