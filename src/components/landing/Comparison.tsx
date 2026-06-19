import { motion } from "motion/react";
import { X, Check } from "lucide-react";

const traditional = [
  "Corporate spam at scale",
  "Thousands of identical applicants",
  "Generic, recycled listings",
  "Keyword games, no nuance",
  "Algorithms optimized for engagement, not fit",
];

const sniper = [
  "Niche opportunities",
  "Personalized discovery",
  "Hidden internet jobs",
  "Lifestyle-aware matching",
  "An intelligence optimized for your career",
];

export function Comparison() {
  return (
    <section id="compare" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">The difference</div>
          <h2 className="text-gradient text-4xl md:text-6xl tracking-[-0.03em]" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Two ways to find a job.<br />Only one was built for you.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-8 opacity-80"
          >
            <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Traditional</div>
            <div className="text-2xl font-medium text-white/80 mb-6">Job Boards</div>
            <ul className="space-y-3">
              {traditional.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-white/55">
                  <X className="h-4 w-4 mt-0.5 text-white/30 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass-strong rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />
            <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Your scout</div>
            <div className="text-2xl font-medium text-white mb-6">JobSniper</div>
            <ul className="space-y-3">
              {sniper.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-white">
                  <Check className="h-4 w-4 mt-0.5 text-white shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}