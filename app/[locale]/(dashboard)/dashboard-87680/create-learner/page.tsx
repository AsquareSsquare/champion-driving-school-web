import React from "react";
import DashboardContent from "@/components/app-sidebar/dashboard-content";
import AddNewLearnerForm from "@/components/forms/add-new-learner-form";

export default function CreateLearnerPage() {
  return (
    <DashboardContent header="Add new learner">
      <div className="w-full max-w-xl mx-auto px-6">
        <AddNewLearnerForm />
      </div>
    </DashboardContent>
  );
}
