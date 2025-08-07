import { z } from "zod";
import { editLearnerSchema, learnerDetailsSchema } from "@/lib/schema";
import { LearnerDetailsRequest } from "@/types/root-types";
import { formatDateToISO } from "@/lib/utils";
import { apiConnector, RequestOptions } from "@/services/apiConnector";
import { learnerEndpoints } from "@/services/apis";
import { Learner } from "@/types/server-types";

const { SUBMIT_LEARNER_DETAILS_API } = learnerEndpoints;

export async function submitLearnerDetails(
  details: z.infer<typeof learnerDetailsSchema>,
  courses: string[],
  setLoading: (isLoading: boolean) => void,
) {
  try {
    setLoading(true);
    if (courses.length === 0) {
      return {
        success: false,
        message: "Please add course",
        learnerId: undefined,
      };
    }
    const { total_fees, dateOfBirth, branchId, ...data } = details;
    const dob = formatDateToISO(dateOfBirth);
    const payload: LearnerDetailsRequest = {
      ...data,
      total_fees: Number(total_fees),
      branch_id: Number(branchId),
      date_of_birth: dob,
      license_types: courses,
    };

    const options: RequestOptions = {
      method: "POST",
      data: payload,
    };

    const response = await apiConnector(SUBMIT_LEARNER_DETAILS_API, options);
    if (!response.ok) {
      return {
        success: false,
        message: "Could not submit learner details",
        learnerId: undefined,
      };
    }
    const learnerDetails = await response.json();
    return {
      success: true,
      message: "Learner details submitted successfully",
      learnerId: learnerDetails.data.student.id,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Error submitting learner details",
      learnerId: undefined,
    };
  } finally {
    setLoading(false);
  }
}

export async function getLearnerDetails(
  learnerId: number,
  setLoading: (isLoading: boolean) => void,
): Promise<{ learner: Learner | null }> {
  try {
    setLoading(true);
    const response = await apiConnector(
      `${SUBMIT_LEARNER_DETAILS_API}/${learnerId}`,
    );
    if (!response.ok) {
      return { learner: null };
    }
    const result = await response.json();
    return { learner: result.data.student };
  } catch (error) {
    console.error(error);
    return { learner: null };
  } finally {
    setLoading(false);
  }
}

export async function updateLearnerDetails(
  learnerId: number,
  details: z.infer<typeof editLearnerSchema>,
  courses: string[],
  setLoading: (isLoading: boolean) => void,
) {
  try {
    setLoading(true);
    const { total_fees, dateOfBirth, branchId, ...data } = details;
    const dob = formatDateToISO(dateOfBirth);
    const payload: LearnerDetailsRequest = {
      ...data,
      total_fees: Number(total_fees),
      branch_id: Number(branchId),
      date_of_birth: dob,
      license_types: courses,
    };
    const options: RequestOptions = {
      method: "PUT",
      data: payload,
    };

    const response = await apiConnector(
      `${SUBMIT_LEARNER_DETAILS_API}/${learnerId}`,
      options,
    );

    if (!response.ok) {
      return { success: false, message: "Could not update learner details" };
    }
    return { success: true, message: "Learner details updated successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error updating learner details" };
  } finally {
    setLoading(false);
  }
}

export async function deleteLearner(
  learnerId: number,
  setLoading: (isLoading: boolean) => void,
) {
  try {
    setLoading(true);
    const options: RequestOptions = {
      method: "DELETE",
    };
    const response = await apiConnector(
      `${SUBMIT_LEARNER_DETAILS_API}/${learnerId}`,
      options,
    );
    if (!response.ok) {
      return { success: false, message: "Could not delete learner details" };
    }
    return { success: true, message: "Learner deleted successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error deleting learner details" };
  } finally {
    setLoading(false);
  }
}
