"use client";
import { useState, useEffect, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Play } from "lucide-react";
import { AuthSwitch } from "@/components/ui/auth-switch";
import { LimelightNav } from "@/components/ui/limelight-nav";

export default memo(function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY < 10) {
                setVisible(true);
                setScrolled(false);
                setLastScrollY(currentScrollY);
                return;
            }

            setScrolled(currentScrollY > 20);

            const diff = currentScrollY - lastScrollY;
            if (Math.abs(diff) > 10) {
                setVisible(diff < 0);
                setLastScrollY(currentScrollY);
            }

            // Scroll Spy
            if (pathname === "/") {
                const sections = ["product", "features", "ecosystem", "pricing"];
                let current = "";
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        // Adjust offset as needed for navbar height
                        if (rect.top <= 150) { 
                            current = section;
                        }
                    }
                }
                setActiveSection(current);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, pathname]);

    const navItems = [
        { id: "product", label: "Product", href: "/#product" },
        { id: "features", label: "Features", href: "/#features" },
        { id: "ecosystem", label: "Ecosystem", href: "/#ecosystem" },
        { id: "pricing", label: "Pricing", href: "/#pricing" },
        { id: "faq", label: "FAQ", href: "/faq" },
        { id: "contact", label: "Contact", href: "/contact" },
    ];

    let currentActiveIndex = 0;
    if (pathname === '/contact') {
        currentActiveIndex = 5;
    } else if (pathname === '/faq') {
        currentActiveIndex = 4;
    } else {
        const index = navItems.findIndex(item => item.id === activeSection);
        currentActiveIndex = index !== -1 ? index : 0;
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 transition-all duration-500 ease-in-out ${
                visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            } ${scrolled ? "bg-black/40 backdrop-blur-xl border-b border-[#1a1a1a]" : "bg-transparent"}`}
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

            <div className="hidden md:block">
                <LimelightNav
                    items={navItems}
                    activeIndex={currentActiveIndex}
                    className="bg-transparent border-none h-12"
                    limelightClassName="bg-[#0070f3] shadow-[0_45px_30px_rgba(0,112,243,0.8)]"
                    iconContainerClassName="px-6"
                />
            </div>

            <div className="flex items-center gap-4">
                <AuthSwitch className="hidden sm:flex" />
                <Link href="/contact">
                    <button
                        className="group flex items-center gap-2 h-11 px-6 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white text-black hover:bg-gray-100 transition-colors shadow-2xl shadow-white/5 active:scale-95 transition-transform"
                    >
                        Start Building
                        <Play className="w-3 h-3 fill-black transition-transform group-hover:translate-x-0.5" />
                    </button>
                </Link>
            </div>
        </nav>
    );
});
