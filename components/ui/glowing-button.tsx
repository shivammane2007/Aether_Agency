import * as React from "react";
import { cn } from "@/lib/utils";

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
    fullWidth?: boolean;
}

export const GlowingButton = React.forwardRef<HTMLButtonElement, GlowingButtonProps>(
    ({ children, className, variant = "primary", fullWidth = false, ...props }, ref) => {
        return (
            <div className={cn("relative flex items-center justify-center group", fullWidth ? "w-full" : "w-fit")}>
                {/* Background Glow Layers - Adapted to Aether Blue */}
                <div className="absolute z-[-1] overflow-hidden h-full w-full rounded-xl blur-[3px] 
                                before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-60
                                before:bg-[conic-gradient(#000,#0070f3_5%,#000_38%,#000_50%,#3291ff_60%,#000_87%)] before:transition-all before:duration-2000
                                group-hover:before:rotate-[-120deg] group-focus-within:before:rotate-[420deg] group-focus-within:before:duration-[4000ms]">
                </div>
                
                <div className="absolute z-[-1] overflow-hidden h-full w-full rounded-xl blur-[2px] 
                                before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[83deg]
                                before:bg-[conic-gradient(rgba(0,0,0,0)_0%,#0070f3,rgba(0,0,0,0)_8%,rgba(0,0,0,0)_50%,#3291ff,rgba(0,0,0,0)_58%)] before:brightness-140
                                before:transition-all before:duration-2000 group-hover:before:rotate-[-97deg] group-focus-within:before:rotate-[443deg] group-focus-within:before:duration-[4000ms]">
                </div>

                <div className="absolute z-[-1] overflow-hidden h-full w-full rounded-xl blur-[0.5px] 
                                before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-70
                                before:bg-[conic-gradient(#1c191c,#0070f3_5%,#1c191c_14%,#1c191c_50%,#3291ff_60%,#1c191c_64%)] before:brightness-130
                                before:transition-all before:duration-2000 group-hover:before:rotate-[-110deg] group-focus-within:before:rotate-[430deg] group-focus-within:before:duration-[4000ms]">
                </div>

                <button
                    ref={ref}
                    className={cn(
                        "relative flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-medium transition-all duration-300",
                        variant === "primary" 
                            ? "bg-[#010201] text-white border-none" 
                            : "bg-[#010201] text-[#888888] border border-[#1a1a1a] hover:text-white",
                        fullWidth ? "w-full" : "w-fit",
                        className
                    )}
                    {...props}
                >
                    {children}
                </button>
            </div>
        );
    }
);

GlowingButton.displayName = "GlowingButton";
