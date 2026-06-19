import { motion } from "motion/react";
import { Phone } from "lucide-react";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1180px)]"
    >
      <div className="glass rounded-full px-5 py-2.5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-full bg-white text-black grid place-items-center text-[10px] font-bold tracking-tighter">MD</div>
          <span className="text-sm font-semibold tracking-tight">Mansory <span className="text-white/50">Detailing</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-xs text-white/70">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#specials" className="hover:text-white transition-colors">Specials</a>
          <a href="#visit" className="hover:text-white transition-colors">Visit</a>
        </nav>
        <a
          href="tel:2153988619"
          className="inline-flex items-center gap-2 text-xs font-medium bg-white text-black rounded-full px-3.5 py-1.5 hover:bg-white/90 transition-colors"
        >
          <Phone className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">(215) 398-8619</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </motion.header>
  );
}