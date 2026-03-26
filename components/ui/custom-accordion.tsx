"use client";

import * as React from "react";
import { HelpCircle, MessageCircle, ChevronDown } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

const CustomAccordion = AccordionPrimitive.Root;

const CustomAccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn("", className)}
        {...props}
    />
));
CustomAccordionItem.displayName = "CustomAccordionItem";

const CustomAccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                "group flex flex-1 items-center justify-between gap-4 rounded-2xl p-5 text-left",
                "bg-[#050505] border border-[#1a1a1a] text-white transition-all hover:border-[#333333] hover:shadow-lg hover:shadow-blue-500/5",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                "data-[state=open]:bg-black/80 data-[state=open]:border-[#0070f3]/30 data-[state=open]:shadow-[0_0_20px_rgba(0,112,243,0.1)]",
                className
            )}
            {...props}
        >
            <div className="flex items-center gap-4">
                <HelpCircle className="h-5 w-5 text-[#0070f3]" />
                <span className="text-lg font-medium text-white tracking-wide">
                    {children}
                </span>
            </div>
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] transition-transform group-hover:scale-105 group-hover:bg-[#333333] group-data-[state=open]:bg-[#0070f3] group-data-[state=open]:rotate-180">
                <ChevronDown className="h-4 w-4 text-white" />
            </div>
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = "CustomAccordionTrigger";

const CustomAccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className={cn(
            "overflow-hidden text-gray-400",
            "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-2",
            className
        )}
        {...props}
    >
        <div className="mt-4">
            <div className="flex items-start gap-4 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a] p-5 shadow-lg shadow-black/50 transition-all">
                <span className="flex-1 text-md leading-relaxed">{children}</span>
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] transition-transform hover:scale-105">
                    <MessageCircle className="h-4 w-4 text-gray-400" />
                </div>
            </div>
        </div>
    </AccordionPrimitive.Content>
));
CustomAccordionContent.displayName = "CustomAccordionContent";

export {
    CustomAccordion,
    CustomAccordionItem,
    CustomAccordionTrigger,
    CustomAccordionContent,
};
