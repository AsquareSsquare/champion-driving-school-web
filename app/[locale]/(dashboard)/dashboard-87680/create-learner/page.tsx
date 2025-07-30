import React, { Suspense } from "react";
import DashboardContent from "@/components/app-sidebar/dashboard-content";
import AddLearner from "@/components/add-learner/add-learner";
import { Loader } from "lucide-react";

export default function CreateLearnerPage() {
  return (
    <DashboardContent header="Add new learner">
      <div className="mx-6">
        <Suspense
          fallback={
            <div className="h-[calc(100vh-8rem)] flex items-center justify-center">
              <Loader className="animate-spin" />
            </div>
          }
        >
          <AddLearner />
        </Suspense>
      </div>
    </DashboardContent>
  );
}
