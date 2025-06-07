
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface PostSocialFormProps {
  formData: {
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  onFieldChange: (field: string, value: any) => void;
}

export const PostSocialForm = ({ formData, onFieldChange }: PostSocialFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Media Optimization</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <h4 className="font-semibold">Open Graph (Facebook)</h4>
          <div className="space-y-2">
            <Label htmlFor="ogTitle">OG Title</Label>
            <Input
              id="ogTitle"
              value={formData.ogTitle}
              onChange={(e) => onFieldChange('ogTitle', e.target.value)}
              placeholder="Facebook share title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ogDescription">OG Description</Label>
            <Textarea
              id="ogDescription"
              value={formData.ogDescription}
              onChange={(e) => onFieldChange('ogDescription', e.target.value)}
              placeholder="Facebook share description"
              rows={2}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">Twitter</h4>
          <div className="space-y-2">
            <Label htmlFor="twitterTitle">Twitter Title</Label>
            <Input
              id="twitterTitle"
              value={formData.twitterTitle}
              onChange={(e) => onFieldChange('twitterTitle', e.target.value)}
              placeholder="Twitter share title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="twitterDescription">Twitter Description</Label>
            <Textarea
              id="twitterDescription"
              value={formData.twitterDescription}
              onChange={(e) => onFieldChange('twitterDescription', e.target.value)}
              placeholder="Twitter share description"
              rows={2}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
