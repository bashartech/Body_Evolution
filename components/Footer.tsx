"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center group">
            {/* <Logo /> */}
            <img src="/img1.jpg" alt="" className="w-24" />
          </Link>
            <p className="text-light/40 text-sm leading-relaxed font-sans">
              The premier strength and transformation facility in Pakistan. 
              We combine elite coaching with world-class equipment to help you evolve.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/bodyevolution.pk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-light hover:bg-primary hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/bodyevolution.pk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-light hover:bg-primary hover:text-black transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display mb-8 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Trainers", href: "/trainers" },
                { name: "Membership", href: "/membership" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-light/40 hover:text-primary text-sm transition-colors font-accent uppercase tracking-widest">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display mb-8 uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary w-5 h-5 flex-shrink-0" />
                <span className="text-light/40 text-sm font-sans">
                  
Shop No.10, Al Bari Exclusive Tower, Adjacent Saylani Welfare, Main Bahadurabad Chowrangi, Bahadur Yar Jang CHS, Karachi, Karachi, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary w-5 h-5 flex-shrink-0" />
                <span className="text-light/40 text-sm font-sans">0306 6667817</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary w-5 h-5 flex-shrink-0" />
                <span className="text-light/40 text-sm font-sans">info@bodyevolution.pk</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-display mb-8 uppercase tracking-widest">Newsletter</h4>
            <p className="text-light/40 text-sm mb-6 font-sans">
              Subscribe to get the latest fitness tips and exclusive offers.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-light"
              />
              <button className="bg-primary text-black font-bold py-3 rounded-sm uppercase tracking-widest text-xs hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-light/20 text-[10px] font-accent uppercase tracking-[0.2em]">
            © 2026 BODY EVOLUTION. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-light/20 hover:text-primary text-[10px] font-accent uppercase tracking-[0.2em] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-light/20 hover:text-primary text-[10px] font-accent uppercase tracking-[0.2em] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
