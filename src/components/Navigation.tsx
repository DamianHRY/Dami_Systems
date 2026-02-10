import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LiquidButton } from '@/components/ui/liquid-glass-button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY > 20) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      scrollToSection('home');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-transparent backdrop-blur-0 border-b-0'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28">
          <div
            className={`flex items-center cursor-pointer transition-opacity duration-500 ml-7 mt-7 ${
              isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            onClick={handleLogoClick}
          >
            <img
              src="/FullLogo_Transparent_NoBuffer.png"
              alt="Dami Systems Logo"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </div>

          <div className={`hidden md:flex items-center space-x-8 transition-opacity duration-500 ${
            isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}>
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              About
            </button>
            <LiquidButton
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="text-cyan-400 font-semibold"
            >
              Contact
            </LiquidButton>
          </div>

          <button
            className={`md:hidden text-white transition-opacity duration-500 ${
              isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          <button
            onClick={() => scrollToSection('home')}
            className="block w-full text-left px-4 py-3 text-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="block w-full text-left px-4 py-3 text-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="block w-full text-left px-4 py-3 text-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left px-4 py-3 text-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
}
