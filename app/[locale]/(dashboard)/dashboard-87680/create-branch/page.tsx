import React from "react";
import DashboardContent from "@/components/app-sidebar/dashboard-content";
import AddBranchForm from "@/components/forms/add-branch-form";

export default function CreateBranchPage() {
  return (
    <DashboardContent header="Add new branch">
      <div className="w-full max-w-xl mx-auto pt-14 px-6">
        <AddBranchForm />
      </div>
    </DashboardContent>
  );
}
