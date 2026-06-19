import { motion } from "motion/react";
import { Upload, User, Brain, Globe, Sparkles, Send } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload Resume", desc: "Any format. We parse roles, projects, voice." },
  { icon: User, title: "Build Lifestyle Profile", desc: "Where you live, how you work, what you value." },
  { icon: Brain, title: "Analyze Skills", desc: "We map your transferable strengths and gaps." },
  { icon: Globe, title: "Scan the Internet", desc: "Boutique startups, niche boards, hidden careers pages." },
  { icon: Sparkles, title: "Discover Hidden Opportunities", desc: "A shortlist of roles that fit who you actually are." },
  { icon: Send, title: "Apply Faster", desc: "One-click tailored resumes. Apply with confidence." },
];

export function JourneyTimeline() {
  return (
    <section className="relative py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">The journey</div>
          <h2
            className="text-gradient text-4xl md:text-6xl tracking-[-0.03em]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            From resume to right role,<br />in six quiet steps.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:-translate-x-px" />

          <div className="space-y-16">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  className="relative grid md:grid-cols-2 gap-6 items-center"
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_24px_4px_rgba(255,255,255,0.35)]" />
                  </div>

                  {/* Spacer for desktop alternating */}
                  {!left && <div className="hidden md:block" />}

                  <div className={`pl-20 md:pl-0 ${left ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 font-mono">
                      Step {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className={`inline-flex items-center gap-3 ${left ? "md:flex-row-reverse" : ""}`}>
                      <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
                        <s.icon className="h-4 w-4 text-white/80" />
                      </div>
                      <h3 className="text-2xl text-white tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-white/55 leading-relaxed max-w-sm md:inline-block">{s.desc}</p>
                  </div>

                  {left && <div className="hidden md:block" />}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}