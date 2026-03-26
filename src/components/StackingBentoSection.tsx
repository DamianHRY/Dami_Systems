import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, MessageSquare, Globe, Zap, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Phone,
    title: 'AI Phone Callers',
    description: 'AI that handles calls like a real person, books appointments, and answers questions 24/7.',
    features: ['Auto-booking', '24/7 Availability', 'Outbound/Inbound', 'Instant ROI'],
    gradient: 'from-[#06b6d4] to-[#3b82f6]',
    borderColor: 'border-cyan-500/30',
    id: "phone-callers"
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description: 'Instant responses to visitors, helping turn them into customers even while you sleep.',
    features: ['Multilingual', 'Lead Gen', 'CRM Sync', 'Instant Response'],
    gradient: 'from-[#3b82f6] to-[#8b5cf6]',
    borderColor: 'border-blue-500/30',
    id: "chatbots"
  },
  {
    icon: Globe,
    title: 'Premium Web Design',
    description: 'Modern websites that load fast, look amazing on any device, and convert visitors.',
    features: ['High Performance', 'Vercel Edge', 'Premium UX', 'SEO Optimized'],
    gradient: 'from-[#8b5cf6] to-[#ec4899]',
    borderColor: 'border-purple-500/30',
    id: "web-design"
  },
  {
    icon: Zap,
    title: 'Business Automation',
    description: 'Automatically capture leads, follow up, and nurture them until they buy.',
    features: ['Workflows', 'Nurture Sequences', 'Analytics', 'Scale Fast'],
    gradient: 'from-[#ec4899] to-[#ef4444]',
    borderColor: 'border-pink-500/30',
    id: "automation"
  }
];

export default function StackingBentoSection() {
  return (
    <section id="services" className="relative py-20 px-4 sm:px-10 lg:px-20 bg-black">
      <div className="max-w-7xl mx-auto py-10">
        <div className="text-center mb-16 h-32 flex flex-col justify-center items-center">
          <h2 className="text-5xl sm:text-7xl font-black mb-4 bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">
            ELITE SOLUTIONS
          </h2>
          <div className="h-1 w-24 bg-cyan-400 rounded-full"></div>
        </div>

        <div className="flex flex-col gap-20">
          {services.map((service, index) => (
            <StackingCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackingCard({ service, index }: { service: typeof services[0], index: number }) {
  const container = useRef<HTMLDivElement>(null);

  // Scoped scroll tracking for this specific card's container
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  // Scales down slightly as it's being overlapped
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  // Fades out slightly for depth
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-20">
      <motion.div
        style={{
          scale,
          opacity,
          top: `calc(-5% + ${index * 25}px)`
        }}
        className="relative w-full max-w-5xl h-[500px] flex flex-col md:flex-row overflow-hidden rounded-[3rem] border border-white/10 bg-[#0a0a0a] shadow-2xl backdrop-blur-3xl group"
      >
        {/* Left Side: Service Details */}
        <div className="flex-[1.2] p-10 md:p-16 flex flex-col">
          <div className={`p-4 rounded-2xl bg-white/5 w-fit mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
            <service.icon className="text-cyan-400" size={40} />
          </div>

          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            {service.title}
          </h3>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            {service.description}
          </p>

          <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 size={20} className="text-cyan-400 flex-shrink-0" />
                <span className="text-base font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Visual Accent */}
        <div className="hidden md:flex flex-1 relative items-center justify-center overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 blur-3xl`} />
          <div className="relative z-10 w-64 h-64 rounded-full border border-white/10 flex items-center justify-center">
            <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${service.gradient} rotate-12 group-hover:rotate-[45deg] transition-transform duration-1000 shadow-[0_0_50px_rgba(34,211,238,0.3)]`} />
          </div>

          {/* Glass Overlay for depth */}
          <div className="absolute inset-0 bg-white/5 pointer-events-none" />
        </div>

        {/* Gloss highlight animated across the card */}
        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out" />
      </motion.div>
    </div>
  );
}
