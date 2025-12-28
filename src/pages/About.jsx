import React, { useEffect, useState } from 'react';
import { info } from '../data/info';
import { motion } from 'framer-motion';
import { 
    SiGo, SiPython, SiDocker, SiKubernetes, SiAmazonwebservices, 
    SiLinux, SiPostgresql, SiGit, SiR, 
    SiJira, SiDialogflow, SiTerraform,
    SiAnsible, SiReact, SiJavascript
} from 'react-icons/si';
import { FaCloud, FaDatabase } from 'react-icons/fa';

const iconMap = {
    'Go (Golang)': <SiGo />,
    'Python': <SiPython />,
    'Docker': <SiDocker />,
    'Kubernetes': <SiKubernetes />,
    'AWS': <SiAmazonwebservices />,
    'Linux': <SiLinux />,
    'SQL': <SiPostgresql />,
    'Git': <SiGit />,
    'IBM Cloud': <FaCloud />, // Fallback using FontAwesome
    'R': <SiR />,
    'Jira': <SiJira />,
    'R Shiny': <SiR />,
    'Dialogflow': <SiDialogflow />,
    'Ansible': <SiAnsible />,
    'Terraform': <SiTerraform />,
    'React': <SiReact />,
    'JavaScript': <SiJavascript />,
    'Azure': <FaCloud />, // Fallback
    'Excel': <FaDatabase /> // Fallback
};

