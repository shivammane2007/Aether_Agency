import { Globe2, Zap, Network, Route, GitCommitVertical } from "lucide-react";

const features = [
    {
        icon: <Globe2 className="w-6 h-6 text-[#0070f3]" />,
        title: "Global Edge Network",
        description: "Deploy your application logic to 250+ Points of Presence worldwide instantaneously.",
        benefit: "Eliminate geographic latency and deliver sub-50ms response times to every single user on earth.",
        useCase: "Keeping real-time multiplayer gaming state perfectly synchronized across continents."
    },
    {
        icon: <Zap className="w-6 h-6 text-[#0070f3]" />,
        title: "Concurrency-First Auto-Scaling",
        description: "A custom architecture that anticipates load and scales from zero to one million requests per second automatically.",
        benefit: "Never over-provision database connections or experience traffic bottleneck crashes again.",
        useCase: "Absorbing massive, unpredictable traffic spikes seamlessly during a viral product launch."
    },
    {
        icon: <Network className="w-6 h-6 text-[#0070f3]" />,
        title: "Distributed State Management",
        description: "A globally distributed, strongly consistent key-value store built directly into the compute layer.",
        benefit: "Read and write persistent data at the edge without querying a centralized, distant database.",
        useCase: "Global collaborative text editing with absolutely zero conflict resolution delays."
    },
    {
        icon: <Route className="w-6 h-6 text-[#0070f3]" />,
        title: "Intelligent Traffic Routing",
        description: "AI-driven request routing that continuously analyzes global network health and bypasses congestion in real-time.",
        benefit: "Maintains absolute 99.999% uptime, even during regional tier-1 ISP outages or targeted DDoS attacks.",
        useCase: "Mission-critical financial transaction processing where a dropped request means lost revenue."
    },
    {
        icon: <GitCommitVertical className="w-6 h-6 text-[#0070f3]" />,
        title: "Zero-Config CI/CD",
        description: "Push to your GitHub repository. Aether builds, heavily optimizes, and distributes the immutable bundle in under 3 seconds.",
        benefit: "10x your team&apos;s deployment velocity by entirely removing pipeline orchestration and manual deployment steps.",
        useCase: "Rapidly iterating on frontend applications and microservices securely, with automated preview URLs."
    }
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-32 bg-[#050505] border-t border-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Core Primitives for the <span className="text-gradient">Modern Web</span>
                    </h2>
                    <p className="text-lg text-[#888888] font-light">
                        Everything you need to build at planetary scale, built directly into the platform fabric.
                        No plugins, no configuration drift, just pure capability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`glass-panel p-8 rounded-2xl flex flex-col group hover:border-[#333333] transition-colors duration-300 ${idx === 3 || idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#0070f3]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                            <p className="text-[#888888] mb-6 text-sm leading-relaxed flex-grow">
                                {feature.description}
                            </p>

                            <div className="space-y-4 pt-6 border-t border-[#1a1a1a]">
                                <div>
                                    <h4 className="text-xs uppercase tracking-wider text-[#555555] font-semibold mb-1">The Benefit</h4>
                                    <p className="text-gray-300 text-sm leading-snug">{feature.benefit}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-wider text-[#0070f3] font-semibold mb-1">Use Case</h4>
                                    <p className="text-[#888888] text-sm leading-snug italic">{feature.useCase}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
