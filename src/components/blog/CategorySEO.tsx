import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Target, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { BlogCategory } from "@/data/blogData";

interface CategorySEOProps {
  category: BlogCategory;
  onUpdate: (updates: Partial<BlogCategory>) => void;
}

export const CategorySEO = ({ category, onUpdate }: CategorySEOProps) => {
  const [seoData, setSeoData] = useState({
    metaTitle: category.metaTitle || category.name,
    metaDescription: category.metaDescription || "",
    keywords: category.keywords || "",
    focusKeyword: category.focusKeyword || "",
    canonicalUrl: category.canonicalUrl || "",
    ogTitle: category.ogTitle || category.name,
    ogDescription: category.ogDescription || category.description,
    twitterTitle: category.twitterTitle || category.name,
    twitterDescription: category.twitterDescription || category.description,
    noIndex: category.noIndex || false,
    noFollow: category.noFollow || false,
    schema: category.schema || ""
  });

  const analyzeCategorySEO = () => {
    const analysis = {
      score: 0,
      checks: [] as Array<{ name: string; status: 'good' | 'warning' | 'error'; message: string; points: number }>
    };

    // Category name analysis
    if (category.name.length >= 3 && category.name.length <= 50) {
      analysis.checks.push({ name: 'Category Name', status: 'good', message: 'Category name length is optimal', points: 10 });
      analysis.score += 10;
    } else {
      analysis.checks.push({ name: 'Category Name', status: 'warning', message: 'Category name could be optimized', points: 5 });
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
      const inName = category.name.toLowerCase().includes(keyword);
      const inDescription = category.description.toLowerCase().includes(keyword);
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

    // Schema markup
    if (seoData.schema) {
      analysis.checks.push({ name: 'Schema Markup', status: 'good', message: 'Custom schema markup added', points: 10 });
      analysis.score += 10;
    } else {
      analysis.checks.push({ name: 'Schema Markup', status: 'warning', message: 'No custom schema markup', points: 5 });
      analysis.score += 5;
    }

    return analysis;
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    const updated = { ...seoData, [field]: value };
    setSeoData(updated);
    onUpdate(updated);
  };

  const seoAnalysis = analyzeCategorySEO();
  const scorePercentage = Math.round((seoAnalysis.score / 80) * 100);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'warning': return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case 'error': return <XCircle className="w-4 h-4 text-red-600" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            <CardTitle>Category SEO Analysis</CardTitle>
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

      <Tabs defaultValue="basic" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic SEO</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Basic SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Meta Title</Label>
                <Input
                  value={seoData.metaTitle}
                  onChange={(e) => handleInputChange('metaTitle', e.target.value)}
                  placeholder="Category meta title"
                />
                <p className="text-xs text-gray-500">{seoData.metaTitle.length}/60 characters</p>
              </div>

              <div className="space-y-2">
                <Label>Meta Description</Label>
                <Textarea
                  value={seoData.metaDescription}
                  onChange={(e) => handleInputChange('metaDescription', e.target.value)}
                  placeholder="Category meta description"
                  rows={3}
                />
                <p className="text-xs text-gray-500">{seoData.metaDescription.length}/160 characters</p>
              </div>

              <div className="space-y-2">
                <Label>Focus Keyword</Label>
                <Input
                  value={seoData.focusKeyword}
                  onChange={(e) => handleInputChange('focusKeyword', e.target.value)}
                  placeholder="Primary keyword for this category"
                />
              </div>

              <div className="space-y-2">
                <Label>Keywords</Label>
                <Input
                  value={seoData.keywords}
                  onChange={(e) => handleInputChange('keywords', e.target.value)}
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>

              <div className="space-y-2">
                <Label>Canonical URL</Label>
                <Input
                  value={seoData.canonicalUrl}
                  onChange={(e) => handleInputChange('canonicalUrl', e.target.value)}
                  placeholder="https://example.com/category/name"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Optimization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h4 className="font-semibold">Open Graph (Facebook)</h4>
                <div className="space-y-2">
                  <Label>OG Title</Label>
                  <Input
                    value={seoData.ogTitle}
                    onChange={(e) => handleInputChange('ogTitle', e.target.value)}
                    placeholder="Facebook title"
                  />
                </div>
                <div className="space-y-2">
                  <Label>OG Description</Label>
                  <Textarea
                    value={seoData.ogDescription}
                    onChange={(e) => handleInputChange('ogDescription', e.target.value)}
                    placeholder="Facebook description"
                    rows={2}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Twitter</h4>
                <div className="space-y-2">
                  <Label>Twitter Title</Label>
                  <Input
                    value={seoData.twitterTitle}
                    onChange={(e) => handleInputChange('twitterTitle', e.target.value)}
                    placeholder="Twitter title"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Twitter Description</Label>
                  <Textarea
                    value={seoData.twitterDescription}
                    onChange={(e) => handleInputChange('twitterDescription', e.target.value)}
                    placeholder="Twitter description"
                    rows={2}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Schema Markup (JSON-LD)</Label>
                <Textarea
                  value={seoData.schema}
                  onChange={(e) => handleInputChange('schema', e.target.value)}
                  placeholder="Custom schema markup for category"
                  rows={6}
                  className="font-mono"
                />
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={seoData.noIndex}
                    onCheckedChange={(checked) => handleInputChange('noIndex', checked)}
                  />
                  <Label>No Index</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={seoData.noFollow}
                    onCheckedChange={(checked) => handleInputChange('noFollow', checked)}
                  />
                  <Label>No Follow</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
