'use client'; 

import { useEffect, useState } from "react";
import { BlogCard } from "@/components/blog/BlogCard";
import { type Blog } from "@prisma/client";


export function BlogSection() {
  const [latestBlogs, setLatestBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch blogs
  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs?latest=3'); // We'll fetch the latest 3
      const data = await response.json();
      setLatestBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial data
  useEffect(() => {
    fetchBlogs();
  }, []);


  return (
    <section className="py-15 md:py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-2 md:mb-10 ">
          <h2 className="text-4xl lg:text-6xl font-regular tracking-tight font-heading text-primary">
            Our  
            {" "}
            <span
              className="bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient font-semibold"
              style={{ backgroundSize: "300% 100%" }}
            >
              Latest Blogs
            </span>
          </h2>
          <p className=" text-md sm:text-lg text-muted-foreground leading-relaxed mx-auto md:mt-6 p-5 md:p-0">
            Stay updated with the latest trends and insights in digital marketing.
          </p>
        </div>

        {loading ? (
          <p className="text-center">Loading latest posts...</p>
        ) : latestBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 sm:px-5 ">
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No blog posts yet. Check back soon!</p>
        )}
      </div>
    </section>
  );
}