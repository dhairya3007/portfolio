import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, LayoutGroup } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';

// Pages
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for 2.2s (giving the typewriter effect time to finish) then animate to navbar
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <LayoutGroup>
        <div className="flex flex-col min-h-screen bg-slate-900 text-slate-50 font-inter relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {loading && <Preloader key="preloader" />}
          </AnimatePresence>

          {/* Tech/Quant Grid Background */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{
            backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}>
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/15 blur-[120px] mix-blend-screen animate-float-slow"></div>
            <div className="absolute top-[40%] right-[-10%] w-[40%] h-[50%] rounded-full bg-emerald-600/15 blur-[120px] mix-blend-screen animate-float-slow" style={{ animationDelay: '2s' }}></div>
          </div>

          {!loading && (
            <>
              <Navbar />
              
              {/* Main content with padding for fixed navbar */}
              <main className="flex-grow pt-16 flex flex-col relative z-10">
                <AnimatedRoutes />
              </main>
              
              <Footer />
              <ScrollToTop />
            </>
          )}
        </div>
      </LayoutGroup>
    </Router>
  );
}

export default App;
