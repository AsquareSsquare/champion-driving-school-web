import { staffEndpoints } from "@/services/apis";
import { z } from "zod";
import { addStuffSchema } from "@/lib/schema";
import { apiConnector, RequestOptions } from "@/services/apiConnector";

const { ADD_STAFF_API, DELETE_STAFF_API } = staffEndpoints;

export async function createStaff(
  staffData: z.infer<typeof addStuffSchema>,
  setLoading: (loading: boolean) => void,
  onSuccess: () => void,
  onFailure: () => void,
) {
  try {
    setLoading(true);

    const payload = {
      ...staffData,
      branch_id: staffData.branch_id ? Number(staffData.branch_id) : null,
    };

    const options: RequestOptions = {
      method: "POST",
      data: payload,
    };

    const response = await apiConnector(ADD_STAFF_API, options);
    if (!response.ok) {
      onFailure();
    } else {
      onSuccess();
    }
  } catch (error) {
    console.log(error);
    onFailure();
  } finally {
    setLoading(false);
  }
}

export async function deleteStaff(staffId: number) {
  try {
    const options: RequestOptions = {
      method: "DELETE",
    };

    const response = await apiConnector(
      `${DELETE_STAFF_API}/${staffId}`,
      options,
    );
    if (!response.ok) {
      return { success: false, message: "Could not delete staff" };
    }
    return { success: true, message: "Staff deleted successfully" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error deleting staff" };
  }
}
