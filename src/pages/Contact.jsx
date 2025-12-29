import React, { useState } from 'react';
import { info } from '../data/info';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
    const [isSealed, setIsSealed] = useState(false);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
        >
             <div className="mb-12">
                <h3 className="font-title italic text-ink-light mb-2">Chapter III</h3>
                <h1 className="text-5xl font-title text-ink mb-4">The Epilogue</h1>
                <div className="flex justify-center items-center gap-2 text-gold">
                    <span>~</span><span>❧</span><span>~</span>
                </div>
            </div>

            <p className="text-xl font-book text-ink/80 mb-12 leading-relaxed">
                Every good story deserves a sequel. Whether you have a question, a project in mind, or just want to discuss the latest in cloud technology, I'd love to hear from you.
            </p>

            <div className="max-w-xl mx-auto mb-24 relative perspective-[1000px]">
                {/* The Closed Envelope (Back View) */}
                <div className="bg-paper shadow-2xl relative w-full aspect-[1.6/1] flex flex-col items-center justify-end pb-12 overflow-hidden border border-ink/5">
                    
                    {/* The Bottom Fold (Envelope Body) */}
                    <div className="absolute inset-0 bg-paper-dark/30 z-0 clip-path-envelope-body"></div>
                    
                    {/* Postmark Decoration */}
                    <div className="absolute top-6 right-10 opacity-20 rotate-12 pointer-events-none select-none z-0">
                        <div className="border-4 border-ink p-2 rounded-full flex flex-col items-center justify-center w-24 h-24 text-[8px] font-mono font-bold leading-tight">
                            <span>BENGALURU</span>
                            <span className="text-sm">2026</span>
                            <span>PARCEL POST</span>
                        </div>
                        <div className="absolute top-1/2 left-[-20%] right-[-20%] h-[2px] bg-ink/40"></div>
                        <div className="absolute top-[40%] left-[-20%] right-[-20%] h-[2px] bg-ink/40"></div>
                        <div className="absolute top-[60%] left-[-20%] right-[-20%] h-[2px] bg-ink/40"></div>
                    </div>

                    {/* The Top Flap (The Lid \/) */}
                    <div 
                        className="absolute top-0 left-0 right-0 h-[55%] bg-paper-dark/50 z-10 origin-top shadow-md"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                    ></div>

                    {/* Shadow under the flap tip */}
                    <div className="absolute top-[54%] left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/10 blur-md rounded-[100%] z-0"></div>

                    {/* Wax Seal - Sealing the Flap */}
                    <div className="relative z-20 -mt-16"> {/* Negative margin to pull it up over the flap tip */}
                        <motion.a 
                            href={`mailto:${info.miniBio.find(b => b.emoji === "📧")?.text || "manassa1899@gmail.com"}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="wax-seal w-28 h-28 rounded-full flex flex-col items-center justify-center text-paper font-title font-bold tracking-widest cursor-pointer shadow-2xl transition-all group"
                        >
                            <span className="text-3xl mb-1 group-hover:scale-110 transition-transform">✉</span>
                            <span className="text-[10px] opacity-90">SEAL</span>
                        </motion.a>
                    </div>

                    <div className="text-center mt-8 relative z-10">
                        <p className="font-title italic text-xs text-ink-light mb-2 uppercase tracking-widest">To The Author</p>
                        <p className="text-lg font-mono text-ink/80 bg-white/50 px-4 py-1 rounded border border-dashed border-ink/20">
                            {info.miniBio.find(b => b.emoji === "📧")?.text || "manassa1899@gmail.com"}
                        </p>
                    </div>

                    {/* Paper Texture Overlay */}
                     <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply"></div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="font-title text-lg uppercase tracking-widest text-ink-light">Connect Elsewhere</h3>
                <div className="flex justify-center gap-8">
                    {info.socials.map((social, index) => (
                        <a 
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink/60 hover:text-gold transition-all duration-300 transform hover:scale-110"
                        >
                            <span className="capitalize font-title italic hover:underline decoration-gold underline-offset-4">
                                {social.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

        </motion.div>
    );
}
