"use server";

import { cookies } from "next/headers";
import { serverAPIs } from "@/services/apis";
import { User } from "@/types/server-types";

const { GET_USER_API, GET_ALL_STAFFS_API } = serverAPIs;

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
    const response = await fetch(GET_USER_API, {
      headers: { Cookie: `${appCookie?.name}=${appCookie?.value}` },
      cache: "no-store",
    });
    if (!response.ok) {
      return { user: null, message: "Could not find user" };
    }
    const result = await response.json();
    return { user: result.data, message: result.message };
  } catch (error) {
    console.log(error);
    return { user: null, message: "Error getting user" };
  }
}

export async function getAllStaffs(): Promise<{ staffs: User[] | null }> {
  try {
    const appCookie = await getCookie();
    if (!appCookie) {
      return { staffs: null };
    }

    const response = await fetch(GET_ALL_STAFFS_API, {
      headers: { Cookie: `${appCookie?.name}=${appCookie?.value}` },
      next: {
        tags: ["staffs"],
      },
    });

    if (!response.ok) {
      return { staffs: null };
    }
    const result = await response.json();
    return { staffs: result.data.staff_users };
  } catch (error) {
    console.log(error);
    return { staffs: null };
  }
}
