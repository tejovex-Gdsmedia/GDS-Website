import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Canonical host is www.gdsmedia.in (see lib/routes.ts SITE_URL / all
// canonical tags). Redirect the apex domain so there's one indexable host
// instead of relying solely on hosting-provider domain settings.
const CANONICAL_HOST = "www.gdsmedia.in";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const hostname = host.split(":")[0];

  if (hostname === "gdsmedia.in") {
    const url = request.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
    url.protocol = "https";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
