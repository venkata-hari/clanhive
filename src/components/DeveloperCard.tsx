import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { APP_CONFIG } from "@/config";

export function DeveloperCard() {
  return (
    <article className="card-soft mx-auto max-w-3xl p-8 md:p-10">
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <span
          aria-hidden="true"
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-accent text-2xl font-bold text-primary"
        >
          CH
        </span>
        <div>
          <h3 className="text-xl font-semibold">{APP_CONFIG.developerName}</h3>
          <p className="mt-1 text-sm font-medium text-primary">
            {APP_CONFIG.developerRole}
          </p>
          <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {APP_CONFIG.developerLocation}
          </p>
        </div>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        ClanHive was created with the vision of combining personal development with
        meaningful social connection. The goal is to create a simple platform where
        people can track their progress while staying connected with others.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${APP_CONFIG.supportEmail}`}
          className="btn-base btn-outline"
          aria-label="Email the developer"
        >
          <Mail className="h-4 w-4" aria-hidden="true" /> Contact
        </a>
        <a
          href={APP_CONFIG.developerLinkedIn}
          rel="noopener noreferrer"
          className="btn-base btn-outline"
          aria-label="Developer LinkedIn profile"
        >
          <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
        </a>
        <a
          href={APP_CONFIG.developerGithub}
          rel="noopener noreferrer"
          className="btn-base btn-outline"
          aria-label="Developer GitHub profile"
        >
          <Github className="h-4 w-4" aria-hidden="true" /> GitHub
        </a>
      </div>
    </article>
  );
}
