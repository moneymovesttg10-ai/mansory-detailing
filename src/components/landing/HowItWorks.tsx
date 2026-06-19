import { motion } from "motion/react";
import { Upload, SlidersHorizontal, Radar, Wand2 } from "lucide-react";

const steps = [
  { n: "01", icon: Upload, title: "Upload Resume", desc: "Drop in any format. We parse roles, skills, projects, tone, and trajectory." },
  { n: "02", icon: SlidersHorizontal, title: "Define Your Ideal Environment", desc: "Remote, hybrid, city, team size, pace, values. The dimensions algorithms ignore." },
  { n: "03", icon: Radar, title: "AI Discovers Hidden Opportunities", desc: "We crawl boutique startups, indie boards, niche communities, and quiet careers pages." },
  { n: "04", icon: Wand2, title: "Tailor Resume Instantly", desc: "One-click rewrite for each match — keywords, framing, and tone, calibrated." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">How it works</div>
          <h2 className="text-gradient text-4xl md:text-6xl tracking-[-0.03em]" style={{ fontFamily: "'Instrument Serif', serif" }}>
            A career scout, not a job board.
          </h2>
          <p className="mt-5 text-white/55 max-w-xl mx-auto">Four quiet steps. One personal intelligence working in the background.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="glass rounded-2xl p-7 group hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 grid place-items-center group-hover:bg-white/10 transition-colors">
                  <s.icon className="h-5 w-5 text-white/80" />
                </div>
                <div className="text-xs text-white/30 font-mono tracking-wider">{s.n}</div>
              </div>
              <h3 className="text-lg font-medium text-white tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}