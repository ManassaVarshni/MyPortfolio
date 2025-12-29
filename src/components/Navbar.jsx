import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  const links = [
    { name: 'Prologue', to: '/' },
    { name: 'The Protagonist', to: '/about' },
    { name: 'The Anthology', to: '/portfolio' },
    { name: 'The Epilogue', to: '/contact' },
  ];

  return (
    <nav className="w-full pt-8 pb-4 px-8 flex flex-col items-center justify-center border-b-2 border-double border-gold/30">
        {/* Decorative flourish top */}
        <div className="text-gold text-2xl mb-2">❦</div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
            {links.map((link) => (
                <Link 
                    key={link.name} 
                    to={link.to} 
                    className={`font-title text-lg md:text-xl transition-all duration-300 relative group
                        ${location.pathname === link.to ? 'text-ink font-bold' : 'text-ink-light italic hover:text-ink'}
                    `}
                >
                    {link.name}
                    {/* Underline flourish for active link */}
                    {location.pathname === link.to && (
                         <motion.div 
                            layoutId="underline"
                            className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gold"
                         />
                    )}
                </Link>
            ))}
        </div>
    </nav>
  );
}