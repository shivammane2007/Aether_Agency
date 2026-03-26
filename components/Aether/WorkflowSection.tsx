"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const steps = [
    { num: "1", title: "Initialize", desc: "Connect your git repository or utilize the robust Aether CLI to link your codebase." },
    { num: "2", title: "Push & Process", desc: "Commit your code. Aether instantly processes, analyzes, and intelligently bundles your logic." },
    { num: "3", title: "Intelligent Automation", desc: "We automatically optimize assets and provision the exact secure execution environments required." },
    { num: "4", title: "Global Results", desc: "Your immutable build is deployed to 250+ global edge nodes simultaneously. You are live." },
];

const gradientOptions = [
    {
        id: "step-1",
        label: "Initialize",
        value: "0",
        color: "#0070f3",
        gradientFrom: "#0070f3",
        gradientTo: "#3291ff",
    },
    {
        id: "step-2",
        label: "Build",
        value: "1",
        color: "#3291ff",
        gradientFrom: "#3291ff",
        gradientTo: "#00dfd8",
    },
    {
        id: "step-3",
        label: "Automate",
        value: "2",
        color: "#00dfd8",
        gradientFrom: "#00dfd8",
        gradientTo: "#7928ca",
    },
    {
        id: "step-4",
        label: "Live",
        value: "3",
        color: "#7928ca",
        gradientFrom: "#7928ca",
        gradientTo: "#f30080",
    }
];

export default function WorkflowSection() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <section className="py-32 bg-[#0a0a0a] border-y border-[#1a1a1a] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1a1a1a] bg-black text-xs font-semibold text-[#0070f3] uppercase tracking-widest mb-6">
                        The Workflow
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        From idea to global execution. <span className="text-white/50">In three seconds.</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-light">
                        Forget provisioning. Focus on shipping.
                    </p>
                </div>

                <div className="flex flex-col items-center w-full">
                    <div className="w-full max-w-3xl mb-16 px-4">
                        <Slider 
                            min={0} 
                            max={3} 
                            step={1} 
                            value={selectedIndex} 
                            onChange={(v) => setSelectedIndex(v as number)}
                            showSteps
                            showValue={false}
                        />
                        <div className="flex justify-between mt-6 px-1">
                            {steps.map((step, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => setSelectedIndex(idx)}
                                    className={cn(
                                        "text-xs md:text-sm font-semibold tracking-wide transition-all duration-300",
                                        selectedIndex === idx ? "text-white scale-105" : "text-gray-600 hover:text-gray-400"
                                    )}
                                >
                                    {step.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative w-full max-w-4xl min-h-[200px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedIndex}
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="text-center space-y-6"
                            >
                                <div className="flex flex-col items-center">
                                    <div 
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-2xl border border-white/10"
                                        style={{ backgroundColor: gradientOptions[selectedIndex].color }}
                                    >
                                        {steps[selectedIndex].num}
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                                        {steps[selectedIndex].title}
                                    </h3>
                                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-4">
                                        {steps[selectedIndex].desc}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
}
