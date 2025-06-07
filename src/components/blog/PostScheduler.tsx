
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Calendar, Clock, Send } from "lucide-react";

interface PostSchedulerProps {
  publishDate?: string;
  publishTime?: string;
  scheduled?: boolean;
  autoPublish?: boolean;
  onScheduleChange: (schedule: {
    publishDate: string;
    publishTime: string;
    scheduled: boolean;
    autoPublish: boolean;
  }) => void;
}

export const PostScheduler = ({ 
  publishDate = "", 
  publishTime = "", 
  scheduled = false,
  autoPublish = false,
  onScheduleChange 
}: PostSchedulerProps) => {
  const [isScheduled, setIsScheduled] = useState(scheduled);
  const [selectedDate, setSelectedDate] = useState(publishDate || new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState(publishTime || "09:00");
  const [autoPost, setAutoPost] = useState(autoPublish);

  const handleScheduleToggle = (enabled: boolean) => {
    setIsScheduled(enabled);
    updateSchedule(selectedDate, selectedTime, enabled, autoPost);
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    updateSchedule(date, selectedTime, isScheduled, autoPost);
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
    updateSchedule(selectedDate, time, isScheduled, autoPost);
  };

  const handleAutoPublishToggle = (enabled: boolean) => {
    setAutoPost(enabled);
    updateSchedule(selectedDate, selectedTime, isScheduled, enabled);
  };

  const updateSchedule = (date: string, time: string, scheduled: boolean, autoPublish: boolean) => {
    onScheduleChange({
      publishDate: date,
      publishTime: time,
      scheduled,
      autoPublish
    });
  };

  const getSchedulePreview = () => {
    if (!isScheduled) return "Publish immediately";
    const dateTime = new Date(`${selectedDate}T${selectedTime}`);
    return `Scheduled for ${dateTime.toLocaleDateString()} at ${dateTime.toLocaleTimeString()}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar size={20} />
          Post Scheduling
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="schedule-post"
            checked={isScheduled}
            onCheckedChange={handleScheduleToggle}
          />
          <Label htmlFor="schedule-post">Schedule this post</Label>
        </div>

        {isScheduled && (
          <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="publish-date">Publish Date</Label>
                <Input
                  id="publish-date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => handleDateChange(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="publish-time">Publish Time</Label>
                <Input
                  id="publish-time"
                  type="time"
                  value={selectedTime}
                  onChange={(e) => handleTimeChange(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="auto-publish"
                checked={autoPost}
                onCheckedChange={handleAutoPublishToggle}
              />
              <Label htmlFor="auto-publish">Automatically publish at scheduled time</Label>
            </div>

            <div className="flex items-center gap-2 text-sm text-blue-600">
              <Clock size={16} />
              <span>{getSchedulePreview()}</span>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label>Quick Schedule Options</Label>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                handleDateChange(tomorrow.toISOString().split('T')[0]);
                handleTimeChange("09:00");
                handleScheduleToggle(true);
              }}
            >
              Tomorrow 9 AM
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const nextWeek = new Date();
                nextWeek.setDate(nextWeek.getDate() + 7);
                handleDateChange(nextWeek.toISOString().split('T')[0]);
                handleTimeChange("09:00");
                handleScheduleToggle(true);
              }}
            >
              Next Week
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const nextMonth = new Date();
                nextMonth.setMonth(nextMonth.getMonth() + 1);
                handleDateChange(nextMonth.toISOString().split('T')[0]);
                handleTimeChange("09:00");
                handleScheduleToggle(true);
              }}
            >
              Next Month
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
