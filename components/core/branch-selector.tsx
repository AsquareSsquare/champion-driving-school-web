"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "@/i18n/navigation";
import { DASHBOARD_PAGE } from "@/constants/data";
import { Branch } from "@/types/server-types";
import { getBranchSelectItems } from "@/lib/utils";

function BranchSelector({
  branches,
  branchId,
}: {
  branches: Branch[];
  branchId?: string;
}) {
  const router = useRouter();
  const selectValueChangeHandler = (value: string) => {
    if (value === "all") {
      router.push(`/${DASHBOARD_PAGE}`);
      return;
    }
    router.push(`/${DASHBOARD_PAGE}?branch_id=${value}`);
  };
  return (
    <Select
      value={branchId ? branchId : "all"}
      onValueChange={selectValueChangeHandler}
    >
      <SelectTrigger className="min-w-[150px] shad-no-focus">
        <SelectValue placeholder="Choose a branch" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        {getBranchSelectItems(branches).map((item, index) => (
          <SelectItem key={index} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default BranchSelector;
