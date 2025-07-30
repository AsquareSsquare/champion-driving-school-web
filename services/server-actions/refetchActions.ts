"use server";

import { revalidateTag } from "next/cache";

export async function reFetchBookings() {
  revalidateTag("contacts");
}
