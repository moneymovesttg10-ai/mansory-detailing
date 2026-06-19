import { motion } from "motion/react";
import { StepHeader, StepFooter } from "./Shell";
import type { LifestylePrefs } from "./types";
import { BookOpen, Trees, PawPrint, Users, Clock, MapPin } from "lucide-react";

type Props = {
  value: LifestylePrefs;
  onChange: (v: LifestylePrefs) => void;
  onBack: () => void;
  onNext: () => void;
};

const ENVIRONMENTS = ["Quiet", "Social", "Mixed"];

export function Step3Lifestyle({ value, onChange, onBack, onNext }: Props) {
  const set = <K extends keyof LifestylePrefs>(k: K, v: LifestylePrefs[K]) =>
    onChange({ ...value, [k]: v });

  return (
    <>
      <StepHeader
        kicker="Step 03 — Lifestyle"
        title="The life around the work."
        sub="These are the questions traditional job boards never ask. They're the ones that matter most."
      />

      <div className="grid md:grid-cols-2 gap-5">
        <Card>
          <Label icon={<Users className="h-3.5 w-3.5" />}>Daily environment</Label>
          <div className="flex flex-wrap gap-2 pt-3">
            {ENVIRONMENTS.map((e) => {
              const active = e === value.environment;
              return (
                <button
                  key={e}
                  onClick={() => set("environment", e)}
                  className={`text-sm rounded-xl px-4 py-2 border transition-all ${
                    active
                      ? "bg-white text-black border-white"
                      : "border-white/10 text-white/70 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {e}
                </button>
              );
            })}
          </div>
        </Card>

        <Card>
          <Label icon={<MapPin className="h-3.5 w-3.5" />}>
            Max commute · {value.commute} min
          </Label>
          <input
            type="range"
            min={0}
            max={120}
            step={5}
            value={value.commute}
            onChange={(e) => set("commute", Number(e.target.value))}
            className="w-full accent-white mt-4"
          />
        </Card>

        <Toggle
          icon={<Trees className="h-4 w-4" />}
          title="Outdoor work"
          desc="Park rangers, field research, guides, outdoor crews."
          checked={value.outdoor}
          onChange={(v) => set("outdoor", v)}
        />
        <Toggle
          icon={<PawPrint className="h-4 w-4" />}
          title="Animal-related"
          desc="Veterinary clinics, shelters, sanctuaries, zoos."
          checked={value.animals}
          onChange={(v) => set("animals", v)}
        />
        <Toggle
          icon={<BookOpen className="h-4 w-4" />}
          title="Libraries & bookstores"
          desc="Calm, considered places where stories live."
          checked={value.booksCalm}
          onChange={(v) => set("booksCalm", v)}
        />
        <Toggle
          icon={<Clock className="h-4 w-4" />}
          title="Flexible schedule"
          desc="Async, four-day weeks, custom hours."
          checked={value.flexible}
          onChange={(v) => set("flexible", v)}
        />
      </div>

      <StepFooter onBack={onBack} onNext={onNext} />
    </>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-5"
    >
      {children}
    </motion.div>
  );
}

function Label({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/40">
      {icon}
      {children}
    </div>
  );
}

function Toggle({
  icon,
  title,
  desc,
  checked,
  onChange,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => onChange(!checked)}
      className={`glass rounded-2xl p-5 text-left transition-all ${
        checked ? "ring-1 ring-white/30" : "hover:bg-white/[0.04]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-xl glass-strong grid place-items-center shrink-0">
            {icon}
          </div>
          <div>
            <div className="text-sm font-medium">{title}</div>
            <div className="text-xs text-white/50 mt-0.5 max-w-xs">{desc}</div>
          </div>
        </div>
        <div
          className={`mt-1 h-5 w-9 rounded-full border transition-colors ${
            checked ? "bg-white border-white" : "border-white/20 bg-white/5"
          } relative`}
        >
          <motion.span
            initial={false}
            animate={{ x: checked ? 16 : 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={`absolute top-[2px] h-4 w-4 rounded-full ${
              checked ? "bg-black" : "bg-white"
            }`}
          />
        </div>
      </div>
    </motion.button>
  );
}