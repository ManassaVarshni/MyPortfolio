import React, { useState } from 'react';
import { info } from '../data/info';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="max-w-5xl mx-auto relative">
             <div className="text-center mb-16">
                <h3 className="font-title italic text-ink-light mb-2">Chapter II</h3>
                <h1 className="text-5xl font-title text-ink mb-4">The Anthology</h1>
                <div className="flex justify-center items-center gap-2 text-gold">
                    <span>~</span><span>❧</span><span>~</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
                {info.portfolio.map((project, index) => (
                    <motion.div 
                        key={index}
                        layoutId={`project-card-${index}`}
                        onClick={() => setSelectedProject(project)}
                        whileHover={{ y: -5 }}
                        className="bg-paper border-2 border-double border-ink/10 p-4 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                    >
                        {/* Image "Plate" */}
                        <div className="border border-ink/20 p-1 mb-6 bg-white">
                            <div className="relative overflow-hidden">
                                <motion.img 
                                    layoutId={`project-image-${index}`}
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-48 object-cover sepia-[.3] contrast-[0.9] group-hover:sepia-0 group-hover:contrast-100 transition-all duration-500"
                                />
                            </div>
                        </div>

                        {/* Caption */}
                        <div className="text-center px-4 pb-2">
                            <motion.h3 
                                layoutId={`project-title-${index}`} 
                                className="font-cursive text-3xl md:text-4xl text-ink mb-2"
                            >
                                {project.title}
                            </motion.h3>
                            <p className="font-book text-ink/80 text-sm leading-relaxed mb-4 line-clamp-2">
                                {project.description1}
                            </p>
                            <div className="w-12 h-[1px] bg-gold mx-auto mb-4"></div>
                            <p className="font-title italic text-xs text-ink-light">
                                Fig {index + 1}. Click to examine
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
                        />
                        
                        <motion.div 
                            layoutId={`project-card-${info.portfolio.indexOf(selectedProject)}`}
                            className="bg-paper relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl border-4 border-double border-ink/20 p-8"
                        >
                            <button 
                                onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                                className="absolute top-4 right-4 text-ink/50 hover:text-red-800 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-8 p-2 bg-white border border-dashed border-ink/20 rotate-1">
                                <motion.img 
                                    layoutId={`project-image-${info.portfolio.indexOf(selectedProject)}`}
                                    src={selectedProject.image} 
                                    alt={selectedProject.title}
                                    className="w-full h-64 md:h-80 object-cover"
                                />
                            </div>

                            <div className="text-center">
                                <motion.h3 layoutId={`project-title-${info.portfolio.indexOf(selectedProject)}`} className="font-cursive text-4xl mb-4">{selectedProject.title}</motion.h3>
                                
                                <div className="flex justify-center gap-2 mb-6 text-gold text-xl">
                                    <span>~</span><span>❧</span><span>~</span>
                                </div>

                                <div className="space-y-4 text-lg leading-relaxed text-ink/90 font-book mb-8">
                                    <p>{selectedProject.description1}</p>
                                    <p className="text-sm font-mono text-ink-light bg-gold/10 inline-block px-2 py-1 rounded">
                                        {selectedProject.description2}
                                    </p>
                                </div>

                                <div className="flex justify-center gap-8">
                                    {selectedProject.live && (
                                        <a 
                                            href={selectedProject.live} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="flex items-center gap-2 px-6 py-2 border border-ink/20 hover:border-gold hover:text-gold transition-all"
                                        >
                                            <ExternalLink size={18} />
                                            <span className="font-title italic">Live Demo</span>
                                        </a>
                                    )}
                                    {selectedProject.source && (
                                         <a 
                                            href={selectedProject.source} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="flex items-center gap-2 px-6 py-2 border border-ink/20 hover:border-gold hover:text-gold transition-all"
                                        >
                                            <Github size={18} />
                                            <span className="font-title italic">Source Code</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}