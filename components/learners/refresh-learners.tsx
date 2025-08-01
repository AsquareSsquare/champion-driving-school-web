"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { reFetchLearners } from "@/services/server-actions/refetchActions";

function RefreshLearners() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const refreshBookings = async () => {
    setIsRefreshing(true);
    try {
      await reFetchLearners();
    } catch (error) {
      console.error(error);
    } finally {
      setIsRefreshing(false);
    }
  };
  return (
    <Button
      size="icon"
      variant="outline"
      onClick={refreshBookings}
      disabled={isRefreshing}
    >
      <RefreshCw className={cn({ "animate-spin": isRefreshing })} />
    </Button>
  );
}

export default RefreshLearners;
