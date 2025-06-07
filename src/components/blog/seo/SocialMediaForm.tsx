
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface SocialMediaFormProps {
  seoData: {
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export const SocialMediaForm = ({ seoData, onInputChange }: SocialMediaFormProps) => {
  return (
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
              onChange={(e) => onInputChange('ogTitle', e.target.value)}
              placeholder="Facebook title"
            />
          </div>
          <div className="space-y-2">
            <Label>OG Description</Label>
            <Textarea
              value={seoData.ogDescription}
              onChange={(e) => onInputChange('ogDescription', e.target.value)}
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
              onChange={(e) => onInputChange('twitterTitle', e.target.value)}
              placeholder="Twitter title"
            />
          </div>
          <div className="space-y-2">
            <Label>Twitter Description</Label>
            <Textarea
              value={seoData.twitterDescription}
              onChange={(e) => onInputChange('twitterDescription', e.target.value)}
              placeholder="Twitter description"
              rows={2}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
