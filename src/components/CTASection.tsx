import { Link } from "@tanstack/react-router";
import { Download, ArrowRight } from "lucide-react";
import { APP_CONFIG } from "@/config";

export function CTASection() {
  return (
    <section className="container-page py-20" aria-labelledby="final-cta">
      <div className="overflow-hidden rounded-[2rem] border border-border bg-accent px-6 py-16 text-center md:px-16">
        <h2 id="final-cta" className="text-3xl font-bold md:text-4xl">
          Ready to Grow Together?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
          Start your journey with ClanHive, create meaningful activities, track your
          progress, connect with your community, and keep moving forward.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
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
    </section>
  );
}
