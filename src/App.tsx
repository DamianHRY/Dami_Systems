import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import CustomCursor from './components/ui/CustomCursor';
import SmoothScroll from './components/ui/SmoothScroll';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Foundation Layers */}
      <SmoothScroll />
      <div className="grain-overlay" />
      <CustomCursor />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[#020617] -z-20" />
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_rgba(6,182,212,0.1),transparent_50%)] pointer-events-none -z-10" />
      
      <div className="relative z-10">
        <Navigation onNavigate={navigateTo} isPrivacyPage={currentPath === '/privacy'} />

        {currentPath === '/privacy' ? (
          <Privacy onBack={() => navigateTo('/')} />
        ) : (
          <>
            <Hero />
            <Services />
            <HowItWorks />
            <About />
            <Contact />
          </>
        )}

        <Footer onNavigate={navigateTo} />
      </div>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
