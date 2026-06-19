import { Suspense, lazy, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Compass, Globe2 } from "lucide-react";

const Spline = lazy(() => import("@splinetool/react-spline"));

// Only two cards — the brain is the centerpiece.
const cards = [
  { icon: Compass, title: "Lifestyle Mapping", desc: "Where you live, how you work, what you value.", pos: "top-[18%] left-[3%]" },
  { icon: Globe2, title: "Deep Web Discovery", desc: "Niche boards, hidden careers pages, quiet communities.", pos: "bottom-[20%] right-[3%]" },
] as const;

export function BrainSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  return (
    <section ref={ref} className="relative min-h-[140vh] overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {/* Headline above brain */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[8%] left-1/2 -translate-x-1/2 text-center z-20 px-6"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-3">The engine</div>
          <h2
            className="text-gradient text-4xl md:text-6xl tracking-[-0.03em]"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
          >
            An intelligence trained on the<br />hidden corners of the internet.
          </h2>
        </motion.div>

        {/* Brain */}
        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[120vh] w-[120vh] max-w-none">
              <Suspense fallback={null}>
                <Spline scene="https://prod.spline.design/fLmoR-slFm5T8cwG/scene.splinecode" />
              </Suspense>
            </div>
          </div>
          {/* mask bottom watermark */}
          <div className="absolute bottom-4 right-4 h-12 w-44 bg-background z-30" />
        </motion.div>

        {/* Floating glass cards around the brain */}
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.15 }}
            className={`absolute ${c.pos} z-20 w-[260px] hidden md:block`}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              className="glass-strong rounded-2xl p-5"
            >
              <div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center mb-3">
                <c.icon className="h-4 w-4 text-white/80" />
              </div>
              <div className="text-sm font-medium text-white">{c.title}</div>
              <div className="text-xs text-white/55 mt-1 leading-relaxed">{c.desc}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}