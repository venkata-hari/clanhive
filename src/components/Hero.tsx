import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { AppMockup } from "./AppMockup";
import { APP_CONFIG } from "@/config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface" aria-labelledby="hero-title">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-accent blur-3xl"
      />
      <div className="container-page relative grid items-center gap-14 py-16 lg:grid-cols-2 lg:py-24">
        <div className="reveal-in">
          <span className="eyebrow">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Activities · Progress · Community
          </span>
          <h1
            id="hero-title"
            className="mt-5 text-4xl leading-[1.1] font-bold md:text-6xl"
          >
            Grow. Track.
            <br />
            Connect. <span className="text-primary">Together.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            ClanHive helps you create meaningful activities, track your progress, stay
            consistent, participate in community activities, and connect with people.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="btn-base btn-primary">
              Get Started <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={APP_CONFIG.googlePlayUrl}
              rel="noopener noreferrer"
              className="btn-base btn-outline"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download ClanHive
            </a>
          </div>
        </div>

        <div className="relative">
          <AppMockup variant="overview" float />
        </div>
      </div>
    </section>
  );
}
