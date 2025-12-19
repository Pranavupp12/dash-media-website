'use client';

import {
  Dialog, // ✅ Use Dialog, not AlertDialog
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose, // ✅ Import DialogClose for the button in the footer
} from "@/components/ui/dialog"; // ✅ Ensure import is from dialog
import { Button } from "@/components/ui/button"; // Import Button if not already there
import { type Blog } from "@prisma/client";
import { toast } from "sonner";

interface DeleteBlogModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  blog: Blog | null;
  onDelete: () => void;
}

export function DeleteBlogModal({ isOpen, setIsOpen, blog, onDelete }: DeleteBlogModalProps) {
  const confirmDelete = async () => {
    if (!blog) return;

    try {
      const response = await fetch(`/api/blogs/${blog.id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error("Failed to delete post");

      onDelete(); // Trigger a refresh in the parent
    } catch (error) {
      toast.error("An error occurred while deleting the post.");
    } finally {
      setIsOpen(false); // Close the modal
    }
  };
  
  if (!blog) return null;

  return (
    // ✅ Make sure this is Dialog
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* ✅ Make sure this is DialogContent */}
      <DialogContent> 
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the blog post titled "{blog.headline}".
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {/* Using DialogClose with Button for the Cancel button */}
          <DialogClose asChild> 
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive" onClick={confirmDelete}>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}