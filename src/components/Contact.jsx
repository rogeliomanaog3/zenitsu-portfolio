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
  Flag,
  Flame,
  Send,
  CheckCircle2,
  Zap,
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
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Background Volumetric Heat Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E10600]/12 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Header: The Finish Line */}
        <div className="mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E10600]/15 border border-[#E10600]/40 text-[#FF6A00] text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-[0_0_12px_rgba(225,6,0,0.3)]">
            <Flag className="w-3.5 h-3.5 fill-[#E10600] text-[#E10600]" />
            <span>SECTION 04 // THE FINISH LINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase flex items-center justify-center sm:justify-start gap-3">
            <span>READY TO BUILD SOMETHING AWESOME?</span>
          </h2>

          <p className="text-neutral-400 mt-2 text-sm sm:text-base max-w-xl font-mono">
            Cross the finish line together. Let's discuss high-velocity development opportunities, internships, or production web applications.
          </p>

          {/* Checkered Racing Accent Bar */}
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#E10600] via-[#FF6A00] to-[#FFD400] rounded-full mt-4 sm:mx-0 mx-auto shadow-[0_0_10px_#FF6A00]" />
        </div>

        {/* Two-Column Contact & Dispatch Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Communication Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channel Cards in Carbon Finish */}
            <div className="p-6 rounded-3xl carbon-panel border border-[#E10600]/30 shadow-xl space-y-4">
              <div className="text-xs font-mono font-black uppercase text-[#FF6A00] tracking-wider mb-2 flex items-center gap-2">
                <Flame className="w-4 h-4 fill-[#FF1A00] text-[#FF1A00]" />
                <span>PIT CREW DIRECT LINES</span>
              </div>
              
              {/* Email */}
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-black/60 border border-white/10 hover:border-[#E10600] transition-all group speed-sweep"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E10600]/15 border border-[#E10600]/30 flex items-center justify-center text-[#FF1A00] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                    DIRECT EMAIL
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-[#FF6A00] transition-colors break-all">
                    {personal.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-black/60 border border-white/10 hover:border-[#FF6A00] transition-all group speed-sweep"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 flex items-center justify-center text-[#FF6A00] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                    PHONE / WHATSAPP
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-[#FFD400] transition-colors">
                    {personal.phone}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/60 border border-white/10">
                <div className="w-11 h-11 rounded-xl bg-[#FFD400]/15 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                    BASE / HEADQUARTERS
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {personal.location}
                  </div>
                </div>
              </div>

            </div>

            {/* Social Network Telemetry Strip */}
            <div className="p-6 rounded-3xl carbon-panel border border-white/10 shadow-lg">
              <div className="text-xs font-mono font-black tracking-wider uppercase text-neutral-400 mb-4 flex items-center justify-between">
                <span>RACING CHANNELS</span>
                <span className="text-[#FF6A00]">ONLINE</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-black/60 hover:bg-[#E10600]/15 border border-white/10 text-neutral-300 hover:text-white hover:border-[#E10600]/50 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#FF1A00]" />
                  <span className="text-xs font-bold font-mono truncate">{socialLinks.github.placeholder}</span>
                </a>

                <a
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-black/60 hover:bg-[#FF6A00]/15 border border-white/10 text-neutral-300 hover:text-white hover:border-[#FF6A00]/50 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#FF6A00]" />
                  <span className="text-xs font-bold font-mono truncate">{socialLinks.linkedin.placeholder}</span>
                </a>

                <a
                  href={socialLinks.facebook.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-black/60 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                  <span className="text-xs font-bold font-mono truncate">{socialLinks.facebook.placeholder}</span>
                </a>

                <a
                  href={socialLinks.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-black/60 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span className="text-xs font-bold font-mono truncate">{socialLinks.instagram.placeholder}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Pit Stop Radio / Dispatcher Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl carbon-panel border-2 border-[#E10600]/40 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FFD400]" />
                  <span className="text-xs font-mono font-black uppercase text-white tracking-widest">
                    PIT STOP TELEMETRY RADIO
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E10600] text-white font-bold">
                  TRANSMISSION CHANNEL
                </span>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-[#E10600]/15 border border-[#E10600]/40 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#E10600] to-[#FF6A00] flex items-center justify-center text-white mx-auto shadow-lg">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">
                    TRANSMISSION RECEIVED!
                  </h3>
                  <p className="text-sm text-neutral-300 font-mono max-w-sm mx-auto">
                    Your message has cleared the pit lane. Rogelio will respond at maximum speed.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono font-black uppercase tracking-wider text-neutral-400 mb-2">
                      YOUR CALLSIGN / NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/70 border border-white/10 focus:border-[#E10600] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#E10600] transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-black uppercase tracking-wider text-neutral-400 mb-2">
                      COMMUNICATION FREQUENCY / EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/70 border border-white/10 focus:border-[#FF6A00] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6A00] transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-black uppercase tracking-wider text-neutral-400 mb-2">
                      PROJECT BRIEF / TELEMETRY MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the opportunity, project requirements, or track goals..."
                      className="w-full px-4 py-3.5 rounded-xl bg-black/70 border border-white/10 focus:border-[#FFD400] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD400] transition-colors font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#E10600] via-[#FF1A00] to-[#FF6A00] hover:from-[#FF1A00] hover:to-[#FFD400] text-white font-black text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(225,6,0,0.5)] hover:shadow-[0_0_35px_rgba(255,106,0,0.7)] transition-all cursor-pointer speed-sweep disabled:opacity-50 flex items-center justify-center gap-2.5"
                  >
                    {loading ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>TRANSMIT TO ROGELIO // LAUNCH</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
