import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mounted, setMounted] = useState(false); // for slide animation
  const [render, setRender] = useState(isOpen); // keep mounted for close animation
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      setRender(true);
      const t = setTimeout(() => setMounted(true), 20);
      return () => clearTimeout(t);
    } else {
      setMounted(false);
      const t = setTimeout(() => {
        setRender(false);
        setStatus('idle'); // reset after animation completes
      }, 700);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!render) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    const serviceID = 'service_rzy4r1w';
    const templateID = 'template_64znxc8'; // <-- Replace with your EmailJS template ID
    const publicKey = '6lwnRd44-s_j_aSGk';   // <-- Replace with your EmailJS public key

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        () => {
          setStatus('success');
          setName('');
          setEmail('');
          setMessage('');
        },
        () => {
          setStatus('error');
        }
      );
  }

  function closeModal() {
    // keep current status (success/loading) during outward animation
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-5xl rounded-xl overflow-hidden flex flex-col md:flex-row shadow-2xl max-h-[95vh] md:max-h-[90vh]">
        {/* Close Button - positioned on green side for mobile, black side for desktop */}
        <button
          className={`group absolute top-2 right-2 md:top-3 md:right-3 flex items-center justify-center p-2 md:p-3 rounded-lg transition-all duration-700 shadow-[0_0_0_0_rgba(0,0,0,0.4)] hover:shadow-[0_0_18px_6px_rgba(0,0,0,0.6)] md:hover:shadow-[0_0_18px_6px_rgba(34,197,94,0.6)] overflow-visible bg-transparent z-[20] ${mounted ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeModal}
          aria-label="Close contact form"
        >
          <span className="relative block w-6 h-6 md:w-8 md:h-8">
            <span className="absolute left-0 top-1/2 w-full h-[4px] md:h-[5px] -translate-y-1/2 bg-gradient-to-r from-black to-black md:from-green-400 md:via-green-500 md:to-green-600 rotate-45 rounded-full transition-all duration-300 group-hover:from-neutral-800 group-hover:to-neutral-800 md:group-hover:from-green-300 md:group-hover:to-green-500 group-hover:scale-105" />
            <span className="absolute left-0 top-1/2 w-full h-[4px] md:h-[5px] -translate-y-1/2 bg-gradient-to-r from-black to-black md:from-green-400 md:via-green-500 md:to-green-600 -rotate-45 rounded-full transition-all duration-300 group-hover:from-neutral-800 group-hover:to-neutral-800 md:group-hover:from-green-300 md:group-hover:to-green-500 group-hover:scale-105" />
          </span>
          <span className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 h-12 rounded-full bg-black/0 group-hover:bg-black/30 md:bg-green-500/0 md:group-hover:bg-green-500/30 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-95 shadow-[0_0_55px_12px_rgba(0,0,0,0.35)] group-hover:shadow-[0_0_80px_26px_rgba(0,0,0,0.5)] md:shadow-[0_0_55px_12px_rgba(34,197,94,0.35)] md:group-hover:shadow-[0_0_80px_26px_rgba(34,197,94,0.5)]" />
        </button>
        {/* Left Intro Side */}
        <div
          className={`md:basis-1/2 flex flex-col justify-center gap-4 md:gap-6 p-6 sm:p-8 md:p-14 bg-green-500 text-black md:rounded-l-xl md:rounded-none rounded-t-xl md:rounded-t-none transition-all duration-700 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">Let&apos;s Collaborate</h2>
          <p className="text-sm sm:text-base md:text-xl font-medium">
            I craft clean, performant, and visually engaging experiences. I&apos;d love to connect! 🚀 Hit me up and let&apos;s turn your ideas into something EPIC! 💥
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3 text-xs sm:text-sm font-semibold">
            <span className="px-2 sm:px-3 py-1 rounded-full bg-black/10">Html</span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-black/10">Css</span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-black/10">React</span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-black/10">Firebase</span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-black/10">NextJS</span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-black/10">Redux</span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-black/10">TailwindCSS</span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-black/10">NodeJS</span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-black/10">Javascript</span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-black/10">Typescript</span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-black/10">Drizzle</span>
          </div>
        </div>
        {/* Right Side */}
        <div
          className={`md:basis-1/2 relative bg-neutral-950 border-l border-neutral-800 p-6 sm:p-8 md:p-12 flex flex-col justify-center text-white md:rounded-r-xl md:rounded-none rounded-b-xl md:rounded-b-none transition-all duration-700 min-h-[400px] sm:min-h-[450px] ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}
        >
          {status === 'loading' ? (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-950 rounded-b-xl md:rounded-r-xl md:rounded-b-none">
              <span className="w-20 h-20 sm:w-32 sm:h-32 border-[10px] sm:border-[14px] border-green-800 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : status === 'success' ? (
            <div className="flex flex-col items-center text-center gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-green-500 flex items-center justify-center text-black text-3xl sm:text-5xl font-bold animate-pulse">✓</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-green-500">Message Sent!</h3>
              <p className="text-sm sm:text-base text-neutral-300">
                Thank you for reaching out. I will review your message and get back to you soon.
              </p>
            </div>
          ) : status === 'error' ? (
            <div className="flex flex-col items-center text-center gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-red-500 flex items-center justify-center text-white text-3xl sm:text-5xl font-bold">✕</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-red-500">Failed to Send</h3>
              <p className="text-sm sm:text-base text-neutral-300">
                Something went wrong. Please try again or contact me directly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="bg-green-500 hover:bg-green-400 text-black font-semibold rounded-md py-2 px-6 text-sm transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wider text-neutral-400">Name</span>
                <input
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="bg-neutral-900 border border-neutral-700 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wider text-neutral-400">Email</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="bg-neutral-900 border border-neutral-700 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="you@example.com"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wider text-neutral-400">Message</span>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="bg-neutral-900 border border-neutral-700 rounded-md px-3 py-2 text-sm sm:text-base resize-none focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="Lets Connect..."
                />
              </label>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-400 text-black font-semibold rounded-md py-2.5 sm:py-3 px-6 text-sm sm:text-base transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
