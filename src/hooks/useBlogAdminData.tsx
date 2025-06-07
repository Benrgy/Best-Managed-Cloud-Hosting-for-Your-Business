
import { useState, useEffect } from "react";
import { BlogPost, BlogCategory, BlogTag, blogPosts, blogCategories, blogTags } from "@/data/blogData";
import { useToast } from "@/hooks/use-toast";

export const useBlogAdminData = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [tags, setTags] = useState<BlogTag[]>([]);

  // Initialize data from imported data
  useEffect(() => {
    setPosts(blogPosts);
    setCategories(blogCategories);
    setTags(blogTags);
  }, []);

  const handleSavePost = (postData: BlogPost, editingPost: BlogPost | null) => {
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

  return {
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
  };
};
