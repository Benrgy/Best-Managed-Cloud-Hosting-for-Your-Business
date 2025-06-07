
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface TagSelectProps {
  tags: { label: string; value: string; }[];
  selectedTags: string[];
  onSelectTags: (tags: string[]) => void;
}

export const TagSelect = ({ tags, selectedTags, onSelectTags }: TagSelectProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (!selectedTags.includes(newTag)) {
        onSelectTags([...selectedTags, newTag]);
      }
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    onSelectTags(selectedTags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="space-y-2">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleInputKeyDown}
        placeholder="Type tag and press Enter"
      />
      <div className="flex flex-wrap gap-2">
        {selectedTags.map((tag) => (
          <Badge key={tag} variant="secondary" className="flex items-center gap-1">
            {tag}
            <X 
              size={12} 
              className="cursor-pointer hover:text-red-500" 
              onClick={() => removeTag(tag)}
            />
          </Badge>
        ))}
      </div>
    </div>
  );
};
