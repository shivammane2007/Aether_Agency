"use client";
import { memo } from "react";
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

            <div className="max-w-4xl mx-auto text-center z-10">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] text-white mb-8">
                    The new standard <br className="hidden md:block" />
                    for <span className="text-gradient">infinite scale.</span>
                </h1>

                <p className="text-xl md:text-2xl text-[#888888] leading-relaxed max-w-3xl mx-auto mb-12 font-light">
                    Build, deploy, and scale globally without managing infrastructure.
                    Aether is the distributed edge compute engine designed for the next generation of the internet.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 transition-transform duration-300">
                        Start building for free <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-[#333333] text-white font-medium text-lg hover:bg-[#111111] transition-colors">
                        Contact Enterprise Sales
                    </button>
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
        </section>
    );
});
