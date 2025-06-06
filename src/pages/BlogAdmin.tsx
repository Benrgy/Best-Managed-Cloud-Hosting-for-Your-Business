
import { useState } from "react";
import { SEO } from "@/components/SEO";
import { SemanticLayout } from "@/components/SemanticLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, Eye, Save, X } from "lucide-react";
import { blogPosts, blogCategories, BlogPost } from "@/data/blogPosts";
import { useToast } from "@/hooks/use-toast";

const BlogAdmin = () => {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "",
    category: "",
    tags: [],
    image: "",
    metaDescription: "",
    keywords: "",
    published: false,
    featured: false
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
      slug: generateSlug(title)
    });
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
      id: editingPost?.id || Date.now().toString(),
      publishDate: editingPost?.publishDate || new Date().toISOString().split('T')[0],
      readTime: `${Math.ceil((formData.content?.length || 0) / 250)} min read`,
      ...formData as BlogPost
    };

    if (editingPost) {
      setPosts(posts.map(p => p.id === editingPost.id ? postData : p));
      toast({
        title: "Success",
        description: "Post updated successfully"
      });
    } else {
      setPosts([...posts, postData]);
      toast({
        title: "Success",
        description: "Post created successfully"
      });
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      author: "",
      category: "",
      tags: [],
      image: "",
      metaDescription: "",
      keywords: "",
      published: false,
      featured: false
    });
    setIsEditing(false);
    setEditingPost(null);
  };

  const handleEdit = (post: BlogPost) => {
    setFormData(post);
    setEditingPost(post);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
    toast({
      title: "Success",
      description: "Post deleted successfully"
    });
  };

  const handleTagsChange = (tagsString: string) => {
    const tags = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData({ ...formData, tags });
  };

  return (
    <>
      <SEO 
        title="Blog Admin Dashboard | CloudHost Pro"
        description="Manage blog posts and content for CloudHost Pro"
        canonicalUrl="https://best-managed-cloud-hosting-for-business.lovable.app/admin/blog"
      />
      <SemanticLayout>
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Administration</h1>
              <p className="text-gray-600">Manage your blog posts and content</p>
            </div>

            <Tabs defaultValue="posts" className="space-y-6">
              <TabsList>
                <TabsTrigger value="posts">All Posts</TabsTrigger>
                <TabsTrigger value="new">New Post</TabsTrigger>
                <TabsTrigger value="categories">Categories</TabsTrigger>
              </TabsList>

              <TabsContent value="posts">
                <div className="space-y-6">
                  {posts.map((post) => (
                    <Card key={post.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant={post.published ? "default" : "secondary"}>
                                {post.published ? "Published" : "Draft"}
                              </Badge>
                              {post.featured && <Badge variant="outline">Featured</Badge>}
                              <Badge variant="outline">{post.category}</Badge>
                            </div>
                            <CardTitle className="text-xl">{post.title}</CardTitle>
                            <CardDescription className="mt-2">{post.excerpt}</CardDescription>
                            <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                              <span>By {post.author}</span>
                              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye size={16} />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleEdit(post)}>
                              <Edit size={16} />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleDelete(post.id)}>
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="new">
                <Card>
                  <CardHeader>
                    <CardTitle>{editingPost ? "Edit Post" : "Create New Post"}</CardTitle>
                    <CardDescription>
                      {editingPost ? "Update your blog post" : "Create a new blog post with SEO optimization"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                    <div className="space-y-2">
                      <Label htmlFor="content">Content *</Label>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        placeholder="Write your post content in Markdown format"
                        rows={15}
                        className="font-mono"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                              <SelectItem key={cat.name} value={cat.name}>
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
                      <Label htmlFor="metaDescription">Meta Description (SEO)</Label>
                      <Textarea
                        id="metaDescription"
                        value={formData.metaDescription}
                        onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                        placeholder="SEO meta description (140-160 characters)"
                        rows={2}
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

                    <div className="flex gap-4">
                      <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                        <Save size={16} className="mr-2" />
                        {editingPost ? "Update Post" : "Create Post"}
                      </Button>
                      <Button variant="outline" onClick={resetForm}>
                        <X size={16} className="mr-2" />
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="categories">
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                    <CardDescription>Manage blog categories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {blogCategories.map((category) => (
                        <div key={category.name} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-semibold">{category.name}</h3>
                            <p className="text-sm text-gray-500">{category.count} posts</p>
                          </div>
                          <Badge className={category.color}>
                            {category.count}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SemanticLayout>
    </>
  );
};

export default BlogAdmin;
