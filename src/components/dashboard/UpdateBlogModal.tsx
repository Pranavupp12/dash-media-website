'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BlogForm } from "./BlogForm";
import { type Blog } from "@prisma/client";


interface UpdateBlogModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  blog: Blog | null;
  onUpdate: () => void;
}

export function UpdateBlogModal({ isOpen, setIsOpen, blog, onUpdate }: UpdateBlogModalProps) {
  // Don't render the modal if there's no blog selected
  if (!blog) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Update Blog Post</DialogTitle>
        </DialogHeader>
        <BlogForm 
          initialData={blog} 
          onFormSubmit={() => {
            setIsOpen(false); // Close the modal on success
            onUpdate();       // Trigger a refresh in the parent
          }} 
        />
      </DialogContent>
    </Dialog>
  );
}