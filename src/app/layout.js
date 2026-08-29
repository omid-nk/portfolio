import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen font-mono">
        <div className="relative min-h-screen bg-[radial-gradient(circle_at_50%_-20%,#172554_0%,#0a0a12_45%,#050507_100%)]">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
