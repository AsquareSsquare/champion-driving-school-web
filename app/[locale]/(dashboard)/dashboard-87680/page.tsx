import React, { Suspense } from "react";
import DashboardContent from "@/components/app-sidebar/dashboard-content";
import Learners from "@/components/learners/learners";
import { Loader } from "lucide-react";
import RefreshLearners from "@/components/learners/refresh-learners";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { branch_id } = await searchParams;
  return (
    <DashboardContent header="All Learners" headerAction={<RefreshLearners />}>
      <div className="mx-6">
        <Suspense
          fallback={
            <div className="h-[calc(100vh-8rem)] flex items-center justify-center">
              <Loader className="animate-spin" />
            </div>
          }
        >
          <Learners branchId={branch_id} />
        </Suspense>
      </div>
    </DashboardContent>
  );
}
