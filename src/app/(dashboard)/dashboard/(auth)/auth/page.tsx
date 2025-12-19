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
                router.push('/dashboard');
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
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-zinc-900/20 p-4">
            <div className="w-full max-w-[400px]">
                <Card
                    variant="neubrutalism"
                    title="Dash Media Login"
                    description="Enter your credentials to access the dashboard."
                    className="bg-white dark:bg-zinc-950"
                >
                    <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-4 pt-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                disabled={isLoginLoading}
                                {...register('email', { required: true })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                disabled={isLoginLoading}
                                {...register('password', { required: true })}
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoginLoading}>
                            {isLoginLoading ? (
                                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Logging in...</>
                            ) : "Login"}
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}