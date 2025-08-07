import React, { Suspense } from "react";
import DashboardContent from "@/components/app-sidebar/dashboard-content";
import AddStuffForm from "@/components/forms/add-stuff-form";
import { Loader } from "lucide-react";
import AddStaff from "@/components/add-staff/add-staff";

export default function CreateStuffPage() {
  return (
    <DashboardContent header="Add new staff">
      <div className="mx-6">
        <Suspense
          fallback={
            <div className="h-[calc(100vh-8rem)] flex items-center justify-center">
              <Loader className="animate-spin" />
            </div>
          }
        >
          <AddStaff />
        </Suspense>
      </div>
    </DashboardContent>
  );
}
