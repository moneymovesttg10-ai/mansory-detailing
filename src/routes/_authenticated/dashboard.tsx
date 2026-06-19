import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Crosshair, LogOut, Sparkles, Target, Compass } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [{ title: "Dashboard — JobSniper" }],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const navigate = useNavigate();
  const { user } = Route.useRouteContext();
  const [checking, setChecking] = useState(true);
  const [displayName, setDisplayName] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase
        .from("profiles")
        .select("onboarding_completed, display_name")
        .eq("id", user.id)
        .maybeSingle();
      if (cancelled) return;
      if (!data || !data.onboarding_completed) {
        navigate({ to: "/onboarding", replace: true });
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
    navigate({ to: "/auth", replace: true });
  }

  if (checking) {
    return (
      <div className="min-h-screen grid place-items-center bg-background text-foreground">
        <div className="text-xs uppercase tracking-[0.22em] text-white/40">Loading…</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(800px 400px at 50% -10%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(600px 300px at 90% 100%, rgba(120,140,200,0.10), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 noise opacity-[0.35]" />
      </div>

      <header className="relative z-10 mx-auto flex w-[min(96%,1200px)] items-center justify-between px-2 py-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-white text-black grid place-items-center text-[11px] font-bold tracking-tighter">
            JS
          </div>
          <span className="text-sm font-medium tracking-tight">JobSniper</span>
        </Link>
        <button
          onClick={handleSignOut}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/50 hover:text-white transition-colors"
        >
          <LogOut className="h-3.5 w-3.5" />
          Sign out
        </button>
      </header>

      <main className="relative z-10 mx-auto w-[min(96%,1200px)] px-2 py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
            Your scout · live
          </div>
          <h1 className="mt-3 text-4xl md:text-6xl font-medium tracking-tight text-gradient">
            Welcome back{displayName ? `, ${displayName.split(" ")[0]}` : ""}.
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/60 max-w-xl">
            Your hidden opportunities are being curated. Here's what JobSniper is
            tracking on your behalf.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: <Crosshair className="h-4 w-4" />, k: "Active scans", v: "12" },
            { icon: <Target className="h-4 w-4" />, k: "Matches today", v: "8" },
            { icon: <Sparkles className="h-4 w-4" />, k: "Saved roles", v: "0" },
          ].map((c, i) => (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/40">
                {c.icon} {c.k}
              </div>
              <div className="mt-4 text-4xl font-medium tracking-tight">{c.v}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 glass rounded-2xl p-8"
        >
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/40">
            <Compass className="h-4 w-4" /> Hidden opportunities
          </div>
          <div className="mt-6 grid place-items-center py-16 text-center">
            <div className="h-14 w-14 rounded-2xl glass-strong grid place-items-center mb-5">
              <Crosshair className="h-6 w-6" />
            </div>
            <div className="text-lg text-white/80">First sweep underway.</div>
            <div className="mt-1 text-sm text-white/50 max-w-md">
              We're crawling boutique startups, community boards, and niche career pages.
              Your first batch of hand-picked roles will appear here shortly.
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}