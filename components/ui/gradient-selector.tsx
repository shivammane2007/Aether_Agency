"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GradientOption {
  id: string;
  label: string;
  value: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

interface GradientSelectorProps {
  options: GradientOption[];
  defaultSelected?: string;
  onSelectionChange?: (option: GradientOption, index: number) => void;
  className?: string;
  selectedIndex: number;
}

export function GradientSelector({
  options,
  onSelectionChange,
  className,
  selectedIndex
}: GradientSelectorProps) {
  const [gradientPosition, setGradientPosition] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();

  // Update gradient position when selection changes
  useEffect(() => {
    if (selectedIndex >= 0 && circleRefs.current[selectedIndex] && containerRef.current) {
      const circleElement = circleRefs.current[selectedIndex];
      const containerElement = containerRef.current;
      
      const circleRect = circleElement.getBoundingClientRect();
      const containerRect = containerElement.getBoundingClientRect();
      
      // Calculate position relative to container
      const relativeX = circleRect.left + (circleRect.width / 2) - containerRect.left;
      const relativeY = circleRect.top + (circleRect.height / 2) - containerRect.top;
      
      setGradientPosition({ x: relativeX, y: relativeY });
    } else {
      setGradientPosition(null);
    }
  }, [selectedIndex]);

  const handleCircleClick = (option: GradientOption, index: number) => {
    onSelectionChange?.(option, index);
  };

  // Create orbital dots around a circle - dots match the circle's color
  const createOrbitalDots = (count: number, radius: number, color: string) => {
    const dots = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      dots.push(
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          initial={{ 
            opacity: 0, 
            scale: 0.3,
            rotate: shouldReduceMotion ? 0 : -90,
            x: x - 2, // Account for half the dot width
            y: y - 2  // Account for half the dot height
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: 0,
            x: x - 2,
            y: y - 2
          }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 0.6,
            delay: shouldReduceMotion ? 0 : i * 0.03,
            type: "spring",
            stiffness: 400,
            damping: 25,
            ease: [0.04, 0.62, 0.23, 0.98]
          }}
          style={{
            backgroundColor: color,
            left: '50%',
            top: '50%',
          }}
        />
      );
    }
    return dots;
  };

  const getCircleSize = (index: number) => {
    return "w-5 h-5";
  };

  const getLineStyle = (lineIndex: number) => {
    const isLitUp = selectedIndex > lineIndex; 
    const isCurrent = selectedIndex === lineIndex;
    const currentOption = options[lineIndex];
    const nextOption = options[lineIndex + 1];
    
    if (isLitUp) {
      return {
        background: `linear-gradient(to right, ${currentOption.gradientFrom}, ${nextOption?.gradientTo || currentOption.gradientTo})`
      };
    } else if (isCurrent) {
      return {
        background: `linear-gradient(to right, ${currentOption.gradientFrom}, #1a1a1a)`
      };
    } else {
      return {
        background: `#1a1a1a`
      };
    }
  };

  return (
    <div 
      ref={containerRef}
      className={cn("relative flex items-center justify-center pt-10 pb-16 w-full overflow-visible bg-transparent", className)}
    >
      {/* Radial gradient overlay */}
      {selectedIndex >= 0 && gradientPosition && (
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, ${options[selectedIndex].color}12 0%, ${options[selectedIndex].color}04 40%, transparent 70%)`,
          }}
        />
      )}
      
      <div className="relative z-10 flex items-center justify-between w-full max-w-[95%] bg-transparent p-0 px-2">
        {options.map((option, index) => (
          <div key={option.id} className={cn("flex items-center", index < options.length - 1 ? "flex-1" : "flex-initial")}>
            {/* Circle Container */}
            <div className="relative">
                <div 
                ref={(el) => { circleRefs.current[index] = el; }}
                className={cn(
                    "relative cursor-pointer transition-all duration-300 hover:scale-125 z-20",
                    getCircleSize(index),
                    "rounded-full border-2 border-transparent"
                )}
                onClick={() => handleCircleClick(option, index)}
                style={{
                    backgroundColor: selectedIndex >= index ? option.color : '#1a1a1a',
                    boxShadow: selectedIndex === index 
                    ? `0 0 30px ${option.color}60, 0 0 60px ${option.color}30`
                    : 'none'
                }}
                >
                {selectedIndex === index && createOrbitalDots(12, 22, option.color)}
                </div>
                
                {/* Number Label Above */}
                <div className={cn(
                    "absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold transition-all duration-300",
                    selectedIndex === index ? "text-white opacity-100 transform -translate-y-1" : "text-[#888] opacity-50"
                )}>
                    {index + 1}
                </div>
                {/* Label Below */}
                <div 
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer group whitespace-nowrap"
                  onClick={() => handleCircleClick(option, index)}
                >
                  <span 
                    className={cn(
                      "text-xs font-semibold tracking-wide transition-all duration-300",
                      selectedIndex === index ? "scale-105" : "opacity-40"
                    )}
                    style={{
                      color: selectedIndex >= index ? option.color : '#888'
                    }}
                  >
                    {option.label}
                  </span>
                  <div className={cn(
                      "h-0.5 w-0.5 rounded-full transition-all duration-300",
                      selectedIndex === index ? "scale-150" : "opacity-0"
                  )} style={{ backgroundColor: option.color }} />
                </div>
            </div>
            
            {/* Line (don't render after last circle) */}
            {index < options.length - 1 && (
              <div 
                className={cn("flex-1 h-[2px] mx-2 rounded-full transition-all duration-700 ease-in-out")}
                style={getLineStyle(index)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
