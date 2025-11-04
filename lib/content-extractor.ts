import * as cheerio from 'cheerio';

export interface ExtractedContent {
  url: string;
  title: string;
  metaDescription: string;
  openGraph: {
    title?: string;
    description?: string;
    image?: string;
  };
  schemas: any[];
  semanticTags: {
    article: number;
    section: number;
    header: number;
    footer: number;
    nav: number;
    aside: number;
    main: number;
  };
  headings: {
    h1: string[];
    h2: string[];
    h3: string[];
    h4: string[];
    h5: string[];
    h6: string[];
  };
  wordCount: number;
  hasAuthor: boolean;
  hasDates: boolean;
  mainContent: string;
  rawHtml: string;
  businessInfo: {
    siteName: string;
    description: string;
    category: string;
    features: string[];
    markets: string[];
    products: string[];
    differentiation: string[];
    companyType: string;
  };
}

export async function extractContent(url: string): Promise<ExtractedContent> {
  try {
    // Fetch the HTML
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'MCM-Analyzer/1.0 (Model Context Marketing Analyzer)'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const html = await response.text();
    const $ = cheerio.load(html);
    
    // Extract title
    const title = $('title').text() || $('meta[property="og:title"]').attr('content') || '';
    
    // Extract meta description
    const metaDescription = $('meta[name="description"]').attr('content') || 
                           $('meta[property="og:description"]').attr('content') || '';
    
    // Extract Open Graph
    const openGraph = {
      title: $('meta[property="og:title"]').attr('content'),
      description: $('meta[property="og:description"]').attr('content'),
      image: $('meta[property="og:image"]').attr('content')
    };
    
    // Extract JSON-LD schemas
    const schemas: any[] = [];
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const schema = JSON.parse($(el).html() || '{}');
        schemas.push(schema);
      } catch (e) {
        // Skip invalid JSON
      }
    });
    
    // Count semantic HTML tags
    const semanticTags = {
      article: $('article').length,
      section: $('section').length,
      header: $('header').length,
      footer: $('footer').length,
      nav: $('nav').length,
      aside: $('aside').length,
      main: $('main').length
    };
    
    // Extract headings
    const headings = {
      h1: $('h1').map((_, el) => $(el).text().trim()).get(),
      h2: $('h2').map((_, el) => $(el).text().trim()).get(),
      h3: $('h3').map((_, el) => $(el).text().trim()).get(),
      h4: $('h4').map((_, el) => $(el).text().trim()).get(),
      h5: $('h5').map((_, el) => $(el).text().trim()).get(),
      h6: $('h6').map((_, el) => $(el).text().trim()).get()
    };
    
    // Remove scripts, styles, and navigation
    $('script, style, nav, footer, header').remove();
    
    // Get main content
    let mainContent = $('main').text() || $('article').text() || $('body').text();
    mainContent = mainContent.replace(/\s+/g, ' ').trim();
    
    // Word count
    const wordCount = mainContent.split(/\s+/).length;
    
    // Check for author
    const hasAuthor = $('[rel="author"]').length > 0 ||
                     $('[itemprop="author"]').length > 0 ||
                     $('.author').length > 0 ||
                     schemas.some(s => s.author) ||
                     /author/i.test(html);
    
    // Check for dates
    const hasDates = $('time').length > 0 ||
                    $('[datetime]').length > 0 ||
                    schemas.some(s => s.datePublished || s.dateModified);
    
    // Extract business information
    const businessInfo = extractBusinessInfo($, schemas, title, metaDescription, headings, mainContent);
    
    return {
      url,
      title,
      metaDescription,
      openGraph,
      schemas,
      semanticTags,
      headings,
      wordCount,
      hasAuthor,
      hasDates,
      mainContent: mainContent.slice(0, 4000), // First 4000 chars
      rawHtml: html.slice(0, 10000), // First 10k chars for analysis
      businessInfo
    };
    
  } catch (error) {
    throw new Error(`Failed to extract content: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

function extractBusinessInfo(
  $: cheerio.CheerioAPI,
  schemas: any[],
  title: string,
  metaDescription: string,
  headings: any,
  mainContent: string
) {
  // Extract site name
  const siteName = 
    schemas.find(s => s['@type'] === 'Organization')?.name ||
    schemas.find(s => s['@type'] === 'WebSite')?.name ||
    $('meta[property="og:site_name"]').attr('content') ||
    title.split('|')[0].split('-')[0].trim();
  
  // Extract description
  const description = metaDescription || 
    schemas.find(s => s['@type'] === 'Organization')?.description ||
    '';
  
  // Determine category/industry
  const category = inferCategory($, schemas, mainContent, headings);
  
  // Extract features (look for feature sections, bullet points)
  const features = extractFeatures($, headings, mainContent);
  
  // Extract markets/target audience
  const markets = extractMarkets($, mainContent);
  
  // Extract products/services
  const products = extractProducts($, schemas, headings, mainContent);
  
  // Extract differentiation/USPs
  const differentiation = extractDifferentiation($, headings, mainContent);
  
  // Determine company type
  const companyType = inferCompanyType($, schemas, mainContent);
  
  return {
    siteName,
    description,
    category,
    features: features.slice(0, 8), // Top 8 features
    markets: markets.slice(0, 5), // Top 5 markets
    products: products.slice(0, 6), // Top 6 products
    differentiation: differentiation.slice(0, 5), // Top 5 USPs
    companyType
  };
}

function inferCategory($: cheerio.CheerioAPI, schemas: any[], mainContent: string, headings: any): string {
  // Check schema for industry
  const orgSchema = schemas.find(s => s['@type'] === 'Organization');
  if (orgSchema?.industry) return orgSchema.industry;
  
  // Look for category keywords in content
  const categories = {
    'SaaS': /\b(saas|software as a service|cloud platform|web application)\b/i,
    'E-commerce': /\b(shop|store|buy|cart|checkout|products|online store)\b/i,
    'Manufacturing': /\b(manufacturing|factory|production|industrial|machinery)\b/i,
    'Consulting': /\b(consulting|advisory|professional services|strategy)\b/i,
    'Healthcare': /\b(healthcare|medical|hospital|clinic|patient)\b/i,
    'Education': /\b(education|learning|training|course|university)\b/i,
    'Finance': /\b(financial|banking|investment|insurance)\b/i,
    'Technology': /\b(technology|software|hardware|IT|tech)\b/i,
    'Marketing': /\b(marketing|advertising|agency|branding)\b/i,
    'Real Estate': /\b(real estate|property|housing)\b/i
  };
  
  for (const [cat, regex] of Object.entries(categories)) {
    if (regex.test(mainContent) || regex.test(Object.values(headings).flat().join(' '))) {
      return cat;
    }
  }
  
  return 'Business';
}

function extractFeatures($: cheerio.CheerioAPI, headings: any, mainContent: string): string[] {
  const features: string[] = [];
  
  // Look for "features" sections
  const featureHeadings = [...headings.h2, ...headings.h3].filter((h: string) => 
    /feature|capability|benefit|what we (do|offer)|why choose/i.test(h)
  );
  
  // Extract bullet points from feature sections
  $('ul li, ol li').each((_, el) => {
    const text = $(el).text().trim();
    if (text.length > 10 && text.length < 150 && !text.includes('©')) {
      features.push(text);
    }
  });
  
  // Look for feature-related headings
  [...headings.h2, ...headings.h3, ...headings.h4].forEach((h: string) => {
    if (h.length > 10 && h.length < 100 && /^[A-Z]/.test(h)) {
      features.push(h);
    }
  });
  
  return [...new Set(features)].slice(0, 8);
}

function extractMarkets($: cheerio.CheerioAPI, mainContent: string): string[] {
  const markets: string[] = [];
  
  const marketKeywords = {
    'Enterprise': /\b(enterprise|large business|corporation)\b/i,
    'Small Business': /\b(small business|smb|startup)\b/i,
    'B2B': /\b(b2b|business to business)\b/i,
    'B2C': /\b(b2c|consumer|retail customer)\b/i,
    'Healthcare': /\b(healthcare|medical|hospital)\b/i,
    'Education': /\b(education|school|university|student)\b/i,
    'Finance': /\b(financial services|banking|fintech)\b/i,
    'Manufacturing': /\b(manufacturing|industrial)\b/i,
    'Government': /\b(government|public sector)\b/i,
    'Non-profit': /\b(non-profit|nonprofit|ngo)\b/i
  };
  
  for (const [market, regex] of Object.entries(marketKeywords)) {
    if (regex.test(mainContent)) {
      markets.push(market);
    }
  }
  
  return markets;
}

function extractProducts($: cheerio.CheerioAPI, schemas: any[], headings: any, mainContent: string): string[] {
  const products: string[] = [];
  
  // Check for Product schema
  schemas.filter(s => s['@type'] === 'Product').forEach(s => {
    if (s.name) products.push(s.name);
  });
  
  // Look for product/service headings
  const productHeadings = [...headings.h2, ...headings.h3].filter((h: string) => 
    /product|service|solution|offering/i.test(h) && h.length < 80
  );
  
  products.push(...productHeadings);
  
  // Look for pricing/plan names
  $('[class*="plan"], [class*="price"], [class*="package"]').each((_, el) => {
    const heading = $(el).find('h2, h3, h4').first().text().trim();
    if (heading && heading.length < 50) {
      products.push(heading);
    }
  });
  
  return [...new Set(products)].filter(p => p.length > 0).slice(0, 6);
}

function extractDifferentiation($: cheerio.CheerioAPI, headings: any, mainContent: string): string[] {
  const usps: string[] = [];
  
  // Look for USP-related headings
  const uspHeadings = [...headings.h2, ...headings.h3].filter((h: string) => 
    /why (choose )?us|what makes .* different|our (difference|advantage)|why we're different/i.test(h)
  );
  
  // Extract content under USP headings
  uspHeadings.forEach((heading: string) => {
    const section = $(`h2:contains("${heading}"), h3:contains("${heading}")`).parent();
    section.find('li, p').each((_, el) => {
      const text = $(el).text().trim();
      if (text.length > 15 && text.length < 150) {
        usps.push(text);
      }
    });
  });
  
  // Look for differentiation keywords
  const diffPatterns = [
    /\b(only|first|leading|fastest|best)\b.*?(?=\.|\n)/gi,
    /\bunlike\b.*?(?=\.|\n)/gi,
    /\bpatented\b.*?(?=\.|\n)/gi,
    /\b\d+% (faster|better|more|less)\b.*?(?=\.|\n)/gi
  ];
  
  diffPatterns.forEach(pattern => {
    const matches = mainContent.match(pattern);
    if (matches) {
      usps.push(...matches.map(m => m.trim()));
    }
  });
  
  return [...new Set(usps)].filter(u => u.length > 0).slice(0, 5);
}

function inferCompanyType($: cheerio.CheerioAPI, schemas: any[], mainContent: string): string {
  // Check schema
  const orgSchema = schemas.find(s => s['@type'] === 'Organization');
  if (orgSchema?.['@type']) {
    const type = orgSchema['@type'];
    if (type !== 'Organization') return type;
  }
  
  // Infer from content
  if (/\b(platform|saas|software)\b/i.test(mainContent)) return 'Software Company';
  if (/\b(manufacturer|factory|production)\b/i.test(mainContent)) return 'Manufacturer';
  if (/\b(agency|consulting|services)\b/i.test(mainContent)) return 'Service Provider';
  if (/\b(retailer|store|shop)\b/i.test(mainContent)) return 'Retailer';
  if (/\b(marketplace|platform)\b/i.test(mainContent)) return 'Marketplace';
  
  return 'Company';
}


