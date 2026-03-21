export default function ProductOverviewSection() {
    return (
        <section id="product" className="py-32 relative bg-black overflow-hidden">
            {/* Background radial gradient representing a "bottleneck" opening up */}
            <div className="absolute top-0 right-[-20%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(0,112,243,0.05)_0%,transparent_60%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1a1a1a] bg-[#0a0a0a] text-xs font-semibold text-[#0070f3] uppercase tracking-widest mb-6">
                        The Problem
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
                        Infrastructure that gets out of your way.
                    </h2>
                    <p className="text-xl text-[#888888] font-light leading-relaxed">
                        The real bottleneck isn&apos;t your code. It&apos;s the fragile layers of complexity between your logic and your users.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="glass-panel p-10 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors duration-500" />
                        <h3 className="text-2xl font-semibold text-white mb-4">Legacy Cloud</h3>
                        <p className="text-[#888888] leading-relaxed">
                            Current cloud solutions force you to stitch together fragile pipelines, manage endless JSON/YAML configurations, and guess at unpredictable scaling policies. You spend weeks building deployment infrastructure instead of product features.
                        </p>
                    </div>

                    <div className="glass-panel p-10 rounded-2xl relative overflow-hidden group border-[#0070f3]/30">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0070f3]/10 rounded-full blur-3xl group-hover:bg-[#0070f3]/20 transition-colors duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            The Aether Primitive
                            <span className="px-2 py-0.5 rounded bg-[#0070f3]/20 text-[#0070f3] text-xs font-bold uppercase tracking-wider">Solution</span>
                        </h3>
                        <p className="text-gray-300 leading-relaxed relative z-10">
                            Aether fundamentally changes this paradigm. We abstracted the entire DevOps layer into a single, highly intelligent primitive. There are no containers to orchestrate, no regions to select, and no scaling groups to manage. You simply write the code, and we distribute it globally in milliseconds—pure, unadulterated execution.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
