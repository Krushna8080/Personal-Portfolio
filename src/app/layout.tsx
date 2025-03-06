import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Krushna Dandge - Full Stack Developer & AI/ML Enthusiast',
  description: 'Portfolio of Krushna Dandge - Full Stack Developer specializing in Web Development, AI/ML and Finance. View my projects, skills, and experience in web development and artificial intelligence.',
  keywords: ['Krushna Dandge', 'Krushna Portfolio', 'Full Stack Developer', 'AI ML Developer', 'React Developer', 'Node.js Developer', 'Web Developer'],
  authors: [{ name: 'Krushna Dandge' }],
  creator: 'Krushna Dandge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://krushnapersonalportfolio.vercel.app',
    siteName: 'Krushna Dandge Portfolio',
    title: 'Krushna Dandge - Full Stack Developer & AI/ML Enthusiast',
    description: 'Portfolio of Krushna Dandge - Full Stack Developer specializing in React, Node.js, and AI/ML.',
    images: [
      {
        url: 'https://krushnapersonalportfolio.vercel.app/og-image.jpg',
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
    images: ['https://krushnapersonalportfolio.vercel.app/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'i8U5kUKJ4-31oK_EMzN3zsncPk8xc3pxkCKbGI_tvlI',
  }
}

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Krushna Dandge",
  "url": "https://krushnapersonalportfolio.vercel.app",
  "image": "https://krushnapersonalportfolio.vercel.app/og-image.png",
  "description": "Full Stack Developer specializing in Web Development, AI/ML, and Finance.",
  "sameAs": [
    "https://www.linkedin.com/in/krushnadandge",
    "https://github.com/Krushna8080"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://krushnapersonalportfolio.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon-16x16.png" />
        <meta name="google-site-verification" content="i8U5kUKJ4-31oK_EMzN3zsncPk8xc3pxkCKbGI_tvlI" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </head>
      <body>{children}</body>
    </html>
  )
} 