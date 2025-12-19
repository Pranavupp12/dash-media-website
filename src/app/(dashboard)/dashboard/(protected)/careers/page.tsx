import { PrismaClient } from "@prisma/client";
import { CreateJobForm } from "@/components/dashboard/careers/CreateJobForm";
import { ViewApplicationModal } from "@/components/dashboard/careers/ViewApplicationModal";
import { ApplicationActionButtons } from "@/components/dashboard/careers/ApplicationActionButton";
import { JobActionButtons } from "@/components/dashboard/careers/JobActionButtons";
import { Card } from "@/components/ui/card"; 
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic'; 

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }); // Result: "19/12/2025"
}

export default async function AdminCareersPage() {
  const jobs = await prisma.jobPosting.findMany({ 
    orderBy: { createdAt: 'desc' } 
  });

  const applications = await prisma.jobApplication.findMany({ 
      include: { 
        job: { select: { title: true } } 
      }, 
      orderBy: { createdAt: 'desc' } 
  });

  return (
    <div className="p-8 space-y-12 bg-gray-50/50 min-h-screen">
      <h1 className="text-3xl font-bold">Career Management</h1>

      {/* --- TOP SECTION: Split 50/50 --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Create Job Form */}
        <div>
             <Card 
                variant="neubrutalism" 
                className="bg-white dark:bg-zinc-900"
                title="Post New Job" 
             >
                <div className="space-y-4 mt-4"> 
                    <CreateJobForm /> 
                </div>
             </Card>
        </div>

        {/* Active Jobs List */}
        <div>
            <Card 
                variant="neubrutalism" 
                className="h-full bg-white dark:bg-zinc-900"
                title="Active Job Postings"
            >
                <div className="space-y-4 mt-4">
                    {jobs.map(job => (
                        <div key={job.id} className="flex justify-between items-start p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50">
                            <div>
                                <h3 className="font-bold">{job.title}</h3>
                                <p className="text-sm text-muted-foreground">{job.department}</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="bg-white shadow-sm border">{job.type}</Badge>
                                    <Badge variant="outline" className="bg-white">{job.location}</Badge>
                                </div>
                            </div>
                            
                            <div className="flex flex-col items-end gap-1">
                                <span className="text-xs text-muted-foreground mb-1">
                                  {formatDate(job.createdAt)}
                                </span>
                                <JobActionButtons job={job} />
                            </div>
                        </div>
                    ))}
                    {jobs.length === 0 && <p className="text-muted-foreground italic">No jobs posted yet.</p>}
                </div>
            </Card>
        </div>
      </div>

      {/* --- BOTTOM SECTION: Applications Table (No Card Wrapper) --- */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Applications</h2>
        
        <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
            <Table>
                <TableHeader>
                    <TableRow className="bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-50">
                        <TableHead>Candidate</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {applications.map((app) => (
                        <TableRow key={app.id}>
                            <TableCell className="font-medium">
                                {app.fullName}
                            </TableCell>
                            <TableCell>
                                <Badge variant="outline">{app.job?.title || "Unknown"}</Badge>
                            </TableCell>
                            <TableCell>
                                {app.resumeUrl ? (
                                    <a href={app.resumeUrl} target="_blank" className="text-blue-600 hover:underline flex items-center gap-1">
                                        <Download className="w-4 h-4"/> Download
                                    </a>
                                ) : "-"}
                            </TableCell>
                            <TableCell>{formatDate(app.createdAt)}</TableCell>
                            
                            {/* ACTIONS */}
                            <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <ViewApplicationModal application={app} />
                                    
                                    <ApplicationActionButtons 
                                        applicationId={app.id}
                                        candidateEmail={app.email}
                                        candidateName={app.fullName}
                                        jobTitle={app.job?.title || "Position"}
                                    />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                    {applications.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center py-12 text-muted-foreground">
                                No applications received yet.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
      </div>
    </div>
  );
}