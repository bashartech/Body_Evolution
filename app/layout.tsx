import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Body Evolution | Strength Training Gym in Pakistan",
  description: "Professional strength training, weight loss programs and personal training at Body Evolution gym in Pakistan. Powered by Matrix.",
  keywords: ["Gym", "Pakistan", "Strength Training", "Body Evolution", "Matrix Gym", "Weight Loss"],
  openGraph: {
    title: "Body Evolution | Strength Training Gym",
    description: "Transform Your Body. Elevate Your Discipline.",
    type: "website",
    locale: "en_PK",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-dark text-light">
        {children}
      </body>
    </html>
  );
}
