import React from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Champion driving dashboard",
  description: "Manage champion driving school from here",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader color="#4B70F5" showSpinner={false} />
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </>
  );
}
