"use client";
import { Branch, Learner } from "@/types/server-types";
import { ColumnDef } from "@tanstack/table-core";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CustomDataTable from "@/components/custom-comp/custom-data-table";
import { cn } from "@/lib/utils";
import { format, isToday } from "date-fns";
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
import MarkAttendanceForm, {
  MarkAttendanceData,
} from "@/components/forms/mark-attendance-form";
import UpdatePaymentForm from "@/components/forms/update-payment-form";
import UpdateLearnerDetails from "@/components/learners/update-learner-details";
import LearnerHistory from "@/components/learners/learner-history";
import DeleteLearner from "@/components/learners/delete-learner";

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
    MarkAttendanceData | undefined
  >(undefined);
  const [paymentUpdate, setPaymentUpdate] = useState<number | undefined>(
    undefined,
  );
  const [editLearner, setEditLearner] = useState<number | undefined>(undefined);
  const [history, setHistory] = useState<number | undefined>(undefined);
  const [deleteLearner, setDeleteLearner] = useState<number | undefined>(
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
        <div>
          {format(new Date(row.getValue("admission_date")), "MMM d, yyyy")}
        </div>
      ),
    },
    {
      accessorKey: "completed_classes",
      header: "Classes",
      cell: ({ row }) => (
        <div className="ml-6">{row.getValue("completed_classes")}</div>
      ),
    },
    {
      accessorKey: "last_attendance_date",
      header: "Attendance",
      cell: ({ row }) => (
        <div>
          {row.getValue("last_attendance_date") &&
          isToday(new Date(row.getValue("last_attendance_date"))) ? (
            <Badge className="bg-emerald-500">Present</Badge>
          ) : (
            <Badge variant="outline">Absent</Badge>
          )}
        </div>
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
              onClick={() =>
                setMarkAttendanceModal({
                  learnerId: row.original.id,
                  classes: row.original.completed_classes,
                })
              }
            >
              Mark attendance
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setEditLearner(row.original.id)}
            >
              Edit learner details
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
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setHistory(row.original.id)}
            >
              History
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              variant="destructive"
              onClick={() => setDeleteLearner(row.original.id)}
            >
              <Trash2 /> Delete learner
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <>
      <CustomDataTable
        className="[&>div]:max-h-[calc(100vh-15rem)]"
        columns={learnerColumn}
        data={learners}
        customComp={<BranchSelector branches={branches} branchId={branchId} />}
        searchKey="name"
        selectedText="Mark attendance"
        // enableRowSelection
        setSelectedItems={setSelectedLearners}
      />

      <CustomModal
        isOpen={markAttendanceModal}
        setIsOpen={setMarkAttendanceModal}
        header="Mark attendance"
      >
        {markAttendanceModal && (
          <MarkAttendanceForm
            attendanceData={markAttendanceModal}
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

      <CustomModal
        isOpen={editLearner}
        setIsOpen={setEditLearner}
        header="Edit learner details"
      >
        {editLearner && (
          <UpdateLearnerDetails
            learnerId={editLearner}
            branches={branches}
            setEditLearner={setEditLearner}
          />
        )}
      </CustomModal>

      <CustomModal
        isOpen={history}
        setIsOpen={setHistory}
        header="Activity record"
      >
        {history && <LearnerHistory learnerId={history} />}
      </CustomModal>

      <CustomModal
        isOpen={deleteLearner}
        setIsOpen={setDeleteLearner}
        header="Final confrimation"
      >
        {deleteLearner && (
          <DeleteLearner
            learnerId={deleteLearner}
            setDelete={setDeleteLearner}
          />
        )}
      </CustomModal>
    </>
  );
}

export default LearnersTable;
