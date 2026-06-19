import { motion } from "motion/react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Row = { label: string; price: string };
type Tier = { title: string; tagline: string; rows: Row[]; featured?: boolean };

const expressTiers: Tier[] = [
  {
    title: "Express Wax",
    tagline: "Quick gloss + protection.",
    rows: [
      { label: "Cars", price: "$65" },
      { label: "Small SUVs", price: "$75" },
      { label: "Medium SUVs", price: "$85" },
      { label: "Large SUVs", price: "$95" },
    ],
  },
  {
    title: "Clay Bar Treatment",
    tagline: "Glass-smooth paint.",
    featured: true,
    rows: [
      { label: "Cars", price: "$129" },
      { label: "Small SUVs", price: "$149" },
      { label: "Medium SUVs", price: "$179" },
      { label: "Large SUVs", price: "$199" },
    ],
  },
  {
    title: "Express Interior",
    tagline: "Refresh cabin in minutes.",
    rows: [
      { label: "Cars", price: "$99" },
      { label: "SUVs (2 Row)", price: "$109" },
      { label: "SUVs (3 Row)", price: "$119" },
    ],
  },
];

const detailTiers: Tier[] = [
  {
    title: "Full Detailing",
    tagline: "Inside + outside, transformed.",
    featured: true,
    rows: [
      { label: "Cars", price: "$249" },
      { label: "Small SUVs & Trucks", price: "$299" },
      { label: "Medium SUVs & Trucks", price: "$359" },
      { label: "Large SUVs & Trucks", price: "$429" },
    ],
  },
  {
    title: "Exterior Detailing",
    tagline: "Paint, wheels, trim, glass.",
    rows: [
      { label: "Cars", price: "$199" },
      { label: "Small SUVs & Trucks", price: "$239" },
      { label: "Medium SUVs & Trucks", price: "$289" },
      { label: "Large SUVs & Trucks", price: "$349" },
    ],
  },
  {
    title: "Interior Detailing",
    tagline: "Deep clean, conditioned, fresh.",
    rows: [
      { label: "Cars", price: "$179" },
      { label: "Small SUVs & Trucks", price: "$199" },
      { label: "Medium SUVs & Trucks", price: "$229" },
      { label: "Large SUVs & Trucks", price: "$289" },
    ],
  },
];

export function Pricing() {
  const [tab, setTab] = useState<"express" | "detail">("express");
  const tiers = tab === "express" ? expressTiers : detailTiers;

  return (
    <section id="pricing" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-4">Pricing</div>
            <h2
              className="text-gradient text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-[1.02]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Straightforward, vehicle-based pricing.
            </h2>
          </div>
          <div className="glass rounded-full p-1 inline-flex self-start md:self-end">
            {(["express", "detail"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`px-4 py-2 text-xs rounded-full transition-colors ${
                  tab === k ? "bg-white text-black" : "text-white/65 hover:text-white"
                }`}
              >
                {k === "express" ? "Express" : "Full Detailing"}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col ${
                t.featured ? "glass-strong ring-1 ring-white/15" : "glass"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg text-white font-medium">{t.title}</h3>
                  <p className="text-xs text-white/50 mt-1">{t.tagline}</p>
                </div>
                {t.featured && (
                  <span className="text-[10px] uppercase tracking-[0.16em] text-black bg-white rounded-full px-2 py-1">
                    Popular
                  </span>
                )}
              </div>
              <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
                {t.rows.map((r) => (
                  <li key={r.label} className="flex items-center justify-between text-sm">
                    <span className="text-white/65">{r.label}</span>
                    <span className="text-white font-medium tabular-nums">{r.price}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:2153988619"
                className="mt-7 inline-flex items-center justify-center text-sm font-medium rounded-full px-4 py-2.5 bg-white text-black hover:bg-white/90 transition-colors"
              >
                Book this service
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-xs text-white/45 text-center">
          Pricing may vary based on vehicle size and condition. Call or DM for a personalized quote.
        </p>
      </div>
    </section>
  );
}