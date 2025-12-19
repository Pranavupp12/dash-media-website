import { PrismaClient } from '@prisma/client';
import Image from 'next/image';
import { type Metadata } from 'next';
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

// ✅ Import the new Sidebar Component
import { BlogSidebar } from '@/components/blog/BlogSidebar';

const prisma = new PrismaClient();

type Props = {
  params: Promise<{ blogUrl: string }>
}

async function getBlogByUrl(blogUrl: string) {
  const blog = await prisma.blog.findUnique({
    where: { blogUrl: blogUrl },
  });
  return blog;
}

function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = await getBlogByUrl(resolvedParams.blogUrl);

  if (!blog) return { title: "Not Found" };
  
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: blog.metaKeywords.split(','),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { blogUrl } = await params;
  const blog = await getBlogByUrl(blogUrl);

  if (!blog) {
    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold text-gray-900">Post Not Found</h1>
            <Link href="/" className="mt-4 text-blue-600 hover:underline flex items-center gap-2">
                <ChevronLeft className="w-4 h-4"/> Return Home
            </Link>
        </div>
    );
  }

  return (
    <article className="min-h-screen bg-gray-50 dark:bg-zinc-950 pb-20">
      
      {/* --- Header Section --- */}
      <div className="bg-gradient-to-b from-blue-50 to-gray-50 dark:from-zinc-900 dark:to-zinc-950 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-5 pt-32 sm:pt-35 pb-16 max-w-6xl text-center">
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge variant="secondary" className="px-3 py-1 bg-primary text-white rounded-full text-xs sm:text-sm font-medium border-none">
                {blog.category}
            </Badge>
          </div> 

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 leading-tight mb-8 max-w-4xl mx-auto">
            {blog.headline}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 dark:text-gray-400 text-sm md:text-base">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold">
                    {blog.authorName.charAt(0)}
                </div>
                <span className="font-medium text-gray-900 dark:text-gray-200">{blog.authorName}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
            <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                <time dateTime={blog.createdAt.toISOString()}>
                    {formatDate(blog.createdAt)}
                </time>
            </div>
          </div>

        </div>
      </div>

      {/* --- Two Column Layout --- */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column (Content) - Takes 8 columns (approx 2/3) */}
            <div className="lg:col-span-8">
                
                {blog.imageUrl && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-15 ">
                    <Image 
                        src={blog.imageUrl} 
                        alt={blog.headline} 
                        fill 
                        className="object-cover" 
                        priority
                    />
                </div>
                )}

                <div 
                    className="prose prose-blue dark:prose-invert max-w-none 
                                prose-headings:font-bold prose-h1:text-gray-900 
                                prose-a:no-underline hover:prose-a:underline
                                prose-img:rounded-xl" 
                    dangerouslySetInnerHTML={{ __html: blog.content }} 
                />

                <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                    <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors">
                        <ChevronLeft className="w-4 h-4 mr-1"/> Back to all posts
                    </Link>
                </div>
            </div>

            {/* Right Column (Sidebar) - Takes 4 columns (approx 1/3) */}
            <div className="lg:col-span-4 space-y-8">
                {/* ✅ Use the imported component */}
                <BlogSidebar currentBlogId={blog.id} />
            </div>

        </div>
      </div>
    </article>
  );
}