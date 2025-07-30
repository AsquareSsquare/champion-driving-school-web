import React from "react";
import { cn } from "@/lib/utils";

function StatusDot({ status }: { status: string }) {
  return (
    <div className="relative flex h-2 w-2">
      <div
        className={cn(
          "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
          { "bg-emerald-500": status === "replied" },
          { "bg-blue-500": status === "read" },
          { "bg-amber-500": status === "pending" },
        )}
      ></div>
      <div
        className={cn(
          "relative inline-flex h-2 w-2 rounded-full",
          { "bg-emerald-500": status === "replied" },
          { "bg-blue-500": status === "read" },
          { "bg-amber-500": status === "pending" },
        )}
      ></div>
    </div>
  );
}

export default StatusDot;
