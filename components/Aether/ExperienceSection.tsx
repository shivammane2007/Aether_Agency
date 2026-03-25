import { Terminal, Lightbulb, Zap } from "lucide-react";

export default function ExperienceSection() {
    return (
        <section className="py-32 relative bg-black border-t border-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1a1a1a] bg-[#0a0a0a] text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                            Developer Experience
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Designed for deep <span className="italic text-[#0070f3]">flow state.</span>
                        </h2>
                        <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
                            We obsessed over every millisecond of the developer experience, so you can obsess over your product. Aether feels like magic.
                        </p>

                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#222222] flex items-center justify-center shrink-0">
                                    <Terminal className="w-5 h-5 text-gray-300" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Instantaneous CLI</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Written in Rust, the CLI responds instantly. No waiting for Node/JVM to warm up.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#222222] flex items-center justify-center shrink-0">
                                    <Zap className="w-5 h-5 text-gray-300" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">120fps Dashboard</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Blazingly fast web interface natively built with WebGL and WebAssembly.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#222222] flex items-center justify-center shrink-0">
                                    <Lightbulb className="w-5 h-5 text-gray-300" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Aggressive Intuition</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">No complex YAML files, hidden configuration menus, or obscure error logs. Intelligent automation provides rollbacks the second an error rate spikes.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="relative">
                        {/* Decorative UI element representing the dashboard */}
                        <div className="glass-panel p-6 rounded-2xl border border-[#333333] shadow-2xl relative z-10">
                            <div className="flex justify-between items-center mb-8 border-b border-[#1a1a1a] pb-4">
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded bg-[#111] flex items-center justify-center border border-[#222]"><div className="w-3 h-3 bg-white rounded-sm" /></div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-xs text-white font-semibold">my-startup-api</span>
                                        <span className="text-[10px] text-green-400">Deployed • 2s ago</span>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-[#111] rounded text-xs text-white border border-[#222]">Settings</div>
                            </div>

                            <div className="space-y-4">
                                <div className="h-24 rounded-lg bg-gradient-to-r from-[#111] to-[#0a0a0a] border border-[#1a1a1a] p-4 flex flex-col justify-between">
                                    <span className="text-[10px] text-gray-500 uppercase font-mono">Requests / sec</span>
                                    <div className="flex items-end gap-1 h-8">
                                        {[30, 45, 60, 40, 80, 100, 70, 90, 110, 85, 120, 100].map((h, i) => (
                                            <div key={i} className="flex-1 bg-[#0070f3] rounded-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }} />
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-16 rounded-lg bg-[#0a0a0a] border border-[#1a1a1a] p-3">
                                        <span className="text-[10px] text-gray-500 uppercase font-mono block mb-1">P99 Latency</span>
                                        <span className="text-white font-semibold flex items-baseline gap-1">12<span className="text-xs text-[#888]">ms</span></span>
                                    </div>
                                    <div className="h-16 rounded-lg bg-[#0a0a0a] border border-[#1a1a1a] p-3">
                                        <span className="text-[10px] text-gray-500 uppercase font-mono block mb-1">Errors</span>
                                        <span className="text-white font-semibold flex items-baseline gap-1">0.00<span className="text-xs text-[#888]">%</span></span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Background glow behind dashboard */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0070f3] rounded-full blur-[100px] opacity-10 pointer-events-none" />
                    </div>

                </div>

            </div>
        </section>
    );
}
