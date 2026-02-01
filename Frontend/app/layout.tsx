import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen overflow-x-hidden bg-[#0b0f19] text-white scroll-smooth`}
      >
        {/* GLOBAL BACKGROUND FOR ENTIRE WEBSITE */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-24 h-[32rem] w-[32rem] rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.10),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.12),transparent_45%)]" />
        </div>

        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
