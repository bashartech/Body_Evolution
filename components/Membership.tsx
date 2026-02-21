"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "5,000",
    period: "Month",
    features: [
      "Access to Gym Floor",
      "Matrix Equipment Access",
      "Locker Room Access",
      "Free WiFi",
      { text: "Personal Trainer", included: false },
      { text: "Nutrition Plan", included: false },
      { text: "Group Classes", included: false },
    ],
    recommended: false,
  },
  {
    name: "Standard",
    price: "12,000",
    period: "Month",
    features: [
      "Access to Gym Floor",
      "Matrix Equipment Access",
      "Locker Room Access",
      "Free WiFi",
      "2 PT Sessions / Month",
      "Basic Nutrition Plan",
      "Group Classes Access",
    ],
    recommended: true,
  },
  {
    name: "Premium",
    price: "25,000",
    period: "Month",
    features: [
      "24/7 Priority Access",
      "All Matrix Equipment",
      "Private Locker & Spa",
      "Unlimited PT Sessions",
      "Custom Nutrition & Supplements",
      "All Group Classes",
      "Guest Passes (2/Month)",
    ],
    recommended: false,
  },
];

export default function Membership() {
  return (
    <section id="membership" className="py-24 bg-carbon relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-accent uppercase tracking-[0.4em] text-sm block mb-4"
          >
            Pricing Plans
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display mb-6"
          >
            CHOOSE YOUR <span className="text-primary">EVOLUTION</span>
          </motion.h2>
          <p className="text-light/50 font-sans text-lg">
            Flexible membership options tailored to your fitness level and goals. 
            Join the most elite community in Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: plan.recommended ? 1.05 : 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-sm border ${
                plan.recommended 
                  ? "bg-dark border-primary shadow-[0_0_40px_rgba(107,203,31,0.2)] z-10" 
                  : "bg-dark/50 border-white/5"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 font-accent uppercase tracking-widest text-[10px] font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-display mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-accent text-light/50 uppercase">PKR</span>
                  <span className="text-5xl font-display text-primary">{plan.price}</span>
                  <span className="text-sm font-accent text-light/50 uppercase">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => {
                  const isObject = typeof feature === "object";
                  const text = isObject ? feature.text : feature;
                  const included = isObject ? feature.included : true;

                  return (
                    <li key={fIndex} className={`flex items-center gap-3 text-sm ${included ? "text-light/80" : "text-light/20"}`}>
                      {included ? (
                        <Check size={16} className="text-primary flex-shrink-0" />
                      ) : (
                        <X size={16} className="text-red-500/50 flex-shrink-0" />
                      )}
                      <span className="font-sans">{text}</span>
                    </li>
                  );
                })}
              </ul>
<a href="/contact">

              <button
                className={`w-full py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all duration-300 ${
                  plan.recommended
                    ? "bg-primary text-black hover:bg-white glow-primary"
                    : "bg-white/5 text-light hover:bg-primary hover:text-black"
                }`}
              >
                Get Started
              </button>
</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
