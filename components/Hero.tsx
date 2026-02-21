"use client";

import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden bg-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img8.PNG"
          alt="Gym Background"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-0">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-xs font-accent uppercase tracking-[0.3em] mb-8">
              Elite Performance Center
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.85] mb-8">
              TRANSFORM <br />
              <span className="text-primary">YOUR BODY</span>
            </h1>
            <p className="text-lg md:text-xl text-light/60 font-sans max-w-xl mb-10 leading-relaxed">
              Elevate your discipline and push your limits at Body Evolution. 
              The premier strength training facility in Pakistan, powered by world-class Matrix equipment.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-black px-8 py-4 rounded-sm font-bold text-lg uppercase tracking-wider flex items-center gap-3 glow-primary transition-all"
              >
                <a href="/contact">
                Start Your Journey
                </a>
                <ArrowRight size={20} />
              </motion.button>
              
              <button className="flex items-center gap-4 group text-light/80 hover:text-primary transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Play size={18} fill="currentColor" />
                </div>
                <a href="/services">
                <span className="font-accent uppercase tracking-widest text-sm">Watch Our Story</span>
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="flex flex-col items-end">
          <span className="text-primary font-display text-6xl opacity-20">01</span>
          <div className="w-24 h-1 bg-primary mt-2" />
        </div>
      </div>
      
      <div className="absolute left-0 bottom-0 w-full h-24 bg-gradient-to-t from-dark to-transparent z-10" />
    </section>
  );
}
