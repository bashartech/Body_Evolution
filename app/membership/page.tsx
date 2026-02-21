import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Membership from "@/components/Membership";

export const metadata: Metadata = {
  title: "Membership Plans | Body Evolution",
  description: "Choose the membership plan that fits your lifestyle and fitness goals.",
};

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <div className="pt-32">
        <Membership />
      </div>
      <Footer />
    </main>
  );
}
