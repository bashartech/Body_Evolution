import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Body Evolution",
  description: "Learn about Body Evolution, the premier strength training facility in Pakistan.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4">
        <h1 className="text-6xl font-display text-primary mb-8">ABOUT US</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-light/80 space-y-6 text-lg">
            <p>
              Body Evolution is more than just a gym; it&apos;s a movement dedicated to elite performance and physical transformation. 
              Founded with the vision of bringing world-class fitness standards to Pakistan, we have built a sanctuary for those 
              who are serious about their health and strength.
            </p>
            <p>
              Our facility is exclusively powered by Matrix, a global leader in commercial fitness equipment. 
              This partnership ensures that our members have access to the most advanced, bio-mechanically 
              superior machines available today.
            </p>
          </div>
          <div className="aspect-video bg-carbon border border-primary/20 overflow-hidden">
            <img 
              src="/img9.PNG" 
              alt="Gym Interior" 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
