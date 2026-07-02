import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/server';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  /**
   * Branding configuration
   * Logo files: Replace SVGs in src/assets/branding/
   * Favicon: Replace in public/favicon.svg
   */
  branding: {
    /** Logo alt text for accessibility */
    logo: {
      alt: string;
    };
    /** Favicon path (lives in public/) */
    favicon: {
      svg: string;
    };
    /** Theme colors for manifest and browser UI */
    colors: {
      /** Browser toolbar color (hex) */
      themeColor: string;
      /** PWA splash screen background (hex) */
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'MuBrain',
  description: 'MuBrain est un espace de réflexion, de publication et de structuration de la connaissance autour de l’intelligence artificielle, des agents et des organisations apprenantes.',
  url: SITE_URL || 'https://mubrain.github.io',
  ogImage: '/og-default.png',
  author: 'MuBrain',
  email: 'contact@mubrain.com',
  phone: '',
  address: {
    street: '',
    city: 'Montréal',
    state: 'QC',
    zip: 'H2L 2X1',
    country: 'CA',
  },
  socialLinks: [
    'https://github.com/MuBrain',
  ],
  // Twitter metadata - update with your actual handles or remove
  // twitter: {
  //   site: '@yourhandle',
  //   creator: '@yourhandle',
  // },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  // Branding: Logo files live in src/assets/branding/
  // Replace the SVG files there with your own branding
  branding: {
    logo: {
      alt: 'MuBrain',
    },
    favicon: {
      svg: '/favicon.svg',
    },
    colors: {
      themeColor: '#F94C10',
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;
