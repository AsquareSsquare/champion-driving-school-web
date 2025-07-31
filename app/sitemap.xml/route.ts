// app/sitemap.xml/route.ts

/**
 * This route serves sitemap.xml for Google Search Console.
 * It returns proper XML and sets the correct content-type.
 */

export async function GET() {
  const baseUrl = 'https://www.championdrivingschool.in';

  const urls = [
    {
      path: '',         // homepage
      priority: '1.0',
      changefreq: 'daily',
      hreflangs: [
        { lang: 'en', url: '/en' },
        { lang: 'bn', url: '/bn' },
      ],
    },
    {
      path: '/en',      // English version
      priority: '0.9',
      changefreq: 'weekly',
      hreflangs: [
        { lang: 'en', url: '/en' },
        { lang: 'bn', url: '/bn' },
      ],
    },
    {
      path: '/bn',      // Bengali version
      priority: '0.9',
      changefreq: 'weekly',
      hreflangs: [
        { lang: 'en', url: '/en' },
        { lang: 'bn', url: '/bn' },
      ],
    }
  ];

  const now = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (url) => `
  <url>
    <loc>${baseUrl}${url.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    ${url.hreflangs
      .map(
        (hreflang) => `
        <xhtml:link rel="alternate" hreflang="${hreflang.lang}" href="${baseUrl}${hreflang.url}" />
      `
      )
      .join('')}
  </url>`
  )
  .join('')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
