
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { BlogPost } from "@/data/blogData";

interface PostFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterStatus: 'all' | 'published' | 'draft';
  setFilterStatus: (status: 'all' | 'published' | 'draft') => void;
  posts: BlogPost[];
}

export const PostFilters = ({ 
  searchTerm, 
  setSearchTerm, 
  filterStatus, 
  setFilterStatus, 
  posts 
}: PostFiltersProps) => {
  const publishedCount = posts.filter(p => p.published).length;
  const draftCount = posts.filter(p => !p.published).length;

  return (
    <div className="flex flex-col sm:flex-row gap-4 flex-1">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>
      <div className="flex gap-2">
        <Button
          variant={filterStatus === 'all' ? 'default' : 'outline'}
          onClick={() => setFilterStatus('all')}
          size="sm"
        >
          All ({posts.length})
        </Button>
        <Button
          variant={filterStatus === 'published' ? 'default' : 'outline'}
          onClick={() => setFilterStatus('published')}
          size="sm"
        >
          Published ({publishedCount})
        </Button>
        <Button
          variant={filterStatus === 'draft' ? 'default' : 'outline'}
          onClick={() => setFilterStatus('draft')}
          size="sm"
        >
          Drafts ({draftCount})
        </Button>
      </div>
    </div>
  );
};
