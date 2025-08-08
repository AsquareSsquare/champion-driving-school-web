"use server";

import { Contact } from "@/types/server-types";
import { getCookie } from "@/services/server-actions/userActions";
import { serverAPIs } from "@/services/apis";

const { GET_ALL_CONTACTS_API } = serverAPIs;

export async function getAllContacts(): Promise<{
  contacts: Contact[] | null;
  message: string;
}> {
  try {
    const appCookie = await getCookie();
    if (!appCookie) {
      return { contacts: [], message: "Cookie not found" };
    }

    const response = await fetch(GET_ALL_CONTACTS_API, {
      headers: { Cookie: `${appCookie?.name}=${appCookie?.value}` },
      next: {
        tags: ["contacts"],
      },
    });

    if (!response.ok) {
      return { contacts: [], message: "Could not fetch contacts." };
    }

    const result = await response.json();
    return { contacts: result.data.contacts, message: result.message };
  } catch (error) {
    console.error(error);
    return { contacts: [], message: "Error fetching contacts." };
  }
}
