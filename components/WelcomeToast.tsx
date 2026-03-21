"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WelcomeToast() {
    const [userName, setUserName] = useState<string | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Check sessionStorage for the userName after redirect
        const storedName = sessionStorage.getItem("userName");
        if (storedName) {
            setUserName(storedName);
            setVisible(true);
            sessionStorage.removeItem("userName");
        }
    }, []);

    useEffect(() => {
        if (visible) {
            // Auto dismiss after exactly 3.0 seconds
            const timer = setTimeout(() => {
                setVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <AnimatePresence>
            {visible && userName && (
                <motion.div
                    initial={{ opacity: 0, x: 20, y: -20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed top-6 right-6 z-[100] px-6 py-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_0_20px_rgba(0,112,243,0.15)] flex items-center gap-4 max-w-sm"
                >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0070f3] to-[#3291ff] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,112,243,0.5)]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white text-sm font-medium">Welcome Back, {userName}</span>
                        <span className="text-white/50 text-xs">Authentication successful</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
