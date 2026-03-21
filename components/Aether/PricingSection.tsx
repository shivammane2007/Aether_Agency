import { Check } from "lucide-react";

export default function PricingSection() {
    return (
        <section id="pricing" className="py-32 bg-black border-t border-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Simple Pricing for <span className="text-gradient">Powerful Experiences</span>
                    </h2>
                    <p className="text-xl text-[#888888] font-light max-w-2xl mx-auto">
                        Choose a plan that scales with your workflow and unlocks the full potential of the platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Starter Plan */}
                    <div className="glass-panel p-8 rounded-2xl flex flex-col hover:border-[#333333] transition-colors relative">
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-bold text-white">$0</span>
                                <span className="text-[#888888] font-medium">/ month</span>
                            </div>
                            <p className="text-[#888888] text-sm leading-relaxed">Perfect for prototyping and individual developers building their first projects.</p>
                        </div>

                        <div className="space-y-4 mb-8 flex-grow">
                            {['Basic platform access', 'Community support', 'Limited integrations', 'Starter analytics', 'Up to 3 projects'].map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#888888] shrink-0 mt-0.5" />
                                    <span className="text-gray-300 text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button className="w-full py-3 rounded-xl bg-transparent border border-[#333333] text-white font-medium hover:bg-[#111111] transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Pro Plan (Highlighted) */}
                    <div className="glass-panel p-8 rounded-2xl flex flex-col border-[#0070f3]/50 shadow-[0_0_30px_rgba(0,112,243,0.1)] relative scale-100 md:scale-105 z-10 bg-[#050505]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="px-3 py-1 bg-[#0070f3] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                                Most Popular
                            </div>
                        </div>

                        <div className="mb-8 mt-2">
                            <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-bold text-white">$19</span>
                                <span className="text-[#888888] font-medium">/ month</span>
                            </div>
                            <p className="text-[#888888] text-sm leading-relaxed">Everything you need to ship production applications with your entire team.</p>
                        </div>

                        <div className="space-y-4 mb-8 flex-grow">
                            {['Unlimited projects', 'Advanced analytics', 'Priority support', 'Automation tools', 'Full integrations', 'Team collaboration'].map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#0070f3] shrink-0 mt-0.5" />
                                    <span className="text-gray-300 text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button className="w-full py-3 rounded-xl bg-[#0070f3] text-white font-medium hover:bg-[#005bb5] hover:shadow-[0_0_20px_rgba(0,112,243,0.4)] transition-all">
                            Start Pro
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="glass-panel p-8 rounded-2xl flex flex-col hover:border-[#333333] transition-colors relative">
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-bold text-white">Custom</span>
                            </div>
                            <p className="text-[#888888] text-sm leading-relaxed">Dedicated infrastructure and massive scale for the world&apos;s most demanding workloads.</p>
                        </div>

                        <div className="space-y-4 mb-8 flex-grow">
                            {['Dedicated infrastructure', 'Advanced security', 'Custom integrations', 'Priority engineering support', 'Unlimited team members', 'Enterprise analytics'].map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                                    <span className="text-gray-300 text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
