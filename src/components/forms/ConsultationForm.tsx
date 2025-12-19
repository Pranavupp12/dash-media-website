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
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";


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

interface ConsultationFormProps {
  onSuccess: () => void;
}

export function ConsultationForm({ onSuccess }: ConsultationFormProps) {
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
    if (selectedService === "other") {
      setShowOtherServiceInput(true);
    } else {
      setShowOtherServiceInput(false);
    }
  }, [selectedService]);

  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      toast.success("Request submitted successfully!");

      form.reset();
      onSuccess();
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start w-full">
      
      {/* --- COLUMN 1: THE FORM --- */}
      <div className="w-full">
        <h2 className="text-lg md:text-2xl font-bold">Get a Free Consultation</h2>
        {/* Reduced margin on mobile */}
        <p className="text-xs lg:text-sm text-muted-foreground mb-3 lg:mb-6">
          Fill out the form below and our team will get back to you shortly.
        </p>
        
        <Form {...form}>
          {/* ✅ Compact Spacing: space-y-2 on mobile, space-y-5 on desktop */}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 lg:space-y-5">
            
            {/* ✅ ROW 1: Name & Mobile Side-by-Side on mobile to save height */}
            <div className="grid grid-cols-2 gap-3">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem className="space-y-0.5">
                  <FormLabel className="text-[11px] lg:text-sm font-medium">Full Name</FormLabel>
                  {/* Compact Input: h-8 on mobile */}
                  <FormControl><Input className="h-8 lg:h-11 text-xs lg:text-sm" placeholder="John Doe" {...field} /></FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}/>

              <FormField control={form.control} name="mobileNumber" render={({ field }) => (
                <FormItem className="space-y-0.5">
                  <FormLabel className="text-[11px] lg:text-sm font-medium">Mobile</FormLabel>
                  <FormControl><Input className="h-8 lg:h-11 text-xs lg:text-sm" type="tel" placeholder="+91..." {...field} /></FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}/>
            </div>
            
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem className="space-y-0.5">
                <FormLabel className="text-[11px] lg:text-sm font-medium">Email Address</FormLabel>
                <FormControl><Input className="h-8 lg:h-11 text-xs lg:text-sm" type="email" placeholder="john@company.com" {...field} /></FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}/>
            
            {/* Service & Website can stay stacked or go side-by-side. Keeping stacked for clarity but compact. */}
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem className="space-y-0.5">
                  <FormLabel className="text-[11px] lg:text-sm font-medium">Service Interest</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-8 lg:h-11 text-xs lg:text-sm">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map(service => (
                        <SelectItem key={service} value={service} className="text-xs lg:text-sm">{service}</SelectItem>
                      ))}
                      <SelectItem value="other" className="text-xs lg:text-sm">Other...</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
            
            {showOtherServiceInput && (
              <FormField control={form.control} name="service" render={({ field }) => (
                <FormItem className="space-y-0.5">
                   <FormControl><Input className="h-8 lg:h-11 text-xs lg:text-sm" placeholder="Specify service..." {...field} /></FormControl>
                </FormItem>
              )}/>
            )}

            <FormField control={form.control} name="websiteUrl" render={({ field }) => (
              <FormItem className="space-y-0.5">
                <FormLabel className="text-[11px] lg:text-sm font-medium">Website (Optional)</FormLabel>
                <FormControl><Input className="h-8 lg:h-11 text-xs lg:text-sm" placeholder="https://..." {...field} /></FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}/>
            
            <FormField control={form.control} name="requirements" render={({ field }) => (
              <FormItem className="space-y-0.5">
                <FormLabel className="text-[11px] lg:text-sm font-medium">Requirements</FormLabel>
                <FormControl>
                    {/* ✅ Reduced rows to 2 on mobile */}
                    <Textarea rows={2} className="resize-none text-xs lg:text-base min-h-[50px] lg:min-h-[80px]" placeholder="Project details..." {...field} />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}/>
            
            <Button type="submit" size="sm" disabled={form.formState.isSubmitting} className="w-full !mt-3 lg:!mt-6 h-9 lg:h-12 text-xs lg:text-base">
              {form.formState.isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </form>
        </Form>
      </div>

      {/* --- COLUMN 2: CONTACT US CARD --- */}
      <div className="w-full hidden lg:block">
        <Card variant="neubrutalism" className="mt-8 lg:mt-20 bg-gradient-to-t from-white to-blue-100 w-full">
            <CardContent className="p-6 md:p-8">
                <div className="flex justify-center mb-6">
                    <img
                        src="/DashMediaLogo.png"
                        alt="Company Logo"
                        width={140}
                        height={100}
                        className="object-contain"
                    />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-center">Contact Information</h3>
                <p className="text-center text-sm text-muted-foreground mb-8">We're here to help!</p>

                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-sm md:text-base">Our Office</p>
                            <p className="text-muted-foreground text-sm">123 Business Rd, Suite 456<br />Delhi, 110001, India</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-sm md:text-base">Phone Numbers</p>
                            <a href="tel:+919876543210" className="block text-muted-foreground hover:text-primary text-sm transition-colors">+91 987 654 3210</a>
                            <a href="tel:+919123456789" className="block text-muted-foreground hover:text-primary text-sm transition-colors">+91 912 345 6789</a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-sm md:text-base">Email Addresses</p>
                            <a href="mailto:sales@example.com" className="block text-muted-foreground hover:text-primary text-sm transition-colors">sales@example.com</a>
                            <a href="mailto:support@example.com" className="block text-muted-foreground hover:text-primary text-sm transition-colors">support@example.com</a>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}