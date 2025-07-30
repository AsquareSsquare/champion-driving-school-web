import { Branch } from "@/types/server-types";
import { getCookie } from "@/services/server-actions/userActions";
import { serverAPIs } from "@/services/apis";

const { GET_ALL_BRANCHES_API } = serverAPIs;

export async function getAllBranches(): Promise<{ branches: Branch[] }> {
  try {
    const appCookie = await getCookie();
    if (!appCookie) {
      return { branches: [] };
    }

    const response = await fetch(GET_ALL_BRANCHES_API, {
      headers: { Cookie: `${appCookie?.name}=${appCookie?.value}` },
      cache: "no-store",
    });
    if (!response.ok) {
      return { branches: [] };
    }
    const result = await response.json();
    return { branches: result.data.branches };
  } catch (error) {
    console.log(error);
    return { branches: [] };
  }
}
