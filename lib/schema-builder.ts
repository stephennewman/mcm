import { ExtractedContent } from './content-extractor';

export interface GeneratedSchema {
  type: string;
  priority: 'Critical' | 'High' | 'Medium';
  reason: string;
  code: string;
  implementation: string;
}

export function generateMissingSchemas(content: ExtractedContent): GeneratedSchema[] {
  const schemas: GeneratedSchema[] = [];
  const existingTypes = content.schemas.map(s => s['@type']);
  const businessInfo = content.businessInfo;
  const domain = new URL(content.url).hostname;

  // Organization Schema (Critical)
  if (!existingTypes.includes('Organization')) {
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: businessInfo.siteName,
      url: content.url,
      ...(businessInfo.description && { description: businessInfo.description }),
      ...(content.openGraph.image && { logo: content.openGraph.image }),
      ...(businessInfo.category && { knowsAbout: businessInfo.category })
    };

    schemas.push({
      type: 'Organization',
      priority: 'Critical',
      reason: 'Tells LLMs who you are. Without this, LLMs can\'t identify your company.',
      code: JSON.stringify(orgSchema, null, 2),
      implementation: 'Add this script tag to your <head> or <body>'
    });
  }

  // WebSite Schema (High)
  if (!existingTypes.includes('WebSite')) {
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: businessInfo.siteName,
      url: content.url,
      ...(businessInfo.description && { description: businessInfo.description })
    };

    schemas.push({
      type: 'WebSite',
      priority: 'High',
      reason: 'Identifies your site to search engines and LLMs.',
      code: JSON.stringify(websiteSchema, null, 2),
      implementation: 'Add to your homepage in a script tag with type="application/ld+json"'
    });
  }

  // Article Schema (High) - if content looks like an article
  if (!existingTypes.includes('Article') && content.wordCount > 500) {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: content.title,
      ...(businessInfo.description && { description: businessInfo.description }),
      ...(content.openGraph.image && { image: content.openGraph.image }),
      author: {
        '@type': content.hasAuthor ? 'Person' : 'Organization',
        name: content.hasAuthor ? 'Your Name' : businessInfo.siteName
      },
      publisher: {
        '@type': 'Organization',
        name: businessInfo.siteName,
        ...(content.openGraph.image && { logo: { '@type': 'ImageObject', url: content.openGraph.image } })
      },
      datePublished: content.hasDates ? 'YYYY-MM-DD' : new Date().toISOString().split('T')[0],
      dateModified: new Date().toISOString().split('T')[0]
    };

    schemas.push({
      type: 'Article',
      priority: 'High',
      reason: 'Adds authority signals. LLMs favor content with clear authorship and dates.',
      code: JSON.stringify(articleSchema, null, 2),
      implementation: 'Add to article/blog pages. Replace "Your Name" and dates with actual values.'
    });
  }

  // Product Schema (High) - if we detected products
  if (!existingTypes.includes('Product') && businessInfo.products.length > 0) {
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: businessInfo.products[0],
      description: `${businessInfo.products[0]} - ${businessInfo.description || 'Product description'}`,
      brand: {
        '@type': 'Organization',
        name: businessInfo.siteName
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        price: 'PRICE',
        priceCurrency: 'USD'
      }
    };

    schemas.push({
      type: 'Product',
      priority: 'High',
      reason: `You have ${businessInfo.products.length} product${businessInfo.products.length > 1 ? 's' : ''} but no Product schema. LLMs use this for product recommendations.`,
      code: JSON.stringify(productSchema, null, 2),
      implementation: 'Add to product pages. Replace PRICE with actual price. Create one schema per product.'
    });
  }

  // FAQPage Schema (Medium) - if we detected questions
  const hasQuestions = content.headings.h2.some((h: string) => h.includes('?')) || 
                       content.headings.h3.some((h: string) => h.includes('?'));
  
  if (!existingTypes.includes('FAQPage') && hasQuestions) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Your question here?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your answer here. Be specific and factual.'
          }
        }
      ]
    };

    schemas.push({
      type: 'FAQPage',
      priority: 'Medium',
      reason: 'You have questions in your content. FAQ schema makes you highly citable.',
      code: JSON.stringify(faqSchema, null, 2),
      implementation: 'Add one Question/Answer pair for each FAQ. Replace with your actual Q&As.'
    });
  }

  // BreadcrumbList Schema (Medium)
  if (!existingTypes.includes('BreadcrumbList')) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: content.url.split('/').slice(0, 3).join('/')
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: businessInfo.siteName,
          item: content.url
        }
      ]
    };

    schemas.push({
      type: 'BreadcrumbList',
      priority: 'Medium',
      reason: 'Helps LLMs understand your site structure and navigation.',
      code: JSON.stringify(breadcrumbSchema, null, 2),
      implementation: 'Add to pages with navigation paths. Adjust positions and items based on your URL structure.'
    });
  }

  return schemas.sort((a, b) => {
    const priorityOrder = { 'Critical': 0, 'High': 1, 'Medium': 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
}

