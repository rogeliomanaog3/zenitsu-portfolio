import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
} from './Icons';
import {
  Mail,
  Phone,
  MapPin,
  Zap,
  CheckCircle2,
} from 'lucide-react';

export default function Contact() {
  const { personal, socialLinks } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">
            <Zap className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Have a project in mind?
          </h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base max-w-xl">
            Let's discuss development opportunities, internships, or building something impactful together.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mt-4 sm:mx-0 mx-auto" />
        </div>

        {/* Two-Column Grid: Contact Information & Direct Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Social Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channel Cards */}
            <div className="p-6 rounded-3xl bg-[#10121D]/85 backdrop-blur-xl border border-white/10 shadow-lg space-y-4">
              
              {/* Email */}
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#090A12] border border-white/10 hover:border-amber-400/60 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400/15 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Direct Email</div>
                  <div className="text-sm font-bold text-white">
                    {personal.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#090A12] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-amber-400/15 flex items-center justify-center text-amber-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Phone / WhatsApp</div>
                  <div className="text-sm font-bold text-white">
                    {personal.phone}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#090A12] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-amber-400/15 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Current Location</div>
                  <div className="text-sm font-bold text-white">
                    {personal.location}
                  </div>
                </div>
              </div>

            </div>

            {/* Social Channels Strip */}
            <div className="p-6 rounded-3xl bg-[#10121D]/85 backdrop-blur-xl border border-white/10 shadow-lg">
              <div className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-400 mb-4">
                Connect on Social Networks
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#090A12] hover:bg-amber-400/15 border border-white/10 text-neutral-300 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span className="text-xs font-semibold">{socialLinks.github.placeholder}</span>
                </a>

                <a
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#090A12] hover:bg-amber-400/15 border border-white/10 text-neutral-300 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span className="text-xs font-semibold">{socialLinks.linkedin.placeholder}</span>
                </a>

                <a
                  href={socialLinks.facebook.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#090A12] hover:bg-amber-400/15 border border-white/10 text-neutral-300 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                  <span className="text-xs font-semibold">{socialLinks.facebook.placeholder}</span>
                </a>

                <a
                  href={socialLinks.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#090A12] hover:bg-amber-400/15 border border-white/10 text-neutral-300 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span className="text-xs font-semibold">{socialLinks.instagram.placeholder}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#10121D]/90 backdrop-blur-xl border border-white/10 shadow-xl relative overflow-hidden">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">
                  Send a Message Directly
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Fill in your details below and I'll get back to you with lightning speed.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-amber-400/15 border border-amber-400/40 text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center mb-3 shadow-lg shadow-amber-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-neutral-300 max-w-sm">
                    Thank you for reaching out. I have received your message and will respond promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold tracking-wider text-neutral-300 uppercase mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#090A12] border border-white/10 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-white text-sm transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold tracking-wider text-neutral-300 uppercase mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="johndoe@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#090A12] border border-white/10 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-white text-sm transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold tracking-wider text-neutral-300 uppercase mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#090A12] border border-white/10 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-white text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button with Yellow Lightning Animation on Hover */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 overflow-hidden cursor-pointer"
                    >
                      {/* Katana Light Sweep */}
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                      <Zap className="w-4 h-4 fill-neutral-950 text-neutral-950 group-hover:scale-125 transition-transform" />
                      <span>{loading ? 'Transmitting...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
