import { Learner } from "@/types/server-types";
import { getCookie } from "@/services/server-actions/userActions";
import { serverAPIs } from "@/services/apis";

const { GET_ALL_LEARNERS_API } = serverAPIs;

export async function getLearners(branchId?: string): Promise<{
  learners: Learner[] | null;
  message: string;
}> {
  try {
    const appCookie = await getCookie();
    if (!appCookie) {
      return { learners: [], message: "Cookie not found" };
    }
    const learnerApi = branchId
      ? `${GET_ALL_LEARNERS_API}?branch_id=${branchId}`
      : GET_ALL_LEARNERS_API;
    const response = await fetch(learnerApi, {
      headers: { Cookie: `${appCookie?.name}=${appCookie?.value}` },
      next: {
        tags: ["learners"],
      },
    });

    if (!response.ok) {
      return { learners: null, message: "Could not fetch learners" };
    }
    const result = await response.json();
    return {
      learners: result.data.students,
      message: "Learners fetched successfully",
    };
  } catch (error) {
    console.log(error);
    return { learners: null, message: "Error fetching learners" };
  }
}
