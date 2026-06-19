import { motion } from "motion/react";

export function FounderVision() {
  return (
    <section className="relative py-40 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-6">Founder's note</div>
          <p
            className="text-3xl md:text-4xl text-white/90 leading-[1.3] tracking-[-0.02em]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            "I built JobSniper because the internet is full of beautiful, specific,
            human-scale work — and almost none of it is visible on the platforms most
            people use. We're not trying to be another job board. We're a quiet scout
            for the careers algorithms forgot."
          </p>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10" />
            <div>
              <div className="text-sm text-white">The JobSniper Team</div>
              <div className="text-xs text-white/40">Founders</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}