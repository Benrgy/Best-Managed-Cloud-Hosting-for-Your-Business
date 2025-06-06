
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, AlertCircle, XCircle, Target, Eye, Search, Share2 } from "lucide-react";

interface AdvancedSEOAnalyzerProps {
  title: string;
  content: string;
  metaDescription: string;
  focusKeyword?: string;
  excerpt: string;
  slug: string;
  image?: string;
}

export const AdvancedSEOAnalyzer = ({ 
  title, 
  content, 
  metaDescription, 
  focusKeyword, 
  excerpt, 
  slug,
  image 
}: AdvancedSEOAnalyzerProps) => {
  
  const analyzeContent = () => {
    const analysis = {
      score: 0,
      readability: 0,
      seo: [] as Array<{ name: string; status: 'good' | 'warning' | 'error'; message: string; points: number }>,
      readabilityChecks: [] as Array<{ name: string; status: 'good' | 'warning' | 'error'; message: string }>,
      technical: [] as Array<{ name: string; status: 'good' | 'warning' | 'error'; message: string }>
    };

    // Content structure analysis
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    
    const headings = {
      h1: tempDiv.querySelectorAll('h1').length,
      h2: tempDiv.querySelectorAll('h2').length,
      h3: tempDiv.querySelectorAll('h3').length,
      h4: tempDiv.querySelectorAll('h4').length,
      h5: tempDiv.querySelectorAll('h5').length,
      h6: tempDiv.querySelectorAll('h6').length
    };

    const paragraphs = tempDiv.querySelectorAll('p').length;
    const images = tempDiv.querySelectorAll('img').length;
    const links = tempDiv.querySelectorAll('a').length;
    const internalLinks = Array.from(tempDiv.querySelectorAll('a')).filter(a => 
      a.getAttribute('href')?.startsWith('/') || 
      a.getAttribute('href')?.includes(window.location.hostname)
    ).length;
    const externalLinks = links - internalLinks;

    // Word and sentence analysis
    const plainText = tempDiv.textContent || '';
    const words = plainText.split(/\s+/).filter(word => word.length > 0);
    const sentences = plainText.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const wordCount = words.length;
    const avgWordsPerSentence = wordCount / Math.max(sentences.length, 1);
    
    // SEO Analysis
    
    // Title analysis
    if (title.length >= 50 && title.length <= 60) {
      analysis.seo.push({ name: 'Title Length', status: 'good', message: 'Title length is optimal (50-60 characters)', points: 10 });
      analysis.score += 10;
    } else if (title.length > 0) {
      analysis.seo.push({ name: 'Title Length', status: 'warning', message: `Title is ${title.length < 50 ? 'too short' : 'too long'} (${title.length} characters)`, points: 5 });
      analysis.score += 5;
    } else {
      analysis.seo.push({ name: 'Title Length', status: 'error', message: 'Title is missing', points: 0 });
    }

    // Meta description
    if (metaDescription.length >= 150 && metaDescription.length <= 160) {
      analysis.seo.push({ name: 'Meta Description', status: 'good', message: 'Meta description length is optimal', points: 10 });
      analysis.score += 10;
    } else if (metaDescription.length > 0) {
      analysis.seo.push({ name: 'Meta Description', status: 'warning', message: `Meta description is ${metaDescription.length < 150 ? 'too short' : 'too long'}`, points: 5 });
      analysis.score += 5;
    } else {
      analysis.seo.push({ name: 'Meta Description', status: 'error', message: 'Meta description is missing', points: 0 });
    }

    // URL Slug
    if (slug.length <= 60 && slug.includes('-') && !slug.includes('_')) {
      analysis.seo.push({ name: 'URL Slug', status: 'good', message: 'URL slug is SEO-friendly', points: 5 });
      analysis.score += 5;
    } else {
      analysis.seo.push({ name: 'URL Slug', status: 'warning', message: 'URL slug could be improved', points: 2 });
      analysis.score += 2;
    }

    // Focus keyword analysis
    if (focusKeyword) {
      const keyword = focusKeyword.toLowerCase();
      const titleHasKeyword = title.toLowerCase().includes(keyword);
      const metaHasKeyword = metaDescription.toLowerCase().includes(keyword);
      const contentHasKeyword = plainText.toLowerCase().includes(keyword);
      const h1HasKeyword = Array.from(tempDiv.querySelectorAll('h1')).some(h => h.textContent?.toLowerCase().includes(keyword));
      
      let keywordScore = 0;
      let keywordMessage = 'Focus keyword found in: ';
      const locations = [];
      
      if (titleHasKeyword) { keywordScore += 4; locations.push('title'); }
      if (metaHasKeyword) { keywordScore += 3; locations.push('meta description'); }
      if (h1HasKeyword) { keywordScore += 4; locations.push('H1'); }
      if (contentHasKeyword) { keywordScore += 4; locations.push('content'); }
      
      if (keywordScore >= 10) {
        analysis.seo.push({ name: 'Focus Keyword', status: 'good', message: keywordMessage + locations.join(', '), points: 15 });
        analysis.score += 15;
      } else if (keywordScore > 0) {
        analysis.seo.push({ name: 'Focus Keyword', status: 'warning', message: keywordMessage + locations.join(', '), points: keywordScore });
        analysis.score += keywordScore;
      } else {
        analysis.seo.push({ name: 'Focus Keyword', status: 'error', message: 'Focus keyword not found', points: 0 });
      }
    }

    // Heading structure
    if (headings.h1 === 1) {
      analysis.seo.push({ name: 'H1 Tag', status: 'good', message: 'Perfect! One H1 tag found', points: 10 });
      analysis.score += 10;
    } else if (headings.h1 === 0) {
      analysis.seo.push({ name: 'H1 Tag', status: 'error', message: 'No H1 tag found', points: 0 });
    } else {
      analysis.seo.push({ name: 'H1 Tag', status: 'warning', message: `Multiple H1 tags found (${headings.h1})`, points: 3 });
      analysis.score += 3;
    }

    if (headings.h2 >= 2) {
      analysis.seo.push({ name: 'Subheadings', status: 'good', message: `Good use of H2 tags (${headings.h2})`, points: 8 });
      analysis.score += 8;
    } else if (headings.h2 > 0) {
      analysis.seo.push({ name: 'Subheadings', status: 'warning', message: 'Consider adding more H2 tags', points: 4 });
      analysis.score += 4;
    } else {
      analysis.seo.push({ name: 'Subheadings', status: 'error', message: 'No H2 tags found', points: 0 });
    }

    // Content length
    if (wordCount >= 1000) {
      analysis.seo.push({ name: 'Content Length', status: 'good', message: `Excellent content length (${wordCount} words)`, points: 10 });
      analysis.score += 10;
    } else if (wordCount >= 300) {
      analysis.seo.push({ name: 'Content Length', status: 'warning', message: `Good content length (${wordCount} words)`, points: 6 });
      analysis.score += 6;
    } else {
      analysis.seo.push({ name: 'Content Length', status: 'error', message: `Content too short (${wordCount} words)`, points: 0 });
    }

    // Image optimization
    const imagesWithAlt = Array.from(tempDiv.querySelectorAll('img')).filter(img => img.getAttribute('alt')).length;
    if (images > 0) {
      if (imagesWithAlt === images) {
        analysis.seo.push({ name: 'Image Alt Text', status: 'good', message: 'All images have alt text', points: 8 });
        analysis.score += 8;
      } else {
        analysis.seo.push({ name: 'Image Alt Text', status: 'warning', message: `${images - imagesWithAlt} images missing alt text`, points: 4 });
        analysis.score += 4;
      }
    }

    // Internal/External links
    if (internalLinks >= 2) {
      analysis.seo.push({ name: 'Internal Links', status: 'good', message: `Good internal linking (${internalLinks} links)`, points: 8 });
      analysis.score += 8;
    } else if (internalLinks > 0) {
      analysis.seo.push({ name: 'Internal Links', status: 'warning', message: 'Add more internal links', points: 4 });
      analysis.score += 4;
    } else {
      analysis.seo.push({ name: 'Internal Links', status: 'error', message: 'No internal links found', points: 0 });
    }

    if (externalLinks >= 1 && externalLinks <= 5) {
      analysis.seo.push({ name: 'External Links', status: 'good', message: `Good external linking (${externalLinks} links)`, points: 5 });
      analysis.score += 5;
    }

    // Readability Analysis
    if (avgWordsPerSentence <= 20) {
      analysis.readabilityChecks.push({ name: 'Sentence Length', status: 'good', message: 'Average sentence length is good' });
      analysis.readability += 25;
    } else {
      analysis.readabilityChecks.push({ name: 'Sentence Length', status: 'warning', message: 'Sentences are too long on average' });
      analysis.readability += 10;
    }

    if (paragraphs >= Math.floor(wordCount / 150)) {
      analysis.readabilityChecks.push({ name: 'Paragraph Length', status: 'good', message: 'Good paragraph structure' });
      analysis.readability += 25;
    } else {
      analysis.readabilityChecks.push({ name: 'Paragraph Length', status: 'warning', message: 'Paragraphs may be too long' });
      analysis.readability += 10;
    }

    const headingRatio = Object.values(headings).reduce((a, b) => a + b, 0) / Math.max(paragraphs, 1);
    if (headingRatio >= 0.3) {
      analysis.readabilityChecks.push({ name: 'Heading Distribution', status: 'good', message: 'Good use of headings' });
      analysis.readability += 25;
    } else {
      analysis.readabilityChecks.push({ name: 'Heading Distribution', status: 'warning', message: 'Add more headings to break up content' });
      analysis.readability += 10;
    }

    const transitionWords = ['however', 'therefore', 'furthermore', 'moreover', 'additionally', 'consequently'].filter(word => 
      plainText.toLowerCase().includes(word)
    ).length;
    if (transitionWords >= 3) {
      analysis.readabilityChecks.push({ name: 'Transition Words', status: 'good', message: 'Good use of transition words' });
      analysis.readability += 25;
    } else {
      analysis.readabilityChecks.push({ name: 'Transition Words', status: 'warning', message: 'Consider adding more transition words' });
      analysis.readability += 10;
    }

    // Technical SEO
    if (image) {
      analysis.technical.push({ name: 'Featured Image', status: 'good', message: 'Featured image is set' });
    } else {
      analysis.technical.push({ name: 'Featured Image', status: 'warning', message: 'No featured image set' });
    }

    analysis.technical.push({ name: 'Schema Markup', status: 'good', message: 'Article schema will be generated' });
    analysis.technical.push({ name: 'Open Graph', status: 'good', message: 'Open Graph tags will be included' });

    return analysis;
  };

  const analysis = analyzeContent();
  const maxScore = 100;
  const scorePercentage = Math.min(Math.round(analysis.score), 100);
  const readabilityPercentage = Math.min(analysis.readability, 100);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-600" />
          <CardTitle>Advanced SEO Analysis</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="seo" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="seo" className="flex items-center gap-2">
              <Search size={16} />
              SEO
            </TabsTrigger>
            <TabsTrigger value="readability" className="flex items-center gap-2">
              <Eye size={16} />
              Readability
            </TabsTrigger>
            <TabsTrigger value="technical" className="flex items-center gap-2">
              <Share2 size={16} />
              Technical
            </TabsTrigger>
          </TabsList>

          <TabsContent value="seo" className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">SEO Score</span>
                <span className={`text-lg font-bold ${getScoreColor(scorePercentage)}`}>
                  {scorePercentage}/100
                </span>
              </div>
              <Progress value={scorePercentage} className="h-2" />
              <Badge variant={scorePercentage >= 80 ? "default" : scorePercentage >= 60 ? "secondary" : "destructive"}>
                {scorePercentage >= 80 ? "Excellent" : scorePercentage >= 60 ? "Good" : "Needs Improvement"}
              </Badge>
            </div>

            <div className="space-y-2">
              {analysis.seo.map((check, index) => (
                <div key={index} className="flex items-start gap-2 p-2 rounded-lg border">
                  {getStatusIcon(check.status)}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{check.name}</span>
                      <span className="text-xs text-gray-500">{check.points} pts</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{check.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="readability" className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Readability Score</span>
                <span className={`text-lg font-bold ${getScoreColor(readabilityPercentage)}`}>
                  {readabilityPercentage}/100
                </span>
              </div>
              <Progress value={readabilityPercentage} className="h-2" />
              <Badge variant={readabilityPercentage >= 80 ? "default" : readabilityPercentage >= 60 ? "secondary" : "destructive"}>
                {readabilityPercentage >= 80 ? "Easy to Read" : readabilityPercentage >= 60 ? "Fairly Easy" : "Difficult"}
              </Badge>
            </div>

            <div className="space-y-2">
              {analysis.readabilityChecks.map((check, index) => (
                <div key={index} className="flex items-start gap-2 p-2 rounded-lg border">
                  {getStatusIcon(check.status)}
                  <div className="flex-1">
                    <span className="text-sm font-medium">{check.name}</span>
                    <p className="text-xs text-gray-600 mt-1">{check.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technical" className="space-y-4">
            <div className="space-y-2">
              {analysis.technical.map((check, index) => (
                <div key={index} className="flex items-start gap-2 p-2 rounded-lg border">
                  {getStatusIcon(check.status)}
                  <div className="flex-1">
                    <span className="text-sm font-medium">{check.name}</span>
                    <p className="text-xs text-gray-600 mt-1">{check.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
