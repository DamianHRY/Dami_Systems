import { LiquidButton } from '@/components/ui/liquid-glass-button';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-start sm:items-center justify-center overflow-hidden pt-40 sm:pt-44 lg:pt-48 pb-32 sm:pb-40">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left lg:pl-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
          <span className="block text-white mb-2">Automate Your Business</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
            With AI
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          AI agents that work 24/7 to scale your business
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
          <LiquidButton
            onClick={scrollToContact}
            size="xxl"
            className="text-cyan-400 font-bold text-2xl px-20"
          >
            Book a Call
          </LiquidButton>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
            <div className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
            <div className="text-gray-400 text-sm">AI Availability</div>
          </div>
          <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
            <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">10x</div>
            <div className="text-gray-400 text-sm">Efficiency Boost</div>
          </div>
          <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
            <div className="text-gray-400 text-sm">Automation</div>
          </div>
          <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-pink-500/30 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20">
            <div className="text-4xl sm:text-5xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
            <div className="text-gray-400 text-sm">Scalability</div>
          </div>
        </div>
      </div>
    </section>
  );
}
