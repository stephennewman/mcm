'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AnalyzerPage() {
  const router = useRouter();
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [isValidating, setIsValidating] = useState(false);

  const exampleUrls = [
    'https://modelcontextmarketing.com',
    'https://stripe.com/docs',
    'https://vercel.com',
    'https://anthropic.com'
  ];

  function validateUrl(urlString: string): boolean {
    try {
      const parsed = new URL(urlString);
      return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
      return false;
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    
    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    // Add https:// if no protocol
    let finalUrl = url.trim();
    if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
      finalUrl = 'https://' + finalUrl;
    }

    if (!validateUrl(finalUrl)) {
      setError('Please enter a valid URL');
      return;
    }

    setIsValidating(true);
    router.push(`/analyzer/results?url=${encodeURIComponent(finalUrl)}`);
  }

  function handleExampleClick(exampleUrl: string) {
    setUrl(exampleUrl);
    setError('');
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link href="/" className="text-blue-600 hover:underline text-sm mb-2 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">MCM Analyzer</h1>
          <p className="text-gray-600 mt-2">
            Analyze your website with 9 cutting-edge AI models
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🎯 Real AI Model Analysis
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Get Your MCM Score
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            See how GPT-4, Claude, Gemini, Perplexity, and 5 other AI models evaluate your content for 
            optimization, structure, and authority.
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <form onSubmit={handleSubmit}>
            <label htmlFor="url" className="block text-sm font-semibold text-gray-700 mb-3">
              Website URL
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                disabled={isValidating}
              />
              <button
                type="submit"
                disabled={isValidating}
                className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isValidating ? 'Starting...' : 'Analyze'}
              </button>
            </div>
            {error && (
              <p className="mt-3 text-red-600 text-sm font-medium">{error}</p>
            )}
          </form>

          {/* Example URLs */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3 font-medium">Try these examples:</p>
            <div className="flex flex-wrap gap-2">
              {exampleUrls.map((exampleUrl) => (
                <button
                  key={exampleUrl}
                  onClick={() => handleExampleClick(exampleUrl)}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg transition-colors border border-gray-300"
                >
                  {exampleUrl.replace('https://', '')}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">9 AI Models</h3>
            <p className="text-gray-600 text-sm">
              Get insights from GPT-4, Claude, Gemini, Perplexity, Mistral, Groq, Grok, DeepSeek, and Fireworks
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Real-Time Results</h3>
            <p className="text-gray-600 text-sm">
              Watch scores appear live as each AI model completes its analysis
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Actionable Insights</h3>
            <p className="text-gray-600 text-sm">
              Get specific recommendations from each model on how to improve your score
            </p>
          </div>
        </div>

        {/* What Gets Analyzed */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Analyze</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Content Quality</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Word count and depth</li>
                <li>• Tone (educational vs promotional)</li>
                <li>• Examples and use cases</li>
                <li>• Technical specifications</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Structure</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Semantic HTML tags</li>
                <li>• Heading hierarchy</li>
                <li>• JSON-LD structured data</li>
                <li>• Internal linking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Authority Signals</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Author credentials</li>
                <li>• Publication dates</li>
                <li>• E-E-A-T markers</li>
                <li>• Citation potential</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">LLM Optimization</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Schema.org markup</li>
                <li>• Meta descriptions</li>
                <li>• OpenGraph tags</li>
                <li>• Crawlability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-900">
            <strong>Note:</strong> Analysis uses real AI APIs. Results may take 5-10 seconds. 
            Rate limited to 10 analyses per hour to manage API costs.
          </p>
        </div>
      </div>
    </main>
  );
}

