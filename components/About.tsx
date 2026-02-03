"use client";

import { motion } from "framer-motion";
import { Zap, Users, BrainCircuit } from "lucide-react";

export default function About() {
    const pillars = [
        {
            title: "Efficiency",
            icon: <Zap className="w-8 h-8 text-cyan-400" />,
            desc: "Leaner operations and reduced busywork through intelligent automation.",
        },
        {
            title: "Customer Experience",
            icon: <Users className="w-8 h-8 text-purple-400" />,
            desc: "More responsive, personalized interactions at scale.",
        },
        {
            title: "Decision Intelligence",
            icon: <BrainCircuit className="w-8 h-8 text-blue-400" />,
            desc: "Faster, data-driven decisions at every level of the organization.",
        },
    ];

    return (
        <section id="about" className="py-32 relative bg-black">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-900/10 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-4">Who We Are</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            A Growth Advisory & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                                AI Implementation Consultancy.
                            </span>
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            We specialize in helping sales teams and CEOs conquer new markets and achieve sustainable, scalable growth.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Our mission is to empower businesses with growth strategies, sales know-how, and the AI-powered infrastructure they need to thrive in dynamic industries. We combine classic growth advisory with embedded AI agents that transform how work gets done day to day.
                        </p>
                    </div>
                    <div className="relative">
                        {/* Abstract Visual Placeholder - could be a 3D element or image */}
                        <div className="w-full h-[400px] rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="grid grid-cols-6 grid-rows-6 gap-2 opacity-20 transform -skew-x-12 scale-150">
                                {[...Array(36)].map((_, i) => (
                                    <div key={i} className="w-full h-full bg-cyan-500/50 rounded-sm animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                                ))}
                            </div>
                            <div className="absolute z-10 text-center">
                                <span className="text-6xl font-black text-white/5 tracking-tighter">GROWTH³</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The 3 Pillars */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-white mb-4">We Call This "Growth Cubed"</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group cursor-default"
                        >
                            <div className="mb-6 p-4 rounded-full bg-black/50 w-fit border border-white/10 group-hover:border-cyan-500/50 group-hover:scale-110 transition-all duration-300">
                                {pillar.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{pillar.title}</h4>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
