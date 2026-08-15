import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { APP_CONFIG } from "@/config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {APP_CONFIG.tagline}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Product</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                hash="activities"
                className="transition-colors hover:text-primary"
              >
                Activities
              </Link>
            </li>
            <li>
              <Link
                to="/"
                hash="community"
                className="transition-colors hover:text-primary"
              >
                Community
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Legal</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link
                to="/privacy-policy"
                className="transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-conditions"
                className="transition-colors hover:text-primary"
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Developer</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link
                to="/about"
                hash="developer"
                className="transition-colors hover:text-primary"
              >
                About Developer
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${APP_CONFIG.supportEmail}`}
                className="transition-colors hover:text-primary"
              >
                Contact
              </a>
            </li>
          </ul>
          <h2 className="mt-6 text-sm font-semibold">Download</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a
                href={APP_CONFIG.googlePlayUrl}
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                Google Play
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 text-center text-sm text-muted-foreground">
          © 2026 ClanHive. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
