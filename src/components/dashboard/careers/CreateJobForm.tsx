'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label"; // Ensure Label is imported

export function CreateJobForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/careers', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) throw new Error("Failed");

      toast.success("Job Posted Successfully!");
      (e.target as HTMLFormElement).reset();
      router.refresh(); 
    } catch (error) {
      toast.error("Failed to post job.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Subheader 1 */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Role Details</h4>
        <div className="space-y-3">
            <div className="grid gap-2">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" name="title" placeholder="e.g. Senior SEO Expert" required />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" name="department" placeholder="e.g. Marketing" required />
            </div>
        </div>
      </div>

      {/* Subheader 2 */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider border-t pt-4">Logistics</h4>
        <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" name="location" placeholder="e.g. Remote / Delhi" required />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="type">Type</Label>
                <Input id="type" name="type" placeholder="e.g. Full-time" required />
            </div>
        </div>
      </div>

      {/* Subheader 3 */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider border-t pt-4">Description</h4>
        <div className="grid gap-2">
            <Label htmlFor="description">Job Description</Label>
            <Textarea id="description" name="description" placeholder="Enter key responsibilities and requirements..." rows={5} required />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Publishing..." : "Publish Job"}
      </Button>
    </form>
  );
}