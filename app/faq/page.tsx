import Link from 'next/link';

export const metadata = {
  title: 'Frequently Asked Questions | Model Context Marketing',
  description: 'Common questions about Model Context Marketing, LLM-optimized content, and creating content that AI can understand and cite.',
};

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
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
  {
    question: 'What is JSON-LD and why does it matter?',
    answer: 'JSON-LD (JavaScript Object Notation for Linked Data) is the recommended format for adding structured data to web pages. It uses Schema.org vocabulary to provide explicit, machine-readable context about your content. This helps LLMs understand what entities exist on your page, how they relate to each other, and what facts can be extracted and cited.',
  },
  {
    question: 'What are semantic HTML tags?',
    answer: 'Semantic HTML tags provide meaning about content structure beyond just presentation. Tags like <header>, <main>, <article>, <section>, and <nav> tell both browsers and AI systems what role each piece of content plays. Proper use of semantic tags and heading hierarchy (H1 → H2 → H3) helps LLMs understand relationships between topics and subtopics.',
  },
  {
    question: 'How long should my content be?',
    answer: 'Aim for 1,000-2,000+ words for substantive topic articles. Context matters—longer, comprehensive content signals expertise and provides LLMs with enough information to understand your domain authority. However, length should serve clarity, not just word count. Every section should add value.',
  },
  {
    question: 'Should I use voice transcripts for content?',
    answer: 'Yes. Voice memos and transcripts offer authentic, conversational expertise that can be cleaned up with AI while preserving natural explanatory flow and domain knowledge. This approach scales content creation while maintaining genuine authority, as the content comes from real expertise rather than generic AI-generated text.',
  },
  {
    question: 'What is a knowledge graph in the context of websites?',
    answer: 'A knowledge graph is a network of interconnected concept pages with proper structured data markup. Each page defines an entity (concept, product, person) with machine-readable Schema.org markup and links to related entities. This creates a "fat card" of information that LLMs can easily parse, understand relationships between concepts, and cite authoritatively.',
  },
  {
    question: 'How is Model Context Marketing different from SEO?',
    answer: 'Traditional SEO focuses on ranking high in keyword-based search results through tactics like keyword optimization and backlinks. Model Context Marketing focuses on being cited by AI models through factual, structured content that demonstrates domain expertise. SEO targets search engines; MCM targets the LLMs that power AI-generated answers.',
  },
  {
    question: 'Which LLM crawlers should I allow in robots.txt?',
    answer: 'Allow ChatGPT-User, GPTBot, Claude-Web, CCBot, anthropic-ai, PerplexityBot, and Google-Extended at minimum. These represent major LLMs that crawl the web to update their knowledge. Explicitly allowing these crawlers ensures your content can be discovered and understood by AI systems.',
  },
  {
    question: 'What makes content "factual" for LLMs?',
    answer: 'Factual content includes specific numbers, concrete examples, verifiable claims, technical details, and clear explanations. Avoid vague superlatives ("best," "leading," "innovative"), unsubstantiated claims, and promotional language. Focus on what, how, and why with evidence and examples rather than marketing spin.',
  },
  {
    question: 'Do I need to remove all promotional content?',
    answer: 'Not entirely, but promotional sections should be clearly separated from educational content. LLMs can distinguish between informational content and sales pages. Keep educational resources factual and authoritative, while product/sales pages can be more promotional. Structure your site so LLMs can easily identify and cite the educational portions.',
  },
];

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Common questions about Model Context Marketing and creating LLM-friendly content
          </p>
        </header>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <article key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                {faq.question}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}

