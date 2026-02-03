"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, ShieldAlert } from "lucide-react";

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    // Captcha State
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: "" });
    const [userCaptcha, setUserCaptcha] = useState("");

    // Form Fields
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: ""
    });

    const generateCaptcha = () => {
        const n1 = Math.floor(Math.random() * 10) + 1;
        const n2 = Math.floor(Math.random() * 10) + 1;
        setCaptcha({ num1: n1, num2: n2, answer: (n1 + n2).toString() });
        setUserCaptcha("");
    };

    useEffect(() => {
        const handleOpen = (e: any) => {
            if (e.detail?.subject) {
                setFormData(prev => ({ ...prev, subject: e.detail.subject }));
            } else {
                setFormData(prev => ({ ...prev, subject: "General Inquiry" }));
            }
            setIsOpen(true);
            generateCaptcha();
            setError("");
            setIsSuccess(false);
        };

        window.addEventListener("open-contact-form", handleOpen);
        return () => window.removeEventListener("open-contact-form", handleOpen);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (userCaptcha !== captcha.answer) {
            setError("Incorrect captcha. Please try again.");
            generateCaptcha();
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
                setTimeout(() => setIsOpen(false), 3000);
            } else {
                throw new Error("Failed to send message.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
                    >
                        {/* Abstract background glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 blur-[80px] pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 blur-[80px] pointer-events-none" />

                        <div className="flex justify-between items-center mb-8 relative z-10">
                            <div>
                                <h2 className="text-3xl font-black text-white tracking-tight">LET'S START</h2>
                                <p className="text-cyan-400 text-xs uppercase tracking-widest font-bold">Implementation Phase</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/50">
                                    <CheckCircle size={40} className="text-cyan-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                                <p className="text-gray-400">Romano will get back to you shortly.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 transition-all"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="john@company.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 transition-all"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Implementation Focus</label>
                                    <input
                                        readOnly
                                        type="text"
                                        value={formData.subject}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cyan-400/80 cursor-default focus:outline-none"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Project Details</label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Tell us about your organization..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 transition-all resize-none"
                                    />
                                </div>

                                {/* Captcha */}
                                <div className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                                    <span className="text-white font-bold text-lg">
                                        {captcha.num1} + {captcha.num2} = ?
                                    </span>
                                    <input
                                        required
                                        type="number"
                                        placeholder="Ans"
                                        value={userCaptcha}
                                        onChange={(e) => setUserCaptcha(e.target.value)}
                                        className="w-20 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-center focus:outline-none focus:border-cyan-500/50"
                                    />
                                    <div className="text-[10px] text-gray-500 uppercase flex-1 text-right">Bot Protection</div>
                                </div>

                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex items-center gap-2 text-red-400 text-sm font-medium bg-red-400/10 p-3 rounded-lg border border-red-400/20"
                                    >
                                        <ShieldAlert size={16} />
                                        {error}
                                    </motion.div>
                                )}

                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-800 disabled:cursor-not-allowed text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 mt-4 shadow-[0_0_20px_rgba(8,145,178,0.3)]"
                                >
                                    {isSubmitting ? "TRANSMITTING..." : (
                                        <>
                                            SEND BRIEF <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