export default function About() {
    const [activeSection, setActiveSection] = useState('bio');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['bio', 'experience', 'education', 'skills'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            {/* Table of Contents - Floating Outside Paper on Left */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="hidden xl:block fixed left-[max(2rem,calc(50vw-45rem))] top-32 w-48 z-20"
            >
                <div className="pl-4 py-4 space-y-4 border-l border-gold/40 relative">
                     {/* Decorative top line to make it look like a side note */}
                    <div className="absolute top-0 left-0 w-4 h-[1px] bg-gold/40"></div>

                    <p className="font-title italic text-xs text-ink/40 uppercase tracking-widest mb-6">Contents</p>
                    {['Bio', 'Experience', 'Education', 'Skills'].map((item) => {
                        const id = item.toLowerCase();
                        return (
                            <button
                                key={id}
                                onClick={() => scrollTo(id)}
                                className={`block text-left font-title text-sm transition-all duration-300
                                    ${activeSection === id ? 'text-gold font-bold translate-x-2 scale-110' : 'text-ink-light hover:text-ink hover:translate-x-1'}
                                `}
                            >
                                {activeSection === id && <span className="absolute -left-6 text-gold">❧</span>}
                                {item}
                            </button>
                        );
                    })}
                     
                     {/* Decorative bottom line */}
                    <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-gold/40"></div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto w-full relative"
            >
                <div className="text-center mb-16">
                    <h3 className="font-title italic text-ink-light mb-2">Chapter I</h3>
                    <h1 className="text-5xl font-title text-ink mb-4">The Protagonist</h1>
                    <div className="flex justify-center items-center gap-2 text-gold">
                        <span>~</span><span>❧</span><span>~</span>
                    </div>
                </div>

                {/* Profile Image - Author Portrait Style */}
                <div id="bio" className="flex justify-center mb-16 scroll-mt-32">
                    <div className="p-2 border border-ink/10 rounded-full inline-block bg-white shadow-xl rotate-2">
                        <div className="p-1 border border-dashed border-ink/30 rounded-full">
                            <img 
                                src={info.selfPortrait} 
                                alt="The Protagonist" 
                                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover grayscale-[0.3] contrast-[1.1]"
                            />
                        </div>
                    </div>
                </div>

                {/* Bio - Two Columns like a book */}
                <div className="md:columns-2 gap-8 text-lg leading-relaxed text-justify mb-16">
                    <p className="mb-4">
                        <span className="drop-cap">{info.bio.charAt(0)}</span>
                        {info.bio.slice(1)}
                    </p>
                    <p>
                        From the bustling streets of India to the structured realms of Cloud Storage, my journey has been one of constant curiosity. 
                        {info.miniBio.map(b => b.text).join('. ')}.
                    </p>
                </div>

                <hr className="border-t border-dashed border-ink/20 my-12" />

                {/* Experience */}
                <div id="experience" className="scroll-mt-32">
                    <h2 className="text-3xl font-cursive text-center mb-10">Chronicles of Experience</h2>
                    <div className="space-y-12 pl-4 border-l border-gold/50 ml-4 md:ml-0">
                        {info.experience.map((job, index) => (
                            <JobEntry 
                                key={index}
                                title={job.title} 
                                company={job.company} 
                                period={job.period}
                                location={job.location}
                                details={job.details} 
                            />
                        ))}
                    </div>
                </div>

                <hr className="border-t border-dashed border-ink/20 my-12" />

                 {/* Education */}
                 <div id="education" className="scroll-mt-32">
                     <h2 className="text-3xl font-cursive text-center mb-10">Academic Background</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {info.education.map((edu, index) => (
                            <div key={index} className="bg-paper-light p-6 border-l-2 border-gold shadow-sm">
                                <h3 className="font-title text-lg font-bold">{edu.degree}</h3>
                                <p className="italic text-ink-light text-sm mb-2">{edu.institution}</p>
                                <div className="flex justify-between text-xs text-ink/60 font-mono mt-4">
                                    <span>{edu.period}</span>
                                    <span>{edu.location}</span>
                                </div>
                            </div>
                        ))}
                     </div>
                 </div>

                <hr className="border-t border-dashed border-ink/20 my-12" />

                {/* Skills & Certifications */}
                 <div id="skills" className="relative my-20 scroll-mt-32">
                    {/* Decorative background "Plate" */}
                    <div className="absolute inset-0 bg-gold/5 -rotate-1 transform rounded-sm border border-gold/20"></div>
                    
                    <div className="relative bg-paper p-10 shadow-2xl border-2 border-double border-ink/10">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-cursive mb-2">Compendium of Skills</h2>
                            <div className="w-24 h-[2px] bg-gold mx-auto opacity-40"></div>
                            <p className="mt-4 font-title italic text-ink-light">A technical index of the protagonist's capabilities</p>
                        </div>

                        <div className="flex flex-col gap-12 mb-12">
                            {/* Core Proficiencies */}
                            <div>
                                <h3 className="font-title text-sm uppercase tracking-[0.2em] text-gold mb-6 border-b border-gold/20 pb-2">Core Proficiencies</h3>
                                <div className="flex flex-wrap gap-y-6 gap-x-8">
                                    {info.skills.proficientWith.map((skill, i) => (
                                        <div key={i} className="flex items-center gap-2 group">
                                            <span className="text-2xl text-ink/40 group-hover:text-gold transition-colors">
                                                {iconMap[skill] || null}
                                            </span>
                                            <span className="font-book italic text-lg text-ink group-hover:text-gold transition-colors cursor-default leading-none">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Familiar Territory */}
                            <div>
                                <h3 className="font-title text-sm uppercase tracking-[0.2em] text-ink-light mb-6 border-b border-ink/10 pb-2">Familiar Territory</h3>
                                <div className="flex flex-wrap gap-y-4 gap-x-6">
                                    {info.skills.exposedTo.map((skill, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <span className="text-xl text-ink/30">
                                                {iconMap[skill] || null}
                                            </span>
                                            <span className="font-book italic text-lg text-ink/70">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[1px] bg-dashed border-t border-ink/10 my-10"></div>

                        <div className="text-center">
                            <h3 className="text-2xl font-cursive mb-8">Certificates of Mastery</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {info.certifications.map((cert, index) => (
                                    <motion.div 
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-sm border border-gold/30 text-sm shadow-sm cursor-default"
                                    >
                                        <span className="text-xl">{cert.emoji}</span>
                                        <span className="font-title text-ink/80">{cert.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute -top-2 -left-2 text-gold opacity-40 text-2xl">⌜</div>
                    <div className="absolute -bottom-2 -right-2 text-gold opacity-40 text-2xl">⌟</div>
                 </div>
            </motion.div>
        </>
    );
}

function JobEntry({ title, company, period, location, details }) {
    return (
        <div className="relative pl-8">
            <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-gold"></div>
            <h3 className="font-title text-xl font-bold">{title}</h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <p className="italic text-ink-light">{company}</p>
                <span className="text-xs font-mono text-ink/50">{period}</span>
            </div>
            
            <ul className="list-disc ml-4 space-y-1 text-ink/80 text-base">
                {details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
        </div>
    )
}