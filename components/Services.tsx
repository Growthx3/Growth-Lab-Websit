"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Search, Bot, Database, FileText } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Strategy Design",
            icon: <CheckCircle2 className="w-6 h-6" />,
            desc: "Designing go-to-market and growth strategies for B2B and service-led organizations.",
        },
        {
            title: "Opportunity Audit",
            icon: <Search className="w-6 h-6" />,
            desc: "Auditing sales, marketing, and operations to identify high-ROI AI opportunities.",
        },
        {
            title: "AI Agent Development",
            icon: <Bot className="w-6 h-6" />,
            desc: "Building and deploying AI agents for research, outreach, meeting prep, and reporting.",
        },
        {
            title: "Systems Integration",
            icon: <Database className="w-6 h-6" />,
            desc: "Connecting AI and automation to existing tools (CRM, email, spreadsheets, docs).",
        },
        {
            title: "Playbooks & Training",
            icon: <FileText className="w-6 h-6" />,
            desc: "Creating SOPs so AI agents become a sustainable, team-owned way of working.",
        },
    ];

    return (
        <section id="services" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Neon Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-4">Our Services</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Embed Intelligence into Your Operations
                    </h3>
                    <p className="text-gray-400 text-lg">
                        We don’t just design strategy – we embed AI agents and systems into your operations so your organization can grow consistently.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-cyan-500/50 hover:to-purple-500/50 transition-all duration-500 group ${idx === 0 || idx === 1 ? 'lg:col-span-1' : ''}`}
                        >
                            <div className="bg-black/90 h-full rounded-xl p-8 flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />

                                <div className="mb-6 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                                    {service.icon}
                                </div>

                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {service.desc}
                                </p>

                                <div className="flex items-center text-cyan-500 text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
