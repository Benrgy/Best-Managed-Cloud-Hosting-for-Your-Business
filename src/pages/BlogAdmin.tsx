
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { SemanticLayout } from "@/components/SemanticLayout";
import { BlogPost, BlogCategory, BlogTag, blogPosts, blogCategories, blogTags } from "@/data/blogData";
import { PostEditor } from "@/components/blog/PostEditor";
import { PostFilters } from "@/components/blog/PostFilters";
import { PostsTable } from "@/components/blog/PostsTable";
import { CategoryManagement } from "@/components/blog/CategoryManagement";
import { TagManagement } from "@/components/blog/TagManagement";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const BlogAdmin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("posts");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [tags, setTags] = useState<BlogTag[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<'all' | 'published' | 'draft'>('all');

  // Initialize data from imported data
  useEffect(() => {
    setPosts(blogPosts);
    setCategories(blogCategories);
    setTags(blogTags);
  }, []);

  // Filter posts based on search and status
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || 
                         (filterStatus === 'published' && post.published) ||
                         (filterStatus === 'draft' && !post.published);
    
    return matchesSearch && matchesStatus;
  });

  const handleSavePost = (postData: BlogPost) => {
    console.log('Saving post:', postData);
    
    if (editingPost) {
      // Update existing post
      setPosts(prevPosts => {
        const updatedPosts = prevPosts.map(p => p.id === editingPost.id ? postData : p);
        console.log('Updated posts:', updatedPosts);
        return updatedPosts;
      });
      toast({
        title: "Success",
        description: "Post updated successfully"
      });
    } else {
      // Create new post
      setPosts(prevPosts => {
        const newPosts = [...prevPosts, postData];
        console.log('New posts:', newPosts);
        return newPosts;
      });
      toast({
        title: "Success",
        description: "Post created successfully"
      });
    }
    
    // Clear editing state
    setEditingPost(null);
    setIsCreating(false);
  };

  const handleEditPost = (post: BlogPost) => {
    console.log('Editing post:', post);
    setEditingPost({ ...post }); // Create a copy to avoid reference issues
    setIsCreating(false);
  };

  const handleDeletePost = (post: BlogPost) => {
    if (window.confirm(`Are you sure you want to delete "${post.title}"?`)) {
      setPosts(prevPosts => prevPosts.filter(p => p.id !== post.id));
      toast({
        title: "Success",
        description: "Post deleted successfully"
      });
    }
  };

  const handlePreviewPost = (post: BlogPost) => {
    // Create a temporary post in localStorage for preview
    localStorage.setItem('previewPost', JSON.stringify(post));
    navigate(`/blog/${post.slug}`);
  };

  const handleCreateNew = () => {
    setEditingPost(null);
    setIsCreating(true);
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
    setIsCreating(false);
  };

  const handleUpdateCategory = (category: BlogCategory) => {
    setCategories(categories.map(c => c.id === category.id ? category : c));
  };

  const handleDeleteCategory = (categoryId: string) => {
    setCategories(categories.filter(c => c.id !== categoryId));
  };

  const handleCreateCategory = (categoryData: Partial<BlogCategory>) => {
    const newCategory: BlogCategory = {
      id: categoryData.name?.toLowerCase().replace(/\s+/g, '-') || "",
      name: categoryData.name || "",
      slug: categoryData.name?.toLowerCase().replace(/\s+/g, '-') || "",
      description: categoryData.description || "",
      metaDescription: categoryData.metaDescription || "",
      keywords: categoryData.keywords || "",
      count: 0,
      color: "bg-gray-100 text-gray-800"
    };
    setCategories([...categories, newCategory]);
  };

  const handleUpdateTag = (tag: BlogTag) => {
    setTags(tags.map(t => t.id === tag.id ? tag : t));
  };

  const handleDeleteTag = (tagId: string) => {
    setTags(tags.filter(t => t.id !== tagId));
  };

  const handleCreateTag = (tagData: Partial<BlogTag>) => {
    const newTag: BlogTag = {
      id: tagData.name?.toLowerCase().replace(/\s+/g, '-') || "",
      name: tagData.name || "",
      slug: tagData.name?.toLowerCase().replace(/\s+/g, '-') || "",
      description: tagData.description || "",
      metaDescription: tagData.metaDescription || "",
      keywords: tagData.keywords || "",
      count: 0
    };
    setTags([...tags, newTag]);
  };

  if (editingPost || isCreating) {
    return (
      <SemanticLayout>
        <div className="min-h-screen bg-gray-50 p-6">
          <PostEditor
            post={editingPost}
            onSave={handleSavePost}
            onCancel={handleCancelEdit}
            onPreview={handlePreviewPost}
          />
        </div>
      </SemanticLayout>
    );
  }

  return (
    <SemanticLayout>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Administration</h1>
            <p className="text-gray-600">Manage your blog posts, categories, and tags</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="posts">Posts ({posts.length})</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="tags">Tags</TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>All Posts</CardTitle>
                    <Button onClick={handleCreateNew}>
                      <Plus size={16} className="mr-2" />
                      New Post
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col lg:flex-row gap-4 mb-6">
                    <PostFilters
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}
                      filterStatus={filterStatus}
                      setFilterStatus={setFilterStatus}
                      posts={posts}
                    />
                  </div>

                  {filteredPosts.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      No posts found matching your criteria.
                    </div>
                  ) : (
                    <PostsTable
                      posts={filteredPosts}
                      onEdit={handleEditPost}
                      onDelete={handleDeletePost}
                      onPreview={handlePreviewPost}
                    />
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="categories" className="space-y-6">
              <CategoryManagement
                categories={categories}
                onUpdateCategory={handleUpdateCategory}
                onDeleteCategory={handleDeleteCategory}
                onCreateCategory={handleCreateCategory}
              />
            </TabsContent>

            <TabsContent value="tags" className="space-y-6">
              <TagManagement
                tags={tags}
                onUpdateTag={handleUpdateTag}
                onDeleteTag={handleDeleteTag}
                onCreateTag={handleCreateTag}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SemanticLayout>
  );
};

export default BlogAdmin;
