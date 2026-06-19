import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Loader2, Mail, Lock, Linkedin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — JobSniper" },
      { name: "description", content: "Sign in to JobSniper to access your personal AI career scout." },
    ],
  }),
  component: AuthPage,
});

type Mode = "login" | "signup" | "forgot";

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  // If already signed in, route based on onboarding state.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (cancelled || !data.user) return;
      await routeAfterAuth(data.user.id);
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function routeAfterAuth(userId: string) {
    const { data } = await supabase
      .from("profiles")
      .select("onboarding_completed")
      .eq("id", userId)
      .maybeSingle();
    if (data?.onboarding_completed) {
      navigate({ to: "/dashboard", replace: true });
    } else {
      navigate({ to: "/onboarding", replace: true });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/onboarding` },
        });
        if (error) throw error;
        if (!data.session) {
          toast.success("Check your inbox to confirm your email.");
          setBusy(false);
          return;
        }
        toast.success("Account created.");
        navigate({ to: "/onboarding", replace: true });
        return;
      }
      if (mode === "login") {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        if (data.user) await routeAfterAuth(data.user.id);
        return;
      }
      if (mode === "forgot") {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        toast.success("Password reset email sent.");
        setMode("login");
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      toast.error(msg);
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle() {
    if (busy) return;
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/auth",
    });
    if (result.error) {
      toast.error("Google sign-in failed.");
      setBusy(false);
      return;
    }
    if (result.redirected) return;
    const { data } = await supabase.auth.getUser();
    if (data.user) await routeAfterAuth(data.user.id);
    setBusy(false);
  }

  const heading =
    mode === "signup" ? "Create your account."
    : mode === "forgot" ? "Reset your password."
    : "Welcome back.";
  const sub =
    mode === "signup" ? "Two minutes. Then the scout goes to work."
    : mode === "forgot" ? "We'll send a secure link to your inbox."
    : "Sign in to continue sniping hidden opportunities.";

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden grid place-items-center px-6 py-12">
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

      <Link
        to="/"
        className="absolute top-6 left-6 z-10 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
      >
        <div className="h-7 w-7 rounded-md bg-white text-black grid place-items-center text-[11px] font-bold tracking-tighter">
          JS
        </div>
        <span className="text-sm font-medium tracking-tight">JobSniper</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[440px]"
      >
        <div className="text-center mb-8">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
            {mode === "signup" ? "Get started" : mode === "forgot" ? "Account recovery" : "Sign in"}
          </div>
          <h1
            className="mt-3 text-gradient text-4xl md:text-5xl tracking-[-0.03em] leading-[1.05]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {heading}
          </h1>
          <p className="mt-3 text-sm text-white/55">{sub}</p>
        </div>

        <div className="glass rounded-2xl p-7">
          {mode !== "forgot" && (
            <>
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={handleGoogle}
                  disabled={busy}
                  className="group flex items-center justify-center gap-2.5 w-full rounded-full bg-white text-black px-4 py-2.5 text-sm font-medium hover:bg-white/90 transition-all disabled:opacity-50"
                >
                  <GoogleGlyph /> Continue with Google
                </button>
                <button
                  disabled
                  className="relative flex items-center justify-center gap-2.5 w-full rounded-full bg-white/5 border border-white/10 text-white/40 px-4 py-2.5 text-sm font-medium cursor-not-allowed"
                  title="Coming soon"
                >
                  <Linkedin className="h-4 w-4" /> Continue with LinkedIn
                  <span className="absolute right-3 text-[9px] uppercase tracking-[0.18em] text-white/30">
                    Soon
                  </span>
                </button>
              </div>

              <div className="my-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/30">
                <div className="h-px flex-1 bg-white/10" />
                or
                <div className="h-px flex-1 bg-white/10" />
              </div>
            </>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <Field
              icon={<Mail className="h-4 w-4" />}
              type="email"
              placeholder="you@domain.com"
              value={email}
              onChange={setEmail}
              autoComplete="email"
            />
            {mode !== "forgot" && (
              <Field
                icon={<Lock className="h-4 w-4" />}
                type="password"
                placeholder="Password"
                value={password}
                onChange={setPassword}
                autoComplete={mode === "signup" ? "new-password" : "current-password"}
              />
            )}

            <button
              type="submit"
              disabled={busy}
              className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition-all disabled:opacity-50"
            >
              {busy ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  {mode === "signup" ? "Create account" : mode === "forgot" ? "Send reset link" : "Sign in"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>

          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="mt-5 flex items-center justify-between text-xs text-white/50"
            >
              {mode === "login" ? (
                <>
                  <button onClick={() => setMode("forgot")} className="hover:text-white transition-colors">
                    Forgot password?
                  </button>
                  <button onClick={() => setMode("signup")} className="hover:text-white transition-colors">
                    Create account →
                  </button>
                </>
              ) : mode === "signup" ? (
                <>
                  <span>Already have an account?</span>
                  <button onClick={() => setMode("login")} className="hover:text-white transition-colors">
                    Sign in →
                  </button>
                </>
              ) : (
                <>
                  <span>Remember it?</span>
                  <button onClick={() => setMode("login")} className="hover:text-white transition-colors">
                    Back to sign in →
                  </button>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-6 text-center text-[11px] text-white/35">
          By continuing you agree to JobSniper's Terms & Privacy.
        </p>
      </motion.div>
    </div>
  );
}

function Field({
  icon,
  type,
  placeholder,
  value,
  onChange,
  autoComplete,
}: {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
}) {
  return (
    <label className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus-within:border-white/30 transition-colors">
      <span className="text-white/40">{icon}</span>
      <input
        required
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        className="flex-1 bg-transparent outline-none text-sm placeholder:text-white/30"
      />
    </label>
  );
}

function GoogleGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
  );
}