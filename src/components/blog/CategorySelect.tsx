
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CategorySelectProps {
  categories: { label: string; value: string; }[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategorySelect = ({ categories, selectedCategory, onSelectCategory }: CategorySelectProps) => {
  return (
    <Select value={selectedCategory} onValueChange={onSelectCategory}>
      <SelectTrigger>
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem key={category.value} value={category.value}>
            {category.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
