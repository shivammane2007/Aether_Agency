"use client";
import * as React from "react";
import { memo, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlowingButton } from "@/components/ui/glowing-button";

const START_SCALE = 0.6;

export default memo(function HeroSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [scrollScale, setScrollScale] = useState(START_SCALE);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionH = sectionRef.current.offsetHeight;
            const winH = window.innerHeight;
            const scrolled = Math.max(0, -rect.top);
            const maxScroll = sectionH - winH;
            const progress = maxScroll > 0 ? Math.min(scrolled / maxScroll, 1) : 1;
            setScrollScale(START_SCALE + progress * (1 - START_SCALE));
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-black pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8">
            <div className="hero-glow" />

            <div
                aria-hidden
                className="z-[0] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict hidden lg:block"
            >
                <div className="w-[35rem] h-[80rem] -translate-y-1/2 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(210,100%,50%,.08)_0,hsla(210,100%,30%,.02)_50%,transparent_80%)]" />
                <div className="h-[80rem] absolute left-1/4 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(210,100%,50%,.06)_0,hsla(210,100%,30%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
            </div>

            <div className="relative z-10 mx-auto max-w-5xl text-center">
                <div className="mb-6 sm:mb-8 inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-3 py-1 rounded-full border border-[#1a1a1a] bg-[#0a0a0a]/80 text-[11px] sm:text-xs font-medium text-gray-400 backdrop-blur-sm animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-[#0070f3] animate-pulse" />
                    YC &apos;26 • Backed by Sequoia • 99.999% SLA Guaranteed
                </div>

                <h1 className="text-balance text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-white mb-6 sm:mb-8">
                    The new standard <br className="hidden md:block" />
                    for <span className="text-gradient">infinite scale.</span>
                </h1>

                <p className="mx-auto my-6 sm:my-8 max-w-2xl px-2 sm:px-0 text-base sm:text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                    Build, deploy, and scale globally without managing infrastructure.
                    Aether is the distributed edge compute engine designed for the next generation of the internet.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                    <Link href="/contact" className="flex w-full justify-center sm:w-auto">
                        <GlowingButton className="w-full sm:w-auto px-8 py-4 rounded-xl text-lg">
                            Start building for free <ArrowRight className="ml-2 w-5 h-5" />
                        </GlowingButton>
                    </Link>
                    <Link href="/contact" className="flex w-full justify-center sm:w-auto">
                        <GlowingButton
                            variant="outline"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl text-lg"
                        >
                            Contact Enterprise Sales
                        </GlowingButton>
                    </Link>
                </div>
            </div>

            <div className="mx-auto mt-14 sm:mt-20 mb-20 sm:mb-32 max-w-7xl [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] relative px-0 sm:px-4">
                <div
                    className="will-change-transform transform-gpu"
                    style={{
                        transform: `scale(${scrollScale})`,
                        transformOrigin: "center top",
                        transition: "transform 0.05s linear",
                    }}
                >
                    <div className="w-full relative z-20 flex justify-center py-4 sm:py-6">
                        <div className="w-full max-w-5xl mx-auto">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#0070f3]/20 via-[#3291ff]/20 to-[#00dfd8]/20 rounded-2xl blur-3xl opacity-50 group-hover:opacity-75 transition duration-1000" />

                                <div className="relative glass-panel rounded-2xl overflow-hidden border border-[#1a1a1a] shadow-2xl">
                                    <div className="relative flex items-center justify-between h-10 sm:h-11 px-3 sm:px-5 bg-[#050505] border-b border-[#1a1a1a]">
                                        <div className="z-10 flex gap-2 sm:gap-2.5">
                                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <span className="text-[9px] sm:text-[10px] text-gray-500 font-mono tracking-[0.16em] sm:tracking-[0.2em] uppercase opacity-70">
                                                index.ts - Aether Edge
                                            </span>
                                        </div>
                                        <div className="w-10 sm:w-16" />
                                    </div>

                                    <div className="p-4 sm:p-6 md:p-10 bg-[#0a0a0a]/80 backdrop-blur-2xl font-mono text-xs sm:text-sm md:text-base text-gray-300 overflow-x-auto leading-relaxed">
                                        {[
                                            { line: 1, content: <><span className="text-[#ff7b72]">import</span> &#123; Aether &#125; <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">&apos;@aether/edge&apos;</span>;</> },
                                            { line: 2, content: "" },
                                            { line: 3, content: <><span className="text-[#ff7b72]">export default</span> <span className="text-[#d2a8ff]">Aether</span>.<span className="text-[#d2a8ff]">serve</span>(&#123;</> },
                                            { line: 4, content: <>  <span className="text-[#79c0ff]">fetch</span>(req) &#123;</> },
                                            { line: 5, content: <>    <span className="text-[#ff7b72]">return new</span> <span className="text-[#d2a8ff]">Response</span>(<span className="text-[#a5d6ff]">&quot;Hello from 250+ global locations instantly.&quot;</span>);</> },
                                            { line: 6, content: <>  &#125;</> },
                                            { line: 7, content: <>&#125;);</> }
                                        ].map((row, i) => (
                                            <div key={i} className="flex group/line">
                                                <span className="text-gray-600 w-7 sm:w-10 shrink-0 select-none opacity-40 group-hover/line:opacity-100 transition-opacity">
                                                    {row.line}
                                                </span>
                                                <span className="whitespace-nowrap pr-4">{row.content}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
