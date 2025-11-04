import Link from 'next/link';

export const metadata = {
  title: 'JSON-LD and Common Schema Types | Model Context Marketing',
  description: 'What JSON-LD does for Model Context Marketing and the essential Schema.org types every marketer should implement.',
};

export default function JSONLDSchemaTypesMemo() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'JSON-LD and Common Schema Types',
    datePublished: '2025-11-04T15:30:00-05:00',
    dateModified: '2025-11-04T15:30:00-05:00',
    author: {
      '@type': 'Person',
      name: 'Stephen Newman',
    },
    description: 'What JSON-LD does for Model Context Marketing and the essential Schema.org types every marketer should implement.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen max-w-4xl mx-auto px-6 py-16">
        <Link href="/memos" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Memos
        </Link>
        
        <article>
          <header className="mb-8">
            <p className="text-sm text-gray-500 mb-2">November 4, 2025 at 3:30 PM</p>
            <h1 className="text-4xl font-bold mb-4">JSON-LD and Common Schema Types</h1>
          </header>

          <section className="prose prose-lg max-w-none">
            <p className="lead text-xl mb-8">
              JSON-LD is your website's semantic brain—it tells machines what your pages mean, not just what they say. This memo covers what JSON-LD does for Model Context Marketing and the essential Schema.org types you should implement.
            </p>

            <h2>What JSON-LD Does for Model Context Marketing</h2>

            <p>
              JSON-LD performs three critical functions that make your content understandable to large language models:
            </p>

            <h3>1. Tells LLMs Exactly What Your Entity Means</h3>
            <p>
              Without structured data, LLMs must infer what your content represents. Is this page about a company? A product? A concept? JSON-LD removes ambiguity by explicitly declaring entity types. When you mark up your page as an <code>Organization</code>, LLMs know they're looking at company information, not just text that mentions a company.
            </p>

            <h3>2. Gives Them Structured Understanding</h3>
            <p>
              LLMs process structured data more reliably than unstructured text. JSON-LD provides clear fields like <code>name</code>, <code>description</code>, <code>datePublished</code>, and <code>author</code> that AI systems can extract with confidence. Instead of guessing which text represents the article title versus the author name, the schema explicitly defines these relationships.
            </p>

            <h3>3. Creates Semantic Relationships</h3>
            <p>
              JSON-LD doesn't just describe individual entities—it shows how they relate to each other. An <code>Article</code> has an <code>author</code> who is a <code>Person</code>, published by an <code>Organization</code>, about a specific topic. These connections help LLMs understand context and build knowledge graphs.
            </p>

            <h2>Common Schema Types for Marketers</h2>

            <p>
              Here are the essential Schema.org types you should implement, with practical use cases for each:
            </p>

            <h3>Organization</h3>
            <p><strong>What it is:</strong> Your company or brand entity.</p>
            <p><strong>Use case:</strong> Homepage, About page, company information.</p>
            <p><strong>Key fields:</strong> name, url, logo, description, founder, foundingDate, contactPoint</p>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Model Context Marketing",
  "url": "https://modelcontextmarketing.com",
  "description": "Educational resource for creating LLM-friendly content",
  "founder": {
    "@type": "Person",
    "name": "Stephen Newman"
  }
}`}
            </pre>

            <h3>Product / SoftwareApplication</h3>
            <p><strong>What it is:</strong> Products, SaaS applications, tools, or software.</p>
            <p><strong>Use case:</strong> Product pages, feature descriptions, pricing pages.</p>
            <p><strong>Key fields:</strong> name, description, offers, applicationCategory, operatingSystem</p>
            <p><strong>Example use cases:</strong></p>
            <ul>
              <li>SaaS application product pages</li>
              <li>Online courses or educational products</li>
              <li>Software tools and utilities</li>
              <li>Digital products and services</li>
            </ul>

            <h3>FAQPage</h3>
            <p><strong>What it is:</strong> Frequently asked questions with answers.</p>
            <p><strong>Use case:</strong> FAQ pages, Q&A sections, knowledge base articles.</p>
            <p><strong>Why it works:</strong> LLMs handle FAQs exceptionally well—they mimic conversational training data.</p>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is JSON-LD?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "JSON-LD is JavaScript Object Notation for Linked Data..."
    }
  }]
}`}
            </pre>

            <h3>HowTo</h3>
            <p><strong>What it is:</strong> Step-by-step instructions or tutorials.</p>
            <p><strong>Use case:</strong> Guides, tutorials, implementation instructions, setup processes.</p>
            <p><strong>Key fields:</strong> name, description, step (with text, image, url)</p>
            <p><strong>Example use cases:</strong></p>
            <ul>
              <li>"How to Implement JSON-LD on Your Website"</li>
              <li>"Complete Guide to Setting Up Schema Markup"</li>
              <li>"Tutorial: Building a Knowledge Graph"</li>
            </ul>

            <h3>Article</h3>
            <p><strong>What it is:</strong> Articles, blog posts, and written content.</p>
            <p><strong>Use case:</strong> Blog posts, memos, long-form articles, news content.</p>
            <p><strong>Key fields:</strong> headline, description, author, datePublished, dateModified</p>
            <p><strong>Important:</strong> Always include both <code>datePublished</code> and <code>dateModified</code> to signal content freshness.</p>

            <h3>Review</h3>
            <p><strong>What it is:</strong> Customer reviews, testimonials, case studies.</p>
            <p><strong>Use case:</strong> Product reviews, service testimonials, case study results.</p>
            <p><strong>Key fields:</strong> reviewRating, author, reviewBody, itemReviewed</p>
            <p><strong>Challenge:</strong> Getting authentic, real reviews is difficult. Don't fake these—LLMs can detect patterns of inauthentic reviews. Use actual customer feedback or skip this schema type.</p>

            <h3>Event</h3>
            <p><strong>What it is:</strong> Events, webinars, launches, demos.</p>
            <p><strong>Use case:</strong> Webinar announcements, product launches, live demos, conferences.</p>
            <p><strong>Key fields:</strong> name, startDate, endDate, location (physical or virtual), organizer</p>
            <p><strong>Example use cases:</strong></p>
            <ul>
              <li>Webinar registration pages</li>
              <li>Product launch announcements</li>
              <li>Demo session scheduling</li>
              <li>Conference or meetup listings</li>
            </ul>

            <h2>Key Insight: Meaning vs. Saying</h2>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 my-8">
              <p className="text-lg font-semibold mb-2">
                JSON-LD is your website's semantic brain.
              </p>
              <p className="mb-0">
                It tells machines what your page <strong>means</strong>, not just what it <strong>says</strong>.
              </p>
            </div>

            <p>
              This distinction is crucial. Consider these two examples:
            </p>

            <h3>Without Schema (What It Says)</h3>
            <div className="bg-gray-100 p-4 rounded">
              <p className="mb-0">
                "Model Context Marketing was founded in 2025 by Stephen Newman. It helps marketers optimize content for LLMs."
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              ❓ LLMs must infer: Is this a company? A product? Who is the founder? When was it created?
            </p>

            <h3>With Schema (What It Means)</h3>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Model Context Marketing",
  "foundingDate": "2025",
  "founder": {
    "@type": "Person",
    "name": "Stephen Newman"
  },
  "description": "Helps marketers optimize content for LLMs"
}`}
            </pre>
            <p className="text-sm text-gray-600 mt-2">
              ✅ LLMs know exactly: This is an Organization, founded in 2025, founder is Stephen Newman, purpose is stated.
            </p>

            <h2>Implementation Priority</h2>

            <p>
              If you're starting from scratch, implement schemas in this order:
            </p>

            <ol>
              <li>
                <strong>Organization</strong> — Establish your brand entity first (homepage, about page)
              </li>
              <li>
                <strong>Article</strong> — Mark up all blog posts, memos, and written content
              </li>
              <li>
                <strong>FAQPage</strong> — Add to any Q&A sections (high LLM value)
              </li>
              <li>
                <strong>Product/SoftwareApplication</strong> — If you have products or SaaS
              </li>
              <li>
                <strong>HowTo</strong> — For tutorials and guides
              </li>
              <li>
                <strong>Event</strong> — When you have webinars or launches
              </li>
              <li>
                <strong>Review</strong> — Only when you have authentic testimonials
              </li>
            </ol>

            <h2>Multiple Schemas on One Page</h2>

            <p>
              You can (and should) use multiple schema types on a single page when appropriate. For example:
            </p>

            <ul>
              <li>An <strong>Article</strong> about your company can also include <strong>Organization</strong> schema</li>
              <li>A <strong>HowTo</strong> guide can include <strong>FAQPage</strong> schema for common questions</li>
              <li>A product page with <strong>SoftwareApplication</strong> can include <strong>Review</strong> schemas</li>
            </ul>

            <p>
              Just include multiple <code>&lt;script type="application/ld+json"&gt;</code> blocks with different schema objects.
            </p>

            <h2>Validation</h2>

            <p>
              Always validate your JSON-LD before publishing:
            </p>
            <ul>
              <li><strong>Google Rich Results Test</strong> — Shows how Google sees your markup</li>
              <li><strong>Schema.org Validator</strong> — Validates against Schema.org standards</li>
              <li><strong>Google Search Console</strong> — Monitor for schema errors after publishing</li>
            </ul>

            <h2>Why This Matters</h2>

            <p>
              Every schema type you implement is another way for LLMs to understand your content with precision. The more structured data you provide, the more confidently AI systems can extract, cite, and recommend your information.
            </p>

            <p>
              Without JSON-LD, you're forcing LLMs to guess. With it, you're giving them certainty. That certainty translates to citations, recommendations, and authority.
            </p>
          </section>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: November 4, 2025 at 3:30 PM
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}

