import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MentionBee',
    short_name: 'MentionBee',
    description: 'AI Visibility Audit',
    start_url: '/',
    display: 'standalone',
    background_color: '#141C2D',
    theme_color: '#141C2D',
    icons: [
      { src: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
