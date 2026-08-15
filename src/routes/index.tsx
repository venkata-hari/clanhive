import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Hash,
  Lock,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  Activity as ActivityIcon,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { AppMockup } from "@/components/AppMockup";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { features, whyClanHive } from "@/data/features";

const title = "ClanHive";
const description =
  "ClanHive helps you create activities, track progress, participate in community activities, connect with others, and grow together.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function SectionHeading({
  eyebrow,
  title: heading,
  subtitle,
  id,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  id: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 id={id} className="mt-4 text-3xl font-bold md:text-4xl">
        {heading}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Features */}
        <section className="container-page py-20" aria-labelledby="features">
          <SectionHeading
            id="features"
            center
            eyebrow="Features"
            title="Everything You Need for Personal Growth"
            subtitle="ClanHive brings activities, progress tracking, communication, and community into one simple experience."
          />
          <div className="mt-12">
            <FeatureGrid items={features} />
          </div>
        </section>

        {/* Activities */}
        <section
          id="activities"
          className="scroll-mt-20 bg-accent py-20"
          aria-labelledby="activities-heading"
        >
          <div className="container-page grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                id="activities-heading"
                eyebrow="Activities"
                title="Turn Small Actions Into Progress"
                subtitle="Create meaningful activities, complete them consistently, and see how your progress grows over time."
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Activity cards",
                  "Completion indicators",
                  "Progress percentage",
                  "Streak indicators",
                  "Activity history",
                  "Completion dates",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2.5 rounded-2xl bg-background px-4 py-3 text-sm font-medium"
                  >
                    <ActivityIcon className="h-4 w-4 text-primary" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <AppMockup variant="activities" />
            </Reveal>
          </div>
        </section>

        {/* Progress */}
        <section className="container-page py-20" aria-labelledby="progress-heading">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal className="lg:order-2">
              <SectionHeading
                id="progress-heading"
                eyebrow="Progress"
                title="See How Far You've Come"
                subtitle="Track your consistency and understand your personal growth journey through clear progress information."
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Progress percentage",
                  "Completed activities",
                  "Achievement indicators",
                  "Activity history",
                  "Calendar overview",
                  "Consistency indicators",
                ].map((t) => (
                  <li key={t} className="card-soft flex items-center gap-2.5 px-4 py-3 text-sm font-medium">
                    <TrendingUp className="h-4 w-4 text-teal" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className="lg:order-1">
              <AppMockup variant="progress" />
            </Reveal>
          </div>
        </section>

        {/* Community */}
        <section
          id="community"
          className="scroll-mt-20 bg-surface py-20"
          aria-labelledby="community-heading"
        >
          <div className="container-page grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                id="community-heading"
                eyebrow="Community"
                title="Grow Together"
                subtitle="Personal growth doesn't have to be a solo journey. Connect with people, participate in activities, join channels, and motivate each other."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: MessageCircle, t: "Chat", d: "Direct conversations" },
                  { icon: Hash, t: "Channels", d: "Shared spaces" },
                  { icon: Bell, t: "Notifications", d: "Timely updates" },
                  { icon: CalendarDays, t: "Shared activities", d: "Participate together" },
                ].map((c) => (
                  <div key={c.t} className="card-soft card-hover p-5">
                    <c.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="mt-3 text-sm font-semibold">{c.t}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <AppMockup variant="community" />
            </Reveal>
          </div>
        </section>

        {/* Chat & Channels */}
        <section className="container-page py-20" aria-labelledby="chat-heading">
          <SectionHeading
            id="chat-heading"
            center
            eyebrow="Chat & Channels"
            title="Stay Connected"
          />
          <div className="mt-12 grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <AppMockup variant="chat" />
            </Reveal>
            <Reveal delay={120} className="space-y-5">
              <article className="card-soft card-hover p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">Private Chat</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Communicate directly with other ClanHive users.
                </p>
              </article>
              <article className="card-soft card-hover p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-teal">
                  <Hash className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">Channels</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Join shared spaces, participate in conversations, and stay connected
                  with your community.
                </p>
              </article>
            </Reveal>
          </div>
        </section>

        {/* Calendar & Notifications */}
        <section className="bg-accent py-20" aria-labelledby="calendar-heading">
          <div className="container-page grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                id="calendar-heading"
                eyebrow="Calendar & Notifications"
                title="Plan. Track. Stay Consistent."
                subtitle="Organize your activities, monitor your progress, and stay informed with useful notifications."
              />
              <ol className="mt-8 flex flex-wrap items-center gap-2">
                {["Calendar", "Activities", "Progress", "Notifications", "Consistency"].map(
                  (step, i, arr) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="rounded-full bg-background px-4 py-2 text-sm font-semibold">
                        {step}
                      </span>
                      {i < arr.length - 1 && (
                        <ArrowRight
                          className="h-4 w-4 text-primary"
                          aria-hidden="true"
                        />
                      )}
                    </li>
                  ),
                )}
              </ol>
            </Reveal>
            <Reveal delay={120}>
              <AppMockup variant="calendar" />
            </Reveal>
          </div>
        </section>

        {/* Why ClanHive */}
        <section className="container-page py-20" aria-labelledby="why-heading">
          <SectionHeading id="why-heading" center title="Why ClanHive?" />
          <div className="mt-12">
            <FeatureGrid items={whyClanHive} columns={4} />
          </div>
        </section>

        {/* Privacy */}
        <section className="bg-surface py-20" aria-labelledby="privacy-heading">
          <div className="container-page grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                id="privacy-heading"
                eyebrow="Privacy"
                title="Your Privacy Matters"
                subtitle="ClanHive is designed to give users control over their information and what they choose to share with others."
              />
              <Link to="/privacy-policy" className="btn-base btn-primary mt-8">
                Read Privacy Policy{" "}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
            <Reveal delay={100} className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Lock, t: "Account privacy", d: "Your account details stay yours." },
                { icon: ShieldCheck, t: "Public profile controls", d: "Decide what others can see." },
                { icon: ActivityIcon, t: "Responsible data handling", d: "Information used to run the app." },
                { icon: Bell, t: "Account deletion", d: "Remove your account when you choose." },
              ].map((c) => (
                <div key={c.t} className="card-soft p-5">
                  <c.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-sm font-semibold">{c.t}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
