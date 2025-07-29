// app/sitemap.xml/route.ts

/**
 * This route serves sitemap.xml for Google Search Console.
 * It returns proper XML and sets the correct content-type.
 */

export async function GET() {
    const baseUrl = 'https://www.championdrivingschool.in';
  
    const urls = [
      '',         // homepage
      '/en',      // English version
      '/bn',      // Bengali version
      // Remove fragment URLs like '/#about' — they are not allowed in sitemaps
    ];
  
    const now = new Date().toISOString();
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
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
  