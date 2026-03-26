import { Component as Globe } from "@/components/ui/interactive-globe";

export default function GlobeSection() {
  return (
    <div className="flex bg-black items-center justify-center p-8 border-t border-[#1a1a1a]">
      <div className="w-full max-w-7xl rounded-2xl border border-[#1a1a1a] bg-black/40 overflow-hidden relative">
        {/* Ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#0070f3]/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row min-h-[500px]">
          {/* Left content */}
          <div className="flex-1 flex flex-col justify-center p-10 md:p-14 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1a1a1a] bg-white/5 py-1 px-3 text-xs text-gray-400 mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All systems operational
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Global Edge
              <br />
              <span className="bg-gradient-to-r from-[#0070f3] to-cyan-400 bg-clip-text text-transparent">
                Network
              </span>
            </h2>

            <p className="text-sm md:text-base text-gray-400 max-w-md leading-relaxed mb-8">
              Deployed across 150+ points of presence worldwide.
              Your data served from the nearest node in under 50ms.
              Drag the globe to explore.
            </p>

            <div className="flex items-center gap-6">
              <div>
                <p className="text-2xl font-bold text-white">150+</p>
                <p className="text-xs text-gray-500">Edge Nodes</p>
              </div>
              <div className="w-px h-8 bg-[#1a1a1a]" />
              <div>
                <p className="text-2xl font-bold text-white">&lt;50ms</p>
                <p className="text-xs text-gray-500">Avg Latency</p>
              </div>
              <div className="w-px h-8 bg-[#1a1a1a]" />
              <div>
                <p className="text-2xl font-bold text-white">99.99%</p>
                <p className="text-xs text-gray-500">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right — Globe */}
          <div className="flex-1 flex items-center justify-center p-4 md:p-0 min-h-[400px]">
            <Globe size={460} dotColor="rgba(0, 112, 243, ALPHA)" arcColor="rgba(0, 112, 243, 0.5)" markerColor="rgba(0, 200, 255, 1)" />
          </div>
        </div>
      </div>
    </div>
  );
}
