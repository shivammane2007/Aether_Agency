"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { loginUser } from "@/app/actions/auth";

interface AuthSwitchProps {
    className?: string;
    onToggle?: (mode: "login" | "signup") => void;
}

export function AuthSwitch({ className, onToggle }: AuthSwitchProps) {
    const [mode, setMode] = useState<"login" | "signup">("login");
    const formRef = useRef<HTMLFormElement>(null);

    const handleToggle = (newMode: "login" | "signup") => {
        setMode(newMode);
        onToggle?.(newMode);
        
        // Trigger login if switching to login mode
        if (newMode === "login") {
            formRef.current?.requestSubmit();
        }
    };

    return (
        <div className={cn(
            "relative flex items-center h-11 p-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full shadow-2xl overflow-hidden",
            className
        )}>
            {/* Sliding Background */}
            <motion.div
                initial={false}
                animate={{
                    x: mode === "login" ? 0 : "100%",
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                }}
                className="absolute inset-y-1 left-1 w-[calc(50%-4px)] bg-gradient-to-br from-[#0070f3] to-[#3291ff] rounded-full z-0 shadow-[0_0_15px_rgba(30,128,255,0.4)]"
            />

            {/* Auth Buttons */}
            <button
                type="button"
                onClick={() => handleToggle("login")}
                className={cn(
                    "relative z-10 h-full flex items-center justify-center flex-1 px-6 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors duration-300 outline-none",
                    mode === "login" ? "text-white" : "text-[#888] hover:text-white/80"
                )}
            >
                Log In
            </button>
            <button
                type="button"
                onClick={() => handleToggle("signup")}
                className={cn(
                    "relative z-10 h-full flex items-center justify-center flex-1 px-6 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors duration-300 outline-none",
                    mode === "signup" ? "text-white" : "text-[#888] hover:text-white/80"
                )}
            >
                Sign Up
            </button>

            {/* Form for Login action */}
            <form ref={formRef} action={loginUser} className="hidden" />
        </div>
    );
}

// Named export for consistency with the requested Component name if preferred, 
// but AuthSwitch is better for the UI library.
export const Component = AuthSwitch;
