import React, { useEffect, useState } from 'react';

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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

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
    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  }

  function closeModal() {
    // keep current status (success/loading) during outward animation
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative w-[95%] max-w-5xl rounded-xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
        {/* Left Intro Side */}
        <div
          className={`md:basis-1/2 flex flex-col justify-center gap-6 p-10 md:p-14 bg-green-500 text-black md:rounded-l-xl md:rounded-none rounded-t-xl md:rounded-t-none transition-all duration-700 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Let&apos;s Collaborate</h2>
          <p className="text-lg md:text-xl font-medium max-w-md">
            I craft clean, performant, and visually engaging experiences. Drop a line and we can explore bringing your ideas to life.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <span className="px-3 py-1 rounded-full bg-black/10">Frontend</span>
            <span className="px-3 py-1 rounded-full bg-black/10">Animation</span>
            <span className="px-3 py-1 rounded-full bg-black/10">UI/UX</span>
            <span className="px-3 py-1 rounded-full bg-black/10">Performance</span>
          </div>
        </div>
        {/* Right Side */}
        <div
          className={`md:basis-1/2 relative bg-neutral-950 border-l border-neutral-800 p-8 md:p-12 flex flex-col justify-center text-white md:rounded-r-xl md:rounded-none rounded-b-xl md:rounded-b-none transition-all duration-700 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}
        >
          <button
            className="group absolute top-3 right-3 flex items-center justify-center p-3 rounded-lg transition-all duration-300 shadow-[0_0_0_0_rgba(0,0,0,0.4)] hover:shadow-[0_0_18px_6px_rgba(34,197,94,0.6)] overflow-visible bg-transparent"
            onClick={closeModal}
            aria-label="Close contact form"
          >
            <span className="relative block w-8 h-8">
              <span className="absolute left-0 top-1/2 w-full h-[5px] -translate-y-1/2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rotate-45 rounded-full transition-all duration-300 group-hover:from-green-300 group-hover:to-green-500 group-hover:scale-105" />
              <span className="absolute left-0 top-1/2 w-full h-[5px] -translate-y-1/2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 -rotate-45 rounded-full transition-all duration-300 group-hover:from-green-300 group-hover:to-green-500 group-hover:scale-105" />
            </span>
            <span className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 h-12 rounded-full bg-green-500/0 group-hover:bg-green-500/30 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-95 shadow-[0_0_55px_12px_rgba(34,197,94,0.35)] group-hover:shadow-[0_0_80px_26px_rgba(34,197,94,0.5)]" />
          </button>
          {status === 'loading' ? (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-950">
              <span className="w-32 h-32 border-[14px] border-green-800 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : status === 'success' ? (
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center text-black text-5xl font-bold animate-pulse">✓</div>
              <h3 className="text-3xl font-bold text-green-500">Message Sent!</h3>
              <p className="text-neutral-300 max-w-sm">
                Thank you for reaching out. I will review your message and get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wider text-neutral-400">Name</span>
                <input
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="bg-neutral-900 border border-neutral-700 rounded-md px-3 py-2 focus:outline-none focus:border-green-500 transition-colors"
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
                  className="bg-neutral-900 border border-neutral-700 rounded-md px-3 py-2 focus:outline-none focus:border-green-500 transition-colors"
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
                  className="bg-neutral-900 border border-neutral-700 rounded-md px-3 py-2 resize-none focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="Lets Chat..."
                />
              </label>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-400 text-black font-semibold rounded-md py-3 px-6 transition-colors"
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
