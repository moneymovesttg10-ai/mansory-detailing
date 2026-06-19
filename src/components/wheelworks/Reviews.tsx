import { motion } from "motion/react";
import { Star } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const reviews = [
  {
    quote:
      "The attention to detail is unreal. My car came back looking better than the day I bought it.",
    name: "Daniel R.",
    role: "Huntingdon Valley",
  },
  {
    quote:
      "I drop the car off, take a walk on the Pennypack Trail, and come back to a spotless vehicle. Perfect routine.",
    name: "Marissa K.",
    role: "Local since 2022",
  },
  {
    quote:
      "Best hand wash I've found in the area. Professional, careful, and consistent every single time.",
    name: "Anthony S.",
    role: "Range Rover owner",
  },
];

export function Reviews() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-2xl mb-14"
        >
          <div className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-4">Trusted locally</div>
          <h2
            className="text-gradient text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-[1.02]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            A reputation built one car at a time.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className="glass rounded-3xl p-6 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-white text-white" />
                ))}
              </div>
              <blockquote className="text-white/85 leading-relaxed text-[15px] flex-1">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10">
                <div className="text-sm text-white font-medium">{r.name}</div>
                <div className="text-xs text-white/45">{r.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}