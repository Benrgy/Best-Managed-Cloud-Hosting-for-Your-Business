
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface PostSEOFormProps {
  formData: {
    focusKeyword: string;
    seoTitle: string;
    metaDescription: string;
    keywords: string;
    canonicalUrl: string;
    noIndex: boolean;
    noFollow: boolean;
    metaTitle: string;
  };
  onFieldChange: (field: string, value: any) => void;
}

export const PostSEOForm = ({ formData, onFieldChange }: PostSEOFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>SEO Optimization</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="focusKeyword">Focus Keyword</Label>
          <Input
            id="focusKeyword"
            value={formData.focusKeyword}
            onChange={(e) => onFieldChange('focusKeyword', e.target.value)}
            placeholder="Primary keyword for this post"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="seoTitle">SEO Title</Label>
          <Input
            id="seoTitle"
            value={formData.seoTitle}
            onChange={(e) => onFieldChange('seoTitle', e.target.value)}
            placeholder="SEO optimized title (50-60 characters)"
          />
          <p className="text-sm text-gray-500">
            {formData.seoTitle?.length || 0}/60 characters
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="metaDescription">Meta Description</Label>
          <Textarea
            id="metaDescription"
            value={formData.metaDescription}
            onChange={(e) => onFieldChange('metaDescription', e.target.value)}
            placeholder="SEO meta description (150-160 characters)"
            rows={3}
          />
          <p className="text-sm text-gray-500">
            {formData.metaDescription?.length || 0}/160 characters
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="keywords">SEO Keywords</Label>
          <Input
            id="keywords"
            value={formData.keywords}
            onChange={(e) => onFieldChange('keywords', e.target.value)}
            placeholder="keyword1, keyword2, keyword3"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="canonicalUrl">Canonical URL</Label>
          <Input
            id="canonicalUrl"
            value={formData.canonicalUrl}
            onChange={(e) => onFieldChange('canonicalUrl', e.target.value)}
            placeholder="https://example.com/canonical-url"
          />
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Switch
              id="noIndex"
              checked={formData.noIndex}
              onCheckedChange={(checked) => onFieldChange('noIndex', checked)}
            />
            <Label htmlFor="noIndex">No Index</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="noFollow"
              checked={formData.noFollow}
              onCheckedChange={(checked) => onFieldChange('noFollow', checked)}
            />
            <Label htmlFor="noFollow">No Follow</Label>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="metaTitle">Meta Title (Alternative)</Label>
          <Input
            id="metaTitle"
            value={formData.metaTitle}
            onChange={(e) => onFieldChange('metaTitle', e.target.value.length > 60 ? e.target.value.substring(0, 57) + '...' : e.target.value)}
            placeholder="Alternative meta title if different from SEO title"
          />
        </div>
      </CardContent>
    </Card>
  );
};
