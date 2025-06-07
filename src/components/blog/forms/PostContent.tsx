
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { RichTextEditor } from "../RichTextEditor";
import { HTMLEditor } from "../HTMLEditor";

interface PostContentProps {
  content: string;
  onChange: (content: string) => void;
}

export const PostContent = ({ content, onChange }: PostContentProps) => {
  const [editorMode, setEditorMode] = useState<'visual' | 'html'>('visual');

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Content Editor</CardTitle>
          <div className="flex gap-2">
            <Button
              variant={editorMode === 'visual' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setEditorMode('visual')}
            >
              Visual
            </Button>
            <Button
              variant={editorMode === 'html' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setEditorMode('html')}
            >
              <Code size={16} className="mr-1" />
              HTML
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {editorMode === 'visual' ? (
          <RichTextEditor
            content={content}
            onChange={onChange}
            placeholder="Write your post content..."
          />
        ) : (
          <HTMLEditor
            content={content}
            onChange={onChange}
          />
        )}
      </CardContent>
    </Card>
  );
};
