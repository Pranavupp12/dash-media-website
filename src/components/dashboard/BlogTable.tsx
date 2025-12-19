'use client';

import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { type Blog } from "@prisma/client";
import { UpdateBlogModal } from "./UpdateBlogModal"; // 👈 Import Update Modal
import { DeleteBlogModal } from "./DeleteBlogModal"; // 👈 Import Delete Modal


// ✅ 1. Helper function to format the date
function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function BlogTable({ onRefresh }: { onRefresh: () => void }) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // State for modals
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(error => console.error("Failed to fetch blogs:", error))
      .finally(() => setLoading(false));
  }, [onRefresh]);

  const handleUpdateClick = (blog: Blog) => {
    setSelectedBlog(blog);
    setIsUpdateModalOpen(true);
  };

  const handleDeleteClick = (blog: Blog) => {
    setSelectedBlog(blog);
    setIsDeleteModalOpen(true);
  };
  
  if (loading) return <p>Loading blog posts...</p>;

  return (
    <>
      <div className="mt-8 rounded-lg border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">S.No</TableHead>
              <TableHead>Blog Title</TableHead>
              <TableHead>Created on</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <TableRow key={blog.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="font-medium">{blog.headline}</TableCell>
                  <TableCell>{formatDate(new Date(blog.createdAt))}</TableCell>
                  <TableCell>{blog.authorName}</TableCell>
                  <TableCell>{blog.category}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleUpdateClick(blog)}>Update</Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeleteClick(blog)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : ( <TableRow><TableCell colSpan={4} className="text-center">No blog posts found.</TableCell></TableRow> )}
          </TableBody>
        </Table>
      </div>

      {/* Render the separate modal components */}
      <UpdateBlogModal
        isOpen={isUpdateModalOpen}
        setIsOpen={setIsUpdateModalOpen}
        blog={selectedBlog}
        onUpdate={onRefresh}
      />
      <DeleteBlogModal
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        blog={selectedBlog}
        onDelete={onRefresh}
      />
    </>
  );
}