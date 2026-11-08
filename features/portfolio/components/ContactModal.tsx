import { FormEvent, useState } from "react";
import { FiX } from "react-icons/fi";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Toast = { type: "ok" | "fail"; msg: string } | null;

const initialForm: FormState = { name: "", email: "", subject: "", message: "" };

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<Toast>(null);

  const updateField = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToast(null);

    const values = Object.values(form).map((value) => value.trim());
    const emailValid = /\S+@\S+\.\S+/.test(form.email.trim());
    if (values.some((value) => !value) || !emailValid) {
      setToast({ type: "fail", msg: "Please fill in all fields correctly." });
      return;
    }

    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Request failed");
      setForm(initialForm);
      setToast({ type: "ok", msg: "Message sent. I’ll be in touch soon." });
    } catch {
      setToast({ type: "fail", msg: "Send failed. Please email guillermotrejo.dev@gmail.com directly." });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={`modal-shell ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="emailModalTitle" style={{ fontFamily: "var(--font-inter)" }}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close contact form"><FiX /></button>
        <h3 className="modal-title" id="emailModalTitle">
          Start the <em className="serif" style={{ fontFamily: "var(--font-serif)", color: "var(--accent)" }}>conversation.</em>
        </h3>
        <p className="modal-sub">Send a message directly. I usually respond within one business day.</p>

        <form onSubmit={submitContact}>
          <div className="modal-fields-row">
            <div className="modal-field">
              <label htmlFor="f-name" style={{ fontFamily: "var(--font-mono)" }}>Your name</label>
              <input id="f-name" value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Jane Smith" />
            </div>
            <div className="modal-field">
              <label htmlFor="f-email" style={{ fontFamily: "var(--font-mono)" }}>Your email</label>
              <input id="f-email" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="jane@company.com" />
            </div>
          </div>

          <div className="modal-field">
            <label htmlFor="f-subject" style={{ fontFamily: "var(--font-mono)" }}>Subject</label>
            <input id="f-subject" value={form.subject} onChange={(e) => updateField("subject", e.target.value)} placeholder="Frontend opportunity at Acme Co." />
          </div>

          <div className="modal-field">
            <label htmlFor="f-message" style={{ fontFamily: "var(--font-mono)" }}>Message</label>
            <textarea id="f-message" value={form.message} onChange={(e) => updateField("message", e.target.value)} placeholder="Hi Guillermo, I came across your portfolio..." />
          </div>

          <div className="modal-actions">
            <button type="submit" className="modal-btn primary" disabled={sending}>{sending ? "Sending..." : "Send message"}</button>
            <button type="button" className="modal-btn secondary" onClick={onClose}>Maybe later</button>
          </div>
          {toast ? <div className={`modal-toast ${toast.type}`}>{toast.msg}</div> : <div className="modal-toast" />}
        </form>
      </div>
    </div>
  );
}
