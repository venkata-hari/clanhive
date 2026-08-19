import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Logo } from "./Logo";
import { APP_CONFIG } from "@/config";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/invite", label: "Invite" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });
  const isInvitePage = pathname === "/invite";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-background"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container-page flex h-16 items-center justify-between gap-4 md:h-18"
      >
        <Link to="/" className="text-foreground" aria-label="ClanHive home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to as any}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-accent" }}
                inactiveProps={{ className: "text-foreground/75" }}
                className="rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {!isInvitePage && (
          <div className="hidden items-center gap-2 lg:flex">
            <Link to="/about" className="btn-base btn-outline">
              Get Started
            </Link>
            <a
              href={APP_CONFIG.googlePlayUrl}
              target="_blank"
              className="btn-base btn-primary"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download App
            </a>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to as any}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-primary bg-accent" }}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            {!isInvitePage && (
              <li className="mt-2 flex flex-col gap-2">
                <Link
                  to="/about"
                  onClick={() => setOpen(false)}
                  className="btn-base btn-outline w-full"
                >
                  Get Started
                </Link>
                <a
                  href={APP_CONFIG.googlePlayUrl}
                  target="_blank"
                  className="btn-base btn-primary w-full"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download App
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}