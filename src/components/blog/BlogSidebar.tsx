import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import Image from 'next/image';

const prisma = new PrismaClient();

// Helper to format date locally in this component
function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

// Data fetching function
async function getLatestBlogs(currentBlogId: string) {
  const blogs = await prisma.blog.findMany({
    where: {
      NOT: {
        id: currentBlogId
      }
    },
    take: 5,
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      headline: true,
      blogUrl: true,
      createdAt: true,
      category: true,
      imageUrl: true 
    }
  });
  return blogs;
}

export async function BlogSidebar({ currentBlogId }: { currentBlogId: string }) {
  const latestBlogs = await getLatestBlogs(currentBlogId);

  return (
    <aside className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 p-6 sticky top-24">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-100 dark:border-gray-800">
        Read More
      </h3>
      
      <div className="flex flex-col gap-6">
        {latestBlogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.blogUrl}`} className="group flex gap-4 items-start">
            {/* Small Thumbnail */}
            {blog.imageUrl && (
              <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image 
                  src={blog.imageUrl} 
                  alt={blog.headline} 
                  fill 
                  className="object-cover" 
                />
              </div>
            )}
            
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-primary dark:text-blue-400">
                {blog.category}
              </span>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:underline underline-offset-4 transition-colors line-clamp-2">
                {blog.headline}
              </h4>
              <time className="text-xs text-gray-500 mt-auto">
                {formatDate(blog.createdAt)}
              </time>
            </div>
          </Link>
        ))}

        {latestBlogs.length === 0 && (
            <p className="text-sm text-gray-500">No other posts available.</p>
        )}
      </div>
    </aside>
  );
}