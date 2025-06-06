
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";
import { BlogTag } from "@/data/blogData";
import { TagEditor } from "./TagEditor";
import { useToast } from "@/hooks/use-toast";

interface TagManagementProps {
  tags: BlogTag[];
  onUpdateTag: (tag: BlogTag) => void;
  onDeleteTag: (tagId: string) => void;
  onCreateTag: (tag: Partial<BlogTag>) => void;
}

export const TagManagement = ({ 
  tags, 
  onUpdateTag, 
  onDeleteTag, 
  onCreateTag 
}: TagManagementProps) => {
  const { toast } = useToast();
  const [editingTag, setEditingTag] = useState<BlogTag | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleSaveTag = (tagData: Partial<BlogTag>) => {
    if (!tagData.name) {
      toast({
        title: "Error",
        description: "Tag name is required",
        variant: "destructive"
      });
      return;
    }

    if (editingTag) {
      const updatedTag: BlogTag = { 
        ...editingTag, 
        ...tagData,
        slug: tagData.name?.toLowerCase().replace(/\s+/g, '-') || editingTag.slug,
        count: editingTag.count
      };
      onUpdateTag(updatedTag);
      setEditingTag(null);
    } else {
      onCreateTag(tagData);
      setIsCreating(false);
    }

    toast({
      title: "Success",
      description: editingTag ? "Tag updated successfully" : "Tag created successfully"
    });
  };

  const handleDeleteTag = (tag: BlogTag) => {
    if (window.confirm(`Are you sure you want to delete the tag "${tag.name}"?`)) {
      onDeleteTag(tag.id);
      toast({
        title: "Success",
        description: "Tag deleted successfully"
      });
    }
  };

  if (editingTag || isCreating) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{editingTag ? "Edit Tag" : "Create New Tag"}</CardTitle>
        </CardHeader>
        <CardContent>
          <TagEditor
            tag={editingTag || { 
              id: "", 
              name: "", 
              slug: "",
              description: "", 
              metaDescription: "", 
              keywords: "",
              count: 0
            }}
            onSave={handleSaveTag}
            onCancel={() => {
              setEditingTag(null);
              setIsCreating(false);
            }}
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Tags</CardTitle>
          <Button onClick={() => setIsCreating(true)}>
            <Plus size={16} className="mr-2" />
            Add Tag
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div key={tag.id} className="flex items-center gap-1 p-2 border rounded-lg">
              <div className="flex-1">
                <span className="text-sm font-medium">{tag.name}</span>
                {tag.description && (
                  <p className="text-xs text-gray-600">{tag.description}</p>
                )}
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setEditingTag(tag)}
                >
                  <Edit size={12} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDeleteTag(tag)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 size={12} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
