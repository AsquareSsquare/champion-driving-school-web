import React, { useEffect } from "react";
import { Attendance } from "@/types/root-types";
import { getAttendanceHistory } from "@/services/client-actions/attendanceActions";

function useAttendanceHistory(learnerId: number) {
  const [loading, setLoading] = React.useState(false);
  const [attendanceHistory, setAttendanceHistory] = React.useState<
    Attendance[] | null
  >(null);

  const fetchAttendanceHistory = async () => {
    try {
      const result = await getAttendanceHistory(learnerId, setLoading);
      setAttendanceHistory(result.attendances);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAttendanceHistory();
  }, [learnerId]);

  return { loading, attendanceHistory };
}

export default useAttendanceHistory;
