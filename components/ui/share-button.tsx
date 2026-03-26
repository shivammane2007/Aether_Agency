"use client"

import React, { useState } from "react"
import { Facebook, Link as LinkIcon, Linkedin, Twitter, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ShareLink {
  icon: LucideIcon
  href?: string
  onClick?: () => void
  label?: string
}

interface ShareButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  links: ShareLink[]
  children: React.ReactNode
}

export const ShareButton = ({
  className,
  links,
  children,
  ...props
}: ShareButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative inline-flex justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Button */}
      <button
        type="button"
        className={cn(
          "relative w-48 h-12 rounded-full px-4 py-2 flex items-center justify-center",
          "bg-[#0a0a0a]",
          "hover:bg-[#111]",
          "text-white",
          "border border-[#1a1a1a]",
          "transition-all duration-300",
          isHovered ? "opacity-0" : "opacity-100",
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">{children}</span>
      </button>

      {/* Hover Links */}
      <div className="absolute inset-0 flex h-12 w-48 justify-center">
        {links.map((link, index) => {
          const Icon = link.icon
          return (
            <button
              type="button"
              key={index}
              onClick={link.onClick}
              className={cn(
                "h-12 w-12 flex items-center justify-center",
                "bg-[#0a0a0a]",
                "text-gray-400 hover:text-white",
                "transition-all duration-300",
                index === 0 && "rounded-l-full",
                index === links.length - 1 && "rounded-r-full",
                "border-r border-[#1a1a1a] last:border-r-0 border-y",
                "hover:bg-[#1a1a1a]",
                isHovered
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0",
                index === 0 && "transition-all duration-200",
                index === 1 && "delay-[50ms] transition-all duration-200",
                index === 2 && "delay-100 transition-all duration-200",
                index === 3 && "delay-150 transition-all duration-200"
              )}
            >
              <Icon className="size-4" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
