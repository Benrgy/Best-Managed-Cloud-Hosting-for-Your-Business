
import { BlogCategory } from "@/data/blogData";
import { CategoryManagement } from "../CategoryManagement";

interface CategoriesTabContentProps {
  categories: BlogCategory[];
  onUpdateCategory: (category: BlogCategory) => void;
  onDeleteCategory: (categoryId: string) => void;
  onCreateCategory: (category: Partial<BlogCategory>) => void;
}

export const CategoriesTabContent = ({
  categories,
  onUpdateCategory,
  onDeleteCategory,
  onCreateCategory
}: CategoriesTabContentProps) => {
  return (
    <CategoryManagement
      categories={categories}
      onUpdateCategory={onUpdateCategory}
      onDeleteCategory={onDeleteCategory}
      onCreateCategory={onCreateCategory}
    />
  );
};
