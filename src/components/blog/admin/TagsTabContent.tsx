
import { BlogTag } from "@/data/blogData";
import { TagManagement } from "../TagManagement";

interface TagsTabContentProps {
  tags: BlogTag[];
  onUpdateTag: (tag: BlogTag) => void;
  onDeleteTag: (tagId: string) => void;
  onCreateTag: (tag: Partial<BlogTag>) => void;
}

export const TagsTabContent = ({
  tags,
  onUpdateTag,
  onDeleteTag,
  onCreateTag
}: TagsTabContentProps) => {
  return (
    <TagManagement
      tags={tags}
      onUpdateTag={onUpdateTag}
      onDeleteTag={onDeleteTag}
      onCreateTag={onCreateTag}
    />
  );
};
