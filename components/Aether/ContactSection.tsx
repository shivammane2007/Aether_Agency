"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
    Mail, 
    MessageSquare, 
    Globe, 
    Send, 
    Clock, 
    ShieldCheck, 
    ArrowUpRight,
    Headset,
    MapPin,
    Twitter,
    Facebook,
    Linkedin,
    Link as LinkIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowingButton } from "@/components/ui/glowing-button";
import { ShareButton } from "@/components/ui/share-button";

export function ContactSection() {
    const [focused, setFocused] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className="min-h-screen bg-black" />;
    }

    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5" />,
            title: "General Inquiries",
            value: "hello@aether.agency",
            description: "For general questions and partnerships"
        },
        {
            icon: <ShieldCheck className="w-5 h-5" />,
            title: "Enterprise Sales",
            value: "sales@aether.agency",
            description: "Custom solutions for large-scale operations"
        },
        {
            icon: <Headset className="w-5 h-5" />,
            title: "24/7 Support",
            value: "support@aether.agency",
            description: "Technical assistance whenever you need it"
        },
        {
            icon: <MessageSquare className="w-5 h-5" />,
            title: "Media & Press",
            value: "press@aether.agency",
            description: "For press releases and media inquiries"
        }
    ];

    const stats = [
        { label: "Uptime", value: "99.999%", color: "text-green-500" },
        { label: "Global Nodes", value: "250+", color: "text-blue-500" },
        { label: "Avg. Latency", value: "<15ms", color: "text-cyan-500" }
    ];

    const shareLinks = [
        {
            icon: Twitter,
            onClick: () => window.open(`https://twitter.com/share?url=${window.location.href}`, "_blank"),
            label: "Share on Twitter",
        },
        {
            icon: Facebook,
            onClick: () => window.open(`https://facebook.com/share?url=${window.location.href}`, "_blank"),
            label: "Share on Facebook",
        },
        {
            icon: Linkedin,
            onClick: () => window.open(`https://linkedin.com/share?url=${window.location.href}`, "_blank"),
            label: "Share on LinkedIn",
        },
        {
            icon: LinkIcon,
            onClick: () => navigator.clipboard.writeText(window.location.href),
            label: "Copy link",
        },
    ];

    return (
        <section id="contact" className="relative py-24 px-4 sm:px-6 md:px-8 overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.08)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column: Information & Branding */}
                    <div className="space-y-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                Available for new projects
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-[0.9] mb-6">
                                Let&apos;s build the <br />
                                <span className="text-gradient">future together.</span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
                                Ready to scale your infrastructure? Our team is standing by to help you design and deploy your next global application.
                            </p>
                        </motion.div>

                        {/* System Status Mockup */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-panel p-5 sm:p-6 rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]/40 backdrop-blur-xl relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm">System Status</h4>
                                        <p className="text-green-500 text-[10px] font-bold uppercase tracking-wider">All Systems Operational</p>
                                    </div>
                                </div>
                                <div className="text-[10px] text-gray-500 font-mono">LIVE: 2.4s ago</div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-3 sm:gap-4">
                                {stats.map((stat, i) => (
                                    <div key={i} className="space-y-1">
                                        <p className="text-gray-500 text-[10px] uppercase tracking-wider">{stat.label}</p>
                                        <p className={cn("text-base sm:text-lg font-bold tabular-nums", stat.color)}>{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactInfo.map((info, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex items-start gap-4 group cursor-pointer"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#0a0a0a] border border-[#1a1a1a] flex items-center justify-center text-gray-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h5 className="text-white text-sm font-medium mb-1 flex items-center gap-1">
                                            {info.title}
                                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                        </h5>
                                        <p className="text-blue-500 text-sm font-semibold mb-1">{info.value}</p>
                                        <p className="text-gray-500 text-xs">{info.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Decorative background glow for form */}
                        <div className="absolute -inset-4 bg-blue-500/10 rounded-[2.5rem] blur-3xl opacity-20 pointer-events-none" />
                        
                        <div className="relative glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border border-[#1a1a1a] bg-[#050505]/60 backdrop-blur-2xl">
                            <h3 className="text-2xl font-bold text-white mb-8">Send us a message</h3>
                            
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                                        <div className="relative">
                                            <input 
                                                type="text" 
                                                placeholder="John Doe"
                                                onFocus={() => setFocused("name")}
                                                onBlur={() => setFocused(null)}
                                                suppressHydrationWarning
                                                className="w-full min-h-11 bg-black/40 border border-[#1a1a1a] rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
                                            />
                                            {focused === "name" && (
                                                <motion.div layoutId="glow" className="absolute -inset-[1px] rounded-xl border border-blue-500 pointer-events-none" />
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                                        <div className="relative">
                                            <input 
                                                type="email" 
                                                placeholder="john@example.com"
                                                onFocus={() => setFocused("email")}
                                                onBlur={() => setFocused(null)}
                                                suppressHydrationWarning
                                                className="w-full min-h-11 bg-black/40 border border-[#1a1a1a] rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
                                            />
                                            {focused === "email" && (
                                                <motion.div layoutId="glow" className="absolute -inset-[1px] rounded-xl border border-blue-500 pointer-events-none" />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Service Interest</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {["Core Edge", "Enterprise", "Custom"].map((service) => (
                                            <button 
                                                key={service}
                                                type="button"
                                                className="min-h-11 px-4 py-2 rounded-lg border border-[#1a1a1a] bg-black/20 text-gray-400 text-xs font-medium hover:border-blue-500/50 hover:text-white transition-all active:scale-95"
                                            >
                                                {service}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Your Message</label>
                                    <div className="relative">
                                        <textarea 
                                            rows={5}
                                            placeholder="Tell us about your project infrastructure needs..."
                                            onFocus={() => setFocused("message")}
                                            onBlur={() => setFocused(null)}
                                            suppressHydrationWarning
                                            className="w-full min-h-11 bg-black/40 border border-[#1a1a1a] rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                        />
                                        {focused === "message" && (
                                            <motion.div layoutId="glow" className="absolute -inset-[1px] rounded-xl border border-blue-500 pointer-events-none" />
                                        )}
                                    </div>
                                </div>

                                <GlowingButton fullWidth className="py-4 text-sm uppercase tracking-[0.2em] font-bold">
                                    Launch Inquiry <Send className="ml-2 w-4 h-4" />
                                </GlowingButton>
                            </form>

                            {/* Share Options */}
                            <div className="mt-8 pt-8 border-t border-[#1a1a1a] flex flex-col items-center justify-center gap-4">
                                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Share this page</span>
                                <ShareButton links={shareLinks} className="text-gray-400 hover:text-white">
                                    <LinkIcon size={15} />
                                    Share
                                </ShareButton>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
