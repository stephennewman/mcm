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
      rawHtml: html.slice(0, 10000) // First 10k chars for analysis
    };
    
  } catch (error) {
    throw new Error(`Failed to extract content: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}


