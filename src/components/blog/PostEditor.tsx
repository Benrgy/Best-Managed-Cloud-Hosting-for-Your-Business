import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, X, Eye, Code, Calendar } from "lucide-react";
import { BlogPost, blogCategories } from "@/data/blogData";
import { AdvancedSEOAnalyzer } from "./AdvancedSEOAnalyzer";
import { RichTextEditor } from "./RichTextEditor";
import { HTMLEditor } from "./HTMLEditor";
import { PostScheduler } from "./PostScheduler";
import { useToast } from "@/hooks/use-toast";

interface PostEditorProps {
  post?: BlogPost | null;
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
  onPreview?: (post: BlogPost) => void;
}

export const PostEditor = ({ post, onSave, onCancel, onPreview }: PostEditorProps) => {
  const { toast } = useToast();
  const [editorMode, setEditorMode] = useState<'visual' | 'html'>('visual');
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
    readTime: 1,
    published: false,
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
      thumbnailUrl: ""
    },
    ...post
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
      seoTitle: title.length > 60 ? title.substring(0, 57) + '...' : title,
      metaTitle: title
    });
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      metaTitle: field === 'title' && !prev.metaTitle ? value : prev.metaTitle
    }));
  };

  const handleImageSEOChange = (field: 'imageAlt' | 'imageTitle', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleVideoSEOChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      videoSEO: {
        ...prev.videoSEO,
        [field]: value
      }
    }));
  };

  const handleMetaTitleChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      metaTitle: value
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

  const handleSave = () => {
    if (!formData.title || !formData.content) {
      toast({
        title: "Error",
        description: "Title and content are required",
        variant: "destructive"
      });
      return;
    }

    const postData: BlogPost = {
      id: post?.id || Date.now().toString(),
      publishDate: post?.publishDate || new Date().toISOString().split('T')[0],
      readTime: `${Math.ceil((formData.content?.length || 0) / 250)} min read`,
      ...formData as BlogPost
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

    const previewData: BlogPost = {
      id: post?.id || "preview",
      publishDate: post?.publishDate || new Date().toISOString().split('T')[0],
      readTime: `${Math.ceil((formData.content?.length || 0) / 250)} min read`,
      ...formData as BlogPost
    };

    onPreview?.(previewData);
  };

  const handleTagsChange = (tagsString: string) => {
    const tags = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData({ ...formData, tags });
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
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="url-friendly-slug"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      placeholder="Brief description of the post"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="author">Author</Label>
                      <Input
                        id="author"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        placeholder="Author name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
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
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="imageAlt">Image Alt Text (SEO)</Label>
                    <Input
                      id="imageAlt"
                      value={formData.imageAlt}
                      onChange={(e) => handleImageSEOChange('imageAlt', e.target.value)}
                      placeholder="Descriptive alt text for featured image"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="imageTitle">Image Title</Label>
                    <Input
                      id="imageTitle"
                      value={formData.imageTitle}
                      onChange={(e) => handleImageSEOChange('imageTitle', e.target.value)}
                      placeholder="Image title attribute"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Content Editor</CardTitle>
                    <div className="flex gap-2">
                      <Button
                        variant={editorMode === 'visual' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setEditorMode('visual')}
                      >
                        Visual
                      </Button>
                      <Button
                        variant={editorMode === 'html' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setEditorMode('html')}
                      >
                        <Code size={16} className="mr-1" />
                        HTML
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {editorMode === 'visual' ? (
                    <RichTextEditor
                      content={formData.content || ''}
                      onChange={(content) => setFormData({ ...formData, content })}
                      placeholder="Write your post content..."
                    />
                  ) : (
                    <HTMLEditor
                      content={formData.content || ''}
                      onChange={(content) => setFormData({ ...formData, content })}
                    />
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="seo" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>SEO Optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="focusKeyword">Focus Keyword</Label>
                    <Input
                      id="focusKeyword"
                      value={formData.focusKeyword}
                      onChange={(e) => setFormData({ ...formData, focusKeyword: e.target.value })}
                      placeholder="Primary keyword for this post"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="seoTitle">SEO Title</Label>
                    <Input
                      id="seoTitle"
                      value={formData.seoTitle}
                      onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                      placeholder="SEO optimized title (50-60 characters)"
                    />
                    <p className="text-sm text-gray-500">
                      {formData.seoTitle?.length || 0}/60 characters
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="metaDescription">Meta Description</Label>
                    <Textarea
                      id="metaDescription"
                      value={formData.metaDescription}
                      onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                      placeholder="SEO meta description (150-160 characters)"
                      rows={3}
                    />
                    <p className="text-sm text-gray-500">
                      {formData.metaDescription?.length || 0}/160 characters
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="keywords">SEO Keywords</Label>
                    <Input
                      id="keywords"
                      value={formData.keywords}
                      onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                      placeholder="keyword1, keyword2, keyword3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="canonicalUrl">Canonical URL</Label>
                    <Input
                      id="canonicalUrl"
                      value={formData.canonicalUrl}
                      onChange={(e) => setFormData({ ...formData, canonicalUrl: e.target.value })}
                      placeholder="https://example.com/canonical-url"
                    />
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="noIndex"
                        checked={formData.noIndex}
                        onCheckedChange={(checked) => setFormData({ ...formData, noIndex: checked })}
                      />
                      <Label htmlFor="noIndex">No Index</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="noFollow"
                        checked={formData.noFollow}
                        onCheckedChange={(checked) => setFormData({ ...formData, noFollow: checked })}
                      />
                      <Label htmlFor="noFollow">No Follow</Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="metaTitle">Meta Title (Alternative)</Label>
                    <Input
                      id="metaTitle"
                      value={formData.metaTitle}
                      onChange={(e) => handleMetaTitleChange(e.target.value)}
                      placeholder="Alternative meta title if different from SEO title"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Video SEO (if applicable)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="videoTitle">Video Title</Label>
                    <Input
                      id="videoTitle"
                      value={formData.videoSEO?.title || ""}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        videoSEO: { ...formData.videoSEO, title: e.target.value }
                      })}
                      placeholder="Video title for SEO"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="videoDescription">Video Description</Label>
                    <Textarea
                      id="videoDescription"
                      value={formData.videoSEO?.description || ""}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        videoSEO: { ...formData.videoSEO, description: e.target.value }
                      })}
                      placeholder="Video description for SEO"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="videoDuration">Video Duration</Label>
                      <Input
                        id="videoDuration"
                        value={formData.videoSEO?.duration || ""}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          videoSEO: { ...formData.videoSEO, duration: e.target.value }
                        })}
                        placeholder="PT5M30S (5 min 30 sec)"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="videoThumbnail">Video Thumbnail URL</Label>
                      <Input
                        id="videoThumbnail"
                        value={formData.videoSEO?.thumbnailUrl || ""}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          videoSEO: { ...formData.videoSEO, thumbnailUrl: e.target.value }
                        })}
                        placeholder="https://example.com/thumb.jpg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="videoTranscript">Video Transcript (SEO boost)</Label>
                    <Textarea
                      id="videoTranscript"
                      value={formData.videoSEO?.transcript || ""}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        videoSEO: { ...formData.videoSEO, transcript: e.target.value }
                      })}
                      placeholder="Full video transcript for SEO..."
                      rows={6}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="social" className="space-y-6">
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
                        onChange={(e) => setFormData({ ...formData, ogTitle: e.target.value })}
                        placeholder="Facebook share title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ogDescription">OG Description</Label>
                      <Textarea
                        id="ogDescription"
                        value={formData.ogDescription}
                        onChange={(e) => setFormData({ ...formData, ogDescription: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, twitterTitle: e.target.value })}
                        placeholder="Twitter share title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="twitterDescription">Twitter Description</Label>
                      <Textarea
                        id="twitterDescription"
                        value={formData.twitterDescription}
                        onChange={(e) => setFormData({ ...formData, twitterDescription: e.target.value })}
                        placeholder="Twitter share description"
                        rows={2}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                      onChange={(e) => setFormData({ ...formData, schema: e.target.value })}
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
                        onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                      />
                      <Label htmlFor="published">Published</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="featured"
                        checked={formData.featured}
                        onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                      />
                      <Label htmlFor="featured">Featured</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
