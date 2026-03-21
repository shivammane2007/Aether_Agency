"use client";

import dynamic from 'next/dynamic';

const SignInPage = dynamic(
    () => import("@/components/ui/sign-in-flow-1").then((mod) => mod.SignInPage),
    { ssr: false }
);

export default function AuthGate() {
    return (
        <div className="flex w-full h-screen justify-center items-center bg-black">
            <SignInPage />
        </div>
    );
}
