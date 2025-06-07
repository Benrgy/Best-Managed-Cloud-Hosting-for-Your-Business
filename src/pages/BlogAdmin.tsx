
import { useState } from "react";
import { SemanticLayout } from "@/components/SemanticLayout";
import { BlogPost } from "@/data/blogData";
import { PostEditor } from "@/components/blog/PostEditor";
import { BlogAdminTabs } from "@/components/blog/admin/BlogAdminTabs";
import { useBlogAdminData } from "@/hooks/useBlogAdminData";
import { useNavigate } from "react-router-dom";

const BlogAdmin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("posts");
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const {
    posts,
    categories,
    tags,
    handleSavePost,
    handleDeletePost,
    handleUpdateCategory,
    handleDeleteCategory,
    handleCreateCategory,
    handleUpdateTag,
    handleDeleteTag,
    handleCreateTag
  } = useBlogAdminData();

  const handleSavePostWrapper = (postData: BlogPost) => {
    handleSavePost(postData, editingPost);
    setEditingPost(null);
    setIsCreating(false);
  };

  const handleEditPost = (post: BlogPost) => {
    console.log('Editing post:', post);
    setEditingPost({ ...post }); // Create a copy to avoid reference issues
    setIsCreating(false);
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

  if (editingPost || isCreating) {
    return (
      <SemanticLayout>
        <div className="min-h-screen bg-gray-50 p-6">
          <PostEditor
            post={editingPost}
            onSave={handleSavePostWrapper}
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

          <BlogAdminTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            posts={posts}
            categories={categories}
            tags={tags}
            onCreatePost={handleCreateNew}
            onEditPost={handleEditPost}
            onDeletePost={handleDeletePost}
            onPreviewPost={handlePreviewPost}
            onUpdateCategory={handleUpdateCategory}
            onDeleteCategory={handleDeleteCategory}
            onCreateCategory={handleCreateCategory}
            onUpdateTag={handleUpdateTag}
            onDeleteTag={handleDeleteTag}
            onCreateTag={handleCreateTag}
          />
        </div>
      </div>
    </SemanticLayout>
  );
};

export default BlogAdmin;
