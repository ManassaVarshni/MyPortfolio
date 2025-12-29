import React from 'react';
import { info } from '../data/info';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, BookOpen } from 'lucide-react';

const iconMap = {
    'fa fa-medium': <BookOpen size={20} />,
    'fa fa-github': <Github size={20} />,
    'fa fa-linkedin': <Linkedin size={20} />,
    'fa fa-twitter': <Twitter size={20} />
};

export default function Home() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(5px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
        >
            {/* Title Section */}
            <div className="space-y-6 mb-16">
                <h2 className="text-xl md:text-3xl font-title italic text-ink-light tracking-wide">The Portfolio of</h2>
                <h1 className="text-7xl md:text-9xl font-cursive text-ink leading-none py-2">{info.firstName} {info.lastName}</h1>
            </div>
            
            {/* Divider */}
            <div className="w-32 h-[1px] bg-gold mb-16 opacity-60"></div>

            {/* Description */}
            <p className="text-2xl md:text-3xl font-title text-ink-light max-w-2xl leading-relaxed mb-16 font-light">
                {info.position}.<br/>
                <span className="text-xl md:text-2xl mt-4 block italic opacity-80">A collection of works, thoughts, and codes.</span>
            </p>

            {/* Social Links */}
            <div className="flex gap-10 mb-20">
                {info.socials.map((social, index) => (
                    <a 
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink hover:text-gold transition-all duration-300 transform hover:scale-110"
                    >
                        {iconMap[social.icon] || <BookOpen size={28}/>}
                    </a>
                ))}
            </div>

            {/* Footer / Edition Note */}
            <div className="text-sm font-title italic text-ink-light opacity-60 mt-auto pb-8">
                <p>First Edition, 2026</p>
                <p>Printed in the Cloud</p>
            </div>

        </motion.div>
    );
}
