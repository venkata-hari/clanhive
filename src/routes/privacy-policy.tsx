import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LegalLayout } from "@/components/LegalLayout";
import { privacySections } from "@/data/legal";

const title = "ClanHive Privacy Policy";
const description =
  "How ClanHive handles account information, activities, progress data, profiles, chat, channels, calendar details, and notifications.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalLayout
          title="Privacy Policy"
          intro="This page explains what information ClanHive processes, how it is used, and the control you have over what you share."
          sections={privacySections}
        />
      </main>
      <Footer />
    </>
  );
}
