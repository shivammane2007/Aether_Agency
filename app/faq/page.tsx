import Navbar from "@/components/Aether/Navbar";
import FaqSection from "@/components/Aether/FaqSection";
import { Footer } from "@/components/Aether/Footer";

export default function FaqPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <div className="pt-32 min-h-[80vh] flex flex-col items-center justify-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.08)_0%,transparent_70%)] pointer-events-none" />
                <FaqSection />
            </div>
            <Footer />
        </main>
    );
}
