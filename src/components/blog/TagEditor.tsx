
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import { BlogTag } from "@/data/blogData";

interface TagEditorProps {
  tag: BlogTag;
  onSave: (tag: Partial<BlogTag>) => void;
  onCancel: () => void;
}

export const TagEditor = ({ tag, onSave, onCancel }: TagEditorProps) => {
  const [formData, setFormData] = useState<Partial<BlogTag>>(tag);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="tagName">Name *</Label>
        <Input
          id="tagName"
          value={formData.name || ""}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Tag name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tagDescription">Description</Label>
        <Textarea
          id="tagDescription"
          value={formData.description || ""}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Tag description"
          rows={2}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tagMetaDescription">Meta Description (SEO)</Label>
        <Textarea
          id="tagMetaDescription"
          value={formData.metaDescription || ""}
          onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
          placeholder="SEO meta description for tag page"
          rows={2}
        />
        <p className="text-xs text-gray-500">{(formData.metaDescription || "").length}/160 characters</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="tagKeywords">Keywords (SEO)</Label>
        <Input
          id="tagKeywords"
          value={formData.keywords || ""}
          onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
          placeholder="SEO keywords for tag (comma separated)"
        />
      </div>

      <div className="flex gap-2">
        <Button onClick={() => onSave(formData)}>
          <Save size={16} className="mr-2" />
          Save Tag
        </Button>
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
