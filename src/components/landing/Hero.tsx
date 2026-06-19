import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Waves } from "./Waves";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
      {/* Interactive waves background */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]">
        <Waves strokeColor="rgba(255,255,255,0.14)" />
      </div>
      <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)" }} />
      <div className="absolute inset-0 noise opacity-[0.4] mix-blend-overlay pointer-events-none" />

      {/* Soft orb */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 60%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-[11px] text-white/70 mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          New · AI Career Scout in private beta
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="text-gradient text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-[-0.04em] font-medium"
          style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
        >
          Find the hidden jobs<br />the algorithms bury.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          className="mt-7 max-w-2xl mx-auto text-base sm:text-lg text-white/60 leading-relaxed"
        >
          JobSniper analyzes your resume, understands your lifestyle preferences, and discovers niche opportunities across the web that traditional job platforms never show.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <button className="group inline-flex items-center gap-2 bg-white text-black rounded-full px-5 py-3 text-sm font-medium hover:bg-white/90 transition-all shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)]">
            Find My Matches
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button className="group inline-flex items-center gap-2 glass rounded-full px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all">
            <Play className="h-3.5 w-3.5 fill-white" />
            Watch Demo
          </button>
        </motion.div>

        {/* Floating hint cards */}
        <FloatingHint className="left-[2%] top-[22%]" delay={0.7} label="Resume scan" value="92% match" />
        <FloatingHint className="right-[2%] top-[22%]" delay={0.9} label="Hidden roles" value="148 found" align="right" />
        <FloatingHint className="left-[2%] bottom-[12%]" delay={1.1} label="Remote · Lisbon" value="Boutique studio" />
        <FloatingHint className="right-[2%] bottom-[12%]" delay={1.3} label="Niche board" value="Indie hackers" align="right" />
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}

function FloatingHint({
  className,
  delay,
  label,
  value,
  align = "left",
}: {
  className?: string;
  delay: number;
  label: string;
  value: string;
  align?: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease, delay }}
      className={`hidden lg:block absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
        className={`glass-strong rounded-2xl px-4 py-3 ${align === "right" ? "text-right" : ""}`}
      >
        <div className="text-[10px] uppercase tracking-widest text-white/40">{label}</div>
        <div className="text-sm text-white mt-0.5 font-medium">{value}</div>
      </motion.div>
    </motion.div>
  );
}