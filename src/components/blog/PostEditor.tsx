
import { BlogPost } from "@/data/blogData";
import { usePostEditor } from "@/hooks/usePostEditor";
import { PostEditorHeader } from "./editor/PostEditorHeader";
import { PostEditorContent } from "./editor/PostEditorContent";
import { PostEditorSidebar } from "./editor/PostEditorSidebar";

interface PostEditorProps {
  post: BlogPost | null;
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
  onPreview: (post: BlogPost) => void;
}

export const PostEditor = ({ post, onSave, onCancel, onPreview }: PostEditorProps) => {
  const {
    formData,
    categories,
    tags,
    handleFieldChange,
    handleDateChange,
    handleVideoSEOChange,
    handleSubmit
  } = usePostEditor({ post, onSave });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <PostEditorHeader
        isEditing={!!post}
        onCancel={onCancel}
        onPreview={onPreview}
        onSubmit={handleSubmit}
        formData={formData}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PostEditorContent
          formData={formData}
          onFieldChange={handleFieldChange}
          onDateChange={handleDateChange}
          categories={categories}
          tags={tags}
        />

        <PostEditorSidebar
          formData={formData}
          onFieldChange={handleFieldChange}
          onVideoSEOChange={handleVideoSEOChange}
        />
      </div>
    </div>
  );
};
