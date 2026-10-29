import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: 'https://checkmyvan.com/sitemap.xml',
    host: 'https://checkmyvan.com',
  };
}
