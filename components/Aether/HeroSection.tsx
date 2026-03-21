"use client";
import { memo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default memo(function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
            {/* Premium subtle glow background */}
            <div className="hero-glow" />

            {/* Core Tagline */}
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1a1a1a] bg-[#0a0a0a]/50 text-xs font-medium text-[#888888] backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#0070f3] animate-pulse" />
                YC &apos;26 • Backed by Sequoia • 99.999% SLA Guaranteed
            </div>

            <div className="relative mx-auto max-w-5xl px-6 py-12 lg:py-16 z-10">
                <div className="relative z-10 mx-auto max-w-3xl text-center">
                    <h1 className="text-balance text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] text-white">
                        Modern Software <br className="hidden md:block" />
                        testing <span className="text-gradient">reimagined.</span>
                    </h1>
                    <p className="mx-auto my-8 max-w-2xl text-xl md:text-2xl text-[#888888] font-light leading-relaxed">
                        Officiis laudantium excepturi ducimus rerum dignissimos, and tempora nam vitae, excepturi ducimus iste provident dolores.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-6 text-lg font-semibold"
                        >
                            <Link href="#">
                                <span className="btn-label">Start Building</span>
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto rounded-full border-[#333] text-white hover:bg-[#111] px-8 py-6 text-lg font-medium"
                        >
                            <Link href="#">
                                <span>Contact Sales</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Code window preview simulation */}
            <div className="w-full max-w-5xl mx-auto mt-24 glass-panel rounded-xl overflow-hidden shadow-2xl skew-y-0 md:-skew-y-2 transform-gpu">
                <div className="flex items-center h-10 px-4 bg-[#050505] border-b border-[#1a1a1a]">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <div className="mx-auto text-xs text-[#555] font-mono">index.ts — Aether Edge</div>
                </div>
                <div className="p-6 md:p-8 bg-[#0a0a0a] font-mono text-sm md:text-base text-gray-300 overflow-x-auto">
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

            {/* Partners Section */}
            <div className="relative z-10 mt-32 w-full max-w-5xl mx-auto px-6 pb-20">
                <h2 className="text-center text-lg font-medium text-[#555]">Your favorite companies are our partners.</h2>
                <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <img className="h-5 w-auto brightness-200" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia" />
                    <img className="h-4 w-auto brightness-200" src="https://html.tailus.io/blocks/customers/column.svg" alt="Column" />
                    <img className="h-4 w-auto brightness-200" src="https://html.tailus.io/blocks/customers/github.svg" alt="GitHub" />
                    <img className="h-5 w-auto brightness-200" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike" />
                    <img className="h-4 w-auto brightness-200" src="https://html.tailus.io/blocks/customers/laravel.svg" alt="Laravel" />
                    <img className="h-6 w-auto brightness-200" src="https://html.tailus.io/blocks/customers/openai.svg" alt="OpenAI" />
                    <img className="h-5 w-auto brightness-200" src="https://html.tailus.io/blocks/customers/vercel.svg" alt="Vercel" />
                </div>
            </div>
        </section>
    );
});
