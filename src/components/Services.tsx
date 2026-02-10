import { Phone, MessageSquare, Globe, Zap } from 'lucide-react';

const services = [
  {
    icon: Phone,
    title: 'AI Phone Callers',
    description: 'AI that handles calls like a real person, books appointments, and answers questions 24/7.',
    features: [
      'Books appointments automatically',
      'Answers customer questions instantly',
      'Handles incoming and outgoing calls',
      'Works around the clock'
    ],
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description: 'Instant responses to visitors, helping turn them into customers even while you sleep.',
    features: [
      'Responds to visitors instantly',
      'Helps turn visitors into customers',
      'Answers common questions automatically',
      'Speaks multiple languages'
    ],
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Modern websites that load fast, look amazing on any device, and convert visitors.',
    features: [
      'Modern, beautiful designs',
      'Smooth animations that impress',
      'Works perfectly on phones and tablets',
      'Gets found on Google'
    ],
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    icon: Zap,
    title: 'Lead Capture & Automation',
    description: 'Automatically capture leads, follow up, and nurture them until they buy.',
    features: [
      'Automatically follows up with leads',
      'Keeps track of every potential customer',
      'Organizes contacts smartly',
      'Shows you what\'s working'
    ],
    gradient: 'from-pink-500 to-red-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative pt-40 sm:pt-48 pb-32 sm:pb-40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              WHAT WE BUILD
            </span>
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
          </div>
          <p className="text-2xl sm:text-3xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AI-powered solutions that <span className="text-cyan-400 font-semibold">work while you sleep</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-12 border border-cyan-500/30 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Why Choose AI Automation?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            AI works 24/7 and delivers consistent results every time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">5x</div>
              <div className="text-gray-400">Faster Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-gray-400">Consistency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
