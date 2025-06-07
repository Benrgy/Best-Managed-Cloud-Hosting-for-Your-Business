
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { BlogPost } from "@/data/blogData";
import { PostFilters } from "../PostFilters";
import { PostsTable } from "../PostsTable";

interface PostsTabContentProps {
  posts: BlogPost[];
  onCreatePost: () => void;
  onEditPost: (post: BlogPost) => void;
  onDeletePost: (post: BlogPost) => void;
  onPreviewPost: (post: BlogPost) => void;
}

export const PostsTabContent = ({
  posts,
  onCreatePost,
  onEditPost,
  onDeletePost,
  onPreviewPost
}: PostsTabContentProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<'all' | 'published' | 'draft'>('all');

  // Filter posts based on search and status
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || 
                         (filterStatus === 'published' && post.published) ||
                         (filterStatus === 'draft' && !post.published);
    
    return matchesSearch && matchesStatus;
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>All Posts</CardTitle>
          <Button onClick={onCreatePost}>
            <Plus size={16} className="mr-2" />
            New Post
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <PostFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            posts={posts}
          />
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No posts found matching your criteria.
          </div>
        ) : (
          <PostsTable
            posts={filteredPosts}
            onEdit={onEditPost}
            onDelete={onDeletePost}
            onPreview={onPreviewPost}
          />
        )}
      </CardContent>
    </Card>
  );
};
