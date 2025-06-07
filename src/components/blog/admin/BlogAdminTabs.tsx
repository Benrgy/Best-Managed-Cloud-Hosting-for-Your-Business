
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PostsTabContent } from "./PostsTabContent";
import { CategoriesTabContent } from "./CategoriesTabContent";
import { TagsTabContent } from "./TagsTabContent";
import { BlogPost, BlogCategory, BlogTag } from "@/data/blogData";

interface BlogAdminTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  posts: BlogPost[];
  categories: BlogCategory[];
  tags: BlogTag[];
  onCreatePost: () => void;
  onEditPost: (post: BlogPost) => void;
  onDeletePost: (post: BlogPost) => void;
  onPreviewPost: (post: BlogPost) => void;
  onUpdateCategory: (category: BlogCategory) => void;
  onDeleteCategory: (categoryId: string) => void;
  onCreateCategory: (category: Partial<BlogCategory>) => void;
  onUpdateTag: (tag: BlogTag) => void;
  onDeleteTag: (tagId: string) => void;
  onCreateTag: (tag: Partial<BlogTag>) => void;
}

export const BlogAdminTabs = ({
  activeTab,
  setActiveTab,
  posts,
  categories,
  tags,
  onCreatePost,
  onEditPost,
  onDeletePost,
  onPreviewPost,
  onUpdateCategory,
  onDeleteCategory,
  onCreateCategory,
  onUpdateTag,
  onDeleteTag,
  onCreateTag
}: BlogAdminTabsProps) => {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="posts">Posts ({posts.length})</TabsTrigger>
        <TabsTrigger value="categories">Categories</TabsTrigger>
        <TabsTrigger value="tags">Tags</TabsTrigger>
      </TabsList>

      <TabsContent value="posts" className="space-y-6">
        <PostsTabContent
          posts={posts}
          onCreatePost={onCreatePost}
          onEditPost={onEditPost}
          onDeletePost={onDeletePost}
          onPreviewPost={onPreviewPost}
        />
      </TabsContent>

      <TabsContent value="categories" className="space-y-6">
        <CategoriesTabContent
          categories={categories}
          onUpdateCategory={onUpdateCategory}
          onDeleteCategory={onDeleteCategory}
          onCreateCategory={onCreateCategory}
        />
      </TabsContent>

      <TabsContent value="tags" className="space-y-6">
        <TagsTabContent
          tags={tags}
          onUpdateTag={onUpdateTag}
          onDeleteTag={onDeleteTag}
          onCreateTag={onCreateTag}
        />
      </TabsContent>
    </Tabs>
  );
};
