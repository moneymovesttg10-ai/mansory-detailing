import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Crosshair } from "lucide-react";

type Props = {
  onComplete: () => void;
};

const PHASES = [
  "Connecting to 12,400 niche sources",
  "Cross-referencing your lifestyle filters",
  "Scanning boutique startups & local boards",
  "Surfacing hidden community postings",
  "Ranking by signal-to-noise",
];

export function Step6Launch({ onComplete }: Props) {
  const [phase, setPhase] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (phase >= PHASES.length) {
      const t = setTimeout(() => setDone(true), 500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase((p) => p + 1), 900);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-hidden">
      {/* radar rings */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.2, opacity: 0.6 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
            className="absolute h-[40vmin] w-[40vmin] rounded-full border border-white/15"
          />
        ))}
      </div>

      {/* sweep */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="h-[60vmin] w-[60vmin] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(255,255,255,0.18), transparent 25%)",
            mask: "radial-gradient(circle, transparent 30%, black 31%, black 100%)",
            WebkitMask:
              "radial-gradient(circle, transparent 30%, black 31%, black 100%)",
          }}
        />
      </div>

      {/* center */}
      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md px-6"
        >
          <div className="mx-auto h-16 w-16 rounded-2xl glass-strong grid place-items-center mb-6">
            <Crosshair className="h-7 w-7" />
          </div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
            JobSniper · live scan
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight text-gradient">
            {done ? "Your opportunities are ready." : "Scanning the hidden internet."}
          </h2>

          <div className="mt-8 h-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={done ? "done" : PHASES[Math.min(phase, PHASES.length - 1)]}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-x-0 text-sm text-white/65"
              >
                {done ? "Hand-picked, ranked, ready to view." : PHASES[Math.min(phase, PHASES.length - 1)]}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: done ? 1 : 0, y: done ? 0 : 10 }}
            transition={{ duration: 0.5 }}
            disabled={!done}
            onClick={onComplete}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-all disabled:pointer-events-none"
          >
            Find My Hidden Opportunities →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}