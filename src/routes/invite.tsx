import { Navbar } from "@/components/Navbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/invite")({
  component: InvitePage,
});

const PLAY_TESTING_URL =
  "https://play.google.com/apps/testing/com.venkatahari.clanhive";
const TESTER_GROUP_URL = "https://groups.google.com/g/clanhive-testers";

function InvitePage() {
  return (
    <>
          <Navbar />
    <div className="container-page py-12 md:py-16">
      <div className="mx-auto max-w-lg">
        <h1 className="text-2xl font-bold text-foreground md:text-3xl">
          Help us Test ClanHive
        </h1>
        <p className="mt-3 text-sm text-foreground/70 md:text-base">
          Thanks for joining! Just do these two things to get the app.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <a
            href={TESTER_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary w-full justify-center"
          >
            Step 1: Join the tester group
          </a>
          <a
            href={PLAY_TESTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-outline w-full justify-center"
          >
            Step 2: Become a tester
          </a>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-orange-50 px-4 py-3.5 text-sm text-foreground/80">
          <span className="font-semibold text-primary">Important:</span> Use
          the same Google account for both steps. If your phone has more
          than one Google account, make sure the same one is signed in
          every time.
        </div>

        <h2 className="mt-10 text-lg font-semibold text-foreground">
          Getting an "Item not found" error?
        </h2>

        <div className="mt-5 flex flex-col gap-5">
          <Step number={1}>
            Open the <strong>Step 2 link above in your browser</strong>{" "}
            first. Don't search for the app in the Play Store yet.
          </Step>
          <Step number={2}>
            Check that you are signed in with the{" "}
            <strong>same email</strong> you used to join the tester group.
          </Step>
          <Step number={3}>
            Tap <strong>"Become a Tester"</strong> on that page.
          </Step>
          <Step number={4}>
            Once you see <strong>"Welcome to the testing program"</strong>,
            you can download the app from the Play Store.
          </Step>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-semibold text-primary">
            Thank you for testing ClanHive
          </p>
          <p className="mt-1 text-xs text-foreground/60">
            Grow. Track. Connect. Together.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

function Step({
  number,
  children,
}: {
  number: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
        {number}
      </div>
      <p className="text-sm text-foreground/70">{children}</p>
    </div>
  );
}