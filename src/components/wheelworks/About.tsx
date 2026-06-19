import { motion } from "motion/react";
import { Sparkles, ShieldCheck, Trees } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    icon: Sparkles,
    title: "Premium car care specialists",
    body: "Every vehicle is treated with the same care, whether it's a daily driver or a flagship luxury car.",
  },
  {
    icon: ShieldCheck,
    title: "Hand-washed, never rushed",
    body: "Full-service hand washing and detailing tailored to your car — done right, the first time.",
  },
  {
    icon: Trees,
    title: "Right by the Pennypack Trail",
    body: "Drop your car off and enjoy a walk on the trail while we make it look its best.",
  },
];

export function About() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
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
            Convenient, high-quality car care — designed around your day.
          </h2>
          <p className="mt-6 text-white/65 text-base sm:text-lg leading-relaxed">
            Wheelworks VIP is a premium hand wash and detailing studio in Huntingdon Valley.
            Our mission is simple: the most convenient, cost-effective way to keep your car looking
            its absolute best.
          </p>
        </motion.div>

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