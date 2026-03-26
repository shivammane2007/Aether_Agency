import Navbar from "@/components/Aether/Navbar";
import { ContactSection } from "@/components/Aether/ContactSection";
import GlobeSection from "@/components/Aether/GlobeSection";
import { Footer } from "@/components/Aether/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <ContactSection />
            <GlobeSection />
            <div className="bg-black pt-20">
                <Footer />
            </div>
        </main>
    );
}
