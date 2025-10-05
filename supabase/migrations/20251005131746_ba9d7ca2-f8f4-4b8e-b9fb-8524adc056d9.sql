-- Fix search_path for update_blog_posts_updated_at function
-- Drop the trigger first, then the function, then recreate both with proper security settings
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON public.blog_posts;
DROP FUNCTION IF EXISTS public.update_blog_posts_updated_at();

CREATE OR REPLACE FUNCTION public.update_blog_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public;

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_blog_posts_updated_at();