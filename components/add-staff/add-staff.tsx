import React from "react";
import { getAllBranches } from "@/services/server-actions/branchActions";
import AddStuffForm from "@/components/forms/add-stuff-form";

async function AddStaff() {
  const { branches } = await getAllBranches();
  return (
    <>
      {branches.length > 0 ? (
        <div className="w-full max-w-xl mx-auto px-6">
          <AddStuffForm branches={branches} />
        </div>
      ) : (
        <div className="h-[calc(100vh-8rem)] flex items-center justify-center">
          <p className="text-xl font-bold">
            Please add a branch before adding staff.
          </p>
        </div>
      )}
    </>
  );
}

export default AddStaff;
