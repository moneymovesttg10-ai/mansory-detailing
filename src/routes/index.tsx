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
      { title: "Mansory Detailing — Premium Car Detailing in Huntingdon Valley, PA" },
      { name: "description", content: "Premium car detailing in Huntingdon Valley, PA. Rated 5.0 stars with 93 reviews. Located at 1940 Pioneer Rd. Call (215) 398-8619 or DM @mansory.detailing." },
      { property: "og:title", content: "Mansory Detailing — Premium Car Detailing" },
      { property: "og:description", content: "Premium car detailing in Huntingdon Valley, PA. Consultation and booking via direct message or phone." },
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
