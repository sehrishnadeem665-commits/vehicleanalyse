import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://checkmyvan.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/pricing',
    '/about',
    '/booking',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/refund-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/booking' ? 0.9 : 0.7,
  }));
}
