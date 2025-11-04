import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://modelcontextmarketing.com'),
  title: {
    default: "Model Context Marketing | Create Content LLMs Understand",
    template: "%s | Model Context Marketing"
  },
  description: "Educational guide for marketers on creating content and structuring websites that large language models can understand and recommend. Learn how to demonstrate domain expertise that AI can verify and cite.",
  keywords: ["model context marketing", "LLM marketing", "AI marketing", "large language models", "ChatGPT marketing", "Claude AI", "Perplexity", "AI SEO", "semantic content", "domain authority"],
  authors: [{ name: "Stephen Newman" }],
  creator: "Stephen Newman",
  publisher: "Model Context Marketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://modelcontextmarketing.com',
    siteName: 'Model Context Marketing',
    title: 'Model Context Marketing | Create Content LLMs Understand',
    description: 'Educational guide for marketers on creating content and structuring websites that large language models can understand and recommend.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Model Context Marketing | Create Content LLMs Understand',
    description: 'Educational guide for marketers on creating content and structuring websites that large language models can understand and recommend.',
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
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://modelcontextmarketing.com" />
        <link rel="alternate" type="application/rss+xml" title="Model Context Marketing RSS Feed" href="https://modelcontextmarketing.com/feed.xml" />
        <script src="https://web-analytics-flax.vercel.app/track.js?id=e167166e-9324-40d2-b137-f20e8f647e0f" async />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
