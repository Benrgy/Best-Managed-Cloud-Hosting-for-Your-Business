
import { useState } from "react";
import { BlogPost } from "@/data/blogData";

interface UsePostEditorProps {
  post: BlogPost | null;
  onSave: (post: BlogPost) => void;
}

export const usePostEditor = ({ post, onSave }: UsePostEditorProps) => {
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

  return {
    formData,
    categories,
    tags,
    handleFieldChange,
    handleDateChange,
    handleVideoSEOChange,
    handleSubmit
  };
};
