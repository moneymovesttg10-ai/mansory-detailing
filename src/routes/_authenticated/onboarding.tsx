import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { OnboardingShell } from "@/components/onboarding/Shell";
import { Step1Resume } from "@/components/onboarding/Step1Resume";
import { Step2Work } from "@/components/onboarding/Step2Work";
import { Step3Lifestyle } from "@/components/onboarding/Step3Lifestyle";
import { Step4Skills } from "@/components/onboarding/Step4Skills";
import { Step5Summary } from "@/components/onboarding/Step5Summary";
import { Step6Launch } from "@/components/onboarding/Step6Launch";
import { initialState, type OnboardingState } from "@/components/onboarding/types";

export const Route = createFileRoute("/_authenticated/onboarding")({
  head: () => ({
    meta: [
      { title: "Onboarding — JobSniper" },
      {
        name: "description",
        content:
          "Build your JobSniper profile in minutes. Upload your resume, set your lifestyle, and unlock the hidden internet of jobs.",
      },
    ],
  }),
  component: OnboardingPage,
});

const TOTAL = 5;

function OnboardingPage() {
  const navigate = useNavigate();
  const { user } = Route.useRouteContext();
  const [state, setState] = useState<OnboardingState>(initialState);
  const [step, setStep] = useState(1);
  const [launching, setLaunching] = useState(false);
  const [saving, setSaving] = useState(false);

  // If the user has already completed onboarding, send them to the dashboard.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase
        .from("profiles")
        .select("onboarding_completed, resume_name, work_prefs, lifestyle_prefs, skills")
        .eq("id", user.id)
        .maybeSingle();
      if (cancelled || !data) return;
      if (data.onboarding_completed) {
        navigate({ to: "/dashboard", replace: true });
        return;
      }
      // Hydrate any partial state from previous session
      setState((s) => ({
        ...s,
        resumeName: data.resume_name ?? s.resumeName,
        parsed: !!data.resume_name,
        work: (data.work_prefs as OnboardingState["work"]) ?? s.work,
        lifestyle: (data.lifestyle_prefs as OnboardingState["lifestyle"]) ?? s.lifestyle,
        skills: (data.skills as string[]) ?? s.skills,
      }));
    })();
    return () => {
      cancelled = true;
    };
  }, [user.id, navigate]);

  const next = () => setStep((s) => Math.min(s + 1, 6));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  async function persistAndLaunch() {
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({
        onboarding_completed: true,
        resume_name: state.resumeName,
        work_prefs: state.work,
        lifestyle_prefs: state.lifestyle,
        skills: state.skills,
      })
      .eq("id", user.id);
    setSaving(false);
    if (error) {
      toast.error("Couldn't save your profile. Try again.");
      return;
    }
    setLaunching(true);
    setStep(6);
  }

  return (
    <OnboardingShell step={Math.min(step, TOTAL)} total={TOTAL}>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {step === 1 && (
            <Step1Resume
              resumeName={state.resumeName}
              parsed={state.parsed}
              onParsed={(name) => setState({ ...state, resumeName: name, parsed: true })}
              onNext={next}
            />
          )}
          {step === 2 && (
            <Step2Work
              value={state.work}
              onChange={(work) => setState({ ...state, work })}
              onBack={back}
              onNext={next}
            />
          )}
          {step === 3 && (
            <Step3Lifestyle
              value={state.lifestyle}
              onChange={(lifestyle) => setState({ ...state, lifestyle })}
              onBack={back}
              onNext={next}
            />
          )}
          {step === 4 && (
            <Step4Skills
              skills={state.skills}
              onChange={(skills) => setState({ ...state, skills })}
              onBack={back}
              onNext={next}
            />
          )}
          {step === 5 && (
            <Step5Summary
              state={state}
              onBack={back}
              onNext={persistAndLaunch}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {launching && (
        <Step6Launch
          onComplete={() => {
            setLaunching(false);
            navigate({ to: "/dashboard", replace: true });
          }}
        />
      )}

      {saving && (
        <div className="fixed inset-0 z-40 bg-background/40 backdrop-blur-sm pointer-events-none" />
      )}
    </OnboardingShell>
  );
}