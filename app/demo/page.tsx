"use client";

import { AuthSwitch } from "@/components/ui/auth-switch";

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-[#000] flex flex-col items-center justify-center p-6 gap-8">
            <div className="text-center space-y-4 max-w-lg">
                <h1 className="text-4xl font-bold text-white tracking-tight">Auth Switch Demo</h1>
                <p className="text-[#888] text-lg">
                    A premium, animated toggle for switching between authentication modes, 
                    designed specifically for the Aether Agency ecosystem.
                </p>
            </div>

            <div className="p-12 rounded-3xl bg-[#0a0a0a] border border-[#1a1a1a] shadow-2xl flex flex-col items-center gap-8">
                <AuthSwitch 
                    onToggle={(mode) => console.log(`Switched to: ${mode}`)}
                />
                
                <div className="text-xs text-[#444] font-medium uppercase tracking-widest mt-4">
                    Sliding Animation • Spring Dynamics • Aether Theme
                </div>
            </div>

            <a 
                href="/" 
                className="mt-12 text-[#888] hover:text-white transition-colors text-sm font-medium border-b border-[#1a1a1a] pb-1"
            >
                Back to Landing Page
            </a>
        </div>
    );
}
