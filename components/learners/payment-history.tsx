import React from "react";
import usePaymentHistory from "@/hooks/use-payment-history";
import { Loader } from "lucide-react";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from "@/components/ui/timeline";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

function PaymentHistory({ learnerId }: { learnerId: number }) {
  const { loading, payments } = usePaymentHistory(learnerId);
  if (loading)
    return (
      <div className="h-96 flex items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    );

  if (!payments)
    return (
      <div className="h-96 flex items-center justify-center">
        <p>Something went wrong while fetching payment history</p>
      </div>
    );
  return (
    <>
      {payments.length === 0 ? (
        <div className="h-96 flex items-center justify-center">
          <p>There is no payment history</p>
        </div>
      ) : (
        <Timeline defaultValue={payments.length} className="mt-6">
          {payments.map((payment, index) => (
            <TimelineItem
              key={index}
              step={index + 1}
              className="w-[calc(50%-1.5rem)] odd:ms-auto even:text-right even:group-data-[orientation=vertical]/timeline:ms-0 even:group-data-[orientation=vertical]/timeline:me-8 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:translate-x-1/2 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:translate-x-1/2"
            >
              <TimelineHeader>
                <TimelineSeparator />
                <TimelineDate>
                  {format(new Date(payment.payment_date), "MMM d, yyy")}
                </TimelineDate>
                <TimelineIndicator />
              </TimelineHeader>
              <TimelineContent className="space-y-3">
                <p>
                  Amount paid:{" "}
                  <span className="font-bold text-primary">
                    {payment.amount_paid}
                  </span>
                </p>
                <Badge variant="outline" className="capitalize">
                  {payment.payment_method}
                </Badge>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </>
  );
}

export default PaymentHistory;
