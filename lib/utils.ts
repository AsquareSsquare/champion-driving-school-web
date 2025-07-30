import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Branch } from "@/types/server-types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

export function getBesUrl() {
  if (process.env.NEXT_PUBLIC_APP_ENVIRONMENT === "DEV") {
    return process.env.NEXT_PUBLIC_BASE_URL_DEV;
  }
  return process.env.NEXT_PUBLIC_BASE_URL_PROD;
}

export function getBranchSelectItems(branches: Branch[]) {
  return branches.map((branch) => ({
    label: branch.name,
    value: branch.id.toString(),
  }));
}
