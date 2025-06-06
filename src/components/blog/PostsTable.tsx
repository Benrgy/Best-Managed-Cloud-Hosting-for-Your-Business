
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Eye } from "lucide-react";
import { BlogPost } from "@/data/blogData";

interface PostsTableProps {
  posts: BlogPost[];
  onEdit: (post: BlogPost) => void;
  onDelete: (post: BlogPost) => void;
  onPreview: (post: BlogPost) => void;
}

export const PostsTable = ({ posts, onEdit, onDelete, onPreview }: PostsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3">Title</th>
            <th className="text-left p-3">Author</th>
            <th className="text-left p-3">Category</th>
            <th className="text-left p-3">Status</th>
            <th className="text-left p-3">Date</th>
            <th className="text-left p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-b hover:bg-gray-50">
              <td className="p-3">
                <div>
                  <div className="font-medium">{post.title}</div>
                  <div className="text-sm text-gray-500 truncate max-w-xs">
                    {post.excerpt}
                  </div>
                </div>
              </td>
              <td className="p-3">{post.author}</td>
              <td className="p-3">
                <Badge variant="outline">{post.category}</Badge>
              </td>
              <td className="p-3">
                <Badge variant={post.published ? "default" : "secondary"}>
                  {post.published ? "Published" : "Draft"}
                </Badge>
              </td>
              <td className="p-3 text-sm text-gray-500">
                {new Date(post.publishDate).toLocaleDateString()}
              </td>
              <td className="p-3">
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onPreview(post)}
                  >
                    <Eye size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onEdit(post)}
                  >
                    <Edit size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDelete(post)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
