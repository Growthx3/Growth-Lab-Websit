import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for "Ultra-clean" look
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PMB8RN2CLJ"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PMB8RN2CLJ');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} antialiased selection:bg-cyan-500/30`}>
        {children}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
