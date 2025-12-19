'use client';

import { BlogTable } from "@/components/dashboard/BlogTable";
import { toast } from "sonner";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleActionComplete = () => {
    setRefreshKey(prev => prev + 1); 
    toast.success("Action completed successfully!");
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Blog Posts</h2>
          <p className="text-muted-foreground">
            Manage your blog content here.
          </p>
        </div>
        <Link href="/dashboard/create">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create New Post
          </Button>
        </Link>
      </div>
        <BlogTable key={refreshKey} onRefresh={handleActionComplete} />
    </div>
  );
}