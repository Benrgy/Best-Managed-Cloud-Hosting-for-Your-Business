
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import { BlogCategory } from "@/data/blogData";

interface CategoryEditorProps {
  category: BlogCategory;
  onSave: (category: Partial<BlogCategory>) => void;
  onCancel: () => void;
}

export const CategoryEditor = ({ category, onSave, onCancel }: CategoryEditorProps) => {
  const [formData, setFormData] = useState<Partial<BlogCategory>>(category);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="categoryName">Name *</Label>
        <Input
          id="categoryName"
          value={formData.name || ""}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Category name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="categoryDescription">Description</Label>
        <Textarea
          id="categoryDescription"
          value={formData.description || ""}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Category description"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="categoryMetaDescription">Meta Description (SEO)</Label>
        <Textarea
          id="categoryMetaDescription"
          value={formData.metaDescription || ""}
          onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
          placeholder="SEO meta description for category page"
          rows={2}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="categoryKeywords">Keywords</Label>
        <Input
          id="categoryKeywords"
          value={formData.keywords || ""}
          onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
          placeholder="SEO keywords for category"
        />
      </div>

      <div className="flex gap-2">
        <Button onClick={() => onSave(formData)}>
          <Save size={16} className="mr-2" />
          Save Category
        </Button>
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
