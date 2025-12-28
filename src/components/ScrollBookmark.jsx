import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ScrollBookmark() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed top-0 right-4 md:right-8 h-screen w-8 z-40 hidden md:block pointer-events-none">
            {/* The String/Ribbon Container */}
            <div className="h-full w-[2px] bg-ink/5 mx-auto relative overflow-hidden">
                {/* The Red Ribbon Filling Up */}
                <motion.div 
                    className="absolute top-0 left-0 right-0 bg-red-800 w-full origin-top"
                    style={{ height: "100%", scaleY }}
                />
            </div>
            
            {/* The Bookmark Tip following the scroll */}
            <motion.div 
                className="absolute left-1/2 -translate-x-1/2 -top-2"
                style={{ 
                    top: useTransform(scaleY, (value) => `${value * 100}%`) 
                }}
            >
                <div className="w-6 h-8 bg-red-800 shadow-md relative">
                    {/* Triangle cutout at bottom to make it look like a bookmark */}
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[8px] border-l-transparent border-r-transparent border-b-paper/40 translate-y-[0px]"></div>
                    {/* Gold accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gold/50"></div>
                </div>
            </motion.div>
        </div>
    );
}