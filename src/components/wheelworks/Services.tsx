import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import handImg from "@/assets/wheelworks-handwash.jpg";
import expressImg from "@/assets/wheelworks-express.jpg";
import detailImg from "@/assets/wheelworks-detail.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    img: handImg,
    eyebrow: "Signature",
    title: "Hand Washing",
    body: "Gentle, hand-applied wash that lifts dirt without scratching paint or trim.",
  },
  {
    img: expressImg,
    eyebrow: "Quick visit",
    title: "Express Detailing",
    body: "Focused services like express wax, clay bar, and express interior — done while you wait.",
  },
  {
    img: detailImg,
    eyebrow: "Showroom finish",
    title: "Professional Detailing",
    body: "Full interior and exterior detailing that restores depth, gloss, and freshness.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="flex items-end justify-between flex-wrap gap-6 mb-14"
        >
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-4">Services</div>
            <h2
              className="text-gradient text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-[1.02]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Three ways to keep it pristine.
            </h2>
          </div>
          <a href="#pricing" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
            See pricing
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="#pricing"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.08 }}
              className="group glass rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.18em] text-white/70 glass rounded-full px-2.5 py-1">
                  {s.eyebrow}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl text-white font-medium">{s.title}</h3>
                  <ArrowUpRight className="h-4 w-4 text-white/50 transition-all group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{s.body}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}