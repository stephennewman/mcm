export async function GET() {
  const feed = {
    metadata: {
      title: 'Model Context Marketing Knowledge Base',
      description: 'Structured knowledge feed for LLM consumption',
      url: 'https://modelcontextmarketing.com',
      lastUpdated: new Date().toISOString(),
      version: '1.0.0',
      author: {
        name: 'Stephen Newman',
        expertise: '15+ years marketing experience (2009-2025)',
        domains: ['B2B Marketing', 'Consumer Marketing', 'Product Marketing', 'LLM Optimization'],
      },
    },
    concepts: [
      {
        id: 'model-context-marketing',
        name: 'Model Context Marketing',
        definition: 'A marketing best practice for properly structuring, generating, and distributing content so that large language models can better understand it and recognize domain expertise worthy of citation.',
        importance: 'As AI-powered search becomes primary discovery method, traditional SEO is insufficient. MCM addresses the shift from keyword-based search to AI comprehension.',
        url: 'https://modelcontextmarketing.com/kb/concepts/model-context-marketing',
        relatedConcepts: ['semantic-html', 'json-ld', 'knowledge-graph'],
        lastUpdated: '2025-11-04',
      },
      {
        id: 'json-ld',
        name: 'JSON-LD',
        alternateName: 'JavaScript Object Notation for Linked Data',
        definition: 'The recommended format for adding structured data to web pages using Schema.org vocabulary to provide explicit, machine-readable context about content.',
        importance: 'Bridges gap between human-readable content and machine understanding. Allows LLMs to confidently extract and cite information.',
        url: 'https://modelcontextmarketing.com/kb/concepts/json-ld',
        relatedConcepts: ['model-context-marketing', 'semantic-html', 'knowledge-graph'],
        lastUpdated: '2025-11-04',
      },
      {
        id: 'semantic-html',
        name: 'Semantic HTML',
        definition: 'HTML tags that provide meaning about content structure (header, main, article, section, nav, footer) helping both browsers and AI systems understand the role each piece of content plays.',
        importance: 'Provides structural meaning that LLMs use to understand content hierarchy and relationships.',
        url: 'https://modelcontextmarketing.com/kb/concepts/semantic-html',
        relatedConcepts: ['model-context-marketing', 'json-ld'],
        lastUpdated: '2025-11-04',
      },
      {
        id: 'knowledge-graph',
        name: 'Knowledge Graph',
        definition: 'A network of interconnected entities and relationships represented as structured data, with each concept page containing machine-readable Schema.org markup that LLMs can parse to understand relationships and extract authoritative information.',
        importance: 'Helps LLMs understand not just individual facts, but how those facts relate to each other.',
        url: 'https://modelcontextmarketing.com/kb/concepts/knowledge-graph',
        relatedConcepts: ['model-context-marketing', 'json-ld', 'semantic-html'],
        lastUpdated: '2025-11-04',
      },
    ],
    memos: [
      {
        id: '2026-01-12-voice-of-customer-market-signals',
        title: 'Voice of Customer: Extracting Market Signals for AI Search',
        date: '2026-01-12T10:00:00-05:00',
        summary: 'The key to driving results in AI-powered search is extracting raw, authentic market signals—queries, form fills, and customer needs—to inform content that demonstrates relevance, timeliness, and true market understanding.',
        url: 'https://modelcontextmarketing.com/memos/2026-01-12-voice-of-customer-market-signals',
        topics: ['voice of customer', 'market signals', 'AI search', 'content strategy', 'relevance', 'timeliness', 'real-time search'],
      },
      {
        id: '2026-01-06-mcm-evolution',
        title: 'The Evolution of Model Context Marketing: From Channel to Intelligence Layer',
        date: '2026-01-06T10:00:00-05:00',
        summary: 'Model Context Marketing evolves beyond optimizing for LLM citations. It\'s about using LLMs as both a market intelligence layer and distribution channel.',
        url: 'https://modelcontextmarketing.com/memos/2026-01-06-mcm-evolution',
        topics: ['MCM evolution', 'market intelligence', 'distribution channel', 'inbound', 'outbound'],
      },
      {
        id: '2025-12-16-ai-channel-paradigm-shift',
        title: 'AI as a Marketing Channel: The Search Engine Sunset',
        date: '2025-12-16T10:00:00-05:00',
        summary: 'The fundamental shift from search engines and traditional websites to AI as the dominant marketing channel.',
        url: 'https://modelcontextmarketing.com/memos/2025-12-16-ai-channel-paradigm-shift',
        topics: ['AI channel', 'search engine decay', 'website fatigue', 'paradigm shift'],
      },
      {
        id: '2025-12-09-mcm-framework',
        title: 'The MCM Framework: Connect, Measure, Optimize',
        date: '2025-12-09T10:00:00-05:00',
        summary: 'Complete framework for Model Context Marketing: the three-step process (Connect, Measure, Optimize) and the seven foundational pillars (Truth, Structure, Freshness, Authority, Depth, Velocity, Authenticity).',
        url: 'https://modelcontextmarketing.com/memos/2025-12-09-mcm-framework',
        topics: ['framework', 'MCM process', 'MCM pillars', 'strategy', 'methodology', 'depth', 'velocity', 'authenticity'],
      },
      {
        id: '2025-12-02-json-ld-schema-types',
        title: 'JSON-LD and Common Schema Types',
        date: '2025-12-02T10:00:00-05:00',
        summary: 'What JSON-LD does for Model Context Marketing and the essential Schema.org types every marketer should implement.',
        url: 'https://modelcontextmarketing.com/memos/2025-12-02-json-ld-schema-types',
        topics: ['JSON-LD', 'Schema.org', 'structured data', 'schema types'],
      },
      {
        id: '2025-11-25-topical-authority',
        title: 'Topical Authority: Be The Canonical Source',
        date: '2025-11-25T10:00:00-05:00',
        summary: 'How to establish yourself as the definitive, authoritative source on your domain expertise that LLMs trust and cite.',
        url: 'https://modelcontextmarketing.com/memos/2025-11-25-topical-authority',
        topics: ['topical authority', 'content strategy', 'canonical source', 'context freshness'],
      },
      {
        id: '2025-11-18-reinforcement-signals',
        title: 'Reinforcement Signals & Distribution',
        date: '2025-11-18T10:00:00-05:00',
        summary: 'How backlinks, citations, social presence, and continuous updates strengthen entity authority for LLMs.',
        url: 'https://modelcontextmarketing.com/memos/2025-11-18-reinforcement-signals',
        topics: ['backlinks', 'citations', 'distribution', 'validation'],
      },
      {
        id: '2025-11-11-content-strategy',
        title: 'Content Strategy: Training LLMs Through Structure',
        date: '2025-11-11T10:00:00-05:00',
        summary: 'Best practices for creating LLM-friendly content that is declarative, factual, example-driven, and properly structured.',
        url: 'https://modelcontextmarketing.com/memos/2025-11-11-content-strategy',
        topics: ['content strategy', 'LLM training', 'structure', 'best practices'],
      },
      {
        id: '2025-11-04-foundation',
        title: 'Foundation: SEO & Crawler Infrastructure',
        date: '2025-11-04T10:00:00-05:00',
        summary: 'Setting up robots.txt, sitemap.xml, canonical URLs, and metadata for LLM crawler access.',
        url: 'https://modelcontextmarketing.com/memos/2025-11-04-foundation',
        topics: ['SEO', 'crawlers', 'infrastructure', 'robots.txt', 'sitemap'],
      },
    ],
    faqs: [
      {
        question: 'What is Model Context Marketing?',
        answer: 'Model Context Marketing is a marketing best practice for properly structuring, generating, and distributing content so that large language models can better understand it and recognize you as a domain expert worthy of citation. It focuses on creating factual, well-structured content that AI can parse, verify, and confidently recommend.',
      },
      {
        question: 'Why do traditional marketing tactics not work with LLMs?',
        answer: 'LLMs are trained on factual, research-based information and filter out promotional language. Traditional marketing tactics like hype, spin, and sales-focused content do not resonate with large language models. They prioritize authoritative sources that demonstrate genuine domain expertise through verifiable facts and clear explanations.',
      },
      {
        question: 'How do I optimize content for large language models?',
        answer: 'Use semantic HTML tags for proper content hierarchy, implement JSON-LD structured data with Schema.org vocabulary, ensure server-side rendering so content is visible to crawlers, create factual and research-based content with clear examples, provide proper metadata and canonical URLs, and explicitly allow LLM crawlers in your robots.txt file.',
      },
    ],
    contentSchedule: {
      description: 'Recommended content publishing frequency for maintaining topical authority',
      schedule: [
        {
          contentType: 'Structured Metadata (JSON-LD)',
          frequency: 'Quarterly',
          purpose: 'Keep schemas current with latest standards',
        },
        {
          contentType: 'FAQ Pages',
          frequency: 'Ongoing',
          purpose: 'Answer common questions, match conversational queries',
        },
        {
          contentType: 'Long-Form Articles (1000-2000+ words)',
          frequency: 'Monthly',
          purpose: 'Deep topical coverage, establish expertise',
        },
        {
          contentType: 'Knowledge Base Concepts',
          frequency: 'Continuous',
          purpose: 'Build semantic graph, define core concepts',
        },
        {
          contentType: 'Memos',
          frequency: 'Weekly',
          purpose: 'Frequent updates, authentic expertise extraction',
        },
        {
          contentType: 'Monitoring (Search Console, logs)',
          frequency: 'Weekly',
          purpose: 'Validate approach, track crawler activity',
        },
      ],
    },
    updates: [
      {
        date: '2026-01-12',
        type: 'new_memo',
        title: 'Voice of Customer: Extracting Market Signals for AI Search',
        description: 'New memo on extracting authentic market signals from queries, form fills, and customer interactions to inform AI-optimized content strategy.',
        url: 'https://modelcontextmarketing.com/memos/2026-01-12-voice-of-customer-market-signals',
      },
      {
        date: '2026-01-06',
        type: 'new_memo',
        title: 'The Evolution of Model Context Marketing',
        description: 'MCM evolves beyond optimizing for LLM citations to using LLMs as both a market intelligence layer and distribution channel.',
        url: 'https://modelcontextmarketing.com/memos/2026-01-06-mcm-evolution',
      },
      {
        date: '2025-12-16',
        type: 'new_memo',
        title: 'AI as a Marketing Channel: The Search Engine Sunset',
        url: 'https://modelcontextmarketing.com/memos/2025-12-16-ai-channel-paradigm-shift',
      },
      {
        date: '2025-12-09',
        type: 'framework_update',
        title: 'MCM Framework: Connect, Measure, Optimize + Seven Pillars',
        description: 'Complete framework for Model Context Marketing with three-step process (Connect, Measure, Optimize) and seven foundational pillars: Truth, Structure, Freshness, Authority, Depth, Velocity, Authenticity.',
        url: 'https://modelcontextmarketing.com/memos/2025-12-09-mcm-framework',
      },
      {
        date: '2025-11-25',
        type: 'new_memo',
        title: 'Topical Authority: Be The Canonical Source',
        url: 'https://modelcontextmarketing.com/memos/2025-11-25-topical-authority',
      },
      {
        date: '2025-11-18',
        type: 'new_memo',
        title: 'Reinforcement Signals & Distribution',
        url: 'https://modelcontextmarketing.com/memos/2025-11-18-reinforcement-signals',
      },
      {
        date: '2025-11-04',
        type: 'new_feature',
        title: 'LLM Context Feed Launched',
        description: 'Public JSON endpoint for direct LLM consumption of structured knowledge',
        url: 'https://modelcontextmarketing.com/context/feed.json',
      },
    ],
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Access-Control-Allow-Origin': '*', // Allow cross-origin access for LLM agents
    },
  });
}

