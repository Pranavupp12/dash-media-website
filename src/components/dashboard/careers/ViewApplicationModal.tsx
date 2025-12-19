'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, Download, Mail, Phone, FileText } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

// --- Sub-Component: Nested Cover Letter Modal ---
function CoverLetterModal({ text }: { text: string | null }) {
  if (!text) {
    return <span className="text-sm text-muted-foreground italic">No cover letter provided.</span>;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 text-blue-600 hover:text-blue-700 hover:bg-transparent hover:underline underline-offset-4 cursor-pointer font-medium flex items-center gap-2">
          <FileText className="w-4 h-4" /> View Cover Letter
        </Button>
      </DialogTrigger>
      {/* Nested Modal Content */}
      <DialogContent className="max-w-xl max-h-[80vh] flex flex-col p-6">
        <DialogHeader>
          <DialogTitle>Cover Letter</DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-1 -mr-4 pr-4 mt-2">
           <div className="text-sm leading-relaxed whitespace-pre-wrap text-muted-foreground">
              {text}
           </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

// --- Main Component ---
interface ApplicationProps {
  application: {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    coverLetter: string | null;
    resumeUrl: string;
    createdAt: Date;
    job?: {
      title: string;
    } | null;
  };
}

export function ViewApplicationModal({ application }: ApplicationProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-blue-50 hover:text-blue-600">
          <Eye className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle className="text-xl">Applicant Details</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
            {/* Header Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg shrink-0">
                        {application.fullName.charAt(0)}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">{application.fullName}</h3>
                        <p className="text-muted-foreground text-sm flex items-center gap-1">
                            Applied for <span className="font-semibold text-foreground">{application.job?.title}</span>
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                            {new Date(application.createdAt).toLocaleString()}
                        </p>
                    </div>
                </div>
                {/* Resume Button */}
                {application.resumeUrl && (
                    <Button variant="outline" size="sm" asChild>
                        <a href={application.resumeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                            <Download className="w-4 h-4" /> Download Resume
                        </a>
                    </Button>
                )}
            </div>

            <Separator />

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-muted-foreground uppercase flex items-center gap-2">
                        <Mail className="w-3 h-3" /> Email
                    </label>
                    <p className="text-sm font-medium">{application.email}</p>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-muted-foreground uppercase flex items-center gap-2">
                        <Phone className="w-3 h-3" /> Mobile
                    </label>
                    <p className="text-sm font-medium">{application.phone}</p>
                </div>
            </div>

            <Separator />

            {/* Cover Letter Section (Updated) */}
            <div className="flex flex-col gap-2 items-start">
                <label className="text-xs font-semibold text-muted-foreground uppercase">
                    Additional Info
                </label>
                {/* ✅ Replaced Text Area with Ghost Button Modal */}
                <CoverLetterModal text={application.coverLetter} />
            </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}