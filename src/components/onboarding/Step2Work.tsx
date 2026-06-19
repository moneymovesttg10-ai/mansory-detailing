import { motion } from "motion/react";
import { StepHeader, StepFooter } from "./Shell";
import type { WorkPrefs } from "./types";

const LOCATION = ["Remote", "Hybrid", "In Person"];
const COMMITMENT = ["Full Time", "Part Time", "Contract"];
const COMPANY = ["Startup", "Corporate", "Local Business"];
const INDUSTRIES = [
  "AI & ML",
  "Climate",
  "Fintech",
  "Healthcare",
  "Creative",
  "Education",
  "Hospitality",
  "Outdoors",
  "Crafts",
  "Veterinary",
];

type Props = {
  value: WorkPrefs;
  onChange: (v: WorkPrefs) => void;
  onBack: () => void;
  onNext: () => void;
};

export function Step2Work({ value, onChange, onBack, onNext }: Props) {
  const set = <K extends keyof WorkPrefs>(k: K, v: WorkPrefs[K]) =>
    onChange({ ...value, [k]: v });

  return (
    <>
      <StepHeader
        kicker="Step 02 — Work"
        title="How do you want to work?"
        sub="Set the shape of the role. We'll filter the entire hidden internet through it."
      />

      <div className="grid md:grid-cols-2 gap-5">
        <Group label="Location">
          <Chips options={LOCATION} value={value.location} onChange={(v) => set("location", v)} />
        </Group>
        <Group label="Commitment">
          <Chips options={COMMITMENT} value={value.commitment} onChange={(v) => set("commitment", v)} />
        </Group>
        <Group label="Company type">
          <Chips options={COMPANY} value={value.company} onChange={(v) => set("company", v)} />
        </Group>
        <Group label={`Salary range · $${value.salaryMin}k – $${value.salaryMax}k`}>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <RangeInput
              label="Min"
              min={30}
              max={400}
              value={value.salaryMin}
              onChange={(n) => set("salaryMin", Math.min(n, value.salaryMax - 10))}
            />
            <RangeInput
              label="Max"
              min={30}
              max={400}
              value={value.salaryMax}
              onChange={(n) => set("salaryMax", Math.max(n, value.salaryMin + 10))}
            />
          </div>
        </Group>

        <div className="md:col-span-2">
          <Group label="Industries you'd love (pick any)">
            <div className="flex flex-wrap gap-2 pt-1">
              {INDUSTRIES.map((ind) => {
                const active = value.industries.includes(ind);
                return (
                  <button
                    key={ind}
                    onClick={() =>
                      set(
                        "industries",
                        active
                          ? value.industries.filter((i) => i !== ind)
                          : [...value.industries, ind],
                      )
                    }
                    className={`text-xs rounded-full px-3.5 py-1.5 border transition-all ${
                      active
                        ? "bg-white text-black border-white"
                        : "border-white/10 text-white/70 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {ind}
                  </button>
                );
              })}
            </div>
          </Group>
        </div>
      </div>

      <StepFooter onBack={onBack} onNext={onNext} />
    </>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-5"
    >
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">{label}</div>
      {children}
    </motion.div>
  );
}

function Chips({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = o === value;
        return (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`text-sm rounded-xl px-4 py-2 border transition-all ${
              active
                ? "bg-white text-black border-white"
                : "border-white/10 text-white/70 hover:border-white/30 hover:text-white"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

function RangeInput({
  label,
  min,
  max,
  value,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-white/50 mb-2">
        <span>{label}</span>
        <span className="text-white">${value}k</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={5}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-white"
      />
    </div>
  );
}