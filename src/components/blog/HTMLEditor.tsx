
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Eye } from "lucide-react";

interface HTMLEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export const HTMLEditor = ({ content, onChange }: HTMLEditorProps) => {
  const [htmlContent, setHtmlContent] = useState(content);

  const handleHTMLChange = (value: string) => {
    setHtmlContent(value);
    onChange(value);
  };

  const insertHTMLSnippet = (snippet: string) => {
    const textarea = document.querySelector('textarea[data-html-editor="true"]') as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newValue = htmlContent.substring(0, start) + snippet + htmlContent.substring(end);
      setHtmlContent(newValue);
      onChange(newValue);
    }
  };

  const htmlSnippets = [
    { name: 'H1', code: '<h1>Heading 1</h1>' },
    { name: 'H2', code: '<h2>Heading 2</h2>' },
    { name: 'H3', code: '<h3>Heading 3</h3>' },
    { name: 'Paragraph', code: '<p>Your paragraph text here...</p>' },
    { name: 'Bold', code: '<strong>Bold text</strong>' },
    { name: 'Italic', code: '<em>Italic text</em>' },
    { name: 'Link', code: '<a href="https://example.com" title="Link title">Link text</a>' },
    { name: 'Image', code: '<img src="image-url.jpg" alt="Alt text" title="Image title" loading="lazy" />' },
    { name: 'Video', code: '<video controls><source src="video.mp4" type="video/mp4">Your browser does not support the video tag.</video>' },
    { name: 'Blockquote', code: '<blockquote cite="https://source.com">Quote text</blockquote>' },
    { name: 'Code Block', code: '<pre><code>Your code here</code></pre>' },
    { name: 'Table', code: '<table><thead><tr><th>Header 1</th><th>Header 2</th></tr></thead><tbody><tr><td>Cell 1</td><td>Cell 2</td></tr></tbody></table>' },
    { name: 'List', code: '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>' },
    { name: 'Schema Article', code: '<script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"Article Title","author":{"@type":"Person","name":"Author Name"},"datePublished":"2024-01-01","dateModified":"2024-01-01","description":"Article description"}</script>' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code size={20} />
          HTML Editor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="editor" className="space-y-4">
          <TabsList>
            <TabsTrigger value="editor">HTML Editor</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>

          <TabsContent value="editor" className="space-y-4">
            <div className="flex flex-wrap gap-1 p-2 border rounded-lg bg-gray-50">
              {htmlSnippets.map((snippet) => (
                <Button
                  key={snippet.name}
                  variant="ghost"
                  size="sm"
                  onClick={() => insertHTMLSnippet(snippet.code)}
                  className="text-xs"
                >
                  {snippet.name}
                </Button>
              ))}
            </div>

            <Textarea
              data-html-editor="true"
              value={htmlContent}
              onChange={(e) => handleHTMLChange(e.target.value)}
              className="min-h-[400px] font-mono text-sm"
              placeholder="Enter your HTML content..."
            />
          </TabsContent>

          <TabsContent value="preview" className="space-y-4">
            <div className="border rounded-lg p-4 min-h-[400px] prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
