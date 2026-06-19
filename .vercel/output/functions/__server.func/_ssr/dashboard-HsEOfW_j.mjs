import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as supabase } from "./client-PNylteGM.mjs";
import { a as Route } from "./router-DnUCnPTL.mjs";
import "../_libs/sonner.mjs";
import { r as LogOut, q as Crosshair, s as Target, S as Sparkles, p as Compass } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function DashboardPage() {
  const navigate = useNavigate();
  const {
    user
  } = Route.useRouteContext();
  const [checking, setChecking] = reactExports.useState(true);
  const [displayName, setDisplayName] = reactExports.useState("");
  reactExports.useEffect(() => {
    let cancelled = false;
    (async () => {
      const {
        data
      } = await supabase.from("profiles").select("onboarding_completed, display_name").eq("id", user.id).maybeSingle();
      if (cancelled) return;
      if (!data || !data.onboarding_completed) {
        navigate({
          to: "/onboarding",
          replace: true
        });
        return;
      }
      setDisplayName(data.display_name ?? "");
      setChecking(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [user.id, navigate]);
  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate({
      to: "/auth",
      replace: true
    });
  }
  if (checking) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center bg-background text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-white/40", children: "Loading…" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-background text-foreground overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: "radial-gradient(800px 400px at 50% -10%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(600px 300px at 90% 100%, rgba(120,140,200,0.10), transparent 60%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 noise opacity-[0.35]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative z-10 mx-auto flex w-[min(96%,1200px)] items-center justify-between px-2 py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-md bg-white text-black grid place-items-center text-[11px] font-bold tracking-tighter", children: "JS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium tracking-tight", children: "JobSniper" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleSignOut, className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/50 hover:text-white transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-3.5 w-3.5" }),
        "Sign out"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10 mx-auto w-[min(96%,1200px)] px-2 py-10 md:py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.22em] text-white/40", children: "Your scout · live" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 text-4xl md:text-6xl font-medium tracking-tight text-gradient", children: [
          "Welcome back",
          displayName ? `, ${displayName.split(" ")[0]}` : "",
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm md:text-base text-white/60 max-w-xl", children: "Your hidden opportunities are being curated. Here's what JobSniper is tracking on your behalf." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: [{
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Crosshair, { className: "h-4 w-4" }),
        k: "Active scans",
        v: "12"
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4" }),
        k: "Matches today",
        v: "8"
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
        k: "Saved roles",
        v: "0"
      }].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 10
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5,
        delay: 0.05 * i
      }, className: "glass rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/40", children: [
          c.icon,
          " ",
          c.k
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-4xl font-medium tracking-tight", children: c.v })
      ] }, c.k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 14
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6,
        delay: 0.2
      }, className: "mt-8 glass rounded-2xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-4 w-4" }),
          " Hidden opportunities"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid place-items-center py-16 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl glass-strong grid place-items-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Crosshair, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg text-white/80", children: "First sweep underway." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-white/50 max-w-md", children: "We're crawling boutique startups, community boards, and niche career pages. Your first batch of hand-picked roles will appear here shortly." })
        ] })
      ] })
    ] })
  ] });
}
export {
  DashboardPage as component
};
