import { useState, FormEvent } from 'react';
import { Mail, Building2, User, Phone, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    email: '',
    phone: '',
    automationInterest: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.automationInterest.trim()) {
      newErrors.automationInterest = 'Please tell us what you want to automate';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          company_name: formData.companyName || null,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone || null,
          automation_interest: formData.automationInterest,
          budget_range: null,
          timeline: null
        }
      ]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({
        companyName: '',
        fullName: '',
        email: '',
        phone: '',
        automationInterest: ''
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error: any) {
      console.error('Form submission error:', error);
      let errorMessage = 'Something went wrong. Please try again.';

      if (error.message?.includes('relation') && error.message?.includes('does not exist')) {
        errorMessage = 'Database not set up yet. Please run the SQL setup script.';
      } else if (error.message) {
        errorMessage = error.message;
      }

      setErrors({ submit: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="relative py-24 sm:py-32">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-12 border border-cyan-500/50 shadow-2xl shadow-cyan-500/20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Got It!</h2>
            <p className="text-xl text-gray-300 mb-8">
              Thanks for reaching out! I'll personally review your message and get back to you within 24 hours. Looking forward to working with you!
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              LET'S START
            </span>
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-2xl sm:text-3xl font-light text-gray-300 leading-relaxed">
              Fill in your details and <span className="text-cyan-400 font-semibold">let's build something great together</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span>I'll review your message</span>
              </div>
              <div className="hidden sm:block text-cyan-400">→</div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>We'll schedule a free call</span>
              </div>
              <div className="hidden sm:block text-cyan-400">→</div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                <span>I'll build your solution</span>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 sm:p-12 border border-gray-700/50 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="companyName" className="flex items-center space-x-2 text-gray-300 mb-2 font-medium">
                <Building2 className="w-4 h-4 text-cyan-400" />
                <span>Company Name</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label htmlFor="fullName" className="flex items-center space-x-2 text-gray-300 mb-2 font-medium">
                <User className="w-4 h-4 text-cyan-400" />
                <span>Full Name *</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all ${
                  errors.fullName ? 'border-red-500' : 'border-gray-600/50'
                }`}
                placeholder="John Doe"
              />
              {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="flex items-center space-x-2 text-gray-300 mb-2 font-medium">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Email Address *</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all ${
                  errors.email ? 'border-red-500' : 'border-gray-600/50'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="flex items-center space-x-2 text-gray-300 mb-2 font-medium">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Phone Number</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="automationInterest" className="flex items-center space-x-2 text-gray-300 mb-2 font-medium">
              <span>What would you like to automate? *</span>
            </label>
            <textarea
              id="automationInterest"
              name="automationInterest"
              value={formData.automationInterest}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none ${
                errors.automationInterest ? 'border-red-500' : 'border-gray-600/50'
              }`}
              placeholder="Tell me about your business, what challenges you're facing, and what you'd like to achieve..."
            />
            {errors.automationInterest && <p className="text-red-400 text-sm mt-1">{errors.automationInterest}</p>}
          </div>

          {errors.submit && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
              <p className="text-red-400">{errors.submit}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </>
            )}
          </button>

          <p className="text-gray-500 text-sm text-center mt-4">
            * Required fields
          </p>
        </form>
      </div>
    </section>
  );
}
