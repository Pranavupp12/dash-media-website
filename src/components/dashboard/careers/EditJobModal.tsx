'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

interface EditJobModalProps {
  job: any;
  isOpen: boolean;
  onClose: () => void;
}

export function EditJobModal({ job, isOpen, onClose }: EditJobModalProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`/api/careers/${job.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      toast.success("Job Updated Successfully!");
      router.refresh();
      onClose();
    } catch (error) {
      toast.error("Failed to update job.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Job Posting</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-3">
                <div className="grid gap-2">
                    <Label htmlFor="title">Job Title</Label>
                    <Input id="title" name="title" defaultValue={job.title} required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="department">Department</Label>
                    <Input id="department" name="department" defaultValue={job.department} required />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" name="location" defaultValue={job.location} required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="type">Type</Label>
                    <Input id="type" name="type" defaultValue={job.type} required />
                </div>
            </div>

            <div className="grid gap-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea id="description" name="description" defaultValue={job.description} rows={5} required />
            </div>

            <DialogFooter>
                <Button type="button" variant="outline" onClick={onClose} disabled={loading}>Cancel</Button>
                <Button type="submit" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Changes
                </Button>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}