
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { BlogTag } from "@/data/blogData";

interface SEOAnalysisCardProps {
  tag: BlogTag;
  seoData: {
    metaTitle: string;
    metaDescription: string;
    focusKeyword: string;
  };
}

export const SEOAnalysisCard = ({ tag, seoData }: SEOAnalysisCardProps) => {
  const analyzeTagSEO = () => {
    const analysis = {
      score: 0,
      checks: [] as Array<{ name: string; status: 'good' | 'warning' | 'error'; message: string; points: number }>
    };

    // Tag name analysis
    if (tag.name.length >= 2 && tag.name.length <= 30) {
      analysis.checks.push({ name: 'Tag Name', status: 'good', message: 'Tag name length is optimal', points: 10 });
      analysis.score += 10;
    } else {
      analysis.checks.push({ name: 'Tag Name', status: 'warning', message: 'Tag name could be optimized', points: 5 });
      analysis.score += 5;
    }

    // Meta title analysis
    if (seoData.metaTitle.length >= 30 && seoData.metaTitle.length <= 60) {
      analysis.checks.push({ name: 'Meta Title', status: 'good', message: 'Meta title length is optimal', points: 15 });
      analysis.score += 15;
    } else if (seoData.metaTitle.length > 0) {
      analysis.checks.push({ name: 'Meta Title', status: 'warning', message: 'Meta title needs optimization', points: 8 });
      analysis.score += 8;
    } else {
      analysis.checks.push({ name: 'Meta Title', status: 'error', message: 'Meta title is missing', points: 0 });
    }

    // Meta description analysis
    if (seoData.metaDescription.length >= 140 && seoData.metaDescription.length <= 160) {
      analysis.checks.push({ name: 'Meta Description', status: 'good', message: 'Meta description is optimal', points: 15 });
      analysis.score += 15;
    } else if (seoData.metaDescription.length > 0) {
      analysis.checks.push({ name: 'Meta Description', status: 'warning', message: 'Meta description needs optimization', points: 8 });
      analysis.score += 8;
    } else {
      analysis.checks.push({ name: 'Meta Description', status: 'error', message: 'Meta description is missing', points: 0 });
    }

    // Focus keyword analysis
    if (seoData.focusKeyword) {
      const keyword = seoData.focusKeyword.toLowerCase();
      const inName = tag.name.toLowerCase().includes(keyword);
      const inDescription = tag.description.toLowerCase().includes(keyword);
      const inMeta = seoData.metaDescription.toLowerCase().includes(keyword);

      if (inName && inDescription && inMeta) {
        analysis.checks.push({ name: 'Focus Keyword', status: 'good', message: 'Focus keyword well distributed', points: 20 });
        analysis.score += 20;
      } else if (inName || inDescription) {
        analysis.checks.push({ name: 'Focus Keyword', status: 'warning', message: 'Focus keyword partially optimized', points: 10 });
        analysis.score += 10;
      } else {
        analysis.checks.push({ name: 'Focus Keyword', status: 'error', message: 'Focus keyword not found', points: 0 });
      }
    }

    return analysis;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'warning': return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case 'error': return <XCircle className="w-4 h-4 text-red-600" />;
      default: return null;
    }
  };

  const seoAnalysis = analyzeTagSEO();
  const scorePercentage = Math.round((seoAnalysis.score / 60) * 100);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-600" />
          <CardTitle>Tag SEO Analysis</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">SEO Score</span>
            <span className={`text-lg font-bold ${scorePercentage >= 80 ? 'text-green-600' : scorePercentage >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
              {scorePercentage}%
            </span>
          </div>
          <Progress value={scorePercentage} className="h-2" />
          <div className="space-y-2">
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
        </div>
      </CardContent>
    </Card>
  );
};
