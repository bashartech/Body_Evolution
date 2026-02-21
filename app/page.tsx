"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Trainers from "@/components/Trainers";
import Membership from "@/components/Membership";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />
      
      {/* About Preview Section */}
      <section id="about" className="py-24 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square relative z-10 overflow-hidden border-2 border-primary/20">
                <img
                  src="/img6.PNG"
                  alt="Gym Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 -z-10" />
              <div className="absolute -top-8 -left-8 border-t-2 border-l-2 border-primary w-32 h-32 -z-10" />
              
              <div className="absolute bottom-8 left-8 bg-primary text-black p-6 z-20">
                <span className="text-4xl font-display block">10+</span>
                <span className="text-xs font-accent uppercase tracking-widest font-bold">Years Experience</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-accent uppercase tracking-[0.4em] text-sm block mb-4">
                Our Story
              </span>
              <h2 className="text-4xl md:text-6xl font-display mb-8 leading-tight">
                WE ARE THE <span className="text-primary">EVOLUTION</span> OF FITNESS
              </h2>
              <p className="text-light/60 font-sans text-lg mb-8 leading-relaxed">
                Body Evolution isn&apos;t just a gym; it&apos;s a sanctuary for those who demand more from themselves. 
                Founded on the principles of discipline, strength, and transformation, we provide the ultimate 
                environment for physical and mental growth.
              </p>
              <p className="text-light/40 font-sans mb-10">
                Our facility is exclusively equipped with Matrix professional-grade machines, ensuring that 
                every rep you take is supported by world-class engineering. Whether you&apos;re a beginner or 
                a seasoned athlete, our mission is to help you evolve.
              </p>
              
              <Link href="/about" className="inline-block bg-white text-black px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-primary transition-all duration-300">
                Discover Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Services />
      
      <Trainers />
      
      {/* CTA Banner */}
      <section className="py-20 bg-primary overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="flex whitespace-nowrap font-display text-9xl text-black select-none">
            {Array(10).fill("BODY EVOLUTION ").map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-black">
            <h2 className="text-4xl md:text-5xl font-display text-center md:text-left">
              READY TO START <br /> YOUR TRANSFORMATION?
            </h2>
            <Link href="/membership" className="bg-black text-white px-12 py-5 rounded-sm font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl">
              Join The Tribe
            </Link>
          </div>
        </div>
      </section>

      <Membership />
      
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/92306 6667817
"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center glow-primary"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </main>
  );
}
