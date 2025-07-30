import { z } from "zod";
import { addBranchSchema } from "@/lib/schema";
import { apiConnector, RequestOptions } from "@/services/apiConnector";
import { branchEndpoints } from "@/services/apis";

const { CREATE_BRANCH_API } = branchEndpoints;

export async function createBranch(
  branchData: z.infer<typeof addBranchSchema>,
  setLoading: (loading: boolean) => void,
  onSuccess: () => void,
  onFailure: () => void,
) {
  try {
    setLoading(true);
    const options: RequestOptions = {
      method: "POST",
      data: branchData,
    };
    const response = await apiConnector(CREATE_BRANCH_API, options);
    if (!response.ok) {
      onFailure();
    } else {
      onSuccess();
    }
  } catch (err) {
    console.error(err);
    onFailure();
  } finally {
    setLoading(false);
  }
}
