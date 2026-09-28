import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import {
  MessageSquare,
  X,
  Send,
  Zap,
  Bot,
  User,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

export default function AIAssistant() {
  const { personal, aiKnowledge } = portfolioData;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: aiKnowledge.welcomeMessage,
      time: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg = {
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Formulate response based on knowledge base or fallback
    setTimeout(() => {
      let replyText = `Thank you for asking! ${personal.name} is dedicated to writing clean, high-performance code and specializes in full-stack architecture. For direct opportunities, you can connect via email at ${personal.email}.`;

      const lower = query.toLowerCase();
      if (lower.includes('tech') || lower.includes('stack') || lower.includes('skill')) {
        replyText = aiKnowledge.faqs[0].answer;
      } else if (lower.includes('job') || lower.includes('intern') || lower.includes('hire') || lower.includes('available')) {
        replyText = aiKnowledge.faqs[1].answer;
      } else if (lower.includes('project') || lower.includes('featured')) {
        replyText = aiKnowledge.faqs[2].answer;
      } else if (lower.includes('who') || lower.includes('name') || lower.includes('about')) {
        replyText = `I am the interactive Thunder Assistant representing ${personal.name}, a student pursuing ${personal.course} at ${personal.school}.`;
      } else if (lower.includes('zenitsu') || lower.includes('thunder') || lower.includes('demon')) {
        replyText = `⚡ "Master one thing. Hone it to the absolute peak." This portfolio draws subtle inspiration from Zenitsu Agatsuma's Thunder Breathing: relentless focus, precision, and lightning-speed execution!`;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Trigger Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Open AI Assistant"
          className="relative group p-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 shadow-2xl shadow-amber-500/25 border border-amber-400/40 flex items-center justify-center cursor-pointer"
        >
          {/* Subtle Golden Pulsing Aura Ring */}
          <span className="absolute -inset-1 rounded-full bg-amber-400 opacity-20 group-hover:opacity-40 animate-ping pointer-events-none" />
          
          {isOpen ? (
            <X className="w-6 h-6 text-amber-400 dark:text-amber-600" />
          ) : (
            <div className="flex items-center gap-1.5 font-bold text-xs font-mono">
              <Zap className="w-4 h-4 fill-amber-400 text-amber-500" />
              <span>AI</span>
            </div>
          )}

          {/* Online Status Dot */}
          <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-neutral-900" />
        </motion.button>
      </div>

      {/* Slide-Up Chat Drawer (Inspired by Video Reference) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-96 rounded-3xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl shadow-black/20 flex flex-col overflow-hidden max-h-[540px]"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between bg-neutral-50/80 dark:bg-neutral-950/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Zap className="w-4 h-4 fill-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-50 flex items-center gap-1.5">
                    <span>Thunder Assistant</span>
                    <span className="text-[10px] font-mono text-amber-500">⚡ AI</span>
                  </h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Online & Ready</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conversation Stream */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 min-h-[260px] max-h-[320px] text-xs">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    m.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl ${
                      m.sender === 'user'
                        ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 rounded-br-xs'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-bl-xs border border-neutral-200/60 dark:border-neutral-700/60'
                    }`}
                  >
                    <p className="leading-relaxed">{m.text}</p>
                  </div>
                  <span className="text-[9px] text-neutral-400 px-1 mt-1 font-mono">
                    {m.time}
                  </span>
                </div>
              ))}

              {/* Typing indicator dots */}
              {isTyping && (
                <div className="flex items-center gap-1 p-2.5 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-500 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce [animation-delay:0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce [animation-delay:0.3s]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {aiKnowledge.faqs.map((faq, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(faq.question)}
                  className="px-2.5 py-1 rounded-full bg-amber-400/10 hover:bg-amber-400/20 text-amber-800 dark:text-amber-300 text-[10px] whitespace-nowrap border border-amber-400/20 transition-colors"
                >
                  {faq.question}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 px-3.5 py-2 rounded-full bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Send query"
                  className="p-2 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
