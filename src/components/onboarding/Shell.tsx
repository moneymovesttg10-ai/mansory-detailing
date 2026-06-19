import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

type Props = {
  step: number;
  total: number;
  children: React.ReactNode;
};

export function OnboardingShell({ step, total, children }: Props) {
  const pct = (step / total) * 100;
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(800px 400px at 50% -10%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(600px 300px at 90% 100%, rgba(120,140,200,0.10), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 noise opacity-[0.35]" />
      </div>

      {/* Top bar */}
      <header className="relative z-10 mx-auto flex w-[min(96%,1100px)] items-center justify-between px-2 py-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-white text-black grid place-items-center text-[11px] font-bold tracking-tighter">
            JS
          </div>
          <span className="text-sm font-medium tracking-tight">JobSniper</span>
        </Link>
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-white/50">
          <span>
            Step {String(step).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </header>

      {/* Progress */}
      <div className="relative z-10 mx-auto w-[min(96%,1100px)] px-2">
        <div className="h-px w-full bg-white/10 overflow-hidden rounded-full">
          <motion.div
            initial={false}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-gradient-to-r from-white/30 via-white to-white/30"
          />
        </div>
      </div>

      {/* Content */}
      <main className="relative z-10 mx-auto w-[min(96%,1100px)] px-2 py-10 md:py-14">
        {children}
      </main>
    </div>
  );
}

export function StepFooter({
  onBack,
  onNext,
  backLabel = "Back",
  nextLabel = "Continue",
  disableBack = false,
  disableNext = false,
}: {
  onBack?: () => void;
  onNext?: () => void;
  backLabel?: string;
  nextLabel?: string;
  disableBack?: boolean;
  disableNext?: boolean;
}) {
  return (
    <div className="mt-10 flex items-center justify-between">
      <button
        onClick={onBack}
        disabled={disableBack}
        className="text-xs uppercase tracking-[0.18em] text-white/50 hover:text-white transition-colors disabled:opacity-30 disabled:hover:text-white/50"
      >
        ← {backLabel}
      </button>
      <button
        onClick={onNext}
        disabled={disableNext}
        className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {nextLabel}
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </button>
    </div>
  );
}

export function StepHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mb-8 md:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[11px] uppercase tracking-[0.22em] text-white/40"
      >
        {kicker}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-3 text-3xl md:text-5xl font-medium tracking-tight text-gradient max-w-2xl"
      >
        {title}
      </motion.h1>
      {sub && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-3 text-sm md:text-base text-white/60 max-w-xl"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}