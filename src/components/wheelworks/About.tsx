import { motion } from "motion/react";
import { Sparkles, ShieldCheck, Trees } from "lucide-react";
import { ReviewSummaryCard } from "@/components/ui/card-2";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    icon: Sparkles,
    title: "Premium detailing specialists",
    body: "Every vehicle gets the same meticulous care — whether it's a daily driver or a flagship luxury car.",
  },
  {
    icon: ShieldCheck,
    title: "Done right, every time",
    body: "Full-service exterior and interior detailing tailored to your car — never rushed, never cut corners.",
  },
  {
    icon: Trees,
    title: "Huntingdon Valley, PA",
    body: "Conveniently located on Pioneer Road. Drop off your car and pick it up looking showroom-ready.",
  },
];

export function About() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
            className="max-w-2xl"
          >
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-5">Who we are</div>
            <h2
              className="text-gradient text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-[1.02]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              The benchmark for flawless automotive styling.
            </h2>
            <p className="mt-6 text-white/65 text-base sm:text-lg leading-relaxed">
              Mansory Detailing is a premium car detailing service on Pioneer Road in Huntingdon Valley.
              Rated 5.0 stars with 93 reviews — our work is a testament to the highest standards of automovite excellence.
            </p>
          </motion.div>

          <ReviewSummaryCard
            rating={5.0}
            reviewCount={93}
            summaryText="Outstanding: Rated 5.0 with 93 Google reviews."
            className="glass rounded-3xl border-white/10 bg-transparent shadow-none mx-auto lg:mx-0 shrink-0"
          />
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4">
                <p.icon className="h-4 w-4 text-white" />
              </div>
              <div className="text-white font-medium">{p.title}</div>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}