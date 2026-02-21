import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Trainers from "@/components/Trainers";

export const metadata: Metadata = {
  title: "Our Trainers | Body Evolution",
  description: "Meet our team of expert trainers dedicated to helping you achieve your fitness goals.",
};

export default function TrainersPage() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <div className="pt-32">
        <Trainers />
      </div>
      <Footer />
    </main>
  );
}
