"use client";

import { motion } from "motion/react";
import { Shield, Zap, Target, Users, Utensils, Award } from "lucide-react";

const services = [
  {
    title: "Strength Training",
    description: "Build raw power and functional strength with our elite Matrix equipment and expert guidance.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "Weight Loss",
    description: "Science-backed transformation programs designed to burn fat while preserving lean muscle.",
    icon: <Target className="w-8 h-8" />,
  },
  {
    title: "Personal Training",
    description: "One-on-one coaching tailored to your specific goals, biomechanics, and lifestyle.",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: "Group Classes",
    description: "High-energy sessions that combine community motivation with professional programming.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Nutrition Support",
    description: "Customized meal plans and supplement guidance to fuel your performance and recovery.",
    icon: <Utensils className="w-8 h-8" />,
  },
  {
    title: "Elite Coaching",
    description: "Advanced techniques for competitive athletes and those seeking peak physical condition.",
    icon: <Award className="w-8 h-8" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-carbon relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-accent uppercase tracking-[0.4em] text-sm block mb-4"
          >
            What We Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display mb-6"
          >
            ELITE FITNESS <span className="text-primary">SERVICES</span>
          </motion.h2>
          <p className="text-light/50 font-sans text-lg">
            We provide a comprehensive range of fitness solutions designed to push you beyond your limits. 
            Every service is backed by professional expertise and the best equipment in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-dark border border-white/5 hover:border-primary/50 transition-all duration-500 glow-primary-hover relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />
              
              <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-display mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-light/40 font-sans leading-relaxed mb-6">
                {service.description}
              </p>
              
              <button className="text-xs font-accent uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <span className="text-lg">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
    </section>
  );
}
