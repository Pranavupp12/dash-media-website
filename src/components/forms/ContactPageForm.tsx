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
import { ArrowRight } from "lucide-react";

const services = [
    'SEO Services', 'Web Design', 'Content Marketing', 'Social Media Marketing',
    'Video Marketing', 'Native Advertising', 'App Development', 'Email Marketing',
    'Search Engine Marketing (SEM)', 'Pay Per Click (PPC)',
];

const formSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Invalid email."),
  mobileNumber: z.string().min(10, "Invalid mobile."),
  requirements: z.string().min(10, "Describe requirements."),
  websiteUrl: z.string().url().optional().or(z.literal('')),
  service: z.string().min(1, "Select a service."),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactPageFormProps {
  onSuccess: () => void;
}

export function ContactPageForm({ onSuccess }: ContactPageFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobileNumber: "",
      requirements: "",
      websiteUrl: "",
      service: "",
    },
  });

  const selectedService = form.watch("service");
  const [showOtherServiceInput, setShowOtherServiceInput] = useState(false);

  useEffect(() => {
    setShowOtherServiceInput(selectedService === "other");
  }, [selectedService]);

  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Failed");
      form.reset();
      onSuccess();
    } catch (error) {
      toast.error("Error submitting form.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-5">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">Full Name</FormLabel>
                  <FormControl>
                    {/* Larger inputs (h-12) with gray background for contrast against white page */}
                    <Input className="h-12 bg-gray-50/50 border-gray-200 focus:bg-white transition-all text-base" placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
            )}/>
             <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">Email Address</FormLabel>
                  <FormControl><Input className="h-12 bg-gray-50/50 border-gray-200 focus:bg-white transition-all text-base" type="email" placeholder="john@company.com" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
            )}/>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField control={form.control} name="mobileNumber" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">Mobile Number</FormLabel>
                  <FormControl><Input className="h-12 bg-gray-50/50 border-gray-200 focus:bg-white transition-all text-base" type="tel" placeholder="+91..." {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
            )}/>
             <FormField control={form.control} name="websiteUrl" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">Website (Optional)</FormLabel>
                  <FormControl><Input className="h-12 bg-gray-50/50 border-gray-200 focus:bg-white transition-all text-base" placeholder="https://..." {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
            )}/>
        </div>

        {/* Row 3 */}
        <FormField control={form.control} name="service" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Service Interest</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 bg-gray-50/50 border-gray-200 focus:bg-white transition-all text-base">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {services.map(service => <SelectItem key={service} value={service}>{service}</SelectItem>)}
                  <SelectItem value="other">Other...</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
        )}/>

        {showOtherServiceInput && (
            <FormField control={form.control} name="service" render={({ field }) => (
            <FormItem>
                <FormLabel className="text-base font-semibold">Specify Service</FormLabel>
                <FormControl><Input className="h-12 bg-gray-50/50" placeholder="e.g. Branding" {...field} /></FormControl>
            </FormItem>
            )}/>
        )}

        <FormField control={form.control} name="requirements" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Message</FormLabel>
              <FormControl>
                <Textarea rows={6} className="resize-none bg-gray-50/50 border-gray-200 focus:bg-white transition-all text-base" placeholder="Tell us about your project goals..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
        )}/>
        
        <div className="pt-2">
            <Button type="submit" size="sm" disabled={form.formState.isSubmitting} className="h-10 px-8 text-sm sm:text-md font-regular w-[60%] md:w-auto">
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                {!form.formState.isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
            </Button>
        </div>

      </form>
    </Form>
  );
}