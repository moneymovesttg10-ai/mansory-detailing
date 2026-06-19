import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { D as Dialog$1, a as DialogPortal$1, b as DialogContent$1, c as DialogClose, d as DialogTitle$1, e as DialogDescription$1, f as DialogOverlay$1 } from "../_libs/radix-ui__react-dialog.mjs";
import { m as motion, a as animate } from "../_libs/framer-motion.mjs";
import { P as Phone, A as ArrowRight, S as Sparkles, c as ShieldCheck, T as Trees, d as ArrowUpRight, e as Tag, f as MapPin, G as Globe, C as Clock, g as Star, h as ArrowLeft, i as Calendar, b as LoaderCircle, j as Send, X } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.header,
    {
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      className: "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1180px)]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-full px-5 py-2.5 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-white text-black grid place-items-center text-[10px] font-bold tracking-tighter", children: "MD" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold tracking-tight", children: [
            "Mansory ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "Detailing" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-7 text-xs text-white/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-white transition-colors", children: "Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#pricing", className: "hover:text-white transition-colors", children: "Pricing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#specials", className: "hover:text-white transition-colors", children: "Specials" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#visit", className: "hover:text-white transition-colors", children: "Visit" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "tel:2153988619",
            className: "btn-white-glow inline-flex items-center gap-2 text-xs font-medium bg-white text-black rounded-full px-3.5 py-1.5 hover:bg-white/90 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "(215) 398-8619" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Call" })
            ]
          }
        )
      ] })
    }
  );
}
const heroImg = "/assets/wheelworks-hero-w7-2Sko6.jpg";
const ease$5 = [0.22, 1, 0.36, 1];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative min-h-screen flex items-center overflow-hidden pt-32 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: heroImg,
        alt: "Hand washing a luxury black car with rich foam suds",
        width: 1920,
        height: 1080,
        className: "absolute inset-0 h-full w-full object-cover opacity-60"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 noise opacity-[0.35] mix-blend-overlay pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-6 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: ease$5 },
          className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-[11px] text-white/70 mb-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" }),
            "Huntingdon Valley, PA · Open until 7 PM"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, ease: ease$5, delay: 0.1 },
          className: "text-gradient max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.98] tracking-[-0.035em] font-medium",
          style: { fontFamily: "'Instrument Serif', serif", fontWeight: 400 },
          children: [
            "The Real",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Car Detailing."
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease: ease$5, delay: 0.25 },
          className: "mt-7 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed",
          children: "Premium car detailing in Huntingdon Valley — built to protect, restore, and elevate every vehicle. Consultation and booking via direct message or phone."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease: ease$5, delay: 0.4 },
          className: "mt-10 flex flex-wrap items-center gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:2153988619",
                className: "btn-white-glow group inline-flex items-center gap-2 bg-white text-black rounded-full px-5 py-3 text-sm font-medium hover:bg-white/90 transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                  "Call Now"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#services",
                className: "group inline-flex items-center gap-2 glass rounded-full px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all",
                children: [
                  "View Services",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease: ease$5, delay: 0.55 },
          className: "mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.18em] text-white/45",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Exterior Detail" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/20", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Interior Detail" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/20", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Full Detail" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/20", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "5.0 · 93 Reviews" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ReviewSummaryCard = ({
  rating,
  reviewCount,
  maxRating = 5,
  summaryText,
  className
}) => {
  const ratingRef = reactExports.useRef(null);
  const reviewCountRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const ratingControl = animate(0, rating, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(value) {
        if (ratingRef.current) {
          ratingRef.current.textContent = value.toFixed(1);
        }
      }
    });
    const reviewCountControl = animate(0, reviewCount, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(value) {
        if (reviewCountRef.current) {
          reviewCountRef.current.textContent = new Intl.NumberFormat("en-US").format(
            Math.round(value)
          );
        }
      }
    });
    return () => {
      ratingControl.stop();
      reviewCountControl.stop();
    };
  }, [rating, reviewCount]);
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2.5,
        ease: "easeOut"
      }
    }
  };
  const starVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: cn(
        "w-full max-w-xs rounded-xl border bg-card p-6 text-center shadow-sm",
        "flex flex-col items-center justify-center",
        className
      ),
      variants: cardVariants,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-80px" },
      "aria-label": `Rating: ${rating} out of ${maxRating} based on ${reviewCount} reviews.`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: Array.from({ length: maxRating }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { custom: i, variants: starVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Star,
          {
            className: cn(
              "h-6 w-6",
              rating >= i + 1 ? "text-yellow-400" : "text-muted-foreground/50"
            ),
            fill: "currentColor"
          }
        ) }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl font-bold tracking-tight text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref: ratingRef, children: "0.0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-semibold", children: [
            " ",
            "(",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref: reviewCountRef, children: "0" }),
            " Reviews)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: summaryText })
      ]
    }
  );
};
const ease$4 = [0.22, 1, 0.36, 1];
const pillars = [
  {
    icon: Sparkles,
    title: "Premium detailing specialists",
    body: "Every vehicle gets the same meticulous care — whether it's a daily driver or a flagship luxury car."
  },
  {
    icon: ShieldCheck,
    title: "Done right, every time",
    body: "Full-service exterior and interior detailing tailored to your car — never rushed, never cut corners."
  },
  {
    icon: Trees,
    title: "Huntingdon Valley, PA",
    body: "Conveniently located on Pioneer Road. Drop off your car and pick it up looking showroom-ready."
  }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.8, ease: ease$4 },
          className: "max-w-2xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-white/50 mb-5", children: "Who we are" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-gradient text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-[1.02]",
                style: { fontFamily: "'Instrument Serif', serif" },
                children: "The detailing studio Huntingdon Valley trusts."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-white/65 text-base sm:text-lg leading-relaxed", children: "Mansory Detailing is a premium car detailing service on Pioneer Road in Huntingdon Valley. Rated 5.0 stars with 93 reviews — we're here to keep your vehicle looking its absolute best." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReviewSummaryCard,
        {
          rating: 5,
          reviewCount: 93,
          summaryText: "Outstanding: Rated 5.0 with 93 Google reviews.",
          className: "glass rounded-3xl border-white/10 bg-transparent shadow-none mx-auto lg:mx-0 shrink-0"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-3 gap-5", children: pillars.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7, ease: ease$4, delay: i * 0.08 },
        className: "glass rounded-2xl p-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-4 w-4 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-medium", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/55 leading-relaxed", children: p.body })
        ]
      },
      p.title
    )) })
  ] }) });
}
const handImg = "/assets/wheelworks-handwash-rwVI_HUH.jpg";
const expressImg = "/assets/wheelworks-express-DAgpEK35.jpg";
const detailImg = "/assets/wheelworks-detail-Wno1nAom.jpg";
const ease$3 = [0.22, 1, 0.36, 1];
const services = [
  {
    img: handImg,
    eyebrow: "Signature",
    title: "Hand Washing",
    body: "Gentle, hand-applied wash that lifts dirt without scratching paint or trim."
  },
  {
    img: expressImg,
    eyebrow: "Quick visit",
    title: "Express Detailing",
    body: "Focused services like express wax, clay bar, and express interior — done while you wait."
  },
  {
    img: detailImg,
    eyebrow: "Showroom finish",
    title: "Professional Detailing",
    body: "Full interior and exterior detailing that restores depth, gloss, and freshness."
  }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "relative py-28 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: ease$3 },
        className: "flex items-end justify-between flex-wrap gap-6 mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-white/50 mb-4", children: "Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-gradient text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-[1.02]",
                style: { fontFamily: "'Instrument Serif', serif" },
                children: "Three ways to keep it pristine."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#pricing", className: "inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors", children: [
            "See pricing",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.a,
      {
        href: "#pricing",
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.8, ease: ease$3, delay: i * 0.08 },
        className: "group glass rounded-3xl overflow-hidden flex flex-col",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: s.img,
                alt: s.title,
                loading: "lazy",
                className: "h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 text-[10px] uppercase tracking-[0.18em] text-white/70 glass rounded-full px-2.5 py-1", children: s.eyebrow })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex-1 flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl text-white font-medium", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-white/50 transition-all group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/55 leading-relaxed", children: s.body })
          ] })
        ]
      },
      s.title
    )) })
  ] }) });
}
const ease$2 = [0.22, 1, 0.36, 1];
const expressTiers = [
  {
    title: "Express Wax",
    tagline: "Quick gloss + protection.",
    rows: [
      { label: "Cars", price: "$65" },
      { label: "Small SUVs", price: "$75" },
      { label: "Medium SUVs", price: "$85" },
      { label: "Large SUVs", price: "$95" }
    ]
  },
  {
    title: "Clay Bar Treatment",
    tagline: "Glass-smooth paint.",
    featured: true,
    rows: [
      { label: "Cars", price: "$129" },
      { label: "Small SUVs", price: "$149" },
      { label: "Medium SUVs", price: "$179" },
      { label: "Large SUVs", price: "$199" }
    ]
  },
  {
    title: "Express Interior",
    tagline: "Refresh cabin in minutes.",
    rows: [
      { label: "Cars", price: "$99" },
      { label: "SUVs (2 Row)", price: "$109" },
      { label: "SUVs (3 Row)", price: "$119" }
    ]
  }
];
const detailTiers = [
  {
    title: "Full Detailing",
    tagline: "Inside + outside, transformed.",
    featured: true,
    rows: [
      { label: "Cars", price: "$249" },
      { label: "Small SUVs & Trucks", price: "$299" },
      { label: "Medium SUVs & Trucks", price: "$359" },
      { label: "Large SUVs & Trucks", price: "$429" }
    ]
  },
  {
    title: "Exterior Detailing",
    tagline: "Paint, wheels, trim, glass.",
    rows: [
      { label: "Cars", price: "$199" },
      { label: "Small SUVs & Trucks", price: "$239" },
      { label: "Medium SUVs & Trucks", price: "$289" },
      { label: "Large SUVs & Trucks", price: "$349" }
    ]
  },
  {
    title: "Interior Detailing",
    tagline: "Deep clean, conditioned, fresh.",
    rows: [
      { label: "Cars", price: "$179" },
      { label: "Small SUVs & Trucks", price: "$199" },
      { label: "Medium SUVs & Trucks", price: "$229" },
      { label: "Large SUVs & Trucks", price: "$289" }
    ]
  }
];
function Pricing() {
  const [tab, setTab] = reactExports.useState("express");
  const tiers = tab === "express" ? expressTiers : detailTiers;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pricing", className: "relative py-28 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: ease$2 },
        className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-white/50 mb-4", children: "Pricing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-gradient text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-[1.02]",
                style: { fontFamily: "'Instrument Serif', serif" },
                children: "Straightforward, vehicle-based pricing."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-full p-1 inline-flex self-start md:self-end", children: ["express", "detail"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setTab(k),
              className: `px-4 py-2 text-xs rounded-full transition-colors ${tab === k ? "bg-white text-black" : "text-white/65 hover:text-white"}`,
              children: k === "express" ? "Express" : "Full Detailing"
            },
            k
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: tiers.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7, ease: ease$2, delay: i * 0.08 },
        className: `rounded-3xl p-6 sm:p-7 flex flex-col ${t.featured ? "glass-strong ring-1 ring-white/15" : "glass"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg text-white font-medium", children: t.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/50 mt-1", children: t.tagline })
            ] }),
            t.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.16em] text-black bg-white rounded-full px-2 py-1", children: "Popular" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 border-t border-white/10 pt-5", children: t.rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/65", children: r.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium tabular-nums", children: r.price })
          ] }, r.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "tel:2153988619",
              className: "btn-white-glow mt-7 inline-flex items-center justify-center text-sm font-medium rounded-full px-4 py-2.5 bg-white text-black hover:bg-white/90 transition-colors",
              children: "Book this service"
            }
          )
        ]
      },
      t.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-xs text-white/45 text-center", children: "Pricing may vary based on vehicle size and condition. Call or DM for a personalized quote." })
  ] }) });
}
const ease$1 = [0.22, 1, 0.36, 1];
function Specials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "specials", className: "relative py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.8, ease: ease$1 },
      className: "relative glass-strong rounded-3xl overflow-hidden p-8 sm:p-12",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute -top-20 -right-20 h-80 w-80 rounded-full opacity-40 blur-3xl",
            style: { background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 60%)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-[11px] text-white/70 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-3 w-3" }),
              "Book with us"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "text-gradient text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-[1.05]",
                style: { fontFamily: "'Instrument Serif', serif" },
                children: "Consultation & booking via DM or phone."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-white/60 leading-relaxed max-w-md", children: "Message us on Instagram at @mansory.detailing or call (215) 398-8619 to schedule your detail." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[220px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://instagram.com/mansory.detailing",
                target: "_blank",
                rel: "noreferrer",
                className: "btn-white-glow inline-flex items-center justify-center gap-2 bg-white text-black rounded-full px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                  "DM on Instagram"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "tel:2153988619",
                className: "inline-flex items-center justify-center gap-2 glass rounded-full px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors",
                children: "Call to book"
              }
            )
          ] })
        ] })
      ]
    }
  ) }) });
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const CarouselContext = reactExports.createContext(null);
function useCarousel() {
  const context = reactExports.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = reactExports.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
  const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
  const onSelect = reactExports.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = reactExports.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = reactExports.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  reactExports.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  reactExports.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
const Gallery4 = ({
  title = "Case Studies",
  description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
  items,
  className,
  eyebrow
}) => {
  const [carouselApi, setCarouselApi] = reactExports.useState();
  const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
  const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
  const [currentSlide, setCurrentSlide] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: cn("relative py-28 px-6", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-end justify-between md:mb-14 lg:mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 max-w-2xl", children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-white/50", children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "text-gradient text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-[1.02]",
            style: { fontFamily: "'Instrument Serif', serif" },
            children: title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-white/65 leading-relaxed", children: description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden shrink-0 gap-2 md:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "icon",
            variant: "ghost",
            onClick: () => carouselApi?.scrollPrev(),
            disabled: !canScrollPrev,
            className: "rounded-full glass text-white hover:bg-white/10 disabled:pointer-events-auto disabled:opacity-40",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "icon",
            variant: "ghost",
            onClick: () => carouselApi?.scrollNext(),
            disabled: !canScrollNext,
            className: "rounded-full glass text-white hover:bg-white/10 disabled:pointer-events-auto disabled:opacity-40",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-5" })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Carousel,
        {
          setApi: setCarouselApi,
          opts: {
            align: "start",
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true
              }
            }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CarouselItem,
            {
              className: "max-w-[320px] pl-[20px] lg:max-w-[360px]",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "group rounded-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-3xl md:aspect-[5/4] lg:aspect-[16/9]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: item.image,
                    alt: "",
                    loading: "lazy",
                    className: "absolute h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-3", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-yellow-400 text-yellow-400" }, i)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mb-6 line-clamp-4 text-sm leading-relaxed text-white/85 md:mb-8 md:text-[15px]", children: [
                    "“",
                    item.description,
                    "”"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full border-t border-white/10 pt-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-medium", children: item.title }),
                    item.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-white/50", children: item.subtitle })
                  ] })
                ] })
              ] }) })
            },
            item.id
          )) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center gap-2", children: items.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: cn(
            "h-2 w-2 rounded-full transition-colors",
            currentSlide === index ? "bg-white" : "bg-white/20"
          ),
          onClick: () => carouselApi?.scrollTo(index),
          "aria-label": `Go to slide ${index + 1}`
        },
        index
      )) })
    ] })
  ] });
};
const reviewMasrurjon = "/assets/review-masrurjon-D3HmFYog.png";
const reviewTimur = "/assets/review-timur-KNMrHxL4.png";
const reviewSveta = "/assets/review-sveta-DKTaLXuj.png";
const reviewBaimyrza = "/assets/review-baimyrza-BP7cwynX.png";
const reviewAndriy = "/assets/review-andriy-Cho7_mdK.png";
const reviewItems = [
  {
    id: "masrurjon-makhmudov",
    title: "Masrurjon Makhmudov",
    subtitle: "Google Review · Local Guide",
    description: "I had an amazing experience here! The staff was incredibly friendly and professional from the moment I called for a quote until the job was done. The installation is flawless — no bubbles or peeling edges — and the car looks incredibly sleek now. Highly recommend this shop if you want quality work at a fair price!",
    image: reviewMasrurjon
  },
  {
    id: "timur-ramizov",
    title: "Timur Ramizov",
    subtitle: "Google Review · Local Guide",
    description: "Very professional and extremely clean work. My Lexus looks absolutely brand new — inside and out.",
    image: reviewTimur
  },
  {
    id: "sveta-basinskaya",
    title: "Sveta Basinskaya",
    subtitle: "Google Review",
    description: "Wow! We are beyond impressed! The leather in our car looks stunning — like it just came out of the showroom. The color is rich and flawless, so natural, and the whole interior feels completely refreshed.",
    image: reviewSveta
  },
  {
    id: "baimyrza-azhimatov",
    title: "Baimyrza Azhimatov",
    subtitle: "Google Review",
    description: "I recently got my car windows tinted at this detailing center, and I'm really impressed with the results. The team was professional, friendly, and paid great attention to detail. The tint looks perfect — clean installation with no bubbles or imperfections.",
    image: reviewBaimyrza
  },
  {
    id: "andriy-uniyat",
    title: "Andriy Uniyat",
    subtitle: "Google Review · Local Guide",
    description: "The shop took care of my last minute request, answered all my questions, and delivered perfect results. Full ceramic tint all around looks perfect. Great customer service, fair pricing, and a very professional team. Highly recommend it!",
    image: reviewAndriy
  }
];
function Reviews() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Gallery4,
    {
      eyebrow: "5.0 stars · 93 reviews",
      title: "A reputation built one car at a time.",
      description: "Real reviews from customers who trust Mansory Detailing for premium car care in Huntingdon Valley.",
      items: reviewItems
    }
  );
}
const Dialog = Dialog$1;
const DialogPortal = DialogPortal$1;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogOverlay$1,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogOverlay$1.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent$1,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogClose, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogContent$1.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogTitle$1,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogTitle$1.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogDescription$1,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogDescription$1.displayName;
const FORMSPREE_URL = "https://formspree.io/f/xbdevwwo";
const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: ""
};
const fieldClass = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30 transition-colors";
function BookingForm() {
  const [form, setForm] = reactExports.useState(initialForm);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [successOpen, setSuccessOpen] = reactExports.useState(false);
  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    const formEl = e.currentTarget;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(formEl)
      });
      if (response.ok) {
        setForm(initialForm);
        formEl.reset();
        setSuccessOpen(true);
        setLoading(false);
        return;
      }
      let errorMessage = "Something went wrong. Please try again.";
      try {
        const data = await response.json();
        if (data.error) errorMessage = data.error;
      } catch {
      }
      setError(errorMessage);
    } catch {
      setError("Unable to send your request. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl glass-strong grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-white/50", children: "Request a consultation" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            name: "name",
            required: true,
            placeholder: "Your name",
            value: form.name,
            onChange: (e) => updateField("name", e.target.value),
            className: fieldClass
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "tel",
            name: "phone",
            required: true,
            placeholder: "Phone number",
            value: form.phone,
            onChange: (e) => updateField("phone", e.target.value),
            className: fieldClass
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "email",
          name: "email",
          required: true,
          placeholder: "Email address",
          value: form.email,
          onChange: (e) => updateField("email", e.target.value),
          className: fieldClass
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          name: "service",
          required: true,
          value: form.service,
          onChange: (e) => updateField("service", e.target.value),
          className: `${fieldClass} text-white/80 ${form.service ? "" : "text-white/30"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, className: "bg-[#111] text-white/50", children: "Service interested in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Hand Washing", className: "bg-[#111]", children: "Hand Washing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Express Detailing", className: "bg-[#111]", children: "Express Detailing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Professional Detailing", className: "bg-[#111]", children: "Professional Detailing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Not sure yet", className: "bg-[#111]", children: "Not sure yet" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          name: "message",
          rows: 4,
          placeholder: "Tell us about your vehicle or preferred date…",
          value: form.message,
          onChange: (e) => updateField("message", e.target.value),
          className: `${fieldClass} resize-none min-h-[100px]`
        }
      ),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-400/90 leading-relaxed", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: "btn-white-glow inline-flex items-center justify-center gap-2 w-full bg-white text-black rounded-full px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed",
          children: [
            loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
            loading ? "Sending…" : "Send request"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: successOpen, onOpenChange: setSuccessOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "glass-strong border-white/10 bg-[#0a0a0a] text-white sm:rounded-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-white", children: "Request received" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-white/60 leading-relaxed", children: "Thank you for reaching out. Your consultation request has been received and the owner will get back to you shortly." })
    ] }) }) })
  ] });
}
const ease = [0.22, 1, 0.36, 1];
const hours = [
  { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
  { day: "Sunday", time: "By appointment" }
];
function Visit() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "visit", className: "relative py-28 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease },
        className: "max-w-2xl mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-white/50 mb-4", children: "Visit & Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "text-gradient text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-[1.02]",
              style: { fontFamily: "'Instrument Serif', serif" },
              children: "Book your detail today."
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.7, ease },
          className: "glass-strong rounded-3xl p-7 sm:p-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: MapPin, label: "Address", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "https://maps.google.com/?q=1940+Pioneer+Rd+Huntingdon+Valley+PA+19006",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "hover:text-white transition-colors",
                  children: [
                    "1940 Pioneer Rd",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Huntingdon Valley, PA 19006"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: Phone, label: "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:2153988619", className: "hover:text-white transition-colors", children: "(215) 398-8619" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: Globe, label: "Instagram", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://instagram.com/mansory.detailing",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "hover:text-white transition-colors",
                  children: "@mansory.detailing"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:2153988619",
                className: "btn-white-glow mt-8 inline-flex items-center justify-center gap-2 w-full bg-white text-black rounded-full px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                  "Call to book"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.7, ease, delay: 0.08 },
          className: "glass rounded-3xl p-7 sm:p-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl glass-strong grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-white/50", children: "Hours" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-white/10", children: hours.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between py-3.5 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/65", children: h.day }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium tabular-nums", children: h.time })
            ] }, h.day)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-2 text-xs text-white/50 leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Consultation and booking available via Instagram direct message or phone." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Hours may vary — call ahead to confirm availability." })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7, ease, delay: 0.12 },
        className: "glass rounded-3xl p-7 sm:p-8 mt-5",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingForm, {})
      }
    )
  ] }) });
}
function InfoRow({
  icon: Icon,
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 shrink-0 rounded-xl glass grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-white" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-white/40", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-white/80 leading-relaxed", children })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative border-t border-white/10 px-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-full bg-white text-black grid place-items-center text-[10px] font-bold", children: "MD" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-semibold", children: [
          "Mansory ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "Detailing" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/50 text-xs", children: "1940 Pioneer Rd, Huntingdon Valley, PA 19006" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "tel:2153988619",
          className: "inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-xs",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
            "(215) 398-8619"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto mt-8 text-[11px] text-white/35", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Mansory Detailing. All rights reserved."
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen bg-background text-foreground antialiased", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Specials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reviews, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Visit, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
