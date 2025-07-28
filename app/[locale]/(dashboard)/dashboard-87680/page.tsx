import React from "react";
import DashboardContent from "@/components/app-sidebar/dashboard-content";

export default async function DashboardPage() {
  return (
    <DashboardContent header="All Learners">
      <div className="w-full max-w-xl px-6">
        <p>Learners</p>
      </div>
    </DashboardContent>
  );
}
