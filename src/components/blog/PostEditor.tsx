
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, X, Eye } from "lucide-react";
import { BlogPost } from "@/data/blogData";
import { AdvancedSEOAnalyzer } from "./AdvancedSEOAnalyzer";
import { PostScheduler } from "./PostScheduler";
import { PostBasicInfo } from "./forms/PostBasicInfo";
import { PostContent } from "./forms/PostContent";
import { PostSEOForm } from "./forms/PostSEOForm";
import { PostVideoSEO } from "./forms/PostVideoSEO";
import { PostSocialForm } from "./forms/PostSocialForm";
import { PostAdvancedSettings } from "./forms/PostAdvancedSettings";
import { useToast } from "@/hooks/use-toast";

interface PostEditorProps {
  post?: BlogPost | null;
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
  onPreview?: (post: BlogPost) => void;
}

export const PostEditor = ({ post, onSave, onCancel, onPreview }: PostEditorProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "",
    publishDate: new Date().toISOString().split('T')[0],
    publishTime: "09:00",
    scheduled: false,
    autoPublish: false,
    category: "",
    tags: [],
    image: "",
    imageAlt: "",
    imageTitle: "",
    readTime: "1 min read",
    published: false,
    featured: false,
    seoTitle: "",
    metaTitle: "",
    metaDescription: "",
    focusKeyword: "",
    keywords: "",
    canonicalUrl: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    twitterTitle: "",
    twitterDescription: "",
    twitterImage: "",
    noIndex: false,
    noFollow: false,
    schema: "",
    videoSEO: {
      title: "",
      description: "",
      duration: "",
      uploadDate: "",
      thumbnailUrl: "",
      transcript: ""
    }
  });

  // Initialize form data when post prop changes
  useEffect(() => {
    if (post) {
      setFormData({
        ...post,
        videoSEO: {
          title: "",
          description: "",
          duration: "",
          uploadDate: "",
          thumbnailUrl: "",
          transcript: "",
          ...post.videoSEO
        }
      });
    } else {
      // Reset form for new post
      setFormData({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        author: "",
        publishDate: new Date().toISOString().split('T')[0],
        publishTime: "09:00",
        scheduled: false,
        autoPublish: false,
        category: "",
        tags: [],
        image: "",
        imageAlt: "",
        imageTitle: "",
        readTime: "1 min read",
        published: false,
        featured: false,
        seoTitle: "",
        metaTitle: "",
        metaDescription: "",
        focusKeyword: "",
        keywords: "",
        canonicalUrl: "",
        ogTitle: "",
        ogDescription: "",
        ogImage: "",
        twitterTitle: "",
        twitterDescription: "",
        twitterImage: "",
        noIndex: false,
        noFollow: false,
        schema: "",
        videoSEO: {
          title: "",
          description: "",
          duration: "",
          uploadDate: "",
          thumbnailUrl: "",
          transcript: ""
        }
      });
    }
  }, [post]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (title: string) => {
    const newSlug = generateSlug(title);
    setFormData(prev => ({
      ...prev,
      title,
      slug: newSlug,
      seoTitle: title.length > 60 ? title.substring(0, 57) + '...' : title,
      metaTitle: title
    }));
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContentChange = (content: string) => {
    const wordCount = content.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(word => word.length > 0).length;
    const readTime = Math.ceil(wordCount / 250);
    
    setFormData(prev => ({
      ...prev,
      content,
      readTime: `${readTime} min read`
    }));
  };

  const handleScheduleChange = (schedule: {
    publishDate: string;
    publishTime: string;
    scheduled: boolean;
    autoPublish: boolean;
  }) => {
    setFormData(prev => ({
      ...prev,
      publishDate: schedule.publishDate,
      publishTime: schedule.publishTime,
      scheduled: schedule.scheduled,
      autoPublish: schedule.autoPublish
    }));
  };

  const handleTagsChange = (tagsString: string) => {
    const tags = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData(prev => ({ ...prev, tags }));
  };

  const handleSave = () => {
    if (!formData.title || !formData.content) {
      toast({
        title: "Error",
        description: "Title and content are required",
        variant: "destructive"
      });
      return;
    }

    if (!formData.author) {
      toast({
        title: "Error",
        description: "Author is required",
        variant: "destructive"
      });
      return;
    }

    if (!formData.category) {
      toast({
        title: "Error",
        description: "Category is required",
        variant: "destructive"
      });
      return;
    }

    // Calculate read time if not set
    const wordCount = formData.content.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(word => word.length > 0).length;
    const readTime = Math.ceil(wordCount / 250);

    const postData: BlogPost = {
      id: post?.id || Date.now().toString(),
      title: formData.title || "",
      slug: formData.slug || generateSlug(formData.title || ""),
      excerpt: formData.excerpt || "",
      content: formData.content || "",
      author: formData.author || "",
      publishDate: formData.publishDate || new Date().toISOString().split('T')[0],
      publishTime: formData.publishTime,
      scheduled: formData.scheduled,
      autoPublish: formData.autoPublish,
      category: formData.category || "",
      tags: formData.tags || [],
      image: formData.image || "",
      imageAlt: formData.imageAlt,
      imageTitle: formData.imageTitle,
      readTime: `${readTime} min read`,
      published: formData.published || false,
      featured: formData.featured,
      seoTitle: formData.seoTitle,
      metaTitle: formData.metaTitle,
      metaDescription: formData.metaDescription,
      focusKeyword: formData.focusKeyword,
      keywords: formData.keywords,
      canonicalUrl: formData.canonicalUrl,
      ogTitle: formData.ogTitle,
      ogDescription: formData.ogDescription,
      ogImage: formData.ogImage,
      twitterTitle: formData.twitterTitle,
      twitterDescription: formData.twitterDescription,
      twitterImage: formData.twitterImage,
      noIndex: formData.noIndex,
      noFollow: formData.noFollow,
      schema: formData.schema,
      videoSEO: formData.videoSEO
    };

    onSave(postData);
  };

  const handlePreview = () => {
    if (!formData.title || !formData.content) {
      toast({
        title: "Error",
        description: "Title and content are required for preview",
        variant: "destructive"
      });
      return;
    }

    const wordCount = formData.content.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(word => word.length > 0).length;
    const readTime = Math.ceil(wordCount / 250);

    const previewData: BlogPost = {
      id: post?.id || "preview",
      title: formData.title || "",
      slug: formData.slug || generateSlug(formData.title || ""),
      excerpt: formData.excerpt || "",
      content: formData.content || "",
      author: formData.author || "Preview Author",
      publishDate: formData.publishDate || new Date().toISOString().split('T')[0],
      publishTime: formData.publishTime,
      scheduled: formData.scheduled,
      autoPublish: formData.autoPublish,
      category: formData.category || "",
      tags: formData.tags || [],
      image: formData.image || "",
      imageAlt: formData.imageAlt,
      imageTitle: formData.imageTitle,
      readTime: `${readTime} min read`,
      published: true, // Always show as published in preview
      featured: formData.featured,
      seoTitle: formData.seoTitle,
      metaTitle: formData.metaTitle,
      metaDescription: formData.metaDescription,
      focusKeyword: formData.focusKeyword,
      keywords: formData.keywords,
      canonicalUrl: formData.canonicalUrl,
      ogTitle: formData.ogTitle,
      ogDescription: formData.ogDescription,
      ogImage: formData.ogImage,
      twitterTitle: formData.twitterTitle,
      twitterDescription: formData.twitterDescription,
      twitterImage: formData.twitterImage,
      noIndex: formData.noIndex,
      noFollow: formData.noFollow,
      schema: formData.schema,
      videoSEO: formData.videoSEO
    };

    onPreview?.(previewData);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{post ? "Edit Post" : "Create New Post"}</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handlePreview}>
            <Eye size={16} className="mr-2" />
            Preview
          </Button>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
            <Save size={16} className="mr-2" />
            {post ? "Update Post" : "Create Post"}
          </Button>
          <Button variant="outline" onClick={onCancel}>
            <X size={16} className="mr-2" />
            Cancel
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="content" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-6">
              <PostBasicInfo
                formData={{
                  title: formData.title || "",
                  slug: formData.slug || "",
                  excerpt: formData.excerpt || "",
                  author: formData.author || "",
                  category: formData.category || "",
                  tags: formData.tags || [],
                  image: formData.image || "",
                  imageAlt: formData.imageAlt || "",
                  imageTitle: formData.imageTitle || ""
                }}
                onTitleChange={handleTitleChange}
                onFieldChange={updateFormData}
                onTagsChange={handleTagsChange}
              />

              <PostContent
                content={formData.content || ""}
                onChange={handleContentChange}
              />
            </TabsContent>

            <TabsContent value="seo" className="space-y-6">
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
                onFieldChange={updateFormData}
              />

              <PostVideoSEO
                videoSEO={formData.videoSEO || {
                  title: "",
                  description: "",
                  duration: "",
                  thumbnailUrl: "",
                  transcript: ""
                }}
                onFieldChange={updateFormData}
              />
            </TabsContent>

            <TabsContent value="social" className="space-y-6">
              <PostSocialForm
                formData={{
                  ogTitle: formData.ogTitle || "",
                  ogDescription: formData.ogDescription || "",
                  twitterTitle: formData.twitterTitle || "",
                  twitterDescription: formData.twitterDescription || ""
                }}
                onFieldChange={updateFormData}
              />
            </TabsContent>

            <TabsContent value="schedule" className="space-y-6">
              <PostScheduler
                publishDate={formData.publishDate}
                publishTime={formData.publishTime}
                scheduled={formData.scheduled}
                autoPublish={formData.autoPublish}
                onScheduleChange={handleScheduleChange}
              />
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <PostAdvancedSettings
                formData={{
                  schema: formData.schema || "",
                  published: formData.published || false,
                  featured: formData.featured || false
                }}
                onFieldChange={updateFormData}
              />
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          {formData.title && formData.content && (
            <AdvancedSEOAnalyzer
              title={formData.title}
              content={formData.content}
              metaDescription={formData.metaDescription || ""}
              focusKeyword={formData.focusKeyword}
              excerpt={formData.excerpt || ""}
              slug={formData.slug || ""}
              image={formData.image}
            />
          )}
        </div>
      </div>
    </div>
  );
};
