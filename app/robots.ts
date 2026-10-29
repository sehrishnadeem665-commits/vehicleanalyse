import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: 'https://vehicleanalyse.com/sitemap.xml',
    host: 'https://vehicleanalyse.com',
  };
}
