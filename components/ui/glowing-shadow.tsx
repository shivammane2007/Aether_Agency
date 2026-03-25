"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GlowingShadowProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  glowClassName?: string;
}

export function GlowingShadow({ 
  children, 
  className, 
  contentClassName, 
}: GlowingShadowProps) {
  return (
    <div className={cn("glow-container group relative p-[1px] overflow-hidden", className)} role="button">
      <style jsx global>{`
        @property --hue {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --bg-y {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --bg-x {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --bg-size {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }

        .glow-container {
          --card-color: #080808;
          --bg-size: 1;
          --hue: 0;
          --hue-speed: 1;
          --animation-speed: 20s;
          --interaction-speed: 0.8s;
          
          display: flex;
          position: relative;
          z-index: 1;
          background: #1a1a1a; /* Default border color */
        }

        .glow-container:before {
          content: "";
          display: block;
          position: absolute;
          inset: 0;
          z-index: -1;
          background: radial-gradient(
            40% 40% at calc(var(--bg-x) * 1%) calc(var(--bg-y) * 1%),
            hsl(calc(var(--hue) * var(--hue-speed) * 1deg) 100% 70%) calc(0% * var(--bg-size)),
            hsl(calc(var(--hue) * var(--hue-speed) * 1deg) 100% 50%) calc(50% * var(--bg-size)),
            transparent 100%
          );
          animation: hue-animation var(--animation-speed) linear infinite,
                     rotate-bg var(--animation-speed) linear infinite;
          transition: --bg-size var(--interaction-speed) ease, opacity 0.4s ease;
          opacity: 0.2;
        }

        .glow-container:hover:before {
          --bg-size: 25;
          opacity: 1;
        }

        .glow-content {
          position: relative;
          width: 100%;
          height: 100%;
          background: var(--card-color);
          border-radius: inherit;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        @keyframes rotate-bg {
          0% { --bg-x: 0; --bg-y: 0; }
          25% { --bg-x: 100; --bg-y: 0; }
          50% { --bg-x: 100; --bg-y: 100; }
          75% { --bg-x: 0; --bg-y: 100; }
          100% { --bg-x: 0; --bg-y: 0; }
        }

        @keyframes hue-animation {
          0% { --hue: 0; }
          100% { --hue: 360; }
        }
      `}</style>
      
      <div className={cn("glow-content", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
