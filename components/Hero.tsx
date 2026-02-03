"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8;
        }
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/robot.mp4" type="video/mp4" />
            </video>

            {/* Overlay Mesh/Gradient */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-cyan-400 text-sm md:text-base tracking-[0.5em] uppercase mb-6 font-bold">
                        The Future of Growth
                    </h2>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-8 mix-blend-overlay">
                        GROWTH³
                    </h1>
                    <p className="text-xl md:text-2xl text-cyan-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                        We combine classic growth advisory with embedded AI agents to transform efficiency, experience, and decisions.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-12 flex justify-center items-center"
                >
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent("open-contact-form"))}
                        className="px-12 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-full transition-all shadow-[0_0_30px_rgba(8,145,178,0.5)] hover:shadow-[0_0_50px_rgba(8,145,178,0.8)] hover:scale-105 uppercase tracking-widest text-sm"
                    >
                        Start Implementation
                    </button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
            </motion.div>
        </section>
    );
}
