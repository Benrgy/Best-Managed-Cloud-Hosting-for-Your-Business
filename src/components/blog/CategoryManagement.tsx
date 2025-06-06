
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";
import { BlogCategory } from "@/data/blogData";
import { CategoryEditor } from "@/components/blog/CategoryEditor";
import { useToast } from "@/hooks/use-toast";

interface CategoryManagementProps {
  categories: BlogCategory[];
  onUpdateCategory: (category: BlogCategory) => void;
  onDeleteCategory: (categoryId: string) => void;
  onCreateCategory: (category: Partial<BlogCategory>) => void;
}

export const CategoryManagement = ({ 
  categories, 
  onUpdateCategory, 
  onDeleteCategory, 
  onCreateCategory 
}: CategoryManagementProps) => {
  const { toast } = useToast();
  const [editingCategory, setEditingCategory] = useState<BlogCategory | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleSaveCategory = (categoryData: Partial<BlogCategory>) => {
    if (!categoryData.name) {
      toast({
        title: "Error",
        description: "Category name is required",
        variant: "destructive"
      });
      return;
    }

    if (editingCategory) {
      onUpdateCategory({ ...editingCategory, ...categoryData });
      setEditingCategory(null);
    } else {
      onCreateCategory(categoryData);
      setIsCreating(false);
    }

    toast({
      title: "Success",
      description: editingCategory ? "Category updated successfully" : "Category created successfully"
    });
  };

  const handleDeleteCategory = (category: BlogCategory) => {
    if (window.confirm(`Are you sure you want to delete the category "${category.name}"?`)) {
      onDeleteCategory(category.id);
      toast({
        title: "Success",
        description: "Category deleted successfully"
      });
    }
  };

  if (editingCategory || isCreating) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{editingCategory ? "Edit Category" : "Create New Category"}</CardTitle>
        </CardHeader>
        <CardContent>
          <CategoryEditor
            category={editingCategory || { id: "", name: "", description: "", metaDescription: "", keywords: "" }}
            onSave={handleSaveCategory}
            onCancel={() => {
              setEditingCategory(null);
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
          <CardTitle>Categories</CardTitle>
          <Button onClick={() => setIsCreating(true)}>
            <Plus size={16} className="mr-2" />
            Add Category
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{category.name}</span>
                  <Badge variant="outline">{category.id}</Badge>
                </div>
                {category.description && (
                  <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                )}
                {category.metaDescription && (
                  <p className="text-xs text-gray-500 mt-1">SEO: {category.metaDescription}</p>
                )}
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setEditingCategory(category)}
                >
                  <Edit size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDeleteCategory(category)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
