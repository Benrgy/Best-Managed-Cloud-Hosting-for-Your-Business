
import { useState } from "react";
import { SEO } from "@/components/SEO";
import { SemanticLayout } from "@/components/SemanticLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, Eye, Save, Search, Filter } from "lucide-react";
import { BlogPost, BlogCategory, BlogTag, blogPosts as initialPosts, blogCategories as initialCategories, blogTags as initialTags } from "@/data/blogData";
import { PostEditor } from "@/components/blog/PostEditor";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const BlogAdmin = () => {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [categories, setCategories] = useState<BlogCategory[]>(initialCategories);
  const [tags, setTags] = useState<BlogTag[]>(initialTags);
  const [currentView, setCurrentView] = useState<'list' | 'edit' | 'category' | 'tag'>('list');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [editingCategory, setEditingCategory] = useState<BlogCategory | null>(null);
  const [editingTag, setEditingTag] = useState<BlogTag | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<'all' | 'published' | 'draft'>('all');
  const { toast } = useToast();
  const navigate = useNavigate();

  // Post management functions
  const handleSavePost = (post: BlogPost) => {
    if (editingPost) {
      setPosts(posts.map(p => p.id === editingPost.id ? post : p));
      toast({
        title: "Success",
        description: "Post updated successfully"
      });
    } else {
      setPosts([...posts, post]);
      toast({
        title: "Success",
        description: "Post created successfully"
      });
    }
    setCurrentView('list');
    setEditingPost(null);
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setCurrentView('edit');
  };

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
    toast({
      title: "Success",
      description: "Post deleted successfully"
    });
  };

  const handlePreviewPost = (post: BlogPost) => {
    // Store preview data temporarily (in a real app, you'd use a more robust solution)
    localStorage.setItem('previewPost', JSON.stringify(post));
    window.open(`/blog/${post.slug}?preview=true`, '_blank');
  };

  const handleViewPost = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  // Category management functions
  const handleSaveCategory = (categoryData: Partial<BlogCategory>) => {
    if (!categoryData.name) {
      toast({
        title: "Error",
        description: "Category name is required",
        variant: "destructive"
      });
      return;
    }

    const category: BlogCategory = {
      id: editingCategory?.id || Date.now().toString(),
      slug: categoryData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      count: editingCategory?.count || 0,
      color: editingCategory?.color || "bg-gray-100 text-gray-800",
      ...categoryData as BlogCategory
    };

    if (editingCategory) {
      setCategories(categories.map(c => c.id === editingCategory.id ? category : c));
      toast({
        title: "Success",
        description: "Category updated successfully"
      });
    } else {
      setCategories([...categories, category]);
      toast({
        title: "Success",
        description: "Category created successfully"
      });
    }
    setEditingCategory(null);
  };

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter(c => c.id !== id));
    toast({
      title: "Success",
      description: "Category deleted successfully"
    });
  };

  // Tag management functions
  const handleSaveTag = (tagData: Partial<BlogTag>) => {
    if (!tagData.name) {
      toast({
        title: "Error",
        description: "Tag name is required",
        variant: "destructive"
      });
      return;
    }

    const tag: BlogTag = {
      id: editingTag?.id || Date.now().toString(),
      slug: tagData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      count: editingTag?.count || 0,
      ...tagData as BlogTag
    };

    if (editingTag) {
      setTags(tags.map(t => t.id === editingTag.id ? tag : t));
      toast({
        title: "Success",
        description: "Tag updated successfully"
      });
    } else {
      setTags([...tags, tag]);
      toast({
        title: "Success",
        description: "Tag created successfully"
      });
    }
    setEditingTag(null);
  };

  const handleDeleteTag = (id: string) => {
    setTags(tags.filter(t => t.id !== id));
    toast({
      title: "Success",
      description: "Tag deleted successfully"
    });
  };

  // Filter and search functions
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'published' && post.published) ||
                         (filterStatus === 'draft' && !post.published);
    
    return matchesSearch && matchesFilter;
  });

  if (currentView === 'edit') {
    return (
      <>
        <SEO 
          title="Blog Editor | CloudHost Pro"
          description="Create and edit blog posts for CloudHost Pro"
          canonicalUrl="https://best-managed-cloud-hosting-for-business.lovable.app/admin/blog"
        />
        <SemanticLayout>
          <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4">
              <PostEditor
                post={editingPost}
                onSave={handleSavePost}
                onCancel={() => {
                  setCurrentView('list');
                  setEditingPost(null);
                }}
                onPreview={handlePreviewPost}
              />
            </div>
          </div>
        </SemanticLayout>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Blog Administration | CloudHost Pro"
        description="Manage blog posts and content for CloudHost Pro"
        canonicalUrl="https://best-managed-cloud-hosting-for-business.lovable.app/admin/blog"
      />
      <SemanticLayout>
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Administration</h1>
              <p className="text-gray-600">Manage your blog posts, categories, and SEO optimization</p>
            </div>

            <Tabs value={currentView} onValueChange={(value) => setCurrentView(value as any)} className="space-y-6">
              <TabsList>
                <TabsTrigger value="list">All Posts</TabsTrigger>
                <TabsTrigger value="category">Categories</TabsTrigger>
                <TabsTrigger value="tag">Tags</TabsTrigger>
              </TabsList>

              <TabsContent value="list">
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="flex flex-col sm:flex-row gap-4 flex-1">
                      <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          placeholder="Search posts..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant={filterStatus === 'all' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setFilterStatus('all')}
                        >
                          All ({posts.length})
                        </Button>
                        <Button
                          variant={filterStatus === 'published' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setFilterStatus('published')}
                        >
                          Published ({posts.filter(p => p.published).length})
                        </Button>
                        <Button
                          variant={filterStatus === 'draft' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setFilterStatus('draft')}
                        >
                          Drafts ({posts.filter(p => !p.published).length})
                        </Button>
                      </div>
                    </div>
                    <Button 
                      onClick={() => {
                        setEditingPost(null);
                        setCurrentView('edit');
                      }}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Plus size={16} className="mr-2" />
                      New Post
                    </Button>
                  </div>

                  <Card>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Author</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredPosts.map((post) => (
                          <TableRow key={post.id}>
                            <TableCell>
                              <div>
                                <div className="font-medium">{post.title}</div>
                                <div className="text-sm text-gray-500">{post.excerpt?.substring(0, 80)}...</div>
                              </div>
                            </TableCell>
                            <TableCell>{post.author}</TableCell>
                            <TableCell>
                              <Badge variant="outline">
                                {categories.find(c => c.id === post.category)?.name || post.category}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-1">
                                <Badge variant={post.published ? "default" : "secondary"}>
                                  {post.published ? "Published" : "Draft"}
                                </Badge>
                                {post.featured && <Badge variant="outline">Featured</Badge>}
                              </div>
                            </TableCell>
                            <TableCell>{new Date(post.publishDate).toLocaleDateString()}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={() => handleViewPost(post.slug)}>
                                  <Eye size={16} />
                                </Button>
                                <Button variant="outline" size="sm" onClick={() => handleEditPost(post)}>
                                  <Edit size={16} />
                                </Button>
                                <Button variant="outline" size="sm" onClick={() => handleDeletePost(post.id)}>
                                  <Trash2 size={16} />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="category">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Categories</h2>
                    <Button onClick={() => setEditingCategory({} as BlogCategory)}>
                      <Plus size={16} className="mr-2" />
                      New Category
                    </Button>
                  </div>

                  {editingCategory && (
                    <Card>
                      <CardHeader>
                        <CardTitle>{editingCategory.id ? "Edit Category" : "New Category"}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CategoryEditor
                          category={editingCategory}
                          onSave={handleSaveCategory}
                          onCancel={() => setEditingCategory(null)}
                        />
                      </CardContent>
                    </Card>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.map((category) => (
                      <Card key={category.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold">{category.name}</h3>
                            <div className="flex gap-1">
                              <Button variant="outline" size="sm" onClick={() => setEditingCategory(category)}>
                                <Edit size={14} />
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleDeleteCategory(category.id)}>
                                <Trash2 size={14} />
                              </Button>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                          <p className="text-xs text-gray-500">{category.count} posts</p>
                          {category.metaDescription && (
                            <p className="text-xs text-blue-600 mt-2">SEO Optimized</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tag">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Tags</h2>
                    <Button onClick={() => setEditingTag({} as BlogTag)}>
                      <Plus size={16} className="mr-2" />
                      New Tag
                    </Button>
                  </div>

                  {editingTag && (
                    <Card>
                      <CardHeader>
                        <CardTitle>{editingTag.id ? "Edit Tag" : "New Tag"}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <TagEditor
                          tag={editingTag}
                          onSave={handleSaveTag}
                          onCancel={() => setEditingTag(null)}
                        />
                      </CardContent>
                    </Card>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {tags.map((tag) => (
                      <Card key={tag.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold">{tag.name}</h3>
                            <div className="flex gap-1">
                              <Button variant="outline" size="sm" onClick={() => setEditingTag(tag)}>
                                <Edit size={14} />
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleDeleteTag(tag.id)}>
                                <Trash2 size={14} />
                              </Button>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{tag.description}</p>
                          <p className="text-xs text-gray-500">{tag.count} posts</p>
                          {tag.metaDescription && (
                            <p className="text-xs text-blue-600 mt-2">SEO Optimized</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SemanticLayout>
    </>
  );
};

// Category Editor Component
const CategoryEditor = ({ category, onSave, onCancel }: { 
  category: BlogCategory; 
  onSave: (category: Partial<BlogCategory>) => void; 
  onCancel: () => void; 
}) => {
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

// Tag Editor Component
const TagEditor = ({ tag, onSave, onCancel }: { 
  tag: BlogTag; 
  onSave: (tag: Partial<BlogTag>) => void; 
  onCancel: () => void; 
}) => {
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
      </div>

      <div className="space-y-2">
        <Label htmlFor="tagKeywords">Keywords</Label>
        <Input
          id="tagKeywords"
          value={formData.keywords || ""}
          onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
          placeholder="SEO keywords for tag"
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

export default BlogAdmin;
