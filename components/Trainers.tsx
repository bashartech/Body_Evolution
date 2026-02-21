"use client";

import { motion } from "motion/react";
import { Instagram, Twitter, Facebook } from "lucide-react";

const trainers = [
  {
    name: "Ahmed Khan",
    role: "Head Strength Coach",
    image: "https://picsum.photos/seed/trainer1/600/800",
    specialty: "Powerlifting & Hypertrophy",
  },
  {
    name: "Sara Malik",
    role: "Transformation Specialist",
    image: "https://picsum.photos/seed/trainer2/600/800",
    specialty: "Fat Loss & Conditioning",
  },
  {
    name: "Zain Ali",
    role: "Performance Coach",
    image: "https://picsum.photos/seed/trainer3/600/800",
    specialty: "Athletic Development",
  },
  {
    name: "Usman Sheikh",
    role: "Nutrition Expert",
    image: "https://picsum.photos/seed/trainer4/600/800",
    specialty: "Dietary Programming",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-accent uppercase tracking-[0.4em] text-sm block mb-4"
            >
              Expert Team
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display"
            >
              MEET OUR <span className="text-primary">ELITE COACHES</span>
            </motion.h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="border border-primary/30 text-primary px-8 py-3 rounded-sm font-accent uppercase tracking-widest text-sm hover:bg-primary hover:text-black transition-all"
          >
            View All Trainers
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-carbon border border-white/5">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
                
                {/* Socials */}
                <div className="absolute bottom-6 left-6 flex flex-col gap-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black hover:bg-white transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black hover:bg-white transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black hover:bg-white transition-colors">
                    <Twitter size={18} />
                  </a>
                </div>

                {/* Info Overlay */}
                <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-dark/80 to-transparent">
                   <span className="text-primary font-accent uppercase tracking-widest text-[10px]">{trainer.specialty}</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-display group-hover:text-primary transition-colors">{trainer.name}</h3>
                <p className="text-light/40 font-accent uppercase tracking-widest text-xs mt-1">{trainer.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
