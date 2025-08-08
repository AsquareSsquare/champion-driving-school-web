import React, { Suspense } from "react";
import DashboardContent from "@/components/app-sidebar/dashboard-content";
import { Loader } from "lucide-react";
import AllStaffs from "@/components/add-staff/all-staffs";
import RefreshStaffs from "@/components/add-staff/refresh-staffs";

export default function AllStaffsPage() {
  return (
    <DashboardContent header="All staffs" headerAction={<RefreshStaffs />}>
      <div className="mx-6">
        <Suspense
          fallback={
            <div className="h-[calc(100vh-8rem)] flex items-center justify-center">
              <Loader className="animate-spin" />
            </div>
          }
        >
          <AllStaffs />
        </Suspense>
      </div>
    </DashboardContent>
  );
}
