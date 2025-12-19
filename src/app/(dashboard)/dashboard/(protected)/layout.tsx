import type { Metadata } from "next";
import { SessionNavBar } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Dashboard | Dash Media Solutions",
  description: "Admin dashboard for managing blogs and content.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen flex-row overflow-hidden bg-background">
      {/* Sidebar - Fixed on the left */}
      <SessionNavBar />
      
      {/* Main Content Area - Grows to fill space */}
      <main className="flex h-screen grow flex-col overflow-auto">
        <div className="container mx-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}