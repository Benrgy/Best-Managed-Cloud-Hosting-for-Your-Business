
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/data/blogData";

interface PostEditorHeaderProps {
  isEditing: boolean;
  onCancel: () => void;
  onPreview: (post: BlogPost) => void;
  onSubmit: (e: React.FormEvent) => void;
  formData: BlogPost;
}

export const PostEditorHeader = ({ 
  isEditing, 
  onCancel, 
  onPreview, 
  onSubmit, 
  formData 
}: PostEditorHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        {isEditing ? "Edit Post" : "Create New Post"}
      </h1>
      <div className="flex gap-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="secondary" onClick={() => onPreview(formData)}>
          Preview
        </Button>
        <Button onClick={onSubmit}>
          {isEditing ? "Update" : "Publish"}
        </Button>
      </div>
    </div>
  );
};
