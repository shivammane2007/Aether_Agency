export default function SocialProofSection() {
    return (
        <section className="py-24 border-t border-[#1a1a1a] bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Trusted by the world&apos;s most <span className="text-gradient">innovative</span> engineering teams.
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl font-light">
                            From hyper-growth startups to established Fortune 500s, Aether powers
                            the mission-critical infrastructure behind the products you use every day.
                        </p>
                    </div>

                    <div className="flex flex-col gap-12">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex flex-col">
                                <span className="text-5xl font-black text-white mb-2">2.5B+</span>
                                <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-[#0070f3]" />
                                    API Requests Daily
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-5xl font-black text-white mb-2">15k+</span>
                                <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-[#0070f3]" />
                                    Engineering Teams
                                </span>
                            </div>
                            <div className="flex flex-col pt-4">
                                <span className="text-5xl font-black text-white mb-2">&lt; 50<span className="text-3xl text-gray-500">ms</span></span>
                                <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-green-500" />
                                    Global Latency
                                </span>
                            </div>
                            <div className="flex flex-col pt-4">
                                <span className="text-5xl font-black text-white mb-2">99.999%</span>
                                <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-[#0070f3]" />
                                    Guaranteed Uptime
                                </span>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-[#1a1a1a]">
                            <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider font-medium">Trusted by engineering leaders at</p>
                            <div className="flex flex-wrap items-center gap-x-12 gap-y-8 opacity-70 grayscale">
                                <h3 className="text-2xl font-bold text-white tracking-widest">VERCEL</h3>
                                <h3 className="text-2xl font-black text-white italic">Stripe</h3>
                                <h3 className="text-2xl font-medium text-white tracking-tighter">Linear</h3>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Ramp</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
