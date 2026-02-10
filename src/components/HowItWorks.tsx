import { MessageCircle, Settings, Rocket, TrendingUp } from 'lucide-react';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    icon: MessageCircle,
    number: '1',
    title: 'Let\'s Talk',
    description: 'A friendly conversation about your business and goals. Free, no pressure.',
    colorClass: 'from-cyan-400 to-cyan-600'
  },
  {
    icon: Settings,
    number: '2',
    title: 'I Build Your Solution',
    description: 'I create a custom AI solution designed specifically for your business needs.',
    colorClass: 'from-blue-500 to-blue-700'
  },
  {
    icon: Rocket,
    number: '3',
    title: 'Launch & Learn',
    description: 'I set everything up and show you how to use it. You\'ll feel confident from day one.',
    colorClass: 'from-purple-600 to-purple-800'
  },
  {
    icon: TrendingUp,
    number: '4',
    title: 'Grow Together',
    description: 'I monitor performance and make improvements as your business grows.',
    colorClass: 'from-sky-400 to-sky-600'
  }
];

export default function HowItWorks() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsButtonVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" className="relative pt-32 sm:pt-40 py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              YOUR JOURNEY
            </span>
          </h2>
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="h-1.5 w-8 bg-cyan-400 rounded-full"></div>
              <div className="h-1.5 w-8 bg-blue-500 rounded-full"></div>
              <div className="h-1.5 w-8 bg-purple-600 rounded-full"></div>
              <div className="h-1.5 w-8 bg-sky-400 rounded-full"></div>
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-light text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="text-cyan-400 font-semibold">Four simple steps</span> to transform your business
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30"></div>

          <div className="space-y-20 sm:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse lg:justify-end' : ''}`}>
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.colorClass} flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-5xl font-bold text-gray-800 group-hover:text-cyan-900 transition-colors">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/50"></div>
                  </div>

                  <div className="flex-1 hidden lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div ref={buttonRef} className="mt-20 text-center">
          <p className={`text-2xl text-gray-300 mb-8 transition-all duration-700 ${
            isButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Ready to transform your business with AI?
          </p>
          <div className={`transition-all duration-700 delay-300 ${
            isButtonVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <LiquidButton
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              size="xxl"
              className="text-cyan-400 font-bold text-3xl px-28 py-10"
            >
              Start Your Journey
            </LiquidButton>
          </div>
        </div>
      </div>
    </section>
  );
}
