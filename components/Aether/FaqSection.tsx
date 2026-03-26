import {
    CustomAccordion,
    CustomAccordionItem,
    CustomAccordionTrigger,
    CustomAccordionContent,
} from "@/components/ui/custom-accordion";

const faqs = [
    {
        question: "Is Aether meant for front-end or back-end?",
        answer: "Aether is a full-stack infrastructure platform. It provides unparalleled edge compute for back-end logic (like databases and serverless functions) completely co-located with your front-end assets for <10ms rendering."
    },
    {
        question: "How do you achieve 99.999% SLA?",
        answer: "Our distributed architecture ensures there is no single point of failure. Traffic is automatically routed away from problematic nodes globally in real-time, backed by enterprise-grade Layer 7 DDoS mitigation."
    },
    {
        question: "Is it really free to get started?",
        answer: "Yes. Our Starter tier is completely free and requires no credit card. It includes enough bandwidth and compute for most personal projects and MVPs to scale significantly before needing to upgrade."
    },
    {
        question: "Can I migrate an existing application?",
        answer: "Absolutely. Aether supports standard Next.js, React, and Node.js deployments out of the box. Our CLI tool can automatically wrap and deploy your existing configurations with zero downtime."
    },
    {
        question: "What kind of support is provided for Enterprise?",
        answer: "Enterprise customers receive a dedicated Slack channel, 24/7 technical phone support, custom deployment architectures, and quarterly infrastructure reviews directly with our core engineering team."
    }
];

export default function FaqSection({ className }: { className?: string }) {
    return (
        <section className={`py-24 relative overflow-hidden ${className || ''}`}>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(0,112,243,0.05)_0%,transparent_60%)] pointer-events-none" />
            
            <div className="max-w-4xl w-full mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-400">
                        Everything you need to know about scaling with Aether.
                    </p>
                </div>
                
                <CustomAccordion
                    type="single"
                    collapsible
                    defaultValue="item-0"
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <CustomAccordionItem
                            key={index}
                            value={`item-${index}`}
                        >
                            <CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
                            <CustomAccordionContent>{faq.answer}</CustomAccordionContent>
                        </CustomAccordionItem>
                    ))}
                </CustomAccordion>
            </div>
        </section>
    );
}
