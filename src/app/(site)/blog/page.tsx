import Blog from "@/components/ui/blog/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog and education",
  description:
    "This page parpose is about learning and information about technologies and other ...",
};

const BlogPage = () => {
  return (
    <div className='min-h-screen pt-20'>
      <Blog/>
    </div>
  );
};

export default BlogPage;
