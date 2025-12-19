"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; // ✅ Uses your custom Card
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

type ProfileFormData = {
  name: string;
  email: string;
};

export default function ProfilePage() {
  // 1. Get session data and the 'update' function
  const { data: session, update } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // 2. Setup React Hook Form
  const { 
    register, 
    handleSubmit, 
    setValue, 
    formState: { errors } 
  } = useForm<ProfileFormData>();

  // 3. Pre-fill the form once session data is available
  useEffect(() => {
    if (session?.user) {
      setValue("name", session.user.name || "");
      setValue("email", session.user.email || "");
    }
  }, [session, setValue]);

  // 4. Handle Form Submission
  const onSubmit = async (data: ProfileFormData) => {
    setIsLoading(true);
    try {
      // A. Call the API to update the database
      const response = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name }),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      // B. Update the client-side session immediately
      await update({ name: data.name });

      toast.success("Profile updated successfully!");
      router.refresh(); 
      
    } catch (error) {
      toast.error("Update Failed", {
        description: "Could not update your profile. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* ✅ Custom Card Implementation */}
      <Card
        variant="neubrutalism" // Try "lifted", "gradient", or "dots" here too!
        title="Profile Information"
        description="Update your public profile display name."
        className="bg-white dark:bg-zinc-950"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 pt-4">
          
          {/* Email Field (Read Only) */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              {...register("email")} 
              disabled 
              className="bg-muted text-muted-foreground cursor-not-allowed"
            />
            <p className="text-[0.8rem] text-muted-foreground">
              Your email address is managed by your administrator and cannot be changed here.
            </p>
          </div>

          {/* Name Field (Editable) */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              placeholder="Enter your name" 
              {...register("name", { required: "Name is required" })} 
            />
            {errors.name && (
              <p className="text-sm text-destructive font-medium">{errors.name.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}