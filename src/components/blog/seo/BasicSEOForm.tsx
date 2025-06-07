
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface BasicSEOFormProps {
  seoData: {
    metaTitle: string;
    metaDescription: string;
    focusKeyword: string;
    keywords: string;
    canonicalUrl: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export const BasicSEOForm = ({ seoData, onInputChange }: BasicSEOFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic SEO Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Meta Title</Label>
          <Input
            value={seoData.metaTitle}
            onChange={(e) => onInputChange('metaTitle', e.target.value)}
            placeholder="Tag meta title"
          />
          <p className="text-xs text-gray-500">{seoData.metaTitle.length}/60 characters</p>
        </div>

        <div className="space-y-2">
          <Label>Meta Description</Label>
          <Textarea
            value={seoData.metaDescription}
            onChange={(e) => onInputChange('metaDescription', e.target.value)}
            placeholder="Tag meta description"
            rows={3}
          />
          <p className="text-xs text-gray-500">{seoData.metaDescription.length}/160 characters</p>
        </div>

        <div className="space-y-2">
          <Label>Focus Keyword</Label>
          <Input
            value={seoData.focusKeyword}
            onChange={(e) => onInputChange('focusKeyword', e.target.value)}
            placeholder="Primary keyword for this tag"
          />
        </div>

        <div className="space-y-2">
          <Label>Keywords</Label>
          <Input
            value={seoData.keywords}
            onChange={(e) => onInputChange('keywords', e.target.value)}
            placeholder="keyword1, keyword2, keyword3"
          />
        </div>

        <div className="space-y-2">
          <Label>Canonical URL</Label>
          <Input
            value={seoData.canonicalUrl}
            onChange={(e) => onInputChange('canonicalUrl', e.target.value)}
            placeholder="https://example.com/tag/name"
          />
        </div>
      </CardContent>
    </Card>
  );
};
