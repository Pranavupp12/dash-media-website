import { PrismaClient } from '@prisma/client';
import { BlogCard } from '@/components/blog/BlogCard';
import { PaginationControls } from '@/components/ui/PaginationControls';

const prisma = new PrismaClient();
const BLOGS_PER_PAGE = 6;

// ✅ 1. Updated data fetching function to handle pagination
async function getPaginatedBlogs({ page }: { page: number }) {
  const skip = (page - 1) * BLOGS_PER_PAGE;
  const blogs = await prisma.blog.findMany({
    skip: skip,
    take: BLOGS_PER_PAGE,
    orderBy: {
      createdAt: 'desc',
    },
  });
  return blogs;
}

// ✅ 2. New function to get the total number of blogs for calculating total pages
async function getTotalBlogCount() {
    const count = await prisma.blog.count();
    return count;
}

// ✅ 3. The page now accepts searchParams to get the current page number
export default async function BlogPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
 const resolvedParams = await searchParams;
  
  const page = Number(resolvedParams?.page ?? '1');

  const blogs = await getPaginatedBlogs({ page });
  const totalBlogs = await getTotalBlogCount();
  const totalPages = Math.ceil(totalBlogs / BLOGS_PER_PAGE);

  return (
    <>
<section className="py-30 md:py-35 bg-gradient-to-b from-blue-50 to-gray-50">
    <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-4xl md:text-7xl font-regular tracking-tight font-heading text-primary">
            Our  
            {" "}
            <span
              className="bg-gradient-to-r from-[#FF0080] via-accent to-[#FF0080] bg-clip-text text-transparent animate-gradient font-semibold"
              style={{ backgroundSize: "300% 100%" }}
            >
              Latest Blogs
            </span>
          </h2>
          <p className="text-md md:text-xl text-muted-foreground leading-relaxed mx-auto md:mt-6 p-5 md:p-0">
            Stay updated with the latest trends and insights in digital marketing.
          </p>
        </div>

          {blogs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-13 sm:px-5 lg:p-0">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>

              {/* ✅ 4. Add the pagination controls at the bottom */}
              <PaginationControls totalPages={totalPages} currentPage={page} />
            </>
          ) : (
            <p className="text-center text-muted-foreground">
              No blog posts have been published yet. Check back soon!
            </p>
          )}
        </div>
      </section>
    </>
  );
}
