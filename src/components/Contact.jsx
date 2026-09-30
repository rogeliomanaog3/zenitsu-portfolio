import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, ExternalLink, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const { personal, socialLinks } = portfolioData;
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const contactChannels = [
    {
      key: 'email',
      label: 'Email',
      value: personal.email,
      display: personal.email,
      icon: <Mail className="w-4 h-4 text-[#00D2FF]" />,
      action: `mailto:${personal.email}`,
      isExternal: false,
    },
    {
      key: 'github',
      label: 'Github',
      value: 'github.com/rogeliomanaog3',
      display: '/rogeliomanaog3',
      icon: <GithubIcon className="w-4 h-4 text-[#00D2FF]" />,
      action: socialLinks.github.url,
      isExternal: true,
    },
    {
      key: 'linkedin',
      label: 'Linkedin',
      value: 'linkedin.com/in/rogeliomanaog',
      display: '/in/rogeliomanaog',
      icon: <LinkedinIcon className="w-4 h-4 text-[#00D2FF]" />,
      action: socialLinks.linkedin.url,
      isExternal: true,
    },
    {
      key: 'phone',
      label: 'Other',
      value: personal.phone,
      display: personal.phone,
      icon: <Phone className="w-4 h-4 text-[#00D2FF]" />,
      action: `tel:${personal.phone.replace(/\s+/g, '')}`,
      isExternal: false,
    },
  ];

  return (
    <section id="contact" className="relative h-full flex flex-col justify-stretch">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full h-full rounded-2xl sm:rounded-3xl border border-[#0088FF]/30 shadow-[0_15px_45px_rgba(0,0,0,0.85)] relative overflow-hidden bg-[#070B18] p-6 sm:p-7 flex flex-col justify-between min-h-[260px] sm:min-h-[290px]"
      >
        {/* Background Stadium Finish Line Artwork */}
        <div className="absolute right-0 top-0 bottom-0 w-full sm:w-2/3 h-full pointer-events-none z-0 overflow-hidden">
          <img
            src="/assets/hotwheels/stadium_finish.jpg"
            alt="Stadium Finish Line"
            className="w-full h-full object-cover object-right opacity-25"
          />
          <div className="absolute inset-0 bg-[#070B18]/70" />
        </div>

        {/* Top/Main Row */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Heading, Subtitle & CTA (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {/* Header Badge */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase mb-2">
              <span className="text-sm">🏁</span>
              <span>LET'S CONNECT</span>
            </div>

            {/* Slanted Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black italic uppercase tracking-tight text-white leading-tight speed-font">
              READY TO BUILD<br />
              <span className="text-[#FF5500]">SOMETHING GREAT?</span>
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2 max-w-md font-medium">
              Feel free to reach out. I'm always open to new opportunities, full-stack projects, and collaborations.
            </p>

            {/* Contact Me Button */}
            <div className="mt-5">
              <a
                href={`mailto:${personal.email}?subject=Collaboration%20Inquiry%20via%20Portfolio`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-[#FF5500] hover:bg-[#FF6A00] text-black font-black uppercase text-xs sm:text-sm tracking-wider speed-font transform -skew-x-12 transition-all cursor-pointer group shadow-[0_0_20px_rgba(255,85,0,0.5)]"
              >
                <span className="inline-block transform skew-x-12">CONTACT ME</span>
                <span className="inline-block transform skew-x-12 group-hover:translate-x-1 transition-transform font-black">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Cyber HUD Telemetry Channel Pods (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#030612] border border-[#0088FF]/30 shadow-xl relative overflow-hidden">
              {/* Top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#00D2FF] opacity-80" />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {contactChannels.map((item) => (
                  <div
                    key={item.key}
                    className="flex flex-col items-center sm:items-start text-center sm:text-left group relative"
                  >
                    <a
                      href={item.action}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noreferrer' : undefined}
                      className="w-10 h-10 rounded-xl bg-[#090E22] border border-[#0088FF]/40 hover:border-[#00D2FF] flex items-center justify-center text-[#00D2FF] group-hover:shadow-[0_0_15px_rgba(0,210,255,0.4)] group-hover:scale-105 transition-all mb-2 cursor-pointer"
                    >
                      {item.icon}
                    </a>
                    <span className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                      {item.label}
                    </span>
                    <a
                      href={item.action}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noreferrer' : undefined}
                      className="text-[11px] font-sans text-neutral-300 hover:text-[#00D2FF] truncate max-w-full font-medium transition-colors cursor-pointer"
                      title={item.value}
                    >
                      {item.display}
                    </a>

                    {/* Copy Quick Action Button */}
                    <button
                      onClick={() => handleCopy(item.value, item.key)}
                      title="Copy to clipboard"
                      className="mt-1 inline-flex items-center gap-1 text-[9px] font-mono text-[#00D2FF]/70 hover:text-[#00D2FF] transition-colors cursor-pointer"
                    >
                      {copiedKey === item.key ? (
                        <>
                          <Check className="w-2.5 h-2.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-2.5 h-2.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
