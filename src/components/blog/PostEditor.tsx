import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CategorySelect } from "./CategorySelect";
import { TagSelect } from "./TagSelect";
import { PostContent } from "./forms/PostContent";
import { PostSEOForm } from "./forms/PostSEOForm";
import { PostSocialForm } from "./forms/PostSocialForm";
import { PostVideoSEO } from "./forms/PostVideoSEO";
import { PostAdvancedSettings } from "./forms/PostAdvancedSettings";
import { BlogPost, BlogCategory, BlogTag } from "@/data/blogData";

interface PostEditorProps {
  post: BlogPost | null;
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
  onPreview: (post: BlogPost) => void;
}

interface VideoSEO {
  title?: string;
  description?: string;
  duration?: string;
  thumbnailUrl?: string;
  transcript?: string;
}

export const PostEditor = ({ post, onSave, onCancel, onPreview }: PostEditorProps) => {
  const [formData, setFormData] = useState<BlogPost>(
    post || {
      id: Date.now().toString(),
      title: "",
      slug: "",
      author: "Your Name",
      publishDate: new Date(),
      category: "",
      tags: [],
      excerpt: "",
      content: "",
      imageUrl: "",
      published: false,
      featured: false,
      metaTitle: "",
      metaDescription: "",
      keywords: "",
      ogTitle: "",
      ogDescription: "",
      twitterTitle: "",
      twitterDescription: "",
      schema: "",
      videoSEO: {
        title: '',
        description: '',
        duration: '',
        thumbnailUrl: '',
        transcript: ''
      }
    }
  );
  const [date, setDate] = useState<Date | undefined>(formData.publishDate);
  const categories = [
    { label: "Technology", value: "technology" },
    { label: "Travel", value: "travel" },
    { label: "Food", value: "food" },
  ];
  const tags = [
    { label: "React", value: "react" },
    { label: "Next.js", value: "nextjs" },
    { label: "JavaScript", value: "javascript" },
  ];

  const handleFieldChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCategoryChange = (category: string) => {
    setFormData(prev => ({ ...prev, category }));
  };

  const handleTagChange = (tags: string[]) => {
    setFormData(prev => ({ ...prev, tags }));
  };

  const handleDateChange = (date: Date | undefined) => {
    setDate(date);
    if (date) {
      setFormData(prev => ({ ...prev, publishDate: date }));
    }
  };

  const handleVideoSEOChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      videoSEO: {
        ...prev.videoSEO,
        [field]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) {
      alert("Title is required");
      return;
    }
    if (!formData.category) {
      alert("Category is required");
      return;
    }
    const slug = formData.title.toLowerCase().replace(/ /g, "-");
    const postData: BlogPost = { ...formData, slug };
    onSave(postData);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{post ? "Edit Post" : "Create New Post"}</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={() => onPreview(formData)}>
            Preview
          </Button>
          <Button onClick={handleSubmit}>
            {post ? "Update" : "Publish"}
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <PostBasicInfo
            formData={formData}
            onFieldChange={handleFieldChange}
            categories={categories}
            tags={tags}
          />

          <PostContent
            content={formData.content}
            onChange={(content) => handleFieldChange('content', content)}
          />
        </div>

        <div className="space-y-6">
          <PostSEOForm
            formData={formData}
            onFieldChange={handleFieldChange}
          />

          <PostSocialForm
            formData={formData}
            onFieldChange={handleFieldChange}
          />

          <PostVideoSEO
            videoSEO={{
              title: formData.videoSEO?.title || '',
              description: formData.videoSEO?.description || '',
              duration: formData.videoSEO?.duration || '',
              thumbnailUrl: formData.videoSEO?.thumbnailUrl || '',
              transcript: formData.videoSEO?.transcript || ''
            }}
            onChange={handleVideoSEOChange}
          />

          <PostAdvancedSettings
            formData={formData}
            onFieldChange={handleFieldChange}
          />

          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="destructive">Delete Post</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

interface PostBasicInfoProps {
  formData: BlogPost;
  onFieldChange: (field: string, value: any) => void;
  categories: { label: string; value: string; }[];
  tags: { label: string; value: string; }[];
}

const PostBasicInfo = ({ formData, onFieldChange, categories, tags }: PostBasicInfoProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => onFieldChange('title', e.target.value)}
            placeholder="Post title"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            value={formData.excerpt}
            onChange={(e) => onFieldChange('excerpt', e.target.value)}
            placeholder="Short description of the post"
            rows={2}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            value={formData.author}
            onChange={(e) => onFieldChange('author', e.target.value)}
            placeholder="Author name"
          />
        </div>

        <div className="space-y-2">
          <Label>Publish Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !formData.publishDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.publishDate ? format(formData.publishDate, "PPP") : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={formData.publishDate}
                onSelect={(date) => date && onFieldChange('publishDate', date)}
                disabled={(date) =>
                  date > new Date()
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <CategorySelect
            categories={categories}
            selectedCategory={formData.category}
            onSelectCategory={(category) => onFieldChange('category', category)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tags">Tags</Label>
          <TagSelect
            tags={tags}
            selectedTags={formData.tags}
            onSelectTags={(tags) => onFieldChange('tags', tags)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            id="imageUrl"
            value={formData.imageUrl}
            onChange={(e) => onFieldChange('imageUrl', e.target.value)}
            placeholder="Featured image URL"
          />
        </div>
      </CardContent>
    </Card>
  );
};
