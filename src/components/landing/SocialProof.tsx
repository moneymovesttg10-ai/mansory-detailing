import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
      return () => controls.stop();
    }
  }, [inView, mv, to]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "Opportunities found", sub: "Per personalized search" },
  { value: 87, suffix: "%", label: "Average match score", sub: "Across discovered roles" },
  { value: 4, suffix: " min", label: "To generate results", sub: "From upload to shortlist" },
  { value: 10, suffix: "x", label: "More personalized", sub: "Than generic job boards" },
];

export function SocialProof() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">By the numbers</div>
          <h2 className="text-gradient text-4xl md:text-5xl tracking-[-0.03em]" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Quiet work. Loud results.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <div className="text-5xl md:text-6xl font-medium tracking-[-0.04em] text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-sm text-white/80">{s.label}</div>
              <div className="text-xs text-white/40 mt-1">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}