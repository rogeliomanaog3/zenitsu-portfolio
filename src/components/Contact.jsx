import React, { useState } from 'react';
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
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';

export default function Contact() {
  const { personal, socialLinks } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setErrorMessage('');

    try {
      // Send directly to Rogelio's Gmail using FormSubmit AJAX endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject ? `[Portfolio] ${formData.subject}` : `[Portfolio] Message from ${formData.name}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json();

      if (response.ok && result.success !== 'false') {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.warn('FormSubmit failed, providing fallback:', err);
      // Fallback: open visitor's email client with pre-filled content
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      setErrorMessage(
        'Direct transmission failed. You can click below to send via your email client instead.'
      );
      window.location.href = mailtoUrl;
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1E2536]">
      <div className="max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-amber-400">
            <span className="text-neutral-500">04 /</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Contact Me
          </h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base max-w-xl">
            I'm actively looking for junior developer roles, internships, and freelance projects.
            Whether you have an inquiry, a project proposal, or just want to connect, feel free to drop a message.
          </p>
        </div>

        {/* Two-Column Grid: Contact Information & Direct Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels & Profiles (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Status card */}
            <div className="p-4 rounded-xl bg-[#111622] border border-[#1E2536]">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-400">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Available for student internships, junior web developer positions, and contract projects.
              </p>
            </div>

            {/* Direct Channel Tiles */}
            <div className="p-5 rounded-xl bg-[#111622] border border-[#1E2536] space-y-3">
              <div className="text-[11px] font-mono uppercase text-neutral-400">
                Direct Contact
              </div>

              {/* Email */}
              <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-[#0B0E14] border border-[#1E2536]">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-md bg-[#161C2B] text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">Email</div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-amber-400 transition-colors truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="p-1.5 rounded text-neutral-400 hover:text-white hover:bg-[#1E2536] transition-colors shrink-0 cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedKey === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-[#0B0E14] border border-[#1E2536]">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-md bg-[#161C2B] text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">Phone & WhatsApp</div>
                    <a
                      href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-amber-400 transition-colors truncate block"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(personal.phone, 'phone')}
                  className="p-1.5 rounded text-neutral-400 hover:text-white hover:bg-[#1E2536] transition-colors shrink-0 cursor-pointer"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedKey === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0B0E14] border border-[#1E2536]">
                <div className="w-8 h-8 rounded-md bg-[#161C2B] text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">Location</div>
                  <div className="text-xs sm:text-sm font-medium text-white truncate">
                    {personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-5 rounded-xl bg-[#111622] border border-[#1E2536]">
              <div className="text-[11px] font-mono uppercase text-neutral-400 mb-3">
                Profiles & Networks
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0B0E14] border border-[#1E2536] text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors text-xs font-medium"
                >
                  <GithubIcon className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span className="truncate">{socialLinks.github.placeholder}</span>
                </a>

                <a
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0B0E14] border border-[#1E2536] text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors text-xs font-medium"
                >
                  <LinkedinIcon className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span className="truncate">{socialLinks.linkedin.placeholder}</span>
                </a>

                <a
                  href={socialLinks.facebook.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0B0E14] border border-[#1E2536] text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors text-xs font-medium"
                >
                  <FacebookIcon className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span className="truncate">{socialLinks.facebook.placeholder}</span>
                </a>

                <a
                  href={socialLinks.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0B0E14] border border-[#1E2536] text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors text-xs font-medium"
                >
                  <InstagramIcon className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span className="truncate">{socialLinks.instagram.placeholder}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-xl bg-[#111622] border border-[#1E2536]">
              
              <div className="mb-5 pb-4 border-b border-[#1E2536]">
                <h3 className="text-base font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Fill in your details below and it will be delivered directly to my inbox at <span className="text-amber-400 font-mono">{personal.email}</span>.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                  <div className="flex items-center gap-2.5 font-semibold text-white mb-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Message Sent Successfully!</span>
                  </div>
                  <p className="text-xs text-emerald-300/90 leading-relaxed mb-4">
                    Thank you for reaching out. Your message has been sent to <strong className="text-white">{personal.email}</strong>. I will get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-amber-400 hover:text-amber-300 underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-500/30 text-red-200 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div>{errorMessage}</div>
                        <a
                          href={`mailto:${personal.email}?subject=${encodeURIComponent(
                            formData.subject || 'Portfolio Inquiry'
                          )}&body=${encodeURIComponent(formData.message)}`}
                          className="inline-block mt-2 font-mono text-amber-400 hover:underline"
                        >
                          → Open in default email app
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 uppercase mb-1.5">
                        Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0E14] border border-[#1E2536] focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30 text-white text-sm placeholder:text-neutral-600 transition-colors"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 uppercase mb-1.5">
                        Email <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0E14] border border-[#1E2536] focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30 text-white text-sm placeholder:text-neutral-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 uppercase mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Internship Inquiry / Web Development Project"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0E14] border border-[#1E2536] focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30 text-white text-sm placeholder:text-neutral-600 transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 uppercase mb-1.5">
                      Message <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="How can I help you? Tell me about the role, project, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0E14] border border-[#1E2536] focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30 text-white text-sm placeholder:text-neutral-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button & Direct Mail Link */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <p className="text-[11px] text-neutral-400">
                      Prefer email client?{' '}
                      <a
                        href={`mailto:${personal.email}?subject=Portfolio%20Inquiry`}
                        className="text-amber-400 hover:underline"
                      >
                        Click here
                      </a>
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold text-xs sm:text-sm tracking-wide uppercase transition-colors disabled:opacity-50 cursor-pointer shrink-0"
                    >
                      {loading ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
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
