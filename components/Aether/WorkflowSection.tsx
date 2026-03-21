const steps = [
    { num: "1", title: "Initialize", desc: "Connect your git repository or utilize the robust Aether CLI to link your codebase." },
    { num: "2", title: "Push & Process", desc: "Commit your code. Aether instantly processes, analyzes, and intelligently bundles your logic." },
    { num: "3", title: "Intelligent Automation", desc: "We automatically optimize assets and provision the exact secure execution environments required." },
    { num: "4", title: "Global Results", desc: "Your immutable build is deployed to 250+ global edge nodes simultaneously. You are live." },
];

export default function WorkflowSection() {

    return (
        <section className="py-32 bg-[#0a0a0a] border-y border-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        From idea to global execution. <span className="text-white/50">In three seconds.</span>
                    </h2>
                    <p className="text-xl text-[#888888] font-light">
                        Forget provisioning. Focus on shipping.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#333] to-transparent z-0" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-full bg-black border-2 border-[#1a1a1a] flex items-center justify-center text-white font-bold text-xl mb-6 shadow-xl">
                                {step.num}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                            <p className="text-[#888888] text-sm leading-relaxed max-w-[250px]">{step.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
