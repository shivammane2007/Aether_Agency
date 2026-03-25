import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Allow all users to access the landing page by default
export function middleware(request: NextRequest) {
    return NextResponse.next();
}

// Ignore static assets and API routes
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
