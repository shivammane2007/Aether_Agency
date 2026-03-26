"use client";
import { useState, useEffect, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Play, X } from "lucide-react";
import { AuthSwitch } from "@/components/ui/auth-switch";
import { LimelightNav } from "@/components/ui/limelight-nav";
import { LogoMark } from "@/components/Aether/LogoMark";

export default memo(function Navbar() {
    const pathname = usePathname();
    const shouldReduceMotion = useReducedMotion();
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

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

            if (pathname === "/") {
                const sections = ["product", "features", "ecosystem", "pricing", "faq"];
                let current = "";
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 150) {
                            current = section;
                        }
                    }
                }
                setActiveSection(current);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, pathname]);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    const navItems = [
        { id: "product", label: "Product", href: "/#product" },
        { id: "features", label: "Features", href: "/#features" },
        { id: "ecosystem", label: "Ecosystem", href: "/#ecosystem" },
        { id: "pricing", label: "Pricing", href: "/#pricing" },
        { id: "faq", label: "FAQ", href: "/#faq" },
        { id: "contact", label: "Contact", href: "/contact" },
    ];

    let currentActiveIndex = 0;
    if (pathname === "/contact") {
        currentActiveIndex = 5;
    } else {
        const index = navItems.findIndex((item) => item.id === activeSection);
        currentActiveIndex = index !== -1 ? index : 0;
    }

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 transition-all duration-500 ease-in-out transform-gpu ${
                    visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                } ${scrolled ? "bg-black/40 backdrop-blur-xl border-b border-[#1a1a1a]" : "bg-transparent"}`}
            >
                <a href="/" className="flex min-w-0 items-center gap-2 cursor-pointer group">
                    <LogoMark className="w-9 h-9 shrink-0 transition-all duration-300 group-hover:scale-105" />
                    <div className="font-semibold text-lg sm:text-xl tracking-tight text-white ml-1 sm:ml-2 transition-colors duration-300 truncate">
                        Aether
                    </div>
                </a>

                <div className="hidden md:block">
                    <LimelightNav
                        items={navItems}
                        activeIndex={currentActiveIndex}
                        className="bg-transparent border-none h-12"
                        limelightClassName="bg-[#0070f3] shadow-[0_45px_30px_rgba(0,112,243,0.8)]"
                        iconContainerClassName="px-3 lg:px-6"
                    />
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                    <AuthSwitch className="hidden lg:flex" />
                    <Link href="/contact" className="hidden sm:block">
                        <button className="group flex items-center gap-2 h-11 px-4 md:px-5 lg:px-6 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white text-black hover:bg-gray-100 transition-colors shadow-2xl shadow-white/5 active:scale-95 transition-transform whitespace-nowrap">
                            Start Building
                            <Play className="w-3 h-3 fill-black transition-transform group-hover:translate-x-0.5" />
                        </button>
                    </Link>
                    <button
                        type="button"
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                        className="md:hidden flex h-11 w-11 items-center justify-center rounded-full border border-[#1a1a1a] bg-[#0a0a0a]/90 text-white shadow-2xl shadow-white/5 backdrop-blur-xl"
                    >
                        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.button
                            type="button"
                            aria-label="Close navigation overlay"
                            onClick={() => setMenuOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                        />
                        <motion.div
                            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
                            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
                            transition={{ duration: shouldReduceMotion ? 0.15 : 0.3, ease: "easeOut" }}
                            className="fixed inset-x-4 top-20 z-50 rounded-3xl border border-[#1a1a1a] bg-[#050505]/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-2xl md:hidden"
                        >
                            <div className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="flex min-h-11 items-center rounded-2xl border border-transparent px-4 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-[#1a1a1a] hover:bg-white/5"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>

                            <div className="mt-5 flex flex-col gap-3 border-t border-[#1a1a1a] pt-5">
                                <AuthSwitch className="w-full" />
                                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                                    <button className="group flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-[10px] font-bold uppercase tracking-widest text-black shadow-2xl shadow-white/5 transition-colors hover:bg-gray-100">
                                        Start Building
                                        <Play className="w-3 h-3 fill-black transition-transform group-hover:translate-x-0.5" />
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
});
