import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Krushna Dandge - Full Stack Developer & AI/ML Enthusiast',
  description: 'Portfolio of Krushna Dandge - Full Stack Developer specializing in React, Node.js, and AI/ML. View my projects, skills, and experience in web development and artificial intelligence.',
  keywords: ['Krushna Dandge', 'Krushna Portfolio', 'Krushna Dandge Portfolio', 'Full Stack Developer', 'AI ML Developer', 'React Developer', 'Node.js Developer', 'Web Developer'],
  authors: [{ name: 'Krushna Dandge' }],
  creator: 'Krushna Dandge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://krushnadandge.vercel.app',
    siteName: 'Krushna Dandge Portfolio',
    title: 'Krushna Dandge - Full Stack Developer & AI/ML Enthusiast',
    description: 'Portfolio of Krushna Dandge - Full Stack Developer specializing in React, Node.js, and AI/ML.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Krushna Dandge Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krushna Dandge - Full Stack Developer & AI/ML Enthusiast',
    description: 'Portfolio of Krushna Dandge - Full Stack Developer specializing in React, Node.js, and AI/ML.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // You'll get this from Google Search Console
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://krushnadandge.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
} 