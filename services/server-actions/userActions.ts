"use server";

import { cookies } from "next/headers";
import { serverAPIs } from "@/services/apis";
import { User } from "@/types/server-types";

const { GET_USER_API } = serverAPIs;

export const getCookie = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("jwt_token");
};

export async function getLoggedInUser(): Promise<{ user: User | null }> {
  try {
    const appCookie = await getCookie();
    if (!appCookie) {
      return { user: null };
    }
    const response = await fetch(GET_USER_API, {
      headers: { Cookie: `${appCookie?.name}=${appCookie?.value}` },
      cache: "no-store",
    });
    if (!response.ok) {
      return { user: null };
    }
    const result = await response.json();
    return { user: result.data.user };
  } catch (error) {
    console.log(error);
    return { user: null };
  }
}
