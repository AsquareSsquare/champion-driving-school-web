"use server";

import { cookies } from "next/headers";
import { serverAPIs } from "@/services/apis";
import { User } from "@/types/server-types";

const { GET_USER_API } = serverAPIs;

export const getCookie = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("jwt_token");
};

export async function getLoggedInUser(): Promise<{
  user: User | null;
  message: string;
}> {
  try {
    const appCookie = await getCookie();
    if (!appCookie) {
      return { user: null, message: "Cookie not found" };
    }
    console.log("Fetching user from:", GET_USER_API);
    console.log("Cookie header:", `${appCookie.name}=${appCookie.value}`);
    const response = await fetch(GET_USER_API, {
      headers: { Cookie: `${appCookie?.name}=${appCookie?.value}` },
      cache: "no-store",
    });
    console.log("API response status:", response.status, response.statusText);
    if (!response.ok) {
      const errorText = await response.text().catch(() => "No response body");
      console.log("API error response:", errorText);
      return { user: null, message: "Could not find user" };
    }
    const result = await response.json();
    return { user: result.data.user, message: result.message };
  } catch (error) {
    console.log(error);
    return { user: null, message: "Error getting user" };
  }
}
