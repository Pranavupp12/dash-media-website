"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
  onUpdate: () => void;
}

export function EditUserModal({ isOpen, onClose, user, onUpdate }: EditUserModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, setValue, reset } = useForm();

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("role", user.role);
      setValue("password", ""); // Reset password field
    }
  }, [user, setValue]);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/admin/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("User updated successfully");
        onUpdate();
        onClose();
      } else {
        toast.error("Failed to update user");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>Update account details. Leave password blank to keep it unchanged.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input {...register("name", { required: true })} />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input {...register("email", { required: true })} />
          </div>
          <div className="space-y-2">
            <Label>New Password (Optional)</Label>
            <Input {...register("password")} type="password" placeholder="New password" />
          </div>
          <div className="space-y-2">
            <Label>Role</Label>
            <Select onValueChange={(val) => setValue("role", val)} defaultValue={user?.role || "EDITOR"}>
              <SelectTrigger><SelectValue placeholder="Select Role" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="EDITOR">Editor</SelectItem>
                <SelectItem value="ADMIN">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}