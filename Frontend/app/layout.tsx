import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Kithvin Portfolio",
  description: "Personal portfolio of Kithvin Bandara - Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} bg-black text-white scroll-smooth antialiased flex flex-col min-h-screen`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 pt-24">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
