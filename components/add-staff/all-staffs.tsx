import React from "react";
import { getAllStaffs } from "@/services/server-actions/userActions";
import StaffsTable from "@/components/add-staff/staffs-table";
import { getAllBranches } from "@/services/server-actions/branchActions";

async function AllStaffs() {
  const [allStaffsResponse, allBranchResponse] = await Promise.all([
    getAllStaffs(),
    getAllBranches(),
  ]);

  const { staffs } = allStaffsResponse;
  const { branches } = allBranchResponse;

  if (!staffs) {
    return (
      <div className="h-[calc(100vh-8rem)] flex items-center justify-center">
        <p className="text-xl font-bold">Staffs not found</p>
      </div>
    );
  }
  return <StaffsTable staffs={staffs} branches={branches} />;
}

export default AllStaffs;
