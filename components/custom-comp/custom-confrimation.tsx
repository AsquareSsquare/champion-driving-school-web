import React from "react";
import { Loader, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomConfirmationModalProps {
  icon: LucideIcon;
  text?: string;
  confirmation?: string;
  actionBtnText?: string;
  actionBtnLoadingText?: string;
  isLoading?: boolean;
  handleClose: () => void;
  handleAction: () => void;
  iconClass?: string;
  iconBgClass?: string;
  actionBtnBgClass?: string;
}

function CustomConfirmation({
  icon: Icon,
  text,
  confirmation,
  actionBtnText,
  isLoading,
  actionBtnLoadingText,
  handleClose,
  handleAction,
  iconClass,
  iconBgClass,
  actionBtnBgClass,
}: CustomConfirmationModalProps) {
  return (
    <div className="space-y-5 mb-2">
      <div className="flex flex-col items-center">
        <div
          className={cn("p-3 bg-blue-500/30 rounded-full mb-3", iconBgClass)}
        >
          <Icon className={cn("w-5 h-5", iconClass)} />
        </div>
        <span className="text-sm text-gray-500 leading-relaxed">{text}</span>
        <span className="text-center">{confirmation}</span>
      </div>
      <div className="flex gap-3 justify-end">
        <Button variant="outline" onClick={handleClose} disabled={isLoading}>
          Cancel
        </Button>
        <Button
          className={cn(actionBtnBgClass)}
          disabled={isLoading}
          onClick={handleAction}
        >
          {isLoading ? (
            <>
              <Loader className="animate-spin" /> {actionBtnLoadingText}
            </>
          ) : (
            <>
              <Icon /> {actionBtnText}
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

export default CustomConfirmation;
