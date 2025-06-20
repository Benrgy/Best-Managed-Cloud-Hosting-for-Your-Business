
import { BlogPost } from "@/data/blogData";
import { PostBasicInfo } from "../forms/PostBasicInfo";
import { PostContent } from "../forms/PostContent";

interface PostEditorContentProps {
  formData: BlogPost;
  onFieldChange: (field: string, value: any) => void;
  onDateChange: (date: Date | undefined) => void;
  categories: { label: string; value: string; }[];
  tags: { label: string; value: string; }[];
}

export const PostEditorContent = ({
  formData,
  onFieldChange,
  onDateChange,
  categories,
  tags
}: PostEditorContentProps) => {
  return (
    <div className="lg:col-span-2 space-y-6">
      <PostBasicInfo
        formData={{
          title: formData.title,
          slug: formData.slug,
          excerpt: formData.excerpt,
          author: formData.author,
          category: formData.category,
          tags: formData.tags,
          image: formData.image,
          imageAlt: formData.imageAlt || "",
          imageTitle: formData.imageTitle || ""
        }}
        onFieldChange={onFieldChange}
        onDateChange={onDateChange}
        categories={categories}
        tags={tags}
      />

      <PostContent
        content={formData.content}
        onChange={(content) => onFieldChange('content', content)}
      />
    </div>
  );
};
