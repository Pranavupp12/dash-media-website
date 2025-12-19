import React from "react";
import { Toaster } from "sonner";



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // This simple layout just renders the page content directly
    // without any extra components like a header or footer.
      <section>
      {children}
      <Toaster/>
      </section>
  );
}