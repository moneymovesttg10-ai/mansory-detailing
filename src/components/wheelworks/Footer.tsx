import { Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm">
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-full bg-white text-black grid place-items-center text-[10px] font-bold">WW</div>
          <span className="text-white font-semibold">Wheelworks <span className="text-white/50">VIP</span></span>
        </div>
        <div className="text-white/50 text-xs">
          798 Welsh Road, Huntingdon Valley, PA 19006
        </div>
        <a
          href="tel:2159478927"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-xs"
        >
          <Phone className="h-3.5 w-3.5" />
          215-947-8927
        </a>
      </div>
      <div className="max-w-6xl mx-auto mt-8 text-[11px] text-white/35">
        © {new Date().getFullYear()} Wheelworks VIP. All rights reserved.
      </div>
    </footer>
  );
}