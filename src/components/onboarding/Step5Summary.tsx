import { motion } from "motion/react";
import { Sparkles, Compass, Trees, Eye } from "lucide-react";
import { StepHeader, StepFooter } from "./Shell";
import type { OnboardingState } from "./types";

type Props = {
  state: OnboardingState;
  onBack: () => void;
  onNext: () => void;
};

export function Step5Summary({ state, onBack, onNext }: Props) {
  const strengths = state.skills.slice(0, 5);
  const fits = [
    `${state.work.company} · ${state.work.commitment}`,
    `${state.work.location} first`,
    state.work.industries.slice(0, 3).join(" · ") || "Open across industries",
  ];
  const env = [
    `${state.lifestyle.environment} workdays`,
    state.lifestyle.flexible ? "Flexible schedule" : "Structured schedule",
    `Commute ≤ ${state.lifestyle.commute} min`,
  ];
  const hidden = buildHidden(state);

  return (
    <>
      <StepHeader
        kicker="Step 05 — Summary"
        title="Here's what JobSniper understands about you."
        sub="If anything feels off, head back. Otherwise — the scan is ready."
      />

      <div className="grid md:grid-cols-2 gap-5">
        <Block icon={<Sparkles className="h-4 w-4" />} title="Strengths" items={strengths} delay={0} />
        <Block icon={<Compass className="h-4 w-4" />} title="Career fit" items={fits} delay={0.1} />
        <Block icon={<Trees className="h-4 w-4" />} title="Preferred environments" items={env} delay={0.2} />
        <Block
          icon={<Eye className="h-4 w-4" />}
          title="Hidden opportunity categories"
          items={hidden}
          highlight
          delay={0.3}
        />
      </div>

      <StepFooter onBack={onBack} onNext={onNext} nextLabel="Run the scan" />
    </>
  );
}

function buildHidden(s: OnboardingState): string[] {
  const out: string[] = [];
  if (s.work.company === "Startup") out.push("Stealth-mode startups not on LinkedIn");
  if (s.work.company === "Local Business") out.push("Owner-run businesses hiring quietly");
  if (s.lifestyle.animals) out.push("Sanctuaries & veterinary practices");
  if (s.lifestyle.outdoor) out.push("Field crews, parks & guides");
  if (s.lifestyle.booksCalm) out.push("Independent bookstores & libraries");
  if (s.work.location === "Remote") out.push("Remote teams under 25 people");
  if (out.length < 3) out.push("Niche career pages & community job boards");
  return out.slice(0, 5);
}

function Block({
  icon,
  title,
  items,
  delay = 0,
  highlight = false,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  delay?: number;
  highlight?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`glass rounded-2xl p-6 ${highlight ? "ring-1 ring-white/15" : ""}`}
    >
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/40">
        {icon} {title}
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((i, idx) => (
          <motion.li
            key={i + idx}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: delay + 0.05 * idx }}
            className="flex items-start gap-3"
          >
            <span className="mt-1.5 h-1 w-1 rounded-full bg-white/60" />
            <span className="text-sm text-white/85">{i}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}