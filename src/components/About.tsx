import { Target, Lightbulb, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <span className="text-cyan-400 text-sm font-semibold">ABOUT ME</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Personal Service, Professional Results
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Meet Damian</h3>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              I'm Damian, the founder behind Dami Systems. I personally handle every project from start to finish, giving you my full attention and expertise.
            </p>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              My mission is simple: make powerful AI technology accessible for every business owner. No confusing tech jargon, just you and me working together.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              When you work with Dami Systems, you work directly with me. I build your solutions and make sure everything runs perfectly.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 sm:p-6 bg-black/50 rounded-xl flex flex-col items-center justify-center min-h-[120px]">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">100%</div>
                  <div className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">Personal Attention</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-black/50 rounded-xl flex flex-col items-center justify-center min-h-[120px]">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">Direct</div>
                  <div className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">Communication</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-black/50 rounded-xl flex flex-col items-center justify-center min-h-[120px]">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">Custom</div>
                  <div className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">Solutions</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-black/50 rounded-xl flex flex-col items-center justify-center min-h-[120px]">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">24/7</div>
                  <div className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-6 shadow-lg">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Dedicated Focus</h3>
            <p className="text-gray-400">
              Your project gets my complete attention. I carefully design every solution to match your exact business needs.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Cutting-Edge Tools</h3>
            <p className="text-gray-400">
              I use the latest AI technology to build solutions that keep you ahead of your competition.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-6 shadow-lg">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">True Partnership</h3>
            <p className="text-gray-400">
              I'm not just here to build something and disappear. I'm invested in your long-term success and growth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-6 shadow-lg">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Quality Promise</h3>
            <p className="text-gray-400">
              I take pride in every project. Your success is my success, and I won't stop until everything works perfectly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
