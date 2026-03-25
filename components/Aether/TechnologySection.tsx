import { Cpu, Server, ShieldCheck } from "lucide-react";
import { GlowingShadow } from "@/components/ui/glowing-shadow";
import { cn } from "@/lib/utils";

export default function TechnologySection() {
    return (
        <section className="py-32 bg-[#050505] border-t border-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <div className="mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1a1a1a] bg-[#0a0a0a] text-xs font-semibold text-[#888888] uppercase tracking-widest mb-6">
                        Core Architecture
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Serious engineering without <span className="text-gradient">compromise.</span>
                    </h2>
                    <p className="text-xl text-[#888888] font-light leading-relaxed">
                        Aether is built from the ground up on a custom bare-metal architecture, combining Rust with heavily customized V8 isolates. We didn&apos;t just wrap a public cloud. We built our own network fabric.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <GlowingShadow className="rounded-2xl" contentClassName="p-8 text-left h-full">
                        <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center mb-6">
                            <Cpu className="text-white w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Custom V8 Isolates</h3>
                        <p className="text-[#888888] leading-relaxed text-sm">
                            By dropping legacy virtualization overhead, we achieve astonishing cold starts under 2ms. Code executes instantaneously upon request.
                        </p>
                    </GlowingShadow>

                    <GlowingShadow className="rounded-2xl" contentClassName="p-8 text-left h-full">
                        <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center mb-6">
                            <Server className="text-white w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Real-time Telemetry</h3>
                        <p className="text-[#888888] leading-relaxed text-sm">
                            Our observability telemetry processes stream data at 10 million events per second per node, giving you absolute insight into your application health.
                        </p>
                    </GlowingShadow>

                    <GlowingShadow className="rounded-2xl" contentClassName="p-8 text-left h-full">
                        <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center mb-6">
                            <ShieldCheck className="text-white w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Memory Safety</h3>
                        <p className="text-[#888888] leading-relaxed text-sm">
                            Written predominantly in Rust, the modern tech stack ensures absolute performance, ultimate memory safety, and infinite scalability without garbage collection pauses.
                        </p>
                    </GlowingShadow>
                </div>

            </div>
        </section>
    );
}
