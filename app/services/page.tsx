import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services | Body Evolution",
  description: "Explore our range of fitness services including strength training, cardio, and personal training.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <div className="pt-32">
        <Services />
      </div>
      <Footer />
    </main>
  );
}
