import { BlogCard } from "@/components/blog/BlogCard";
import { PrismaClient } from "@prisma/client";

// Ideally import your global prisma instance: import prisma from "@/lib/prisma"
const prisma = new PrismaClient(); 

export async function BlogSection() {
  // ✅ Fetch directly from DB on the server
  // This runs at build time (or when revalidating)
  const latestBlogs = await prisma.blog.findMany({
    take: 3,
    orderBy: {
      createdAt: 'desc',
    },
    // Add 'include' here if your BlogCard needs category or author details
    // include: { category: true, author: true } 
  });

  return (
    <section className="py-15 md:py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-2 md:mb-10">
          <h2 className="text-4xl lg:text-6xl font-regular tracking-tight font-heading text-primary">
            Our{" "}
            <span
              className="bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient font-semibold"
              style={{ backgroundSize: "300% 100%" }}
            >
              Latest Blogs
            </span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground leading-relaxed mx-auto md:mt-6 p-5 md:p-0">
            Stay updated with the latest trends and insights in digital marketing.
          </p>
        </div>

        {/* ✅ No loading state needed - data is already here! */}
        {latestBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 sm:px-5">
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            No blog posts yet. Check back soon!
          </p>
        )}
      </div>
    </section>
  );
}