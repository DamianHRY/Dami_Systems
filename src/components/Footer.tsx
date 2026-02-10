import { Mail, MapPin, Phone, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Footer7 } from '@/components/ui/footer-7';
import damiLogo from '@/assets/dami-logo.png';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const logo = {
    element: (
      <img
        src={damiLogo}
        alt="Dami Systems"
        className="h-16 w-auto object-contain"
      />
    ),
    onClick: () => scrollToSection('home'),
  };

  const sections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', onClick: () => scrollToSection('home') },
        { name: 'Services', onClick: () => scrollToSection('services') },
        { name: 'How It Works', onClick: () => scrollToSection('how-it-works') },
        { name: 'About', onClick: () => scrollToSection('about') },
      ],
    },
    {
      title: 'Our Services',
      links: [
        { name: 'AI Phone Callers', onClick: () => scrollToSection('services') },
        { name: 'AI Chatbots', onClick: () => scrollToSection('services') },
        { name: 'Website Design', onClick: () => scrollToSection('services') },
        { name: 'Lead Automation', onClick: () => scrollToSection('services') },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        {
          name: 'damisystems.sprt@outlook.com',
          href: 'mailto:damisystems.sprt@outlook.com',
          icon: <Mail className="w-4 h-4 text-cyan-500 flex-shrink-0" />,
        },
        {
          name: '+32 488 297 249',
          href: 'tel:+32488297249',
          icon: <Phone className="w-4 h-4 text-cyan-500 flex-shrink-0" />,
        },
        {
          name: 'Aalst, Belgium',
          icon: <MapPin className="w-4 h-4 text-cyan-500 flex-shrink-0" />,
        },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  ];

  const legalLinks = [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ];

  return (
    <Footer7
      logo={logo}
      sections={sections}
      description="Transforming businesses with cutting-edge artificial intelligence and automation solutions."
      socialLinks={socialLinks}
      copyright={`\u00A9 ${new Date().getFullYear()} Dami Systems. All rights reserved.`}
      legalLinks={legalLinks}
    />
  );
}
