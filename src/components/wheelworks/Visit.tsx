import { motion } from "motion/react";
import { MapPin, Phone, Clock, Globe } from "lucide-react";
import { BookingForm } from "@/components/wheelworks/BookingForm";

const ease = [0.22, 1, 0.36, 1] as const;

const hours = [
  { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
  { day: "Sunday", time: "By appointment" },
];

export function Visit() {
  return (
    <section id="visit" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-2xl mb-14"
        >
          <div className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-4">Visit & Contact</div>
          <h2
            className="text-gradient text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-[1.02]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Book your detail today.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="glass-strong rounded-3xl p-7 sm:p-8"
          >
            <div className="space-y-6">
              <InfoRow icon={MapPin} label="Address">
                <a
                  href="https://maps.google.com/?q=1940+Pioneer+Rd+Huntingdon+Valley+PA+19006"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  1940 Pioneer Rd<br />Huntingdon Valley, PA 19006
                </a>
              </InfoRow>
              <InfoRow icon={Phone} label="Phone">
                <a href="tel:2153988619" className="hover:text-white transition-colors">
                  (215) 398-8619
                </a>
              </InfoRow>
              <InfoRow icon={Globe} label="Instagram">
                <a
                  href="https://instagram.com/mansory.detailing"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @mansory.detailing
                </a>
              </InfoRow>
            </div>
            <a
              href="tel:2153988619"
              className="mt-8 inline-flex items-center justify-center gap-2 w-full bg-white text-black rounded-full px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call to book
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="glass rounded-3xl p-7 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-9 w-9 rounded-xl glass-strong grid place-items-center">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Hours</div>
            </div>
            <ul className="divide-y divide-white/10">
              {hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between py-3.5 text-sm">
                  <span className="text-white/65">{h.day}</span>
                  <span className="text-white font-medium tabular-nums">{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-xs text-white/50 leading-relaxed">
              <p>Consultation and booking available via Instagram direct message or phone.</p>
              <p>Hours may vary — call ahead to confirm availability.</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
          className="glass rounded-3xl p-7 sm:p-8 mt-5"
        >
          <BookingForm />
        </motion.div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="h-9 w-9 shrink-0 rounded-xl glass grid place-items-center">
        <Icon className="h-4 w-4 text-white" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">{label}</div>
        <div className="mt-1 text-sm text-white/80 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}