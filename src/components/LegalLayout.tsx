import { TableOfContents } from "./TableOfContents";
import type { LegalSection } from "@/data/legal";
import { APP_CONFIG } from "@/config";

export function LegalLayout({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div>
      <header className="border-b border-border bg-accent">
        <div className="container-page py-14 md:py-20">
          <span className="eyebrow bg-background">ClanHive Legal</span>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
            {intro}
          </p>
          <p className="mt-4 text-sm text-foreground/60">
            Effective date: {APP_CONFIG.effectiveDate}
          </p>
        </div>
      </header>

      <div className="container-page grid gap-10 py-12 lg:grid-cols-[16rem_1fr] lg:gap-14 lg:py-16">
        <TableOfContents sections={sections} />

        <article className="max-w-3xl">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-28 pb-10">
              <h2 className="text-xl font-semibold md:text-2xl">
                <span className="mr-2 text-primary">{i + 1}.</span>
                {s.title}
              </h2>
              {s.body.map((p, j) => (
                <p key={j} className="mt-3 text-sm leading-7 text-muted-foreground">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mt-4 space-y-2">
                  {s.list.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
