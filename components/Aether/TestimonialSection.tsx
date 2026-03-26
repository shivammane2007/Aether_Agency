import { Testimonial } from "@/components/ui/clean-testimonial";

export default function TestimonialSection() {
    return (
        <section id="testimonials" className="py-24 bg-[#050505] border-y border-[#1a1a1a] relative overflow-hidden">
            {/* Background glow matching the components */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,112,243,0.03)_0%,transparent_60%)] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-[10px] font-bold uppercase tracking-widest text-green-400 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Trusted by industry leaders
                    </div>
                </div>

                <div className="glass-panel rounded-3xl border border-[#1a1a1a] bg-black/40 backdrop-blur-3xl overflow-hidden">
                    <Testimonial />
                </div>
            </div>
        </section>
    );
}
