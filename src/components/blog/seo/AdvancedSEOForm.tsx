
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface AdvancedSEOFormProps {
  seoData: {
    schema: string;
    noIndex: boolean;
    noFollow: boolean;
  };
  onInputChange: (field: string, value: string | boolean) => void;
}

export const AdvancedSEOForm = ({ seoData, onInputChange }: AdvancedSEOFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Advanced Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Schema Markup (JSON-LD)</Label>
          <Textarea
            value={seoData.schema}
            onChange={(e) => onInputChange('schema', e.target.value)}
            placeholder="Custom schema markup for tag"
            rows={6}
            className="font-mono"
          />
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Switch
              checked={seoData.noIndex}
              onCheckedChange={(checked) => onInputChange('noIndex', checked)}
            />
            <Label>No Index</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              checked={seoData.noFollow}
              onCheckedChange={(checked) => onInputChange('noFollow', checked)}
            />
            <Label>No Follow</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
