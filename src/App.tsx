import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden relative">
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 pointer-events-none"></div>
      <div className="fixed inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.15),transparent_50%)] pointer-events-none"></div>
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <Contact />
        <Footer />
      </div>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
