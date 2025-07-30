"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { reFetchBookings } from "@/services/server-actions/refetchActions";

function RefreshBookings() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const refreshBookings = async () => {
    setIsRefreshing(true);
    try {
      await reFetchBookings();
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

export default RefreshBookings;
