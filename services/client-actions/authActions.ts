import { signInSchema } from "@/lib/schema";
import { z } from "zod";
import { apiConnector, RequestOptions } from "@/services/apiConnector";
import { authEndpoints } from "@/services/apis";

const { LOGIN_API } = authEndpoints;

export async function logIn(
  credentials: z.infer<typeof signInSchema>,
  setLoading: (loading: boolean) => void,
  onSuccess: () => void,
  onFailure: () => void,
) {
  try {
    setLoading(true);
    const options: RequestOptions = {
      method: "POST",
      data: credentials,
    };
    console.log("LOGIN_API", LOGIN_API);
    const response = await apiConnector(LOGIN_API, options);

    if (response.ok) {
      onSuccess();
    } else {
      onFailure();
    }
  } catch (error) {
    console.error(error);
    onFailure();
  } finally {
    setLoading(false);
  }
}
