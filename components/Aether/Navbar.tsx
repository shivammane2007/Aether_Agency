"use client";
import { useState, useEffect, memo } from "react";
import { Play } from "lucide-react";
import { AuthSwitch } from "@/components/ui/auth-switch";

export default memo(function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-xl border-b border-[#1a1a1a]" : "bg-transparent"
                }`}
        >
            <div className="flex items-center gap-2">
                {/* Aether Logo Mark */}
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0070f3] to-[#3291ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,112,243,0.5)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 22H22L12 2Z" fill="white" />
                    </svg>
                </div>
                <div className="font-semibold text-xl tracking-tight text-white ml-2">
                    Aether
                </div>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                <a href="#product" className="hover:text-white transition-colors">Product</a>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
                <a href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</a>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            </div>

            <div className="flex items-center gap-4">
                <AuthSwitch className="hidden sm:flex" />
                <button
                    className="flex items-center gap-2 h-11 px-6 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white text-black hover:bg-gray-100 transition-colors shadow-2xl shadow-white/5 active:scale-95 transition-transform"
                >
                    Start Building
                    <Play className="w-3 h-3 fill-black transition-transform group-hover:translate-x-0.5" />
                </button>
            </div>
        </nav>
    );
});
