import Navbar from "@/components/Aether/Navbar";
import { ContactSection } from "@/components/Aether/ContactSection";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <div className="pt-20">
                <ContactSection />
            </div>
            {/* You could add a footer here if available */}
        </main>
    );
}
