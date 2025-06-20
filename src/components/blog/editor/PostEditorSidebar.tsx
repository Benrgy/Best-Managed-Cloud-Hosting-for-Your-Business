
import { BlogPost } from "@/data/blogData";
import { PostSEOForm } from "../forms/PostSEOForm";
import { PostSocialForm } from "../forms/PostSocialForm";
import { PostVideoSEO } from "../forms/PostVideoSEO";
import { PostAdvancedSettings } from "../forms/PostAdvancedSettings";
import { PostEditorActions } from "./PostEditorActions";

interface PostEditorSidebarProps {
  formData: BlogPost;
  onFieldChange: (field: string, value: any) => void;
  onVideoSEOChange: (field: string, value: any) => void;
}

export const PostEditorSidebar = ({
  formData,
  onFieldChange,
  onVideoSEOChange
}: PostEditorSidebarProps) => {
  return (
    <div className="space-y-6">
      <PostSEOForm
        formData={{
          focusKeyword: formData.focusKeyword || "",
          seoTitle: formData.seoTitle || "",
          metaDescription: formData.metaDescription || "",
          keywords: formData.keywords || "",
          canonicalUrl: formData.canonicalUrl || "",
          noIndex: formData.noIndex || false,
          noFollow: formData.noFollow || false,
          metaTitle: formData.metaTitle || ""
        }}
        onFieldChange={onFieldChange}
      />

      <PostSocialForm
        formData={{
          ogTitle: formData.ogTitle || "",
          ogDescription: formData.ogDescription || "",
          twitterTitle: formData.twitterTitle || "",
          twitterDescription: formData.twitterDescription || ""
        }}
        onFieldChange={onFieldChange}
      />

      <PostVideoSEO
        videoSEO={{
          title: formData.videoSEO?.title || '',
          description: formData.videoSEO?.description || '',
          duration: formData.videoSEO?.duration || '',
          thumbnailUrl: formData.videoSEO?.thumbnailUrl || '',
          transcript: formData.videoSEO?.transcript || ''
        }}
        onFieldChange={onVideoSEOChange}
      />

      <PostAdvancedSettings
        formData={{
          schema: formData.schema || "",
          published: formData.published || false,
          featured: formData.featured || false
        }}
        onFieldChange={onFieldChange}
      />

      <PostEditorActions />
    </div>
  );
};
