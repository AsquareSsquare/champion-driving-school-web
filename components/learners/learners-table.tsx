"use client";
import { Branch, Learner } from "@/types/server-types";
import { ColumnDef } from "@tanstack/table-core";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CustomDataTable from "@/components/custom-comp/custom-data-table";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Trash2 } from "lucide-react";
import BranchSelector from "@/components/core/branch-selector";
import React, { useState } from "react";
import CustomModal from "@/components/custom-comp/custom-modal";
import MarkAttendanceForm from "@/components/forms/mark-attendance-form";
import UpdatePaymentForm from "@/components/forms/update-payment-form";

function LearnersTable({
  learners,
  branches,
  branchId,
}: {
  learners: Learner[];
  branches: Branch[];
  branchId?: string;
}) {
  const [selectedLearners, setSelectedLearners] = useState<Learner[]>([]);

  // Modal states
  const [markAttendanceModal, setMarkAttendanceModal] = useState<
    number | undefined
  >(undefined);
  const [paymentUpdate, setPaymentUpdate] = useState<number | undefined>(
    undefined,
  );

  // Form column
  const learnerColumn: ColumnDef<Learner>[] = [
    {
      accessorKey: "name",
      header: "Learner",
      cell: ({ row }) => (
        <div className="flex gap-2 items-center">
          <div className="relative">
            <Avatar className="rounded-lg">
              <AvatarImage
                src={`https://api.dicebear.com/9.x/initials/svg?seed=${row.original.name}`}
                alt={`Champion Driving School user avatar - ${row.original.name}`}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div
              className={cn(
                "size-2 rounded-full bg-gray-500 absolute right-0 bottom-0",
                {
                  "bg-emerald-500": row.original.is_active,
                },
              )}
            ></div>
          </div>
          <div>
            <p>{row.original.name}</p>
            <p className="text-muted-foreground text-sm">
              {row.original.email}
            </p>
          </div>
        </div>
      ),
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: ({ row }) => <div>{row.getValue("phone")}</div>,
    },
    {
      accessorKey: "admission_date",
      header: "Admission Date",
      cell: ({ row }) => (
        <div>{format(new Date(row.getValue("admission_date")), "MMM d")}</div>
      ),
    },
    {
      accessorKey: "completed_classes",
      header: "Classes completed",
      cell: ({ row }) => (
        <div className="ml-6">{row.getValue("completed_classes")}</div>
      ),
    },
    {
      accessorKey: "total_fees",
      header: "Total Fees",
      cell: ({ row }) => <div>{row.getValue("total_fees")}</div>,
    },
    {
      accessorKey: "balance_fees",
      header: "Due",
      cell: ({ row }) => (
        <div>
          {row.getValue("balance_fees") === 0 ? (
            <Badge>Paid</Badge>
          ) : (
            `${row.getValue("balance_fees")}`
          )}
        </div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={cn("h-8 w-8 p-0")}>
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setMarkAttendanceModal(row.original.id)}
            >
              Mark attendance
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Edit learner details
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Edit license details
            </DropdownMenuItem>
            {row.original.balance_fees !== 0 && (
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setPaymentUpdate(row.original.id)}
              >
                Payment update
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              Course completed
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" variant="destructive">
              <Trash2 /> Delete learner
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  const handleSelectClick = () => {
    console.log("Selected Value: ", selectedLearners);
  };
  return (
    <>
      <CustomDataTable
        className="[&>div]:max-h-[calc(100vh-15rem)]"
        columns={learnerColumn}
        data={learners}
        customComp={<BranchSelector branches={branches} branchId={branchId} />}
        searchKey="name"
        selectedText="Mark attendance"
        enableRowSelection
        onSelectBtnClick={handleSelectClick}
        setSelectedItems={setSelectedLearners}
      />

      <CustomModal
        isOpen={markAttendanceModal}
        setIsOpen={setMarkAttendanceModal}
        header="Mark attendance"
      >
        {markAttendanceModal && (
          <MarkAttendanceForm
            studentId={markAttendanceModal}
            setMarkAttendanceModal={setMarkAttendanceModal}
          />
        )}
      </CustomModal>

      <CustomModal
        isOpen={paymentUpdate}
        setIsOpen={setPaymentUpdate}
        header="Update payment"
      >
        {paymentUpdate && (
          <UpdatePaymentForm
            learnerId={paymentUpdate}
            setPaymentUpdate={setPaymentUpdate}
          />
        )}
      </CustomModal>
    </>
  );
}

export default LearnersTable;
