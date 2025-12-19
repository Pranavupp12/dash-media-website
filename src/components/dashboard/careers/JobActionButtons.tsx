'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { EditJobModal } from "./EditJobModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function JobActionButtons({ job }: { job: any }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/careers/${job.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed");
      
      toast.success("Job deleted successfully");
      router.refresh();
      setIsDeleteOpen(false);
    } catch (error) {
      toast.error("Failed to delete job");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="flex gap-2 mt-2">
        <Button variant="outline" size="sm" onClick={() => setIsEditOpen(true)} className="h-8 w-8 p-0 border-none shadow-none text-blue-500 hover:text-blue-500 hover:bg-gray-200">
          <Pencil className="h-4 w-4" />
        </Button>
        <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setIsDeleteOpen(true)} 
            className="h-8 w-8 p-0 border-none shadow-none text-red-500 hover:text-red-500 hover:bg-gray-200 "
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Edit Modal */}
      {isEditOpen && (
        <EditJobModal 
            job={job} 
            isOpen={isEditOpen} 
            onClose={() => setIsEditOpen(false)} 
        />
      )}

      {/* Delete Confirmation Modal (Standard Dialog) */}
      <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete Job Posting?</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete <b>{job.title}</b>? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 ">
            <Button variant="outline" onClick={() => setIsDeleteOpen(false)} disabled={isDeleting}>
                Cancel
            </Button>
            <Button 
                variant="destructive" 
                onClick={handleDelete}
                disabled={isDeleting}
            >
                {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}