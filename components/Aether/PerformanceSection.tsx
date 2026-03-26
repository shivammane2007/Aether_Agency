import { ArrowRight } from "lucide-react";
import { GlowingShadow } from "@/components/ui/glowing-shadow";
import FaqSection from "@/components/Aether/FaqSection";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function PerformanceSection() {
    return (
        <section className="py-24 md:py-32 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

                <div className="text-center mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
                        Enterprise-grade performance <span className="text-gradient">by default.</span>
                    </h2>
                    <p className="text-base md:text-xl text-gray-400 font-light">
                        Metrics that completely redefine the way you architect software. Aether provides the definitive reliability and raw power demanded by the world&apos;s most critical web applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 md:mb-32">
                    <GlowingShadow className="rounded-2xl" contentClassName="p-8 text-center justify-center min-h-[160px]">
                        <span className="text-4xl sm:text-5xl font-black text-white mb-2">&lt; 2<span className="text-xl sm:text-2xl text-gray-500">ms</span></span>
                        <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Cold Starts Globally</span>
                    </GlowingShadow>
                    <GlowingShadow className="rounded-2xl" contentClassName="p-8 text-center justify-center min-h-[160px]">
                        <span className="text-4xl sm:text-5xl font-black text-white mb-2">99.999%</span>
                        <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Enterprise SLA</span>
                    </GlowingShadow>
                    <GlowingShadow className="rounded-2xl" contentClassName="p-8 text-center justify-center min-h-[160px]">
                        <span className="text-4xl sm:text-5xl font-black text-white mb-2">&lt; 50<span className="text-xl sm:text-2xl text-gray-500">ms</span></span>
                        <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Global P99 Latency</span>
                    </GlowingShadow>
                    <GlowingShadow className="rounded-2xl" contentClassName="p-8 text-center justify-center min-h-[160px]">
                        <span className="text-4xl sm:text-5xl font-black text-white mb-2">Layer 7</span>
                        <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold">DDoS Mitigation</span>
                    </GlowingShadow>
                </div>

                <div className="mb-32">
                    <FaqSection />
                </div>

                {/* CTA Section */}
                <div className="glass-panel p-8 sm:p-12 md:p-24 rounded-3xl text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0070f3] rounded-full blur-[120px] opacity-10 pointer-events-none" />

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
                        Start creating without limits.
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 md:mb-12 relative z-10">
                        Join the next generation of visionary engineering teams redefining what&apos;s possible on the web. Build the future faster. Get started completely free, no credit card required.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <button className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 transition-transform duration-300">
                                Deploy Your First Project <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-[#333333] text-white font-medium text-lg hover:bg-[#111111] transition-colors">
                            Read the Documentation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
