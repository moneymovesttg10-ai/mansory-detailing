import { motion } from "motion/react";
import { Briefcase, MapPin, Sparkles } from "lucide-react";

const opportunities = [
  { role: "Remote Startup Engineer", co: "Halcyon Labs", loc: "Remote · EU", tag: "Pre-seed" },
  { role: "Veterinary Assistant", co: "Cedar Animal Clinic", loc: "Asheville, NC", tag: "Local" },
  { role: "Research Internship", co: "Aurora Institute", loc: "Remote · Worldwide", tag: "Research" },
  { role: "Marketing Coordinator", co: "Field Notes Co.", loc: "Brooklyn, NY", tag: "Indie" },
  { role: "Community Manager", co: "Slow Web Collective", loc: "Remote", tag: "Community" },
  { role: "Boutique Brand Designer", co: "Atelier Nine", loc: "Lisbon, PT", tag: "Studio" },
  { role: "Climate Policy Analyst", co: "Glacier Forum", loc: "Remote · Berlin", tag: "Non-profit" },
  { role: "Indie Product Engineer", co: "Quiet Software", loc: "Remote", tag: "Bootstrapped" },
  { role: "Bookshop Coordinator", co: "Marginalia Books", loc: "Portland, OR", tag: "Local" },
  { role: "AI Research Resident", co: "Lattice Lab", loc: "Remote", tag: "Niche" },
];

function Row({ items, reverse = false }: { items: typeof opportunities; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      <motion.div
        className="flex gap-4 py-2"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 55, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((o, i) => (
          <div
            key={`${o.role}-${i}`}
            className="glass rounded-2xl px-5 py-3.5 flex items-center gap-3 min-w-[340px] shrink-0"
          >
            <div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center shrink-0">
              <Briefcase className="h-4 w-4 text-white/70" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-white truncate font-medium">{o.role}</div>
              <div className="flex items-center gap-2 text-[11px] text-white/45 mt-0.5">
                <span className="truncate">{o.co}</span>
                <span className="text-white/20">·</span>
                <span className="flex items-center gap-1 truncate"><MapPin className="h-2.5 w-2.5" />{o.loc}</span>
              </div>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-white/40 px-2 py-1 rounded-md bg-white/[0.03] border border-white/10 shrink-0">
              {o.tag}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function LiveFeed() {
  const half = Math.ceil(opportunities.length / 2);
  const rowA = opportunities.slice(0, half);
  const rowB = opportunities.slice(half).concat(opportunities.slice(0, 2));
  return (
    <section className="relative py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-10 gap-6 flex-wrap"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/50 mb-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              Live discovery
            </div>
            <h2
              className="text-gradient text-3xl md:text-5xl tracking-[-0.03em] max-w-2xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Opportunities surfacing right now.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/45">
            <Sparkles className="h-3.5 w-3.5" />
            Updated continuously from across the deep web
          </div>
        </motion.div>
      </div>
      <div className="space-y-4">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>
    </section>
  );
}