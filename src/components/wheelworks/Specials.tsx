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
                Limited-time offer
              </div>
              <h3
                className="text-gradient text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-[1.05]"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Spring Special — $25 off any Full Detail.
              </h3>
              <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-md">
                Mention this coupon when you book. Expires 5/31/26.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[220px]">
              <a
                href="tel:2159478927"
                className="inline-flex items-center justify-center gap-2 bg-white text-black rounded-full px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Claim by phone
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 glass rounded-full px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                See full detail pricing
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}