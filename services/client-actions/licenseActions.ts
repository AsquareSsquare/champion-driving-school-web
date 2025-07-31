import { z } from "zod";
import { licenseDetailsSchema } from "@/lib/schema";
import { LicenseDetailsRequest } from "@/types/root-types";
import { apiConnector, RequestOptions } from "@/services/apiConnector";
import { licenseEndpoints } from "@/services/apis";

const { SUBMIT_LICENSE_DETAILS_API } = licenseEndpoints;

export async function submitLicenseDetails(
  details: z.infer<typeof licenseDetailsSchema>,
  learnerId: number,
  setLoading: (loading: boolean) => void,
) {
  try {
    setLoading(true);
    const payload: LicenseDetailsRequest = {
      ...details,
      student_id: learnerId,
    };
    const options: RequestOptions = {
      method: "POST",
      data: payload,
    };
    const response = await apiConnector(SUBMIT_LICENSE_DETAILS_API, options);

    if (!response.ok) {
      return { success: false, message: "Could not submit license details." };
    }
    return {
      success: true,
      message: "license details submitted successfully.",
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error submitting license details." };
  } finally {
    setLoading(false);
  }
}
