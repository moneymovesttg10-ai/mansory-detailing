import { motion } from "motion/react";
import { Phone, ArrowRight } from "lucide-react";
import heroImg from "@/assets/wheelworks-hero.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-24">
      <img
        src={heroImg}
        alt="Hand washing a luxury black car with rich foam suds"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/20 to-background/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-background/15 to-transparent" />
      <div className="absolute inset-0 noise opacity-[0.2] mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-[11px] text-white/70 mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          Huntingdon Valley, PA · Open until 7 PM
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="text-gradient max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.98] tracking-[-0.035em] font-medium"
          style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 300 }}
        >
          |Car Detailing Done Right <br />|Mansory Detailing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          className="mt-7 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed"
        >
          Premium car detailing in Huntingdon Valley — built to protect, restore, and elevate every vehicle. Consultation and booking via direct message or phone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="tel:2153988619"
            className="group inline-flex items-center gap-2 bg-white text-black rounded-full px-5 py-3 text-sm font-medium hover:bg-white/90 transition-all shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)]"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 glass rounded-full px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all"
          >
            View Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.55 }}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.18em] text-white/45"
        >
          <span>Exterior Detail</span>
          <span className="text-white/20">·</span>
          <span>Interior Detail</span>
          <span className="text-white/20">·</span>
          <span>Full Detail</span>
          <span className="text-white/20">·</span>
          <span>5.0 · 93 Reviews</span>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}