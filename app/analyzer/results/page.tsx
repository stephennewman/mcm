'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface ModelScore {
  name: string;
  logo: string;
  score: number;
  color: string;
  bgGradient: string;
  insight: string;
  category: string;
  isFallback?: boolean;
}

interface ModelError {
  name: string;
  error: string;
}

function AnalysisResultsContent() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url');
  
  const [modelScores, setModelScores] = useState<ModelScore[]>([]);
  const [modelErrors, setModelErrors] = useState<ModelError[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [error, setError] = useState('');
  const [statusMessage, setStatusMessage] = useState('Starting analysis...');
  
  const domain = url ? new URL(url).hostname : 'example.com';
  const analyzedAt = new Date().toLocaleDateString();
  
  useEffect(() => {
    if (!url) {
      setError('No URL provided');
      setIsAnalyzing(false);
      return;
    }
    
    async function startAnalysis() {
      try {
        const response = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url })
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Analysis failed');
        }
        
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        
        if (!reader) {
          throw new Error('No response stream');
        }
        
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) break;
          
          const chunk = decoder.decode(value);
          const lines = chunk.split('\n').filter(line => line.trim().startsWith('data:'));
          
          for (const line of lines) {
            try {
              const data = JSON.parse(line.replace('data:', '').trim());
              
              if (data.type === 'status') {
                setStatusMessage(data.message);
              } else if (data.type === 'model_result') {
                setModelScores(prev => {
                  const existing = prev.find(m => m.name === data.result.name);
                  if (existing) {
                    return prev.map(m => m.name === data.result.name ? data.result : m);
                  }
                  return [...prev, data.result];
                });
              } else if (data.type === 'model_error') {
                setModelErrors(prev => [...prev, { name: data.model, error: data.error }]);
              } else if (data.type === 'complete') {
                setIsAnalyzing(false);
                setStatusMessage('Analysis complete!');
              }
            } catch (e) {
              console.error('Error parsing SSE data:', e);
            }
          }
        }
      } catch (err) {
        console.error('Analysis error:', err);
        setError(err instanceof Error ? err.message : 'Failed to analyze website');
        setIsAnalyzing(false);
      }
    }
    
    startAnalysis();
  }, [url]);

  // Calculate dynamic scores
  const overallScore = modelScores.length > 0
    ? Math.round(modelScores.reduce((sum, m) => sum + m.score, 0) / modelScores.length)
    : 0;
    
  const categoryScores = {
    contentQuality: modelScores.find(m => m.category === 'Content Quality')?.score || 0,
    structure: modelScores.find(m => m.category === 'Structure & Logic')?.score || 0,
    authority: Math.round((modelScores.filter(m => ['Google Signals', 'Citation Authority'].includes(m.category)).reduce((sum, m) => sum + m.score, 0) / 2) || 0),
    llmOptimization: Math.round(modelScores.filter(m => !['Content Quality', 'Structure & Logic', 'Google Signals', 'Citation Authority'].includes(m.category)).reduce((sum, m) => sum + m.score, 0) / Math.max(1, modelScores.filter(m => !['Content Quality', 'Structure & Logic', 'Google Signals', 'Citation Authority'].includes(m.category)).length))
  };


  // Error state
  if (error) {
    return (
      <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-red-200">
            <div className="text-6xl mb-4">❌</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Analysis Failed</h2>
            <p className="text-gray-700 mb-6">{error}</p>
            <Link
              href="/analyzer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/analyzer" className="text-blue-600 hover:underline text-sm mb-2 inline-block">
                ← Back to Analyzer
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">MCM Analysis Results</h1>
              <p className="text-gray-600 mt-1">{domain} • {analyzedAt}</p>
              {isAnalyzing && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                  <span className="text-sm text-blue-600 font-medium">{statusMessage}</span>
                </div>
              )}
            </div>
            <div className="text-right">
              <div className="text-6xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {overallScore || '—'}
              </div>
              <div className="text-sm text-gray-500 font-medium">MCM SCORE</div>
              <div className="text-xs text-gray-400 mt-1">
                {isAnalyzing ? `${modelScores.length + modelErrors.length}/9 models` : `${modelScores.length} models analyzed`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Summary Stats */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-sm text-gray-500 font-medium mb-1">Content Quality</div>
            <div className="text-3xl font-bold text-gray-900">{categoryScores.contentQuality}</div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-green-400 to-green-600 rounded-full transition-all duration-500"
                style={{ width: `${categoryScores.contentQuality}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-sm text-gray-500 font-medium mb-1">Structure & Logic</div>
            <div className="text-3xl font-bold text-gray-900">{categoryScores.structure}</div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${categoryScores.structure}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-sm text-gray-500 font-medium mb-1">Authority Signals</div>
            <div className="text-3xl font-bold text-gray-900">{categoryScores.authority}</div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-orange-400 to-red-600 rounded-full transition-all duration-500"
                style={{ width: `${categoryScores.authority}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-sm text-gray-500 font-medium mb-1">LLM Optimization</div>
            <div className="text-3xl font-bold text-gray-900">{categoryScores.llmOptimization}</div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${categoryScores.llmOptimization}%` }}
              />
            </div>
          </div>
        </div>

        {/* Model Analysis Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Analysis by AI Model
          </h2>
          <p className="text-gray-600">
            {modelScores.length > 0 ? (
              <>✅ {modelScores.length} model{modelScores.length !== 1 ? 's' : ''} successfully analyzed your content</>
            ) : (
              'Analyzing with cutting-edge AI models...'
            )}
            {modelErrors.length > 0 && (
              <> • ⚠️ {modelErrors.length} model{modelErrors.length !== 1 ? 's' : ''} failed</>
            )}
          </p>
        </div>

        {/* Show error summary if there are any failures */}
        {modelErrors.length > 0 && !isAnalyzing && (
          <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
            <div className="flex">
              <div className="shrink-0">
                <span className="text-2xl">⚠️</span>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Some models failed to analyze</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p className="mb-2">The following models encountered errors:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {modelErrors.map((err) => (
                      <li key={err.name}><strong>{err.name}</strong>: {err.error}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs text-yellow-600">Your score is calculated from {modelScores.length} working model{modelScores.length !== 1 ? 's' : ''}.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Loading skeletons for pending models */}
          {isAnalyzing && (modelScores.length + modelErrors.length) < 9 && (
            <>
              {Array.from({ length: 9 - modelScores.length - modelErrors.length }).map((_, idx) => (
                <div
                  key={`skeleton-${idx}`}
                  className="bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl p-6 border-2 border-gray-200 animate-pulse"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-300 rounded-xl"></div>
                      <div>
                        <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
                        <div className="h-3 w-16 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="h-12 w-20 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="bg-gray-300 rounded-xl p-4">
                    <div className="h-3 bg-gray-400 rounded mb-2"></div>
                    <div className="h-3 bg-gray-400 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </>
          )}
          
          {modelScores.map((model) => (
            <div
              key={model.name}
              className={`bg-linear-to-br ${model.bgGradient} rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-xl hover:scale-105 cursor-pointer group`}
            >
              {/* Header with Logo */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-sm group-hover:shadow-md transition-shadow">
                    <Image
                      src={model.logo}
                      alt={`${model.name} logo`}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{model.name}</h3>
                    <p className="text-xs text-gray-600">{model.category}</p>
                  </div>
                </div>
              </div>

              {/* Score */}
              <div className="mb-4">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-bold text-gray-900">{model.score}</span>
                  <span className="text-2xl text-gray-500 mb-1">/100</span>
                </div>
                <div className="h-3 bg-white/50 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${model.score}%`,
                      backgroundColor: model.color
                    }}
                  />
                </div>
              </div>

              {/* Insight */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold" style={{ color: model.color }}>
                    AI Insight:
                  </span>{' '}
                  {model.insight}
                </p>
              </div>

              {/* Badge */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {model.score >= 80 ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      ✅ Excellent
                    </span>
                  ) : model.score >= 60 ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                      ⚠️ Good
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                      ❌ Needs Work
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

export default function AnalysisResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-16 w-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-700 font-medium">Loading analyzer...</p>
        </div>
      </div>
    }>
      <AnalysisResultsContent />
    </Suspense>
  );
}
