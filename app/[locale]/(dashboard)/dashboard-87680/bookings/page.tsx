import React, { Suspense } from "react";
import DashboardContent from "@/components/app-sidebar/dashboard-content";
import { Loader } from "lucide-react";
import AllBookings from "@/components/bookings/all-bookings";
import RefreshBookings from "@/components/bookings/refresh-bookings";

export default function BookingsPage() {
  return (
    <DashboardContent header="All bookings" headerAction={<RefreshBookings />}>
      <div className="mx-6">
        <Suspense
          fallback={
            <div className="h-[calc(100vh-8rem)] flex items-center justify-center">
              <Loader className="animate-spin" />
            </div>
          }
        >
          <AllBookings />
        </Suspense>
      </div>
    </DashboardContent>
  );
}
