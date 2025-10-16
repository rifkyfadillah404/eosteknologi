import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eos Teknologi — Manufacturing System Specialist",
  description:
    "Solusi ERP yang cerdas dan hemat biaya untuk bisnis global di Indonesia.",
  icons: {
    icon: [
      { url: "/assets/logo/eos.png?v=2", type: "image/png", sizes: "225x225" },
    ],
    shortcut: ["/assets/logo/eos.png?v=2"],
    apple: "/assets/logo/eos.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
