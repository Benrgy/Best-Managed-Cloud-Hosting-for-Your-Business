
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface PostAdvancedSettingsProps {
  formData: {
    schema: string;
    published: boolean;
    featured: boolean;
  };
  onFieldChange: (field: string, value: any) => void;
}

export const PostAdvancedSettings = ({ formData, onFieldChange }: PostAdvancedSettingsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Advanced Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="schema">Schema Markup (JSON-LD)</Label>
          <Textarea
            id="schema"
            value={formData.schema}
            onChange={(e) => onFieldChange('schema', e.target.value)}
            placeholder="Custom schema markup in JSON-LD format"
            rows={8}
            className="font-mono"
          />
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Switch
              id="published"
              checked={formData.published}
              onCheckedChange={(checked) => onFieldChange('published', checked)}
            />
            <Label htmlFor="published">Published</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="featured"
              checked={formData.featured}
              onCheckedChange={(checked) => onFieldChange('featured', checked)}
            />
            <Label htmlFor="featured">Featured</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
