import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LegalLayout } from "@/components/LegalLayout";
import { termsSections } from "@/data/legal";

const title = "ClanHive Terms & Conditions";
const description =
  "The terms that apply when you use ClanHive, including accounts, activities, user content, chat, channels, community participation, and acceptable use.";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms-and-conditions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalLayout
          title="Terms & Conditions"
          intro="Please read these terms carefully. They describe the rules for using ClanHive and its community features."
          sections={termsSections}
        />
      </main>
      <Footer />
    </>
  );
}
