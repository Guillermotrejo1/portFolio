import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // You can integrate an API call or email service here
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  }

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-lg bg-neutral-900 border border-neutral-700 rounded-xl p-8 shadow-xl text-white">
        <button
          className="absolute top-4 right-4 text-2xl hover:text-green-500 transition-colors"
          onClick={onClose}
          aria-label="Close contact form"
        >
          ×
        </button>
        <h2 className="text-3xl font-bold mb-6 text-green-500">Get in touch</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="flex flex-col gap-2">
            <span className="text-sm uppercase tracking-wider text-neutral-400">Name</span>
            <input
              required
              value={name}
              onChange={e => setName(e.target.value)}
              className="bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 focus:outline-none focus:border-green-500 transition-colors"
              placeholder="Your name"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm uppercase tracking-wider text-neutral-400">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 focus:outline-none focus:border-green-500 transition-colors"
              placeholder="you@example.com"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm uppercase tracking-wider text-neutral-400">Message</span>
            <textarea
              required
              rows={5}
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 resize-none focus:outline-none focus:border-green-500 transition-colors"
              placeholder="I look forward to hearing from you..."
            />
          </label>
          <button
            type="submit"
            disabled={submitted}
            className="bg-green-500 hover:bg-green-600 disabled:bg-green-700 disabled:cursor-not-allowed text-black font-semibold rounded-md py-3 transition-colors"
          >
            {submitted ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};
