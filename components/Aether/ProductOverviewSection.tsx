import { ExpandableCard } from "@/components/ui/expandable-card";

export default function ProductOverviewSection() {
    return (
        <section id="product" className="py-32 relative bg-black overflow-hidden">
            {/* Background radial gradient representing a "bottleneck" opening up */}
            <div className="absolute top-0 right-[-20%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(0,112,243,0.05)_0%,transparent_60%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1a1a1a] bg-[#0a0a0a] text-xs font-semibold text-[#0070f3] uppercase tracking-widest mb-6">
                        The Problem
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
                        Infrastructure that gets out of your way.
                    </h2>
                    <p className="text-xl text-gray-400 font-light leading-relaxed">
                        The real bottleneck isn&apos;t your code. It&apos;s the fragile layers of complexity between your logic and your users. Click to explore the architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ExpandableCard
                        title="Legacy Cloud"
                        description="Complexity by design"
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                        disableGlow
                    >
                        <div className="space-y-4">
                            <p>
                                Traditional cloud providers force a heavy "Tax on Innovation." Every new feature requires:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Complex VPC and Subnet mapping</li>
                                <li>Manual Container Orchestration (K8s complexity)</li>
                                <li>Fragile CI/CD pipelines with 1000+ lines of YAML</li>
                                <li>Variable Latency due to region-locking</li>
                            </ul>
                            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 mt-4 text-red-200/80 text-sm italic">
                                Result: Developers spend 40% of their time on "Plumbing" rather than "Product."
                            </div>
                        </div>
                    </ExpandableCard>

                    <ExpandableCard
                        title="The Aether Primitive"
                        description="Execution at the edge"
                        src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2074&auto=format&fit=crop"
                        disableGlow
                    >
                        <div className="space-y-4 text-gray-300">
                            <p>
                                Aether abstracts the entire compute layer. When you push code, the Aether Engine:
                            </p>
                            <div className="grid grid-cols-2 gap-4 my-6">
                                <div className="p-4 rounded-xl bg-[#0070f3]/5 border border-[#0070f3]/20">
                                    <div className="text-[#0070f3] font-bold mb-1 text-lg">Instant</div>
                                    <div className="text-xs text-gray-400">Global propagation in &lt;100ms</div>
                                </div>
                                <div className="p-4 rounded-xl bg-[#0070f3]/5 border border-[#0070f3]/20">
                                    <div className="text-[#0070f3] font-bold mb-1 text-lg">Auto-Scale</div>
                                    <div className="text-xs text-gray-400">Zero-config vertical & horizontal scaling</div>
                                </div>
                            </div>
                            <p>
                                We don&apos;t use region selectors. Your code is everywhere, all at once. By removing the DevOps tax, Aether allows your team to focus exclusively on business logic while we handle the global distribution.
                            </p>
                            <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10 mt-4 text-green-200/80 text-sm">
                                ⚡ Reduced infrastructure costs by average of 65% across YC partners.
                            </div>
                        </div>
                    </ExpandableCard>
                </div>
            </div>
        </section>
    );
}
