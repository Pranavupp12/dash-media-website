'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { JobApplyButton } from "./JobApplyButton"; 

export function JobDetailsModal({ job }: { job: any }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
            variant="ghost" 
            className="w-[60%] ml-15 sm:ml-0 sm:w-full mb-3 hover:underline underline-offset-4 cursor-pointer text-muted-foreground"
        >
          <FileText className="w-4 h-4 mr-1" /> View Full Details
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-h-[85vh] flex flex-col px-5">
        {/* 1. Header: "Full Details" */}
        <DialogHeader className="border-b pb-4">
          <DialogTitle className="text-xl lg:text-2xl font-bold">Full Details</DialogTitle>
        </DialogHeader>
        
        {/* Scrollable Body */}
        <ScrollArea className="flex-1 overflow-y-auto py-4 pr-2 ">
            <div className="py-4 space-y-4">
                
                {/* 2. Job Title */}
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                    {job.title}
                </h3>
                
                {/* 3. Description */}
                <div className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {job.description}
                </div>
            </div>
        </ScrollArea>

        {/* Footer: Apply Button */}
        <div className="pt-4 border-t mt-auto">
            <JobApplyButton job={job} />
        </div>
      </DialogContent>
    </Dialog>
  );
}