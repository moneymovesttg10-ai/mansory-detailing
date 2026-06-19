import { motion } from "motion/react";
import { Briefcase, MapPin, Sparkles, TrendingUp, CheckCircle2, Circle, Clock } from "lucide-react";

const jobs = [
  { co: "Atelier Nine", role: "Senior Product Designer", loc: "Remote · Lisbon", match: 94, tag: "Boutique studio" },
  { co: "Halcyon Labs", role: "Founding Engineer", loc: "Remote · Worldwide", match: 91, tag: "Pre-seed" },
  { co: "Field Notes Co.", role: "Brand Lead", loc: "Brooklyn, NY", match: 88, tag: "Indie" },
];

const tracker = [
  { state: "applied", label: "Atelier Nine · Sent", t: "2d" },
  { state: "interview", label: "Halcyon Labs · Interview", t: "Fri" },
  { state: "todo", label: "Field Notes · Draft cover", t: "—" },
];

export function DemoDashboard() {
  return (
    <section id="product" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">The product</div>
          <h2 className="text-gradient text-4xl md:text-6xl tracking-[-0.03em]" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Your career, on one quiet canvas.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-20 bg-white/[0.04] blur-3xl rounded-full pointer-events-none" />

          <div className="relative glass-strong rounded-3xl overflow-hidden">
            {/* window chrome */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <div className="mx-auto text-[11px] text-white/40 font-mono">jobsniper.app / dashboard</div>
            </div>

            <div className="grid grid-cols-12 gap-4 p-5">
              {/* Left: Scores */}
              <div className="col-span-12 md:col-span-3 space-y-4">
                <ScoreCard label="Resume Score" value={92} />
                <ScoreCard label="Match Score" value={87} accent />
                <div className="glass rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-3">AI Recommendation</div>
                  <div className="flex gap-2">
                    <Sparkles className="h-4 w-4 text-white/70 shrink-0 mt-0.5" />
                    <p className="text-xs text-white/70 leading-relaxed">Tighten your last role's impact bullets — measurable outcomes lift match by ~6%.</p>
                  </div>
                </div>
              </div>

              {/* Middle: Job cards */}
              <div className="col-span-12 md:col-span-6 space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-xs text-white/60">Hidden matches · today</div>
                  <div className="text-[10px] text-white/30 font-mono">148 new</div>
                </div>
                {jobs.map((j, i) => (
                  <motion.div
                    key={j.co}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                    className="glass rounded-xl p-4 flex items-center gap-4 hover:bg-white/[0.05] transition-colors"
                  >
                    <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
                      <Briefcase className="h-4 w-4 text-white/70" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-sm text-white truncate">
                        <span className="font-medium">{j.role}</span>
                        <span className="text-white/30">·</span>
                        <span className="text-white/60 truncate">{j.co}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-white/40 mt-1">
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{j.loc}</span>
                        <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">{j.tag}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-medium text-white">{j.match}<span className="text-white/40 text-xs">%</span></div>
                      <div className="text-[10px] text-white/40">match</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right: Tracker */}
              <div className="col-span-12 md:col-span-3">
                <div className="glass rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-3 flex items-center gap-1.5">
                    <TrendingUp className="h-3 w-3" /> Tracker
                  </div>
                  <div className="space-y-3">
                    {tracker.map((t) => (
                      <div key={t.label} className="flex items-start gap-2.5">
                        {t.state === "applied" ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/80 mt-0.5" />
                          : t.state === "interview" ? <Clock className="h-3.5 w-3.5 text-amber-300/80 mt-0.5" />
                          : <Circle className="h-3.5 w-3.5 text-white/30 mt-0.5" />}
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-white/80 truncate">{t.label}</div>
                          <div className="text-[10px] text-white/35">{t.t}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ScoreCard({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="text-[10px] uppercase tracking-widest text-white/40">{label}</div>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="text-3xl font-medium text-white tracking-tight">{value}</span>
        <span className="text-white/40 text-xs">/ 100</span>
      </div>
      <div className="mt-3 h-1 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className={accent ? "h-full bg-white" : "h-full bg-white/60"}
        />
      </div>
    </div>
  );
}