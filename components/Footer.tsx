"use client";

import Link from "next/link";
import { Terminal, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#020202] border-t border-white/5 py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-bold">G³</div>
                            <span className="text-xl font-bold text-white">Growth³ Lab</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-8">
                            Empowering businesses with growth strategies and AI-powered infrastructure for the future of work.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-black transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-black transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-black transition-all">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Strategy Design</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">AI Implementation</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Audits</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Training</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Growth³ Lab. All systems operational.
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 text-xs font-mono">
                        <Terminal size={12} />
                        <span>v2.0.4 [STABLE]</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
