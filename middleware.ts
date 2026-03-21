import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// We want to force authentication on the root path '/' before users see the landing page.
export function middleware(request: NextRequest) {
    const authToken = request.cookies.get("auth_token");

    // If the user does not have a session cookie and is trying to access the root UI
    if (!authToken && request.nextUrl.pathname === "/") {
        console.log("Unauthorized access to root, redirecting to /auth");
        return NextResponse.redirect(new URL("/auth", request.url));
    }

    // If the user is authenticated and explicitly goes to the auth portal again
    if (authToken && request.nextUrl.pathname === "/auth") {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

// Ensure the middleware only scales for specific UI routes 
// and ignores API routes, static Next.js assets, public images, etc.
export const config = {
    matcher: ["/", "/auth"],
};
