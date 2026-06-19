import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1100px)]"
    >
      <div className="glass rounded-full px-5 py-2.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-white text-black grid place-items-center text-[11px] font-bold tracking-tighter">JS</div>
          <span className="text-sm font-medium tracking-tight">JobSniper</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-xs text-white/70">
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#product" className="hover:text-white transition-colors">Product</a>
          <a href="#compare" className="hover:text-white transition-colors">Compare</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/auth"
            className="hidden sm:inline text-xs text-white/70 hover:text-white px-3 py-1.5 transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/auth"
            className="text-xs font-medium bg-white text-black rounded-full px-3.5 py-1.5 hover:bg-white/90 transition-colors"
          >
            Get started
          </Link>
        </div>
      </div>
    </motion.header>
  );
}