import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor';
import ScrollBookmark from './components/ScrollBookmark';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
    initial: { 
        opacity: 0, 
        x: 100, // Slide in from right (like turning a page)
        rotateY: -5 // Slight rotation for 3D feel
    },
    animate: { 
        opacity: 1, 
        x: 0,
        rotateY: 0,
        transition: { 
            duration: 0.6, 
            ease: "easeOut" 
        }
    },
    exit: { 
        opacity: 0, 
        x: -50, // Slide out slightly to left
        transition: { 
            duration: 0.4, 
            ease: "easeIn" 
        }
    }
};

function PageWrapper({ children }) {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full origin-left perspective-[1000px]" // origin-left for page turn pivot
        >
            {children}
        </motion.div>
    );
}

function App() {
  const location = useLocation();

  // Enforce "Paper Mode" (Light)
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  // Dynamic Title
  useEffect(() => {
    switch(location.pathname) {
      case '/': 
        document.title = "Manassa Varshni | Prologue";
        break;
      case '/about':
        document.title = "Manassa Varshni | The Protagonist";
        break;
      case '/portfolio':
        document.title = "Manassa Varshni | The Anthology";
        break;
      case '/contact':
        document.title = "Manassa Varshni | The Epilogue";
        break;
      default:
        document.title = "Manassa Varshni | Software Developer @ IBM";
    }
  }, [location]);

  return (
    <div className="min-h-screen w-full relative flex flex-col font-book overflow-x-hidden selection:bg-gold/30 selection:text-ink cursor-none"> {/* cursor-none to hide default */}
       <CustomCursor />
       <ScrollBookmark />

       <div className="max-w-4xl mx-auto w-full px-6 md:px-12 flex-grow flex flex-col border-x border-dashed border-ink/10 bg-white/40 min-h-screen shadow-2xl relative z-10">
          <Navbar />
          
          <main className="flex-grow py-12 relative">
             <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                    <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                    <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
                    <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                </Routes>
             </AnimatePresence>
          </main>

          <footer className="py-8 text-center text-ink-light text-sm italic font-title border-t border-gold/20 mt-auto">
             <span className="text-gold mx-2">❧</span>
             Page {getPageNumber(location.pathname)}
             <span className="text-gold mx-2">❧</span>
          </footer>
       </div>
    </div>
  );
}

function getPageNumber(path) {
    switch(path) {
        case '/': return 'I';
        case '/about': return 'II';
        case '/portfolio': return 'III';
        case '/contact': return 'IV';
        default: return 'I';
    }
}

export default App;