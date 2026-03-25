import { ArrowRight } from "lucide-react";
import { GlowingShadow } from "@/components/ui/glowing-shadow";
import { cn } from "@/lib/utils";

const INTEGRATIONS = ['Snowflake', 'Datadog', 'Stripe', 'Supabase'];

export default function EcosystemSection() {
    return (
        <section id="ecosystem" className="py-32 bg-black border-t border-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1 relative">
                        <div className="grid grid-cols-2 gap-4">
                            {INTEGRATIONS.map((integration, idx) => (
                                <GlowingShadow key={idx} className="rounded-xl overflow-hidden" contentClassName="p-6 flex flex-col items-center justify-center h-full">
                                    <div className="w-12 h-12 rounded bg-black flex items-center justify-center border border-[#1a1a1a] mb-3">
                                        <span className="text-white font-bold text-lg">{integration[0]}</span>
                                    </div>
                                    <span className="text-white font-medium text-sm">{integration}</span>
                                </GlowingShadow>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                            A platform that scales with <br /> your <span className="text-gradient">ambition.</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                            Aether isn&apos;t just a hosting tool; it&apos;s the foundational layer of your entire digital ecosystem. Extend Aether infinitely with native integrations that click together securely in seconds.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Our platform capabilities allow you to write custom WebAssembly extensions that run safely within our execution pipeline. Whether you&apos;re a two-person YC startup or a massive enterprise migrating from legacy monoliths, the Aether ecosystem provides the scalable primitives you need to own the future.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 text-white font-medium hover:text-[#0070f3] transition-colors">
                            Explore Integration Hub <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
