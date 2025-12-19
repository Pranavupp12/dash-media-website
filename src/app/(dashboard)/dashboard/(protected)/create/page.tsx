'use client';

import { BlogForm } from "@/components/dashboard/BlogForm";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CreateBlogPage() {
  const router = useRouter();

  const handleFormSubmit = () => {
    toast.success("Blog post created successfully!");
    // Redirect back to the main list after creating
    router.push("/dashboard");
  };

  return (
    <div className="max-w-4xl mx-auto py-6">
       <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Create New Post</h2>
          <p className="text-muted-foreground">
            Write a new article for your audience.
          </p>
        </div>
      <div className="p-8 border rounded-lg bg-background shadow-sm">
        <BlogForm onFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}