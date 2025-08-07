import { z } from "zod";
import { markAttendanceSchema } from "@/lib/schema";
import { Attendance, MarkAttendancePayload } from "@/types/root-types";
import { formatDateToISO } from "@/lib/utils";
import { apiConnector, RequestOptions } from "@/services/apiConnector";
import { attendanceEndpoints } from "@/services/apis";

const { MARK_ATTENDANCE_API, GET_ATTENDANCE_HISTORY_API } = attendanceEndpoints;

export async function markAttendance(
  data: z.infer<typeof markAttendanceSchema>,
  studentId: number,
) {
  try {
    const attendanceDate = formatDateToISO(data.date);
    const payload: MarkAttendancePayload = {
      student_id: studentId,
      date: attendanceDate,
      status: data.status,
      class_number: Number(data.class_number),
      notes: data.notes || "",
    };
    const options: RequestOptions = {
      method: "POST",
      data: payload,
    };
    console.log(options);
    const response = await apiConnector(MARK_ATTENDANCE_API, options);

    if (!response.ok) {
      return { success: false, message: "Could not mark attendance." };
    }
    return { success: true, message: "Attendance submitted successfully." };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error marking attendance." };
  }
}

export async function getAttendanceHistory(
  learnerId: number,
  setLoading: (loading: boolean) => void,
): Promise<{ attendances: Attendance[] | null }> {
  try {
    setLoading(true);
    const response = await apiConnector(
      `${GET_ATTENDANCE_HISTORY_API}/${learnerId}`,
    );
    if (!response.ok) {
      return { attendances: null };
    }
    const result = await response.json();
    if (!result.data.attendances) {
      return { attendances: [] };
    }
    return { attendances: result.data.attendances };
  } catch (error) {
    console.log(error);
    return { attendances: null };
  } finally {
    setLoading(false);
  }
}
