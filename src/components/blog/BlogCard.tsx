"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { type Blog } from "@prisma/client"

export const BlogCard = ({ blog, className }: { blog: Blog; className?: string }) => {
  return (
    <Link href={`/blog/${blog.blogUrl}`} className="group block">
      <div className={cn(
        // Base Layout
        "relative flex flex-col h-full bg-white dark:bg-zinc-900 overflow-hidden",
        
        // ✅ SHARP CORNERS (rounded-none)
        "rounded-none", 
        
        // Neubrutalism Borders & Shadow
        "border border-gray-200",
        "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
        
        className
      )}>
        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden">
             <img 
            src={blog.imageUrl || "/placeholder-blog.jpg"} 
            alt={blog.headline}
            className="h-full w-full object-cover"
          />
           {/* kept category tag sharp/square to match theme */}
           <div className="absolute top-2 right-2 bg-[#002766] text-white text-[11px] sm:text-xs font-bold px-2 py-1 ">
            {blog.category.toUpperCase()}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-md md:text-lg font-bold leading-snug mb-2 group-hover:underline  underline-offset-4 ">
            {blog.headline}
          </h3>
          
          <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4 font-medium">
            {blog.metaDescription}
          </p>
          
          <div className="mt-auto flex items-center justify-between text-xs font-bold border-t-2 border-dashed border-zinc-300 dark:border-zinc-700 pt-3 opacity-75">
            <span>By {blog.authorName}</span>
            <span>{new Date(blog.createdAt).toLocaleDateString('en-GB')}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}