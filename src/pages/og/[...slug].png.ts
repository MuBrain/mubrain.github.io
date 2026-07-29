import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { generateOGImage } from '@/lib/og';
import siteConfig from '@/config/site.config';

// Define static pages that need OG images
const STATIC_PAGES = [
  { slug: 'index', title: siteConfig.name, description: siteConfig.description },
  { slug: 'about', title: 'À propos', description: `En savoir plus sur ${siteConfig.name}` },
  { slug: 'contact', title: 'Contact', description: `Communiquer avec ${siteConfig.name}` },
  { slug: 'blog', title: 'Blog', description: `Derniers articles de ${siteConfig.name}` },
  { slug: 'faq', title: 'FAQ', description: `Questions fréquentes sur ${siteConfig.name}` },
  { slug: 'en', title: siteConfig.name, description: siteConfig.description },
  { slug: 'en/about', title: 'About', description: `Learn more about ${siteConfig.name}` },
  { slug: 'en/contact', title: 'Contact', description: `Get in touch with ${siteConfig.name}` },
  { slug: 'en/blog', title: 'Blog', description: `Latest articles from ${siteConfig.name}` },
  { slug: 'en/faq', title: 'FAQ', description: `Frequently asked questions about ${siteConfig.name}` },
];

export const getStaticPaths: GetStaticPaths = async () => {
  // Get all blog posts
  const blogPosts = await getCollection('blog', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  // Generate paths for blog posts
  const blogPaths = blogPosts.map((post) => {
    const locale = post.data.locale;
    const postSlug = post.id.replace(`${locale}/`, '');
    const localizedSlug =
      locale === 'fr' ? `blog/${postSlug}` : `${locale}/blog/${postSlug}`;

    return {
      params: { slug: localizedSlug },
      props: {
        title: post.data.title,
        description: post.data.description,
        type: 'article' as const,
      },
    };
  });

  // Generate paths for static pages
  const staticPaths = STATIC_PAGES.map((page) => ({
    params: { slug: page.slug },
    props: {
      title: page.title,
      description: page.description,
      type: 'website' as const,
    },
  }));

  return [...staticPaths, ...blogPaths];
};

export const GET: APIRoute = async ({ props }) => {
  const { title, description, type } = props as {
    title: string;
    description?: string;
    type: 'website' | 'article';
  };

  const png = await generateOGImage({
    title,
    description,
    type,
  });

  // Convert Buffer to Uint8Array for Response compatibility
  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
