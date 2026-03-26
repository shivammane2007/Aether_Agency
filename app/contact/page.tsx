import Navbar from "@/components/Aether/Navbar";
import { ContactSection } from "@/components/Aether/ContactSection";
import GlobeSection from "@/components/Aether/GlobeSection";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <ContactSection />
            <GlobeSection />
        </main>
    );
}
