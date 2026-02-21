'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, ShieldCheck } from "lucide-react";

// Updated Domain in Email/Content
const services = [
    'SEO Services', 'Web Design', 'Content Marketing', 'Social Media Marketing',
    'Video Marketing', 'Native Advertising', 'App Development', 'Email Marketing',
    'Search Engine Marketing (SEM)', 'Pay Per Click (PPC)',
];

const formSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Please enter a valid email."),
  mobileNumber: z.string().min(10, "Please enter a valid mobile number."),
  requirements: z.string().min(10, "Please describe your requirements."),
  websiteUrl: z.string().url().optional().or(z.literal('')),
  service: z.string().min(1, "Please select a service."),
});

type FormValues = z.infer<typeof formSchema>;

export function ConsultationForm({ onSuccess }: { onSuccess: () => void }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", mobileNumber: "", requirements: "", websiteUrl: "", service: "" },
  });

  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error();
      toast.success("Request submitted successfully!");
      form.reset();
      onSuccess();
    } catch {
      toast.error("Submission failed. Please try again.");
    }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-16 items-stretch w-full">
      
      {/* --- COLUMN 1: CLEAN MODERN FORM --- */}
      <div className="flex-1">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-primary mb-2">Book Your Strategy Session</h2>
          <p className="text-muted-foreground">Fill out the details below and an expert will review your project.</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-[10px] font-bold tracking-widest text-muted-foreground">Full Name</FormLabel>
                  <FormControl><Input className="bg-gray-50/50 border-none h-12 focus-visible:ring-primary/20" placeholder="John Doe" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}/>

              <FormField control={form.control} name="mobileNumber" render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-[10px] font-bold tracking-widest text-muted-foreground">Mobile Number</FormLabel>
                  <FormControl><Input className="bg-gray-50/50 border-none h-12" type="tel" placeholder="+91..." {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}/>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                    <FormLabel className="uppercase text-[10px] font-bold tracking-widest text-muted-foreground">Work Email</FormLabel>
                    <FormControl><Input className="bg-gray-50/50 border-none h-12" type="email" placeholder="john@company.com" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )}/>

                <FormField control={form.control} name="service" render={({ field }) => (
                <FormItem>
                    <FormLabel className="uppercase text-[10px] font-bold tracking-widest text-muted-foreground">Service Interest</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger className="bg-gray-50/50 border-none h-12"><SelectValue placeholder="Select one" /></SelectTrigger></FormControl>
                        <SelectContent>{services.map(s => (<SelectItem key={s} value={s}>{s}</SelectItem>))}</SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
                )}/>
            </div>

            <FormField control={form.control} name="websiteUrl" render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-[10px] font-bold tracking-widest text-muted-foreground">Company Website (Optional)</FormLabel>
                <FormControl><Input className="bg-gray-50/50 border-none h-12" placeholder="https://..." {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}/>
            
            <FormField control={form.control} name="requirements" render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-[10px] font-bold tracking-widest text-muted-foreground">Project Brief</FormLabel>
                <FormControl><Textarea rows={4} className="bg-gray-50/50 border-none resize-none" placeholder="What are your goals?" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}/>
            
            <Button type="submit" className="w-full h-14 text-md font-bold rounded-xl shadow-xl shadow-primary/10 transition-transform active:scale-95">
              {form.formState.isSubmitting ? "Processing..." : "Submit Request"} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <p className="text-center text-[10px] text-muted-foreground flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-green-500" /> Your information is stored securely and never shared.
            </p>
          </form>
        </Form>
      </div>

      {/* --- COLUMN 2: MINIMALIST INFO SIDEBAR --- */}
      <div className="lg:w-80 flex flex-col justify-between py-2">
        <div className="space-y-12">
            <div>
                <img src="/DashMediaLogo.png" alt="DMS" width={120} height={40} className="mb-8 opacity-80" />
                <h3 className="text-lg font-bold text-primary mb-4">Why work with us?</h3>
                <ul className="space-y-4">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-accent font-bold">01</span> Performance-driven strategies optimized for ROI.
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-accent font-bold">02</span> Full-stack expertise in both tech and marketing.
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-accent font-bold">03</span> Dedicated account managers for every project.
                    </li>
                </ul>
            </div>

            <div className="space-y-6 pt-10 border-t border-gray-100">
                <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Phone className="w-4 h-4" />
                    </div>
                    <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Talk to Sales</p>
                        <p className="text-sm font-semibold text-primary">+91 99110 60907</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                    </div>
                    <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">General Inquiry</p>
                        <p className="text-sm font-semibold text-primary">support@dashmediasolutions.com</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-20 p-6 rounded-2xl bg-gray-50 border border-gray-100 hidden lg:block">
            <p className="text-xs italic text-muted-foreground">
                "Dash Media Solutions transformed our paid strategy, delivering measurable revenue growth within weeks."
            </p>
            <p className="text-[10px] font-bold mt-3 text-primary uppercase tracking-widest">— Technology Firm</p>
        </div>
      </div>
    </div>
  );
}