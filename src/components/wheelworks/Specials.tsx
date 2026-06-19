import { motion } from "motion/react";
import { Tag, Phone } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Specials() {
  return (
    <section id="specials" className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="relative glass-strong rounded-3xl overflow-hidden p-8 sm:p-12"
        >
          <div
            aria-hidden
            className="absolute -top-20 -right-20 h-80 w-80 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 60%)" }}
          />
          <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-[11px] text-white/70 mb-5">
                <Tag className="h-3 w-3" />
                Book with us
              </div>
              <h3
                className="text-gradient text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-[1.05]"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Consultation & booking via DM or phone.
              </h3>
              <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-md">
                Message us on Instagram at @mansory.detailing or call (215) 398-8619 to schedule your detail.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[220px]">
              <a
                href="https://instagram.com/mansory.detailing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-black rounded-full px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                DM on Instagram
              </a>
              <a
                href="tel:2153988619"
                className="inline-flex items-center justify-center gap-2 glass rounded-full px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Call to book
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}