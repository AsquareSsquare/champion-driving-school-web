import { z } from "zod";
import { learnerDetailsSchema } from "@/lib/schema";
import { LearnerDetailsRequest } from "@/types/root-types";
import { formatDateToISO } from "@/lib/utils";
import { apiConnector, RequestOptions } from "@/services/apiConnector";
import { learnerEndpoints } from "@/services/apis";

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
