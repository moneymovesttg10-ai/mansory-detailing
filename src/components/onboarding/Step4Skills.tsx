import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, X, Pencil, Check } from "lucide-react";
import { StepHeader, StepFooter } from "./Shell";

type Props = {
  skills: string[];
  onChange: (s: string[]) => void;
  onBack: () => void;
  onNext: () => void;
};

export function Step4Skills({ skills, onChange, onBack, onNext }: Props) {
  const [input, setInput] = useState("");
  const [editingIdx, setEditingIdx] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  function add() {
    const v = input.trim();
    if (!v || skills.includes(v)) return;
    onChange([...skills, v]);
    setInput("");
  }
  function remove(i: number) {
    onChange(skills.filter((_, idx) => idx !== i));
  }
  function commitEdit() {
    if (editingIdx === null) return;
    const v = editValue.trim();
    if (!v) return;
    onChange(skills.map((s, i) => (i === editingIdx ? v : s)));
    setEditingIdx(null);
    setEditValue("");
  }

  return (
    <>
      <StepHeader
        kicker="Step 04 — Skills"
        title="Verify what we found."
        sub="These were pulled from your resume. Refine them so JobSniper aims at the right targets."
      />

      <div className="glass rounded-2xl p-6 md:p-8">
        <div className="flex flex-wrap gap-2">
          <AnimatePresence initial={false}>
            {skills.map((skill, i) => (
              <motion.div
                key={skill + i}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.2 }}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] pl-3 pr-1.5 py-1.5"
              >
                {editingIdx === i ? (
                  <>
                    <input
                      autoFocus
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && commitEdit()}
                      className="bg-transparent outline-none text-sm w-32"
                    />
                    <button
                      onClick={commitEdit}
                      className="h-6 w-6 rounded-full grid place-items-center hover:bg-white/10"
                    >
                      <Check className="h-3.5 w-3.5" />
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-sm">{skill}</span>
                    <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => {
                          setEditingIdx(i);
                          setEditValue(skill);
                        }}
                        className="h-6 w-6 rounded-full grid place-items-center hover:bg-white/10"
                      >
                        <Pencil className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => remove(i)}
                        className="h-6 w-6 rounded-full grid place-items-center hover:bg-white/10"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && add()}
            placeholder="Add a skill JobSniper missed…"
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-white/30"
          />
          <button
            onClick={add}
            className="inline-flex items-center gap-1.5 text-xs rounded-full border border-white/15 px-3 py-1.5 hover:bg-white/10 transition-colors"
          >
            <Plus className="h-3.5 w-3.5" /> Add
          </button>
        </div>
      </div>

      <StepFooter onBack={onBack} onNext={onNext} />
    </>
  );
}