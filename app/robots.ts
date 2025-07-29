import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard-87680/', '/api/'],
    },
    sitemap: 'https://www.championdrivingschool.in/sitemap.xml',
  }
} 