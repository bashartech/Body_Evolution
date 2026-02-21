"use client";

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState, useRef, FormEvent } from "react";

const metadata: Metadata = {
  title: "Contact Us | Body Evolution",
  description: "Get in touch with Body Evolution for any inquiries or to start your fitness journey.",
};

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!formRef.current) return;

    const form = formRef.current;
    const formData = new FormData(form);

    const templateParams = {
      from_name: formData.get("name") as string,
      from_email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus({
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4">
        <h1 className="text-6xl font-display text-primary mb-12">CONTACT US</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="bg-primary/10 p-4 rounded-sm border border-primary/20">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-display text-light mb-2">LOCATION</h3>
                <p className="text-light/60">
                  Shop No.10, Al Bari Exclusive Tower, Adjacent Saylani Welfare, <br />
                  Main Bahadurabad Chowrangi, Bahadur Yar Jang CHS, Karachi, Karachi, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-primary/10 p-4 rounded-sm border border-primary/20">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-display text-light mb-2">PHONE</h3>
                <p className="text-light/60">0306 6667817</p>
                <p className="text-light/60">+92306 6667817</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-primary/10 p-4 rounded-sm border border-primary/20">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-display text-light mb-2">EMAIL</h3>
                <p className="text-light/60">info@bodyevolution.pk</p>

              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-primary/10 p-4 rounded-sm border border-primary/20">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-display text-light mb-2">OPERATING HOURS</h3>
                <p className="text-light/60">Monday - Saturday: 6:00 AM - 11:00 PM</p>
                <p className="text-light/60">Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-carbon p-8 border border-primary/10">
            <h3 className="text-2xl font-display text-primary mb-6">SEND US A MESSAGE</h3>
            {submitStatus && (
              <div className={`mb-6 p-4 border ${submitStatus.success ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-red-500/10 border-red-500/20 text-red-400"}`}>
                {submitStatus.message}
              </div>
            )}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-accent uppercase tracking-widest text-light/40">Full Name</label>
                  <input type="text" name="name" required className="w-full bg-dark border border-white/10 p-3 text-light focus:border-primary outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-accent uppercase tracking-widest text-light/40">Email Address</label>
                  <input type="email" name="email" required className="w-full bg-dark border border-white/10 p-3 text-light focus:border-primary outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-accent uppercase tracking-widest text-light/40">Subject</label>
                <input type="text" name="subject" required className="w-full bg-dark border border-white/10 p-3 text-light focus:border-primary outline-none transition-colors" placeholder="Membership Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-accent uppercase tracking-widest text-light/40">Message</label>
                <textarea name="message" required rows={5} className="w-full bg-dark border border-white/10 p-3 text-light focus:border-primary outline-none transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-black py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
