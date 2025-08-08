"use client";
import { Branch, User } from "@/types/server-types";
import { ColumnDef } from "@tanstack/table-core";
import CustomDataTable from "@/components/custom-comp/custom-data-table";
import { getBranchSelectItems } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import CustomModal from "@/components/custom-comp/custom-modal";
import DeleteStaff from "@/components/add-staff/delete-staff";

function StaffsTable({
  staffs,
  branches,
}: {
  staffs: User[];
  branches: Branch[];
}) {
  const [deleteModal, setDeleteModal] = useState<number | undefined>(undefined);
  const staffsColumns: ColumnDef<User>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
      accessorKey: "username",
      header: "Username",
      cell: ({ row }) => <div>{row.getValue("username")}</div>,
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => <div>{row.getValue("role")}</div>,
    },
    {
      accessorKey: "branch_id",
      header: "Branch",
      cell: ({ row }) => (
        <div>
          {
            getBranchSelectItems(branches).find(
              (branch) => branch.value === String(row.getValue("branch_id")),
            )?.label
          }
        </div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => (
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="hover:text-destructive"
          onClick={() => setDeleteModal(row.original.id)}
        >
          <Trash2 />
        </Button>
      ),
    },
  ];
  return (
    <>
      <CustomDataTable
        className="[&>div]:max-h-[calc(100vh-15rem)]"
        columns={staffsColumns}
        data={staffs}
        searchKey="name"
      />
      <CustomModal
        isOpen={deleteModal}
        setIsOpen={setDeleteModal}
        header="Final confrimation"
      >
        {deleteModal && (
          <DeleteStaff staffId={deleteModal} setDelete={setDeleteModal} />
        )}
      </CustomModal>
    </>
  );
}

export default StaffsTable;
