import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Champion Driving School',
    short_name: 'Champion Driving',
    description: 'Professional driving lessons with certified instructors in Moyna and Jalchak',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/images/hero_image.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/images/hero_image.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
} 