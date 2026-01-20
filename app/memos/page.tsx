import Link from 'next/link';

export const metadata = {
  title: 'Memos | Model Context Marketing',
  description: 'Running log of memos documenting the concepts and implementation of Model Context Marketing.',
};

interface Memo {
  slug: string;
  title: string;
  date: string;
  timestamp: string;
  preview: string;
}

const memos: Memo[] = [
  {
    slug: '2026-01-20-voice-of-customer-market-signals',
    title: 'Voice of Customer: Extracting Market Signals for AI Search',
    date: 'January 20, 2026',
    timestamp: '10:00 AM',
    preview: 'The key to driving results in AI-powered search is extracting raw, authentic market signals—queries, form fills, and customer needs—to inform content that demonstrates relevance, timeliness, and true market understanding. Voice of customer has never been more critical.',
  },
  {
    slug: '2025-11-05-mcm-evolution',
    title: 'The Evolution of Model Context Marketing: From Channel to Intelligence Layer',
    date: 'November 5, 2025',
    timestamp: '12:00 PM',
    preview: 'Model Context Marketing evolves beyond optimizing for LLM citations. It\'s about using LLMs as both a market intelligence layer and distribution channel—enabling marketers to understand markets more deeply while positioning brands effectively in AI-mediated discovery.',
  },
  {
    slug: '2025-11-04-ai-channel-paradigm-shift',
    title: 'AI as a Marketing Channel: The Search Engine Sunset',
    date: 'November 4, 2025',
    timestamp: '6:00 PM',
    preview: 'The fundamental shift from search engines and traditional websites to AI as the dominant marketing channel. Why search engines are becoming obsolete, what website fatigue means, and how domain expertise will win in the AI era.',
  },
  {
    slug: '2025-11-04-mcm-framework',
    title: 'The Model Context Marketing Framework: CMO and The Pillars',
    date: 'November 4, 2025',
    timestamp: '4:00 PM (Updated 5:00 PM)',
    preview: 'Complete framework for Model Context Marketing: Connect, Measure, Optimize (CMO) and the seven MCM pillars - Truth, Structure, Freshness, Authority, Depth, Velocity, Authenticity.',
  },
  {
    slug: '2025-11-04-json-ld-schema-types',
    title: 'JSON-LD and Common Schema Types',
    date: 'November 4, 2025',
    timestamp: '3:30 PM',
    preview: 'What JSON-LD does for Model Context Marketing and the essential Schema.org types every marketer should implement.',
  },
  {
    slug: '2025-11-04-topical-authority',
    title: 'Topical Authority: Be The Canonical Source',
    date: 'November 4, 2025',
    timestamp: '3:00 PM',
    preview: 'How to establish yourself as the definitive, authoritative source on your domain expertise that LLMs trust and cite.',
  },
  {
    slug: '2025-11-04-reinforcement-signals',
    title: 'Reinforcement Signals & Distribution',
    date: 'November 4, 2025',
    timestamp: '2:30 PM',
    preview: 'How backlinks, citations, social presence, and continuous updates strengthen entity authority for LLMs.',
  },
  {
    slug: '2025-11-04-content-strategy',
    title: 'Content Strategy: Training LLMs Through Structure',
    date: 'November 4, 2025',
    timestamp: '1:15 PM',
    preview: 'Best practices for creating LLM-friendly content that is declarative, factual, example-driven, and properly structured for machine understanding.',
  },
  {
    slug: '2025-11-04-foundation',
    title: 'Foundation: SEO & Crawler Infrastructure',
    date: 'November 4, 2025',
    timestamp: '12:00 PM',
    preview: 'Setting up robots.txt, sitemap.xml, canonical URLs, and metadata to ensure content is visible and understandable to all LLM crawlers.',
  },
];

export default function MemosPage() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-16">
      <header className="mb-12">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-5xl font-bold mb-4">Memos</h1>
        <p className="text-xl text-gray-600">
          Running log of memos documenting the concepts and implementation of Model Context Marketing
        </p>
      </header>

      <div className="space-y-6">
        {memos.map((memo) => (
          <article key={memo.slug} className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
            <Link href={`/memos/${memo.slug}`}>
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-600">
                  {memo.title}
                </h2>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                {memo.date} at {memo.timestamp}
              </p>
              <p className="text-gray-700">
                {memo.preview}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

