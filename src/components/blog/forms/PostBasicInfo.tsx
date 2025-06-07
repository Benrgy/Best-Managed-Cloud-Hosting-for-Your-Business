
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogCategories } from "@/data/blogData";

interface PostBasicInfoProps {
  formData: {
    title: string;
    slug: string;
    excerpt: string;
    author: string;
    category: string;
    tags: string[];
    image: string;
    imageAlt: string;
    imageTitle: string;
  };
  onFieldChange: (field: string, value: any) => void;
  onDateChange: (date: Date | undefined) => void;
  categories: { label: string; value: string; }[];
  tags: { label: string; value: string; }[];
}

export const PostBasicInfo = ({ 
  formData, 
  onFieldChange, 
  onDateChange,
  categories,
  tags
}: PostBasicInfoProps) => {
  const handleTitleChange = (title: string) => {
    onFieldChange('title', title);
  };

  const handleTagsChange = (tagsString: string) => {
    const tagsArray = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    onFieldChange('tags', tagsArray);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Enter post title"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="slug">URL Slug</Label>
          <Input
            id="slug"
            value={formData.slug}
            onChange={(e) => onFieldChange('slug', e.target.value)}
            placeholder="url-friendly-slug"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            value={formData.excerpt}
            onChange={(e) => onFieldChange('excerpt', e.target.value)}
            placeholder="Brief description of the post"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="author">Author *</Label>
            <Input
              id="author"
              value={formData.author}
              onChange={(e) => onFieldChange('author', e.target.value)}
              placeholder="Author name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category *</Label>
            <Select value={formData.category} onValueChange={(value) => onFieldChange('category', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {blogCategories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tags">Tags (comma-separated)</Label>
          <Input
            id="tags"
            value={formData.tags?.join(', ')}
            onChange={(e) => handleTagsChange(e.target.value)}
            placeholder="tag1, tag2, tag3"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="image">Featured Image URL</Label>
          <Input
            id="image"
            value={formData.image}
            onChange={(e) => onFieldChange('image', e.target.value)}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="imageAlt">Image Alt Text (SEO)</Label>
          <Input
            id="imageAlt"
            value={formData.imageAlt}
            onChange={(e) => onFieldChange('imageAlt', e.target.value)}
            placeholder="Descriptive alt text for featured image"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="imageTitle">Image Title</Label>
          <Input
            id="imageTitle"
            value={formData.imageTitle}
            onChange={(e) => onFieldChange('imageTitle', e.target.value)}
            placeholder="Image title attribute"
          />
        </div>
      </CardContent>
    </Card>
  );
};
