import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for "Ultra-clean" look
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Growth³ Lab | Embedded AI & Growth Advisory",
  description: "Growth³ Lab: Efficiency, Experience, and Intelligence through Embedded AI Agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased selection:bg-cyan-500/30`}>
        {children}
      </body>
    </html>
  );
}
