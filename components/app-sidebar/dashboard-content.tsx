import React from "react";
import { SiteHeader } from "@/components/app-sidebar/site-header";

function DashboardContent({
  children,
  header,
}: {
  children: React.ReactNode;
  header: string;
}) {
  return (
    <>
      <SiteHeader header={header} />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardContent;
