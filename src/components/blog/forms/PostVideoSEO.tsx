
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface PostVideoSEOProps {
  videoSEO: {
    title: string;
    description: string;
    duration: string;
    thumbnailUrl: string;
    transcript: string;
  };
  onFieldChange: (field: string, value: any) => void;
}

export const PostVideoSEO = ({ videoSEO, onFieldChange }: PostVideoSEOProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Video SEO (if applicable)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="videoTitle">Video Title</Label>
          <Input
            id="videoTitle"
            value={videoSEO?.title || ""}
            onChange={(e) => onFieldChange('title', e.target.value)}
            placeholder="Video title for SEO"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="videoDescription">Video Description</Label>
          <Textarea
            id="videoDescription"
            value={videoSEO?.description || ""}
            onChange={(e) => onFieldChange('description', e.target.value)}
            placeholder="Video description for SEO"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="videoDuration">Video Duration</Label>
            <Input
              id="videoDuration"
              value={videoSEO?.duration || ""}
              onChange={(e) => onFieldChange('duration', e.target.value)}
              placeholder="PT5M30S (5 min 30 sec)"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="videoThumbnail">Video Thumbnail URL</Label>
            <Input
              id="videoThumbnail"
              value={videoSEO?.thumbnailUrl || ""}
              onChange={(e) => onFieldChange('thumbnailUrl', e.target.value)}
              placeholder="https://example.com/thumb.jpg"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="videoTranscript">Video Transcript (SEO boost)</Label>
          <Textarea
            id="videoTranscript"
            value={videoSEO?.transcript || ""}
            onChange={(e) => onFieldChange('transcript', e.target.value)}
            placeholder="Full video transcript for SEO..."
            rows={6}
          />
        </div>
      </CardContent>
    </Card>
  );
};
