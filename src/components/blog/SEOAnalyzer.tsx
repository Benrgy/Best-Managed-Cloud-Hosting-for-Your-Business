
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertCircle, XCircle, Target, Eye } from "lucide-react";

interface SEOAnalyzerProps {
  title: string;
  content: string;
  metaDescription: string;
  focusKeyword?: string;
  excerpt: string;
}

export const SEOAnalyzer = ({ title, content, metaDescription, focusKeyword, excerpt }: SEOAnalyzerProps) => {
  const analyzeSEO = () => {
    const analysis = {
      score: 0,
      checks: [] as Array<{ name: string; status: 'good' | 'warning' | 'error'; message: string; points: number }>
    };

    // Title analysis
    if (title.length >= 30 && title.length <= 60) {
      analysis.checks.push({ name: 'Title Length', status: 'good', message: 'Title length is optimal (30-60 characters)', points: 10 });
      analysis.score += 10;
    } else if (title.length > 0) {
      analysis.checks.push({ name: 'Title Length', status: 'warning', message: `Title is ${title.length < 30 ? 'too short' : 'too long'} (${title.length} characters)`, points: 5 });
      analysis.score += 5;
    } else {
      analysis.checks.push({ name: 'Title Length', status: 'error', message: 'Title is missing', points: 0 });
    }

    // Meta description analysis
    if (metaDescription.length >= 140 && metaDescription.length <= 160) {
      analysis.checks.push({ name: 'Meta Description', status: 'good', message: 'Meta description length is optimal (140-160 characters)', points: 10 });
      analysis.score += 10;
    } else if (metaDescription.length > 0) {
      analysis.checks.push({ name: 'Meta Description', status: 'warning', message: `Meta description is ${metaDescription.length < 140 ? 'too short' : 'too long'} (${metaDescription.length} characters)`, points: 5 });
      analysis.score += 5;
    } else {
      analysis.checks.push({ name: 'Meta Description', status: 'error', message: 'Meta description is missing', points: 0 });
    }

    // Focus keyword analysis
    if (focusKeyword) {
      const keywordInTitle = title.toLowerCase().includes(focusKeyword.toLowerCase());
      const keywordInMeta = metaDescription.toLowerCase().includes(focusKeyword.toLowerCase());
      const keywordInContent = content.toLowerCase().includes(focusKeyword.toLowerCase());
      
      if (keywordInTitle && keywordInMeta && keywordInContent) {
        analysis.checks.push({ name: 'Focus Keyword', status: 'good', message: 'Focus keyword appears in title, meta description, and content', points: 15 });
        analysis.score += 15;
      } else if (keywordInContent) {
        analysis.checks.push({ name: 'Focus Keyword', status: 'warning', message: 'Focus keyword found in content but missing from title or meta description', points: 8 });
        analysis.score += 8;
      } else {
        analysis.checks.push({ name: 'Focus Keyword', status: 'error', message: 'Focus keyword not found in content', points: 0 });
      }
    }

    // Content length analysis
    const wordCount = content.split(/\s+/).length;
    if (wordCount >= 300) {
      analysis.checks.push({ name: 'Content Length', status: 'good', message: `Good content length (${wordCount} words)`, points: 10 });
      analysis.score += 10;
    } else {
      analysis.checks.push({ name: 'Content Length', status: 'warning', message: `Content is too short (${wordCount} words). Aim for 300+ words.`, points: 5 });
      analysis.score += 5;
    }

    // Headings analysis
    const headingCount = (content.match(/^#+\s/gm) || []).length;
    if (headingCount >= 3) {
      analysis.checks.push({ name: 'Headings Structure', status: 'good', message: `Good heading structure (${headingCount} headings)`, points: 10 });
      analysis.score += 10;
    } else if (headingCount > 0) {
      analysis.checks.push({ name: 'Headings Structure', status: 'warning', message: `Add more headings for better structure (${headingCount} found)`, points: 5 });
      analysis.score += 5;
    } else {
      analysis.checks.push({ name: 'Headings Structure', status: 'error', message: 'No headings found in content', points: 0 });
    }

    // Internal links analysis
    const internalLinkCount = (content.match(/\[.*?\]\(\/.*?\)/g) || []).length;
    if (internalLinkCount >= 2) {
      analysis.checks.push({ name: 'Internal Links', status: 'good', message: `Good internal linking (${internalLinkCount} links)`, points: 10 });
      analysis.score += 10;
    } else if (internalLinkCount > 0) {
      analysis.checks.push({ name: 'Internal Links', status: 'warning', message: `Add more internal links (${internalLinkCount} found)`, points: 5 });
      analysis.score += 5;
    } else {
      analysis.checks.push({ name: 'Internal Links', status: 'error', message: 'No internal links found', points: 0 });
    }

    // Excerpt analysis
    if (excerpt.length >= 120 && excerpt.length <= 160) {
      analysis.checks.push({ name: 'Excerpt Length', status: 'good', message: 'Excerpt length is optimal', points: 5 });
      analysis.score += 5;
    } else if (excerpt.length > 0) {
      analysis.checks.push({ name: 'Excerpt Length', status: 'warning', message: 'Excerpt could be optimized', points: 3 });
      analysis.score += 3;
    }

    return analysis;
  };

  const seoAnalysis = analyzeSEO();
  const maxScore = 80;
  const scorePercentage = Math.round((seoAnalysis.score / maxScore) * 100);

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
          <CardTitle>SEO Analysis</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">SEO Score</span>
            <span className={`text-lg font-bold ${getScoreColor(scorePercentage)}`}>
              {scorePercentage}%
            </span>
          </div>
          <Progress value={scorePercentage} className="h-2" />
          <div className="flex gap-2">
            <Badge variant={scorePercentage >= 80 ? "default" : scorePercentage >= 60 ? "secondary" : "destructive"}>
              {scorePercentage >= 80 ? "Excellent" : scorePercentage >= 60 ? "Good" : "Needs Improvement"}
            </Badge>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Analysis Details</h4>
          {seoAnalysis.checks.map((check, index) => (
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

        <div className="pt-2 border-t">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Eye className="w-3 h-3" />
            <span>Real-time SEO analysis powered by best practices</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
