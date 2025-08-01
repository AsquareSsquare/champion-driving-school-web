import React from "react";
import { getLearners } from "@/services/server-actions/learnerActions";
import { getAllBranches } from "@/services/server-actions/branchActions";
import BranchSelector from "@/components/core/branch-selector";
import LearnersTable from "@/components/learners/learners-table";

async function Learners({ branchId }: { branchId?: string }) {
  const [learnersResponse, branchesResponse] = await Promise.all([
    getLearners(branchId),
    getAllBranches(),
  ]);

  const { learners } = learnersResponse;
  const { branches } = branchesResponse;
  return (
    <>
      {learners ? (
        <LearnersTable
          learners={learners}
          branches={branches}
          branchId={branchId}
        />
      ) : (
        <div>
          <BranchSelector branches={branches} branchId={branchId} />
          <div className="h-[calc(100vh-10rem)] flex items-center justify-center">
            <p className="text-xl font-bold">Learners not found.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Learners;
