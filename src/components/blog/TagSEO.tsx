
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogTag } from "@/data/blogData";
import { SEOAnalysisCard } from "./seo/SEOAnalysisCard";
import { BasicSEOForm } from "./seo/BasicSEOForm";
import { SocialMediaForm } from "./seo/SocialMediaForm";
import { AdvancedSEOForm } from "./seo/AdvancedSEOForm";

interface TagSEOProps {
  tag: BlogTag;
  onUpdate: (updates: Partial<BlogTag>) => void;
}

export const TagSEO = ({ tag, onUpdate }: TagSEOProps) => {
  const [seoData, setSeoData] = useState({
    metaTitle: tag.metaTitle || tag.name,
    metaDescription: tag.metaDescription || "",
    keywords: tag.keywords || "",
    focusKeyword: tag.focusKeyword || "",
    canonicalUrl: tag.canonicalUrl || "",
    ogTitle: tag.ogTitle || tag.name,
    ogDescription: tag.ogDescription || tag.description,
    twitterTitle: tag.twitterTitle || tag.name,
    twitterDescription: tag.twitterDescription || tag.description,
    noIndex: tag.noIndex || false,
    noFollow: tag.noFollow || false,
    schema: tag.schema || ""
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    const updated = { ...seoData, [field]: value };
    setSeoData(updated);
    onUpdate(updated);
  };

  return (
    <div className="space-y-6">
      <SEOAnalysisCard tag={tag} seoData={seoData} />

      <Tabs defaultValue="basic" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic SEO</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4">
          <BasicSEOForm seoData={seoData} onInputChange={handleInputChange} />
        </TabsContent>

        <TabsContent value="social" className="space-y-4">
          <SocialMediaForm seoData={seoData} onInputChange={handleInputChange} />
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <AdvancedSEOForm seoData={seoData} onInputChange={handleInputChange} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
