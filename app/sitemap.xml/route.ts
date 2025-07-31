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
        changefreq: 'daily'
      },
      {
        path: '/en',      // English version
        priority: '0.9',
        changefreq: 'weekly'
      },
      {
        path: '/bn',      // Bengali version
        priority: '0.9',
        changefreq: 'weekly'
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
      <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en" />
      <xhtml:link rel="alternate" hreflang="bn" href="${baseUrl}/bn" />
      <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}" />
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
  