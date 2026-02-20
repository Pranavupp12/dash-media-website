import Link from "next/link";
import Image from "next/image";

export function BlogGridItem({ blog }: { blog: any }) {
  return (
    <div className="group cursor-pointer">
      <Link href={`/blog/${blog.blogUrl}`} className="block relative h-72 w-full rounded-2xl overflow-hidden mb-6">
        <Image
          src={blog.imageUrl || "/placeholder.jpg"}
          alt={blog.headline}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-primary leading-snug group-hover:text-accent transition-colors">
          {blog.headline}
        </h3>
        <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          {new Date(blog.createdAt).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' })}
          <span className="mx-2 opacity-30">by</span>
          <span className="text-primary">{blog.authorName}</span>
        </p>
      </div>
    </div>
  );
}