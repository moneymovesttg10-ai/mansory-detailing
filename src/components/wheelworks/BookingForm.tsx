import { useState } from "react";
import { Calendar, Loader2, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const FORMSPREE_URL = "https://formspree.io/f/xbdevwwo";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30 transition-colors";

export function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successOpen, setSuccessOpen] = useState(false);

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const formEl = e.currentTarget;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(formEl),
      });

      if (response.ok) {
        setForm(initialForm);
        formEl.reset();
        setSuccessOpen(true);
        setLoading(false);
        return;
      }

      let errorMessage = "Something went wrong. Please try again.";
      try {
        const data = (await response.json()) as { error?: string };
        if (data.error) errorMessage = data.error;
      } catch {
        // Non-JSON error body — keep the default message.
      }
      setError(errorMessage);
    } catch {
      setError("Unable to send your request. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-9 w-9 rounded-xl glass-strong grid place-items-center">
          <Calendar className="h-4 w-4 text-white" />
        </div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Request a consultation</div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={fieldClass}
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone number"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={fieldClass}
          />
        </div>

        <input
          type="email"
          name="email"
          required
          placeholder="Email address"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          className={fieldClass}
        />

        <select
          name="service"
          required
          value={form.service}
          onChange={(e) => updateField("service", e.target.value)}
          className={`${fieldClass} text-white/80 ${form.service ? "" : "text-white/30"}`}
        >
          <option value="" disabled className="bg-[#111] text-white/50">
            Service interested in
          </option>
          <option value="Hand Washing" className="bg-[#111]">Hand Washing</option>
          <option value="Express Detailing" className="bg-[#111]">Express Detailing</option>
          <option value="Professional Detailing" className="bg-[#111]">Professional Detailing</option>
          <option value="Not sure yet" className="bg-[#111]">Not sure yet</option>
        </select>

        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your vehicle or preferred date…"
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={`${fieldClass} resize-none min-h-[100px]`}
        />

        {error && (
          <p className="text-xs text-red-400/90 leading-relaxed">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 w-full bg-white text-black rounded-full px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {loading ? "Sending…" : "Send request"}
        </button>
      </form>

      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="glass-strong border-white/10 bg-[#0a0a0a] text-white sm:rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-white">Request received</DialogTitle>
            <DialogDescription className="text-white/60 leading-relaxed">
              Thank you for reaching out. Your consultation request has been received and the owner will get back to you shortly.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
