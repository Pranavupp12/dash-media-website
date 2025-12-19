'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import Image from "next/image"; // ✅ Import Next.js Image component

type FormData = {
    email: string;
    password: string;
};

export default function AuthPage() {
    const router = useRouter();
    const [isLoginLoading, setIsLoginLoading] = useState(false);

    const { register, handleSubmit } = useForm<FormData>();

    const onLoginSubmit: SubmitHandler<FormData> = async (data) => {
        setIsLoginLoading(true);
        try {
            const result = await signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password,
            });

            if (result?.ok) {
                toast.success("Login successful!");
                router.push('/dashboard'); // Redirect to your dashboard route
            } else {
                toast.error("Login Failed", { description: "Invalid email or password." });
                setIsLoginLoading(false);
            }
        } catch (error) {
            toast.error("An error occurred");
            setIsLoginLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50/50 dark:bg-zinc-950 p-4">
            
            {/* ✅ LOGO SECTION */}
            <div className="mb-8">
                <Image 
                    src="/DashMediaLogo.png" 
                    alt="Dash Media Solutions" 
                    width={240} 
                    height={80} 
                    className="h-auto w-auto"
                    priority
                />
            </div>

            {/* ✅ CARD SECTION */}
            <div className="w-full max-w-[400px]">
                <Card
                    variant="neubrutalism"
                    title="Welcome to Dashboard"
                    description="Enter your credentials to manage the platform."
                    className="bg-white dark:bg-zinc-900 shadow-xl border-zinc-200 dark:border-zinc-800"
                >
                    <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-5 pt-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="admin@dashmedia.com"
                                disabled={isLoginLoading}
                                {...register('email', { required: true })}
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                disabled={isLoginLoading}
                                {...register('password', { required: true })}
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoginLoading}>
                            {isLoginLoading ? (
                                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Authenticating...</>
                            ) : "Sign In"}
                        </Button>
                    </form>
                </Card>
            </div>

            {/* Optional Footer Text */}
            <p className="mt-8 text-xs text-muted-foreground text-center">
                &copy; {new Date().getFullYear()} Dash Media Solutions.
            </p>
        </div>
    );
}