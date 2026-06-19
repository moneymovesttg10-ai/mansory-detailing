import { motion } from "motion/react";
import { Users, Bot, Building2, EyeOff } from "lucide-react";

const problems = [
  { icon: Users, stat: "1,200+", label: "Average applicants per listed role", desc: "You're a line in a spreadsheet, not a person." },
  { icon: Bot, stat: "94%", label: "Of feeds are algorithm-driven", desc: "Recommendations optimized for clicks, not careers." },
  { icon: Building2, stat: "Top 1%", label: "Of companies dominate visibility", desc: "Corporate saturation drowns out the rest." },
  { icon: EyeOff, stat: "80%", label: "Of openings never reach job boards", desc: "Hidden in careers pages, communities, DMs." },
];

export function ProblemSection() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">The problem</div>
          <h2
            className="text-gradient text-4xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1.02]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            The internet is full of opportunities.<br />
            <span className="text-white/40">Most people never see them.</span>
          </h2>
          <p className="mt-8 text-white/55 text-lg max-w-xl leading-relaxed">
            Job boards became advertising platforms. The real openings — the boutique, the niche, the just-launched — quietly live elsewhere.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mt-20">
          {problems.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className={`glass rounded-2xl p-8 ${i % 2 === 1 ? "md:translate-y-12" : ""}`}
            >
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 grid place-items-center shrink-0">
                  <p.icon className="h-5 w-5 text-white/70" />
                </div>
                <div className="flex-1">
                  <div
                    className="text-4xl md:text-5xl text-white tracking-[-0.04em] mb-1"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {p.stat}
                  </div>
                  <div className="text-sm text-white/75 font-medium">{p.label}</div>
                  <div className="text-sm text-white/45 mt-2 leading-relaxed">{p.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}