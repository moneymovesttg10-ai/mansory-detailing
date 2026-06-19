import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as supabase } from "./client-PNylteGM.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { R as Route$1 } from "./router-DnUCnPTL.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { k as Check, S as Sparkles, U as Upload, F as FileText, l as Users, f as MapPin, T as Trees, m as PawPrint, B as BookOpen, C as Clock, n as Pencil, X, o as Plus, p as Compass, E as Eye, q as Crosshair } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function OnboardingShell({ step, total, children }) {
  const pct = step / total * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-background text-foreground overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            background: "radial-gradient(800px 400px at 50% -10%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(600px 300px at 90% 100%, rgba(120,140,200,0.10), transparent 60%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 noise opacity-[0.35]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative z-10 mx-auto flex w-[min(96%,1100px)] items-center justify-between px-2 py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-md bg-white text-black grid place-items-center text-[11px] font-bold tracking-tighter", children: "JS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium tracking-tight", children: "JobSniper" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-white/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Step ",
        String(step).padStart(2, "0"),
        " / ",
        String(total).padStart(2, "0")
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto w-[min(96%,1100px)] px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-white/10 overflow-hidden rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: false,
        animate: { width: `${pct}%` },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        className: "h-full bg-gradient-to-r from-white/30 via-white to-white/30"
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative z-10 mx-auto w-[min(96%,1100px)] px-2 py-10 md:py-14", children })
  ] });
}
function StepFooter({
  onBack,
  onNext,
  backLabel = "Back",
  nextLabel = "Continue",
  disableBack = false,
  disableNext = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: onBack,
        disabled: disableBack,
        className: "text-xs uppercase tracking-[0.18em] text-white/50 hover:text-white transition-colors disabled:opacity-30 disabled:hover:text-white/50",
        children: [
          "← ",
          backLabel
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: onNext,
        disabled: disableNext,
        className: "btn-white-glow group inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed",
        children: [
          nextLabel,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-0.5", children: "→" })
        ]
      }
    )
  ] });
}
function StepHeader({ kicker, title, sub }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 md:mb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "text-[11px] uppercase tracking-[0.22em] text-white/40",
        children: kicker
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h1,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.05 },
        className: "mt-3 text-3xl md:text-5xl font-medium tracking-tight text-gradient max-w-2xl",
        children: title
      }
    ),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, delay: 0.15 },
        className: "mt-3 text-sm md:text-base text-white/60 max-w-xl",
        children: sub
      }
    )
  ] });
}
const stages = [
  "Extracting structure",
  "Reading experience",
  "Identifying skills",
  "Mapping career trajectory"
];
function Step1Resume({ resumeName, parsed, onParsed, onNext }) {
  const inputRef = reactExports.useRef(null);
  const [dragging, setDragging] = reactExports.useState(false);
  const [scanning, setScanning] = reactExports.useState(false);
  const [stageIdx, setStageIdx] = reactExports.useState(0);
  const [localParsed, setLocalParsed] = reactExports.useState(parsed);
  const [name, setName] = reactExports.useState(resumeName);
  function handleFiles(files) {
    if (!files || !files[0]) return;
    const f = files[0];
    setName(f.name);
    setScanning(true);
    setStageIdx(0);
    setLocalParsed(false);
  }
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StepHeader,
      {
        kicker: "Step 01 — Resume",
        title: "Upload your resume.",
        sub: "JobSniper reads it the way a sharp recruiter would — context, signal, and unspoken strengths."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-5 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.1 },
          className: "md:col-span-3",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              onDragOver: (e) => {
                e.preventDefault();
                setDragging(true);
              },
              onDragLeave: () => setDragging(false),
              onDrop: (e) => {
                e.preventDefault();
                setDragging(false);
                handleFiles(e.dataTransfer.files);
              },
              className: `relative block cursor-pointer glass rounded-2xl p-10 md:p-14 transition-all overflow-hidden ${dragging ? "ring-1 ring-white/40" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    ref: inputRef,
                    type: "file",
                    accept: ".pdf,.doc,.docx,.txt",
                    className: "hidden",
                    onChange: (e) => handleFiles(e.target.files)
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: scanning && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { y: "-10%", opacity: 0 },
                    animate: { y: "110%", opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 1.6, repeat: Infinity, ease: "linear" },
                    className: "absolute inset-x-0 h-24 pointer-events-none",
                    style: {
                      background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.18), transparent)"
                    }
                  },
                  "scan"
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl glass-strong grid place-items-center mb-5", children: localParsed ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-6 w-6" }) : scanning ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 animate-pulse" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-6 w-6" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg font-medium tracking-tight", children: localParsed ? "Resume parsed." : scanning ? "Scanning your resume…" : "Drop your resume here" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/50 mt-2", children: localParsed ? name : scanning ? "Sit tight — this takes a few seconds." : "PDF, DOCX or TXT · up to 10MB" }),
                  !scanning && !localParsed && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => inputRef.current?.click(),
                      className: "mt-6 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white border border-white/15 rounded-full px-4 py-2 transition-colors",
                      children: "Browse file"
                    }
                  )
                ] })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.2 },
          className: "md:col-span-2 glass rounded-2xl p-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5" }),
              " Live analysis"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-3", children: stages.map((s, i) => {
              const active = scanning && i === stageIdx;
              const done = localParsed || i < stageIdx;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `h-1.5 w-1.5 rounded-full ${done ? "bg-emerald-400" : active ? "bg-white animate-pulse" : "bg-white/20"}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-sm ${done ? "text-white" : active ? "text-white" : "text-white/40"}`,
                          children: s
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-white/40", children: done ? "Done" : active ? "Running" : "Queued" })
                  ]
                },
                s
              );
            }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepFooter, { disableBack: true, onNext, disableNext: !localParsed })
  ] });
}
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
  "Veterinary"
];
function Step2Work({ value, onChange, onBack, onNext }) {
  const set = (k, v) => onChange({ ...value, [k]: v });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StepHeader,
      {
        kicker: "Step 02 — Work",
        title: "How do you want to work?",
        sub: "Set the shape of the role. We'll filter the entire hidden internet through it."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { label: "Location", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chips, { options: LOCATION, value: value.location, onChange: (v) => set("location", v) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { label: "Commitment", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chips, { options: COMMITMENT, value: value.commitment, onChange: (v) => set("commitment", v) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { label: "Company type", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chips, { options: COMPANY, value: value.company, onChange: (v) => set("company", v) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { label: `Salary range · $${value.salaryMin}k – $${value.salaryMax}k`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          RangeInput,
          {
            label: "Min",
            min: 30,
            max: 400,
            value: value.salaryMin,
            onChange: (n) => set("salaryMin", Math.min(n, value.salaryMax - 10))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          RangeInput,
          {
            label: "Max",
            min: 30,
            max: 400,
            value: value.salaryMax,
            onChange: (n) => set("salaryMax", Math.max(n, value.salaryMin + 10))
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { label: "Industries you'd love (pick any)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-1", children: INDUSTRIES.map((ind) => {
        const active = value.industries.includes(ind);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => set(
              "industries",
              active ? value.industries.filter((i) => i !== ind) : [...value.industries, ind]
            ),
            className: `text-xs rounded-full px-3.5 py-1.5 border transition-all ${active ? "bg-white text-black border-white" : "border-white/10 text-white/70 hover:border-white/30 hover:text-white"}`,
            children: ind
          },
          ind
        );
      }) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepFooter, { onBack, onNext })
  ] });
}
function Group({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      className: "glass rounded-2xl p-5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3", children: label }),
        children
      ]
    }
  );
}
function Chips({
  options,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: options.map((o) => {
    const active = o === value;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => onChange(o),
        className: `text-sm rounded-xl px-4 py-2 border transition-all ${active ? "bg-white text-black border-white" : "border-white/10 text-white/70 hover:border-white/30 hover:text-white"}`,
        children: o
      },
      o
    );
  }) });
}
function RangeInput({
  label,
  min,
  max,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-white/50 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white", children: [
        "$",
        value,
        "k"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "range",
        min,
        max,
        step: 5,
        value,
        onChange: (e) => onChange(Number(e.target.value)),
        className: "w-full accent-white"
      }
    )
  ] });
}
const ENVIRONMENTS = ["Quiet", "Social", "Mixed"];
function Step3Lifestyle({ value, onChange, onBack, onNext }) {
  const set = (k, v) => onChange({ ...value, [k]: v });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StepHeader,
      {
        kicker: "Step 03 — Lifestyle",
        title: "The life around the work.",
        sub: "These are the questions traditional job boards never ask. They're the ones that matter most."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5" }), children: "Daily environment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-3", children: ENVIRONMENTS.map((e) => {
          const active = e === value.environment;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => set("environment", e),
              className: `text-sm rounded-xl px-4 py-2 border transition-all ${active ? "bg-white text-black border-white" : "border-white/10 text-white/70 hover:border-white/30 hover:text-white"}`,
              children: e
            },
            e
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }), children: [
          "Max commute · ",
          value.commute,
          " min"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            min: 0,
            max: 120,
            step: 5,
            value: value.commute,
            onChange: (e) => set("commute", Number(e.target.value)),
            className: "w-full accent-white mt-4"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Toggle,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trees, { className: "h-4 w-4" }),
          title: "Outdoor work",
          desc: "Park rangers, field research, guides, outdoor crews.",
          checked: value.outdoor,
          onChange: (v) => set("outdoor", v)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Toggle,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PawPrint, { className: "h-4 w-4" }),
          title: "Animal-related",
          desc: "Veterinary clinics, shelters, sanctuaries, zoos.",
          checked: value.animals,
          onChange: (v) => set("animals", v)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Toggle,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4" }),
          title: "Libraries & bookstores",
          desc: "Calm, considered places where stories live.",
          checked: value.booksCalm,
          onChange: (v) => set("booksCalm", v)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Toggle,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
          title: "Flexible schedule",
          desc: "Async, four-day weeks, custom hours.",
          checked: value.flexible,
          onChange: (v) => set("flexible", v)
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepFooter, { onBack, onNext })
  ] });
}
function Card({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      className: "glass rounded-2xl p-5",
      children
    }
  );
}
function Label({ icon, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/40", children: [
    icon,
    children
  ] });
}
function Toggle({
  icon,
  title,
  desc,
  checked,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.button,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      onClick: () => onChange(!checked),
      className: `glass rounded-2xl p-5 text-left transition-all ${checked ? "ring-1 ring-white/30" : "hover:bg-white/[0.04]"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl glass-strong grid place-items-center shrink-0", children: icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/50 mt-0.5 max-w-xs", children: desc })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `mt-1 h-5 w-9 rounded-full border transition-colors ${checked ? "bg-white border-white" : "border-white/20 bg-white/5"} relative`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                initial: false,
                animate: { x: checked ? 16 : 2 },
                transition: { type: "spring", stiffness: 400, damping: 30 },
                className: `absolute top-[2px] h-4 w-4 rounded-full ${checked ? "bg-black" : "bg-white"}`
              }
            )
          }
        )
      ] })
    }
  );
}
function Step4Skills({ skills, onChange, onBack, onNext }) {
  const [input, setInput] = reactExports.useState("");
  const [editingIdx, setEditingIdx] = reactExports.useState(null);
  const [editValue, setEditValue] = reactExports.useState("");
  function add() {
    const v = input.trim();
    if (!v || skills.includes(v)) return;
    onChange([...skills, v]);
    setInput("");
  }
  function remove(i) {
    onChange(skills.filter((_, idx) => idx !== i));
  }
  function commitEdit() {
    if (editingIdx === null) return;
    const v = editValue.trim();
    if (!v) return;
    onChange(skills.map((s, i) => i === editingIdx ? v : s));
    setEditingIdx(null);
    setEditValue("");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StepHeader,
      {
        kicker: "Step 04 — Skills",
        title: "Verify what we found.",
        sub: "These were pulled from your resume. Refine them so JobSniper aims at the right targets."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: skills.map((skill, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          layout: true,
          initial: { opacity: 0, scale: 0.85 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.85 },
          transition: { duration: 0.2 },
          className: "group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] pl-3 pr-1.5 py-1.5",
          children: editingIdx === i ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                autoFocus: true,
                value: editValue,
                onChange: (e) => setEditValue(e.target.value),
                onKeyDown: (e) => e.key === "Enter" && commitEdit(),
                className: "bg-transparent outline-none text-sm w-32"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: commitEdit,
                className: "h-6 w-6 rounded-full grid place-items-center hover:bg-white/10",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" })
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: skill }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    setEditingIdx(i);
                    setEditValue(skill);
                  },
                  className: "h-6 w-6 rounded-full grid place-items-center hover:bg-white/10",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3 w-3" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => remove(i),
                  className: "h-6 w-6 rounded-full grid place-items-center hover:bg-white/10",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
                }
              )
            ] })
          ] })
        },
        skill + i
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-2 border-t border-white/10 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: input,
            onChange: (e) => setInput(e.target.value),
            onKeyDown: (e) => e.key === "Enter" && add(),
            placeholder: "Add a skill JobSniper missed…",
            className: "flex-1 bg-transparent outline-none text-sm placeholder:text-white/30"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: add,
            className: "inline-flex items-center gap-1.5 text-xs rounded-full border border-white/15 px-3 py-1.5 hover:bg-white/10 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
              " Add"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepFooter, { onBack, onNext })
  ] });
}
function Step5Summary({ state, onBack, onNext }) {
  const strengths = state.skills.slice(0, 5);
  const fits = [
    `${state.work.company} · ${state.work.commitment}`,
    `${state.work.location} first`,
    state.work.industries.slice(0, 3).join(" · ") || "Open across industries"
  ];
  const env = [
    `${state.lifestyle.environment} workdays`,
    state.lifestyle.flexible ? "Flexible schedule" : "Structured schedule",
    `Commute ≤ ${state.lifestyle.commute} min`
  ];
  const hidden = buildHidden(state);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StepHeader,
      {
        kicker: "Step 05 — Summary",
        title: "Here's what JobSniper understands about you.",
        sub: "If anything feels off, head back. Otherwise — the scan is ready."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }), title: "Strengths", items: strengths, delay: 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-4 w-4" }), title: "Career fit", items: fits, delay: 0.1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trees, { className: "h-4 w-4" }), title: "Preferred environments", items: env, delay: 0.2 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Block,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }),
          title: "Hidden opportunity categories",
          items: hidden,
          highlight: true,
          delay: 0.3
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StepFooter, { onBack, onNext, nextLabel: "Run the scan" })
  ] });
}
function buildHidden(s) {
  const out = [];
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
  highlight = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay },
      className: `glass rounded-2xl p-6 ${highlight ? "ring-1 ring-white/15" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/40", children: [
          icon,
          " ",
          title
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5", children: items.map((i, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.li,
          {
            initial: { opacity: 0, x: -6 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.4, delay: delay + 0.05 * idx },
            className: "flex items-start gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1 w-1 rounded-full bg-white/60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/85", children: i })
            ]
          },
          i + idx
        )) })
      ]
    }
  );
}
const PHASES = [
  "Connecting to 12,400 niche sources",
  "Cross-referencing your lifestyle filters",
  "Scanning boutique startups & local boards",
  "Surfacing hidden community postings",
  "Ranking by signal-to-noise"
];
function Step6Launch({ onComplete }) {
  const [phase, setPhase] = reactExports.useState(0);
  const [done, setDone] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (phase >= PHASES.length) {
      const t2 = setTimeout(() => setDone(true), 500);
      return () => clearTimeout(t2);
    }
    const t = setTimeout(() => setPhase((p) => p + 1), 900);
    return () => clearTimeout(t);
  }, [phase]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 bg-background overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center pointer-events-none", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { scale: 0.2, opacity: 0.6 },
        animate: { scale: 2.5, opacity: 0 },
        transition: { duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeOut" },
        className: "absolute h-[40vmin] w-[40vmin] rounded-full border border-white/15"
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { rotate: 360 },
        transition: { duration: 4, repeat: Infinity, ease: "linear" },
        className: "h-[60vmin] w-[60vmin] rounded-full",
        style: {
          background: "conic-gradient(from 0deg, rgba(255,255,255,0.18), transparent 25%)",
          mask: "radial-gradient(circle, transparent 30%, black 31%, black 100%)",
          WebkitMask: "radial-gradient(circle, transparent 30%, black 31%, black 100%)"
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.6 },
        className: "text-center max-w-md px-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-16 w-16 rounded-2xl glass-strong grid place-items-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Crosshair, { className: "h-7 w-7" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.22em] text-white/40", children: "JobSniper · live scan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl font-medium tracking-tight text-gradient", children: done ? "Your opportunities are ready." : "Scanning the hidden internet." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 h-6 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 6 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -6 },
              transition: { duration: 0.35 },
              className: "absolute inset-x-0 text-sm text-white/65",
              children: done ? "Hand-picked, ranked, ready to view." : PHASES[Math.min(phase, PHASES.length - 1)]
            },
            done ? "done" : PHASES[Math.min(phase, PHASES.length - 1)]
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: done ? 1 : 0, y: done ? 0 : 10 },
              transition: { duration: 0.5 },
              disabled: !done,
              onClick: onComplete,
              className: "btn-white-glow mt-10 inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-all disabled:pointer-events-none",
              children: "Find My Hidden Opportunities →"
            }
          )
        ]
      }
    ) })
  ] });
}
const initialState = {
  resumeName: null,
  parsed: false,
  work: {
    location: "Remote",
    commitment: "Full Time",
    company: "Startup",
    salaryMin: 80,
    salaryMax: 140,
    industries: []
  },
  lifestyle: {
    environment: "Quiet",
    outdoor: false,
    animals: false,
    booksCalm: false,
    flexible: true,
    commute: 30
  },
  skills: [
    "TypeScript",
    "React",
    "Product Strategy",
    "Systems Design",
    "User Research",
    "Design Systems"
  ]
};
const TOTAL = 5;
function OnboardingPage() {
  const navigate = useNavigate();
  const {
    user
  } = Route$1.useRouteContext();
  const [state, setState] = reactExports.useState(initialState);
  const [step, setStep] = reactExports.useState(1);
  const [launching, setLaunching] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let cancelled = false;
    (async () => {
      const {
        data
      } = await supabase.from("profiles").select("onboarding_completed, resume_name, work_prefs, lifestyle_prefs, skills").eq("id", user.id).maybeSingle();
      if (cancelled || !data) return;
      if (data.onboarding_completed) {
        navigate({
          to: "/dashboard",
          replace: true
        });
        return;
      }
      setState((s) => ({
        ...s,
        resumeName: data.resume_name ?? s.resumeName,
        parsed: !!data.resume_name,
        work: data.work_prefs ?? s.work,
        lifestyle: data.lifestyle_prefs ?? s.lifestyle,
        skills: data.skills ?? s.skills
      }));
    })();
    return () => {
      cancelled = true;
    };
  }, [user.id, navigate]);
  const next = () => setStep((s) => Math.min(s + 1, 6));
  const back = () => setStep((s) => Math.max(s - 1, 1));
  async function persistAndLaunch() {
    setSaving(true);
    const {
      error
    } = await supabase.from("profiles").update({
      onboarding_completed: true,
      resume_name: state.resumeName,
      work_prefs: state.work,
      lifestyle_prefs: state.lifestyle,
      skills: state.skills
    }).eq("id", user.id);
    setSaving(false);
    if (error) {
      toast.error("Couldn't save your profile. Try again.");
      return;
    }
    setLaunching(true);
    setStep(6);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OnboardingShell, { step: Math.min(step, TOTAL), total: TOTAL, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 14
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: -10
    }, transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }, children: [
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step1Resume, { resumeName: state.resumeName, parsed: state.parsed, onParsed: (name) => setState({
        ...state,
        resumeName: name,
        parsed: true
      }), onNext: next }),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step2Work, { value: state.work, onChange: (work) => setState({
        ...state,
        work
      }), onBack: back, onNext: next }),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step3Lifestyle, { value: state.lifestyle, onChange: (lifestyle) => setState({
        ...state,
        lifestyle
      }), onBack: back, onNext: next }),
      step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step4Skills, { skills: state.skills, onChange: (skills) => setState({
        ...state,
        skills
      }), onBack: back, onNext: next }),
      step === 5 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step5Summary, { state, onBack: back, onNext: persistAndLaunch })
    ] }, step) }),
    launching && /* @__PURE__ */ jsxRuntimeExports.jsx(Step6Launch, { onComplete: () => {
      setLaunching(false);
      navigate({
        to: "/dashboard",
        replace: true
      });
    } }),
    saving && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-40 bg-background/40 backdrop-blur-sm pointer-events-none" })
  ] });
}
export {
  OnboardingPage as component
};
