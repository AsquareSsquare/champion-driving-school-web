import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { DASHBOARD_PAGE, SIGN_IN_PAGE } from "@/constants/data";
import { getLoggedInUser } from "@/services/server-actions/userActions";

const adminRouts = [
  `/${DASHBOARD_PAGE}/create-branch`,
  `/${DASHBOARD_PAGE}/create-staff`,
  `/${DASHBOARD_PAGE}/bookings`,
];

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const intlResponse = intlMiddleware(request);
  const locale = nextUrl.pathname.split("/")[1];

  // Auth check
  if (nextUrl.pathname.startsWith(`/${locale}/${DASHBOARD_PAGE}`)) {
    const { user } = await getLoggedInUser();
    if (!user) {
      return NextResponse.redirect(new URL(`/${SIGN_IN_PAGE}`, nextUrl));
    }
    const isAdminRoute = adminRouts.find(
      (route) => nextUrl.pathname === `/${locale}${route}`,
    );
    if (user.role !== "admin" && isAdminRoute) {
      return NextResponse.redirect(new URL(`/${DASHBOARD_PAGE}`, nextUrl));
    }
  }
  return intlResponse;
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
