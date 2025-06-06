
import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  List, 
  ListOrdered,
  Link,
  Image,
  Video,
  Quote,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Type,
  Strikethrough
} from "lucide-react";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export const RichTextEditor = ({ content, onChange, placeholder = "Write your content..." }: RichTextEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [activeFormats, setActiveFormats] = useState<Set<string>>(new Set());

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    updateActiveFormats();
    updateContent();
  };

  const updateContent = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const updateActiveFormats = () => {
    const formats = new Set<string>();
    
    if (document.queryCommandState('bold')) formats.add('bold');
    if (document.queryCommandState('italic')) formats.add('italic');
    if (document.queryCommandState('underline')) formats.add('underline');
    if (document.queryCommandState('strikeThrough')) formats.add('strikethrough');
    if (document.queryCommandState('justifyLeft')) formats.add('alignLeft');
    if (document.queryCommandState('justifyCenter')) formats.add('alignCenter');
    if (document.queryCommandState('justifyRight')) formats.add('alignRight');
    if (document.queryCommandState('insertUnorderedList')) formats.add('bulletList');
    if (document.queryCommandState('insertOrderedList')) formats.add('numberedList');

    setActiveFormats(formats);
  };

  const insertHeading = (level: number) => {
    execCommand('formatBlock', `h${level}`);
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      execCommand('createLink', url);
    }
  };

  const insertImage = () => {
    const url = prompt('Enter image URL:');
    const alt = prompt('Enter alt text:');
    if (url) {
      const img = `<img src="${url}" alt="${alt || ''}" class="w-full h-auto rounded-lg my-4" loading="lazy" />`;
      execCommand('insertHTML', img);
    }
  };

  const insertVideo = () => {
    const url = prompt('Enter video URL (YouTube/Vimeo):');
    if (url) {
      let embedCode = '';
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        const videoId = url.includes('youtu.be') 
          ? url.split('/').pop()?.split('?')[0]
          : url.split('v=')[1]?.split('&')[0];
        embedCode = `<div class="relative w-full h-0 pb-[56.25%] my-4"><iframe class="absolute top-0 left-0 w-full h-full rounded-lg" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen loading="lazy"></iframe></div>`;
      } else if (url.includes('vimeo.com')) {
        const videoId = url.split('/').pop();
        embedCode = `<div class="relative w-full h-0 pb-[56.25%] my-4"><iframe class="absolute top-0 left-0 w-full h-full rounded-lg" src="https://player.vimeo.com/video/${videoId}" frameborder="0" allowfullscreen loading="lazy"></iframe></div>`;
      } else {
        embedCode = `<video class="w-full h-auto rounded-lg my-4" controls><source src="${url}" type="video/mp4">Your browser does not support the video tag.</video>`;
      }
      execCommand('insertHTML', embedCode);
    }
  };

  const insertBlockquote = () => {
    execCommand('formatBlock', 'blockquote');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'b':
          e.preventDefault();
          execCommand('bold');
          break;
        case 'i':
          e.preventDefault();
          execCommand('italic');
          break;
        case 'u':
          e.preventDefault();
          execCommand('underline');
          break;
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Editor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Toolbar */}
        <div className="flex flex-wrap gap-1 p-2 border rounded-lg bg-gray-50">
          {/* Text Formatting */}
          <Toggle 
            pressed={activeFormats.has('bold')}
            onPressedChange={() => execCommand('bold')}
            size="sm"
          >
            <Bold size={16} />
          </Toggle>
          <Toggle 
            pressed={activeFormats.has('italic')}
            onPressedChange={() => execCommand('italic')}
            size="sm"
          >
            <Italic size={16} />
          </Toggle>
          <Toggle 
            pressed={activeFormats.has('underline')}
            onPressedChange={() => execCommand('underline')}
            size="sm"
          >
            <Underline size={16} />
          </Toggle>
          <Toggle 
            pressed={activeFormats.has('strikethrough')}
            onPressedChange={() => execCommand('strikeThrough')}
            size="sm"
          >
            <Strikethrough size={16} />
          </Toggle>

          <Separator orientation="vertical" className="h-8" />

          {/* Headings */}
          <Button variant="ghost" size="sm" onClick={() => insertHeading(1)}>
            <Heading1 size={16} />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => insertHeading(2)}>
            <Heading2 size={16} />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => insertHeading(3)}>
            <Heading3 size={16} />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => execCommand('formatBlock', 'p')}>
            <Type size={16} />
          </Button>

          <Separator orientation="vertical" className="h-8" />

          {/* Alignment */}
          <Toggle 
            pressed={activeFormats.has('alignLeft')}
            onPressedChange={() => execCommand('justifyLeft')}
            size="sm"
          >
            <AlignLeft size={16} />
          </Toggle>
          <Toggle 
            pressed={activeFormats.has('alignCenter')}
            onPressedChange={() => execCommand('justifyCenter')}
            size="sm"
          >
            <AlignCenter size={16} />
          </Toggle>
          <Toggle 
            pressed={activeFormats.has('alignRight')}
            onPressedChange={() => execCommand('justifyRight')}
            size="sm"
          >
            <AlignRight size={16} />
          </Toggle>

          <Separator orientation="vertical" className="h-8" />

          {/* Lists */}
          <Toggle 
            pressed={activeFormats.has('bulletList')}
            onPressedChange={() => execCommand('insertUnorderedList')}
            size="sm"
          >
            <List size={16} />
          </Toggle>
          <Toggle 
            pressed={activeFormats.has('numberedList')}
            onPressedChange={() => execCommand('insertOrderedList')}
            size="sm"
          >
            <ListOrdered size={16} />
          </Toggle>

          <Separator orientation="vertical" className="h-8" />

          {/* Media & Links */}
          <Button variant="ghost" size="sm" onClick={insertLink}>
            <Link size={16} />
          </Button>
          <Button variant="ghost" size="sm" onClick={insertImage}>
            <Image size={16} />
          </Button>
          <Button variant="ghost" size="sm" onClick={insertVideo}>
            <Video size={16} />
          </Button>
          <Button variant="ghost" size="sm" onClick={insertBlockquote}>
            <Quote size={16} />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => execCommand('formatBlock', 'pre')}>
            <Code size={16} />
          </Button>
        </div>

        {/* Editor */}
        <div
          ref={editorRef}
          contentEditable
          dangerouslySetInnerHTML={{ __html: content }}
          className="min-h-[400px] p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 prose prose-lg max-w-none"
          style={{ whiteSpace: 'pre-wrap' }}
          onInput={updateContent}
          onKeyUp={updateActiveFormats}
          onMouseUp={updateActiveFormats}
          onKeyDown={handleKeyDown}
          suppressContentEditableWarning={true}
          placeholder={placeholder}
        />

        <div className="text-xs text-gray-500">
          Use Ctrl+B for bold, Ctrl+I for italic, Ctrl+U for underline
        </div>
      </CardContent>
    </Card>
  );
};
