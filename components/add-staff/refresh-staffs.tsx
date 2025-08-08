"use client";
import React, { useState } from "react";
import { RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { reFetchStaffs } from "@/services/server-actions/refetchActions";

function RefreshStaffs() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const refreshStaffs = async () => {
    setIsRefreshing(true);
    try {
      await reFetchStaffs();
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
      onClick={refreshStaffs}
      disabled={isRefreshing}
    >
      <RefreshCw className={cn({ "animate-spin": isRefreshing })} />
    </Button>
  );
}

export default RefreshStaffs;
