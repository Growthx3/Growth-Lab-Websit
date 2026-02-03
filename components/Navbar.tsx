"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 border border-cyan-500/50 rounded-lg flex items-center justify-center relative overflow-hidden group-hover:border-cyan-400 transition-colors">
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-xl font-bold text-white relative z-10">G³</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Growth³ Lab</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[["About", "#about"], ["Services", "#services"]].map(([item, href]) => (
              <Link
                key={item}
                href={href}
                className="text-white/70 hover:text-cyan-400 transition-colors text-sm uppercase tracking-widest font-medium"
              >
                {item}
              </Link>
            ))}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-contact-form"))}
              className="px-6 py-2 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-full transition-all uppercase text-xs tracking-widest font-bold"
            >
              Book a call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl absolute top-20 left-0 w-full border-b border-white/10">
          <div className="flex flex-col p-6 gap-4 text-center">
            {[["About", "#about"], ["Services", "#services"]].map(([item, href]) => (
              <Link
                key={item}
                href={href}
                className="text-white/70 hover:text-cyan-400 text-lg uppercase tracking-widest font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new CustomEvent("open-contact-form"));
              }}
              className="px-6 py-3 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-full transition-all uppercase text-sm tracking-widest font-bold mt-4"
            >
              Book a call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
