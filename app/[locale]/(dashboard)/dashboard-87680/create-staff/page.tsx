import React from "react";
import DashboardContent from "@/components/app-sidebar/dashboard-content";
import AddStuffForm from "@/components/forms/add-stuff-form";

export default function CreateStuffPage() {
  return (
    <DashboardContent header="Add new learner">
      <div className="w-full max-w-xl mx-auto pt-14 px-6">
        <AddStuffForm />
      </div>
    </DashboardContent>
  );
}
