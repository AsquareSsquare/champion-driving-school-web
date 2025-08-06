import React from "react";
import useAttendanceHistory from "@/hooks/use-attendance-history";
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
import { cn } from "@/lib/utils";

function AttendanceHistory({ learnerId }: { learnerId: number }) {
  const { loading, attendanceHistory } = useAttendanceHistory(learnerId);
  if (loading)
    return (
      <div className="h-96 flex items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    );

  if (!attendanceHistory)
    return (
      <div className="h-96 flex items-center justify-center">
        <p>Something went wrong while fetching attendance history</p>
      </div>
    );
  return (
    <>
      {attendanceHistory.length === 0 ? (
        <div className="h-96 flex items-center justify-center">
          <p>There is no attendance history</p>
        </div>
      ) : (
        <Timeline defaultValue={attendanceHistory.length} className="mt-6">
          {attendanceHistory.map((attendance, index) => (
            <TimelineItem
              key={attendance.id}
              step={index + 1}
              className="w-[calc(50%-1.5rem)] odd:ms-auto even:text-right even:group-data-[orientation=vertical]/timeline:ms-0 even:group-data-[orientation=vertical]/timeline:me-8 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:translate-x-1/2 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:translate-x-1/2"
            >
              <TimelineHeader>
                <TimelineSeparator />
                <TimelineDate>
                  {format(new Date(attendance.date), "MMM d, yyy")}
                </TimelineDate>
                <TimelineIndicator />
              </TimelineHeader>
              <TimelineContent className="space-y-3">
                <p>
                  Marked by:{" "}
                  <span className="font-bold">
                    {attendance.marked_by_username}
                  </span>
                </p>
                <Badge
                  className={cn(
                    "capitalize",
                    {
                      "bg-emerald-500": attendance.status === "present",
                    },
                    { "bg-amber-500": attendance.status === "absent" },
                  )}
                >
                  {attendance.status}
                </Badge>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </>
  );
}

export default AttendanceHistory;
