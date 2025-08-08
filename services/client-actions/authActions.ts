import { signInSchema } from "@/lib/schema";
import { z } from "zod";
import { apiConnector, RequestOptions } from "@/services/apiConnector";
import { authEndpoints } from "@/services/apis";
import { User } from "@/types/server-types";

const { LOGIN_API, FETCH_USER_API, LOGOUT_API } = authEndpoints;

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

export async function fetchUser(
  setLoading: (loading: boolean) => void,
): Promise<{
  user: User | null;
  message: string;
}> {
  try {
    setLoading(true);
    const options: RequestOptions = {
      method: "GET",
    };
    const response = await apiConnector(FETCH_USER_API, options);
    if (!response.ok) {
      return { user: null, message: "could not fetch user" };
    }
    const result = await response.json();
    return { user: result.data, message: result.data.message };
  } catch (error) {
    console.error(error);
    return { user: null, message: "Error fetching user" };
  } finally {
    setLoading(false);
  }
}

export async function logOut(
  setLoading: (loading: boolean) => void,
  onSuccess: () => void,
  onFailure: () => void,
) {
  try {
    setLoading(true);
    const options: RequestOptions = {
      method: "POST",
    };
    const response = await apiConnector(LOGOUT_API, options);

    if (!response.ok) {
      onFailure();
    } else {
      onSuccess();
    }
  } catch (error) {
    console.error(error);
    onFailure();
  } finally {
    setLoading(false);
  }
}
