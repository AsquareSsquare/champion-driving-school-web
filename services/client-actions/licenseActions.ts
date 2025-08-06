import { z } from "zod";
import { licenseDetailsSchema } from "@/lib/schema";
import { License, LicenseDetailsRequest } from "@/types/root-types";
import { apiConnector, RequestOptions } from "@/services/apiConnector";
import { licenseEndpoints } from "@/services/apis";

const { SUBMIT_LICENSE_DETAILS_API, GET_LICENSE_DETAILS_API } =
  licenseEndpoints;

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

export async function getLicenseDetails(
  learnerId: number,
  setLoading: (loading: boolean) => void,
): Promise<{ license: License | null }> {
  try {
    setLoading(true);
    const response = await apiConnector(
      `${GET_LICENSE_DETAILS_API}/${learnerId}`,
    );
    if (!response.ok) {
      return { license: null };
    }
    const licenseDetails = await response.json();
    return { license: licenseDetails.data.license_document };
  } catch (error) {
    console.log(error);
    return { license: null };
  } finally {
    setLoading(false);
  }
}

export async function updateLicenseDetails(
  learnerId: number,
  data: z.infer<typeof licenseDetailsSchema>,
  setLoading: (loading: boolean) => void,
) {
  try {
    setLoading(true);
    const options: RequestOptions = {
      method: "PUT",
      data: data,
    };

    const response = await apiConnector(
      `${SUBMIT_LICENSE_DETAILS_API}/${learnerId}`,
      options,
    );
    if (!response.ok) {
      return { success: false, message: "Could not update license details." };
    }
    return { success: true, message: "License details updated successfully." };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error updating license details." };
  } finally {
    setLoading(false);
  }
}
