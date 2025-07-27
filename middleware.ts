import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";
import { DASHBOARD_PAGE } from "@/constants/data";
import { cookies } from "next/headers";
import { getLocale } from "next-intl/server";

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const locale = await getLocale();
  if (nextUrl.pathname.startsWith(`/${locale}/${DASHBOARD_PAGE}`)) {
    const cookieStore = await cookies();
    console.log("Cookies: ", cookieStore.get("jwt_token"));
  }
  return intlMiddleware(request);
}

export const config = {
  // Combine matchers for both i18n and auth middleware
  matcher: [
    // Match all pathnames except for:
    // - API routes, trpc, Next.js internals, Vercel routes
    // - Files with extensions (e.g., .js, .png)
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
  ],
};
