import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/wheelworks/Nav";
import { Hero } from "@/components/wheelworks/Hero";
import { About } from "@/components/wheelworks/About";
import { Services } from "@/components/wheelworks/Services";
import { Pricing } from "@/components/wheelworks/Pricing";
import { Specials } from "@/components/wheelworks/Specials";
import { Reviews } from "@/components/wheelworks/Reviews";
import { Visit } from "@/components/wheelworks/Visit";
import { Footer } from "@/components/wheelworks/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wheelworks VIP — Premium Hand Wash & Detailing in Huntingdon Valley, PA" },
      { name: "description", content: "Premium hand washing and detailing in Huntingdon Valley, PA. Full-service car care designed to protect, restore, and elevate your vehicle. Call 215-947-8927." },
      { property: "og:title", content: "Wheelworks VIP — Premium Hand Wash & Detailing" },
      { property: "og:description", content: "Full-service hand washing and detailing in Huntingdon Valley, PA. You're closer to clean than you think." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Specials />
      <Reviews />
      <Visit />
      <Footer />
    </main>
  );
}
