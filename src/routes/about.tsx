import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, HeartHandshake, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DeveloperCard } from "@/components/DeveloperCard";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";

const title = "About ClanHive — Grow, Track & Connect";
const description =
  "ClanHive is a social personal-growth platform for creating meaningful activities, tracking progress, joining community experiences, and connecting with others.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const missionPoints = [
  "Personal growth",
  "Consistency",
  "Accountability",
  "Progress",
  "Positive activities",
  "Community",
  "Self-improvement",
];

function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-surface" aria-labelledby="about-title">
          <div className="container-page py-16 md:py-24">
            <span className="eyebrow">
              <Sparkles className="h-4 w-4" aria-hidden="true" /> About
            </span>
            <h1 id="about-title" className="mt-5 text-4xl font-bold md:text-6xl">
              About ClanHive
            </h1>
            <p className="mt-3 text-lg font-semibold text-primary">
              Grow. Track. Connect. Together.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              ClanHive is a social personal-growth and self-improvement platform
              designed to help people create meaningful activities, track progress,
              participate in community experiences, and connect with others.
            </p>
          </div>
        </section>

        <section className="container-page py-16 md:py-20" aria-labelledby="mission">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 id="mission" className="text-3xl font-bold md:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We believe meaningful change starts with small, consistent actions.
                ClanHive exists to make those actions easier to create, easier to keep
                up, and more rewarding to share with others.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {missionPoints.map((p) => (
                  <li key={p} className="eyebrow">
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <div className="card-soft grid gap-4 p-6 sm:grid-cols-2">
                {[
                  {
                    icon: Compass,
                    title: "Purposeful",
                    text: "Activities that reflect what genuinely matters to you.",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Supportive",
                    text: "A community that encourages steady, honest progress.",
                  },
                ].map((c) => (
                  <div key={c.title} className="rounded-2xl bg-accent p-5">
                    <c.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="mt-3 text-base font-semibold">{c.title}</h3>
                    <p className="mt-1.5 text-sm text-accent-foreground/80">{c.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="developer"
          className="scroll-mt-24 bg-surface py-16 md:py-20"
          aria-labelledby="developer-heading"
        >
          <div className="container-page">
            <h2
              id="developer-heading"
              className="text-center text-3xl font-bold md:text-4xl"
            >
              Meet the Developer
            </h2>
            <div className="mt-10">
              <DeveloperCard />
            </div>
          </div>
        </section>

        <section className="container-page py-16 md:py-20" aria-labelledby="why-created">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 id="why-created" className="text-3xl font-bold md:text-4xl">
                Why ClanHive?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Personal growth can be difficult when you try to do everything alone.
                ClanHive brings activities, progress, communication, and community into
                one experience.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-[2rem] border border-border bg-accent p-8">
                <h2 className="text-3xl font-bold md:text-4xl">Our Vision</h2>
                <p className="mt-4 text-base leading-relaxed text-accent-foreground/85">
                  To create a positive digital space where people can grow, track
                  meaningful progress, participate in activities, and connect with
                  others.
                </p>
                <p className="mt-6 text-lg font-bold text-primary">
                  Grow. Track. Connect. Together.
                </p>
                <Link to="/" className="btn-base btn-primary mt-6">
                  Explore ClanHive{" "}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
