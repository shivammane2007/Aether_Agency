"use client";
import * as React from "react";
import { memo } from "react";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";
import { GlowingButton } from "@/components/ui/glowing-button";
import { PulseBeams } from "@/components/ui/pulse-beams";

export default memo(function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-black pt-32 pb-20 px-6">
            {/* Premium subtle glow background */}
            <div className="hero-glow" />

            {/* Background pattern elements from hero-section-9 */}
            <div
                aria-hidden
                className="z-[0] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict hidden lg:block">
                <div className="w-[35rem] h-[80rem] -translate-y-1/2 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(210,100%,50%,.08)_0,hsla(210,100%,30%,.02)_50%,transparent_80%)]" />
                <div className="h-[80rem] absolute left-1/4 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(210,100%,50%,.06)_0,hsla(210,100%,30%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
            </div>

            <div className="relative mx-auto max-w-5xl text-center z-10">
                {/* Core Tagline */}
                <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1a1a1a] bg-[#0a0a0a]/80 text-xs font-medium text-gray-400 backdrop-blur-sm animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-[#0070f3] animate-pulse" />
                    YC &apos;26 • Backed by Sequoia • 99.999% SLA Guaranteed
                </div>

                <h1 className="text-balance text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-white mb-8">
                    The new standard <br className="hidden md:block" />
                    for <span className="text-gradient">infinite scale.</span>
                </h1>

                <p className="mx-auto my-8 max-w-2xl text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                    Build, deploy, and scale globally without managing infrastructure.
                    Aether is the distributed edge compute engine designed for the next generation of the internet.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="#" className="w-full sm:w-auto">
                        <GlowingButton 
                            className="w-full sm:w-auto px-8 py-4 rounded-xl text-lg"
                        >
                            Start building for free <ArrowRight className="ml-2 w-5 h-5" />
                        </GlowingButton>
                    </Link>
                    <Link href="#" className="w-full sm:w-auto">
                        <GlowingButton 
                            variant="outline"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl text-lg"
                        >
                            Contact Enterprise Sales
                        </GlowingButton>
                    </Link>
                </div>
            </div>

            {/* Code window preview simulation - Desktop Integrated */}
            <div className="mx-auto mt-24 max-w-7xl [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] relative">
                <PulseBeams
                    beams={[
                        {
                            path: "M100 0V150C100 160 110 170 120 170H300",
                            gradientConfig: {
                                initial: { x1: "0%", x2: "0%", y1: "0%", y2: "10%" },
                                animate: { x1: ["0%", "100%"], x2: ["0%", "110%"], y1: ["0%", "100%"], y2: ["10%", "110%"] },
                                transition: { duration: 1, repeat: Infinity, repeatDelay: 3, delay: 0, ease: "linear" }
                            }
                        },
                        {
                            path: "M1100 0V150C1100 160 1090 170 1080 170H900",
                            gradientConfig: {
                                initial: { x1: "100%", x2: "100%", y1: "0%", y2: "10%" },
                                animate: { x1: ["100%", "0%"], x2: ["100%", "-10%"], y1: ["0%", "100%"], y2: ["10%", "110%"] },
                                transition: { duration: 1, repeat: Infinity, repeatDelay: 3, delay: 1, ease: "linear" }
                            }
                        },
                        {
                            path: "M200 600V450C200 440 210 430 220 430H400",
                            gradientConfig: {
                                initial: { x1: "0%", x2: "0%", y1: "100%", y2: "90%" },
                                animate: { x1: ["0%", "100%"], x2: ["0%", "110%"], y1: ["100%", "0%"], y2: ["90%", "-10%"] },
                                transition: { duration: 1, repeat: Infinity, repeatDelay: 3, delay: 2, ease: "linear" }
                            }
                        },
                        {
                            path: "M1000 600V450C1000 440 990 430 980 430H800",
                            gradientConfig: {
                                initial: { x1: "100%", x2: "100%", y1: "100%", y2: "90%" },
                                animate: { x1: ["100%", "0%"], x2: ["100%", "-10%"], y1: ["100%", "0%"], y2: ["90%", "-10%"] },
                                transition: { duration: 1, repeat: Infinity, repeatDelay: 3, delay: 3, ease: "linear" }
                            }
                        }
                    ]}
                    width={1200}
                    height={600}
                    className="py-20"
                >
                    <div className="[perspective:1200px] w-full relative z-20">
                        <div className="[transform:rotateX(10deg);] transition-transform duration-700 hover:[transform:rotateX(5deg);]">
                            <div className="w-full max-w-5xl mx-auto glass-panel rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,112,243,0.1)] border-[#1a1a1a]">
                                <div className="flex items-center h-10 px-4 bg-[#050505] border-b border-[#1a1a1a]">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                    </div>
                                    <div className="mx-auto text-xs text-gray-500 font-mono">index.ts — Aether Edge</div>
                                </div>
                                <div className="p-6 md:p-8 bg-[#0a0a0a]/50 backdrop-blur-md font-mono text-sm md:text-base text-gray-300 overflow-x-auto">
                                    <div className="flex">
                                        <span className="text-gray-600 mr-4 select-none">1</span>
                                        <span><span className="text-[#ff7b72]">import</span> &#123; Aether &#125; <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">&apos;@aether/edge&apos;</span>;</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 mr-4 select-none">2</span>
                                        <span></span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 mr-4 select-none">3</span>
                                        <span><span className="text-[#ff7b72]">export default</span> <span className="text-[#d2a8ff]">Aether</span>.<span className="text-[#d2a8ff]">serve</span>(&#123;</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 mr-4 select-none">4</span>
                                        <span>  <span className="text-[#79c0ff]">fetch</span>(req) &#123;</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 mr-4 select-none">5</span>
                                        <span>    <span className="text-[#ff7b72]">return new</span> <span className="text-[#d2a8ff]">Response</span>(<span className="text-[#a5d6ff]">&quot;Hello from 250+ global locations instantly.&quot;</span>);</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 mr-4 select-none">6</span>
                                        <span>  &#125;</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 mr-4 select-none">7</span>
                                        <span>&#125;);</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PulseBeams>
            </div>

        </section>
    );
});
