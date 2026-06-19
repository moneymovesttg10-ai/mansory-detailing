import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Upload, FileText, Sparkles, Check } from "lucide-react";
import { StepHeader, StepFooter } from "./Shell";

type Props = {
  resumeName: string | null;
  parsed: boolean;
  onParsed: (name: string) => void;
  onNext: () => void;
};

const stages = [
  "Extracting structure",
  "Reading experience",
  "Identifying skills",
  "Mapping career trajectory",
];

export function Step1Resume({ resumeName, parsed, onParsed, onNext }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [stageIdx, setStageIdx] = useState(0);
  const [localParsed, setLocalParsed] = useState(parsed);
  const [name, setName] = useState<string | null>(resumeName);

  function handleFiles(files: FileList | null) {
    if (!files || !files[0]) return;
    const f = files[0];
    setName(f.name);
    setScanning(true);
    setStageIdx(0);
    setLocalParsed(false);
  }

  useEffect(() => {
    if (!scanning) return;
    if (stageIdx >= stages.length) {
      setScanning(false);
      setLocalParsed(true);
      if (name) onParsed(name);
      return;
    }
    const t = setTimeout(() => setStageIdx((i) => i + 1), 700);
    return () => clearTimeout(t);
  }, [scanning, stageIdx, name, onParsed]);

  return (
    <>
      <StepHeader
        kicker="Step 01 — Resume"
        title="Upload your resume."
        sub="JobSniper reads it the way a sharp recruiter would — context, signal, and unspoken strengths."
      />

      <div className="grid md:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3"
        >
          <label
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              handleFiles(e.dataTransfer.files);
            }}
            className={`relative block cursor-pointer glass rounded-2xl p-10 md:p-14 transition-all overflow-hidden ${
              dragging ? "ring-1 ring-white/40" : ""
            }`}
          >
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
            {/* scan line */}
            <AnimatePresence>
              {scanning && (
                <motion.div
                  key="scan"
                  initial={{ y: "-10%", opacity: 0 }}
                  animate={{ y: "110%", opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-x-0 h-24 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, rgba(255,255,255,0.18), transparent)",
                  }}
                />
              )}
            </AnimatePresence>

            <div className="relative flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-2xl glass-strong grid place-items-center mb-5">
                {localParsed ? (
                  <Check className="h-6 w-6" />
                ) : scanning ? (
                  <Sparkles className="h-6 w-6 animate-pulse" />
                ) : (
                  <Upload className="h-6 w-6" />
                )}
              </div>
              <p className="text-base md:text-lg font-medium tracking-tight">
                {localParsed
                  ? "Resume parsed."
                  : scanning
                  ? "Scanning your resume…"
                  : "Drop your resume here"}
              </p>
              <p className="text-xs text-white/50 mt-2">
                {localParsed
                  ? name
                  : scanning
                  ? "Sit tight — this takes a few seconds."
                  : "PDF, DOCX or TXT · up to 10MB"}
              </p>

              {!scanning && !localParsed && (
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="mt-6 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white border border-white/15 rounded-full px-4 py-2 transition-colors"
                >
                  Browse file
                </button>
              )}
            </div>
          </label>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2 glass rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/40">
            <FileText className="h-3.5 w-3.5" /> Live analysis
          </div>
          <div className="mt-5 space-y-3">
            {stages.map((s, i) => {
              const active = scanning && i === stageIdx;
              const done = localParsed || i < stageIdx;
              return (
                <div
                  key={s}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        done ? "bg-emerald-400" : active ? "bg-white animate-pulse" : "bg-white/20"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        done ? "text-white" : active ? "text-white" : "text-white/40"
                      }`}
                    >
                      {s}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-white/40">
                    {done ? "Done" : active ? "Running" : "Queued"}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <StepFooter disableBack onNext={onNext} disableNext={!localParsed} />
    </>
  );
}