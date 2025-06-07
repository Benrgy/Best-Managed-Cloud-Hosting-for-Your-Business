
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogCategory } from "@/data/blogData";
import { CategorySEOAnalysisCard } from "./seo/CategorySEOAnalysisCard";
import { BasicSEOForm } from "./seo/BasicSEOForm";
import { SocialMediaForm } from "./seo/SocialMediaForm";
import { AdvancedSEOForm } from "./seo/AdvancedSEOForm";

interface CategorySEOProps {
  category: BlogCategory;
  onUpdate: (updates: Partial<BlogCategory>) => void;
}

export const CategorySEO = ({ category, onUpdate }: CategorySEOProps) => {
  const [seoData, setSeoData] = useState({
    metaTitle: category.metaTitle || category.name,
    metaDescription: category.metaDescription || "",
    keywords: category.keywords || "",
    focusKeyword: category.focusKeyword || "",
    canonicalUrl: category.canonicalUrl || "",
    ogTitle: category.ogTitle || category.name,
    ogDescription: category.ogDescription || category.description,
    twitterTitle: category.twitterTitle || category.name,
    twitterDescription: category.twitterDescription || category.description,
    noIndex: category.noIndex || false,
    noFollow: category.noFollow || false,
    schema: category.schema || ""
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    const updated = { ...seoData, [field]: value };
    setSeoData(updated);
    onUpdate(updated);
  };

  return (
    <div className="space-y-6">
      <CategorySEOAnalysisCard category={category} seoData={seoData} />

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
