
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/data/blogData";
import { PostBasicInfo } from "./forms/PostBasicInfo";
import { PostContent } from "./forms/PostContent";
import { PostSEOForm } from "./forms/PostSEOForm";
import { PostSocialForm } from "./forms/PostSocialForm";
import { PostVideoSEO } from "./forms/PostVideoSEO";
import { PostAdvancedSettings } from "./forms/PostAdvancedSettings";

interface PostEditorProps {
  post: BlogPost | null;
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
  onPreview: (post: BlogPost) => void;
}

export const PostEditor = ({ post, onSave, onCancel, onPreview }: PostEditorProps) => {
  const [formData, setFormData] = useState<BlogPost>(
    post || {
      id: Date.now().toString(),
      title: "",
      slug: "",
      author: "Your Name",
      publishDate: new Date().toISOString(),
      category: "",
      tags: [],
      excerpt: "",
      content: "",
      image: "",
      imageAlt: "",
      imageTitle: "",
      readTime: "5 min read",
      published: false,
      featured: false,
      focusKeyword: "",
      seoTitle: "",
      metaTitle: "",
      metaDescription: "",
      keywords: "",
      canonicalUrl: "",
      noIndex: false,
      noFollow: false,
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

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setFormData(prev => ({ ...prev, publishDate: date.toISOString() }));
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
            formData={{
              title: formData.title,
              slug: formData.slug,
              excerpt: formData.excerpt,
              author: formData.author,
              category: formData.category,
              tags: formData.tags,
              image: formData.image,
              imageAlt: formData.imageAlt || "",
              imageTitle: formData.imageTitle || ""
            }}
            onFieldChange={handleFieldChange}
            onDateChange={handleDateChange}
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
            formData={{
              focusKeyword: formData.focusKeyword || "",
              seoTitle: formData.seoTitle || "",
              metaDescription: formData.metaDescription || "",
              keywords: formData.keywords || "",
              canonicalUrl: formData.canonicalUrl || "",
              noIndex: formData.noIndex || false,
              noFollow: formData.noFollow || false,
              metaTitle: formData.metaTitle || ""
            }}
            onFieldChange={handleFieldChange}
          />

          <PostSocialForm
            formData={{
              ogTitle: formData.ogTitle || "",
              ogDescription: formData.ogDescription || "",
              twitterTitle: formData.twitterTitle || "",
              twitterDescription: formData.twitterDescription || ""
            }}
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
            onFieldChange={handleVideoSEOChange}
          />

          <PostAdvancedSettings
            formData={{
              schema: formData.schema || "",
              published: formData.published || false,
              featured: formData.featured || false
            }}
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
