import { useState } from "react";
import { ChevronDown, List } from "lucide-react";
import type { LegalSection } from "@/data/legal";

export function TableOfContents({ sections }: { sections: LegalSection[] }) {
  const [open, setOpen] = useState(false);

  const list = (
    <ol className="space-y-1.5 text-sm">
      {sections.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
          >
            <span className="mr-2 font-semibold text-primary">{i + 1}.</span>
            {s.title}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <nav aria-label="Table of contents">
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="card-soft flex w-full items-center justify-between p-4 text-sm font-semibold"
        >
          <span className="inline-flex items-center gap-2">
            <List className="h-4 w-4 text-primary" aria-hidden="true" />
            Table of contents
          </span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
        {open && <div className="card-soft mt-2 p-2">{list}</div>}
      </div>

      <div className="sticky top-24 hidden lg:block">
        <p className="px-3 pb-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          On this page
        </p>
        <div className="max-h-[70vh] overflow-y-auto pr-1">{list}</div>
      </div>
    </nav>
  );
}
