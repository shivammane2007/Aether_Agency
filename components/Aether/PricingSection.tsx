"use client";

import { PricingSection } from "@/components/ui/pricing";

const aetherPlans = [
    {
        name: "Starter",
        price: "12",
        yearlyPrice: "10",
        period: "month",
        features: [
            "Basic platform access",
            "Community support",
            "Limited integrations",
            "Starter analytics",
            "Up to 3 projects",
        ],
        description: "Perfect for prototyping and individual developers building their first projects.",
        buttonText: "Get Started",
        href: "#",
    },
    {
        name: "Pro",
        price: "19",
        yearlyPrice: "15",
        period: "month",
        features: [
            "Unlimited projects",
            "Advanced analytics",
            "Priority support",
            "Automation tools",
            "Full integrations",
            "Team collaboration",
        ],
        description: "Everything you need to ship production applications with your entire team.",
        buttonText: "Start Pro",
        href: "#",
        isPopular: true,
    },
    {
        name: "Enterprise",
        price: "499",
        yearlyPrice: "399",
        period: "month",
        features: [
            "Dedicated infrastructure",
            "Advanced security",
            "Custom integrations",
            "Priority engineering support",
            "Unlimited team members",
            "Enterprise analytics",
        ],
        description: "Dedicated infrastructure and massive scale for the world's most demanding workloads.",
        buttonText: "Contact Sales",
        href: "#",
    },
];

export default function AetherPricingSection() {
    return (
        <section id="pricing" className="border-t border-[#1a1a1a]">
            <PricingSection
                plans={aetherPlans}
                title="Simple Pricing for Powerful Experiences"
                description={`Choose a plan that scales with your workflow and unlocks the full potential of the platform.`}
                className="bg-black"
            />
        </section>
    );
}
