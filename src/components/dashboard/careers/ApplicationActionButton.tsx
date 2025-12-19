'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X, Loader2, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { sendCandidateEmail } from "@/lib/actions/email";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Props {
  applicationId: string;
  candidateEmail: string;
  candidateName: string;
  jobTitle: string;
}

type ActionMode = 'ACCEPT' | 'REJECT' | null;

export function ApplicationActionButtons({ candidateEmail, candidateName, jobTitle }: Props) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<ActionMode>(null);
  const [loading, setLoading] = useState(false);
  
  // Form States
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Open Modal Handler
  const handleOpen = (action: ActionMode) => {
    setMode(action);
    setOpen(true);

    // Pre-fill content based on action
    if (action === 'ACCEPT') {
      setSubject(`Next Steps: Application for ${jobTitle} at Dash Media`);
      setMessage(`Hi ${candidateName},\n\nThank you for your application. We were impressed by your profile and would like to invite you for the next round of interviews.\n\nPlease let us know your availability for a quick call.\n\nBest regards,\nDash Media Team`);
    } else {
      setSubject(`Update on your application for ${jobTitle}`);
      setMessage(`Hi ${candidateName},\n\nThank you for giving us the opportunity to review your application. Unfortunately, we have decided to move forward with other candidates who more closely match our current requirements.\n\nWe wish you the best in your job search.\n\nBest regards,\nDash Media Team`);
    }
  };

  // Send Email Handler
  const handleSend = async () => {
    setLoading(true);
    try {
      const result = await sendCandidateEmail({
        to: candidateEmail,
        subject,
        message
      });

      if (result.success) {
        toast.success(`Email sent to ${candidateEmail}`);
        setOpen(false);
      } else {
        toast.error("Failed to send email. Check server logs.");
      }
    } catch (error) {
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-end gap-2">
        {/* Accept Button */}
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8 border-none shadow-none text-green-500 hover:bg-green-200 hover:text-green-700"
          onClick={() => handleOpen('ACCEPT')}
          title="Accept & Send Next Steps"
        >
          <Check className="h-4 w-4" />
        </Button>

        {/* Reject Button */}
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8 border-none shadow-none text-red-500 border-red-200 hover:bg-red-50 hover:text-red-700 hover:border-red-300"
          onClick={() => handleOpen('REJECT')}
          title="Reject & Send Regret Mail"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* --- EMAIL MODAL --- */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className={mode === 'ACCEPT' ? "text-green-700" : "text-red-700"}>
              {mode === 'ACCEPT' ? "Send Next Steps" : "Send Rejection Email"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="space-y-2">
                <Label>Recipient</Label>
                <Input value={candidateEmail} disabled className="bg-muted" />
            </div>

            <div className="space-y-2">
                <Label>Subject</Label>
                <Input 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)} 
                />
            </div>

            <div className="space-y-2">
                <Label>Message Content</Label>
                <Textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    rows={8}
                    className="resize-none"
                />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)} disabled={loading}>Cancel</Button>
            <Button 
                onClick={handleSend} 
                disabled={loading}
                className={mode === 'ACCEPT' ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}
            >
                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2"/> : <Send className="w-4 h-4 mr-2"/>}
                Send Email
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}