import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AttendanceHistory from "@/components/learners/attendance-history";
import PaymentHistory from "@/components/learners/payment-history";

function LearnerHistory({ learnerId }: { learnerId: number }) {
  return (
    <Tabs>
      <TabsList>
        <TabsTrigger value="attendance-history">Attendance history</TabsTrigger>
        <TabsTrigger value="payment-history">Payment history</TabsTrigger>
      </TabsList>
      <TabsContent value="attendance-history">
        <AttendanceHistory learnerId={learnerId} />
      </TabsContent>
      <TabsContent value="payment-history">
        <PaymentHistory learnerId={learnerId} />
      </TabsContent>
    </Tabs>
  );
}

export default LearnerHistory;
