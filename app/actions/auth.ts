"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginUser() {
    // Set a secure, HTTP-only cookie indicating the user is signed in
    const cookieStore = await cookies();
    cookieStore.set({
        name: "auth_token",
        value: "valid_session",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
    });

    // Redirect the user back to the primary dashboard/landing page
    redirect("/");
}

export async function logoutUser() {
    // Clear the active session token
    const cookieStore = await cookies();
    cookieStore.delete("auth_token");

    // Redirect to the auth gate
    redirect("/auth");
}
