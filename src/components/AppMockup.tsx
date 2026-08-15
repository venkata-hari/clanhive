import {
  Bell,
  CheckCircle2,
  Flame,
  Hash,
  MessageCircle,
  Users,
  CalendarDays,
  Trophy,
  Home,
  UserCircle,
} from "lucide-react";

type Variant = "overview" | "activities" | "progress" | "community" | "chat" | "calendar";

function Phone({
  children,
  label,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative mx-auto w-full max-w-[300px] rounded-[2.5rem] border border-border bg-foreground/5 p-2.5 shadow-[var(--shadow-device)] ${className}`}
    >
      <div className="overflow-hidden rounded-[2rem] bg-background">
        <div className="flex items-center justify-between bg-primary px-5 pt-3 pb-2 text-[10px] font-medium text-primary-foreground">
          <span>9:41</span>
          <span className="h-1.5 w-16 rounded-full bg-primary-foreground/40" />
          <span>ClanHive</span>
        </div>
        <div className="min-h-[430px] space-y-3 bg-surface p-4">{children}</div>
        <div className="flex items-center justify-around border-t border-border bg-background px-2 py-3">
          {[Home, CalendarDays, Users, MessageCircle, UserCircle].map((Icon, i) => (
            <Icon
              key={i}
              aria-hidden="true"
              className={`h-5 w-5 ${i === 0 ? "text-primary" : "text-muted-foreground"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({
  title,
  meta,
  done,
}: {
  title: string;
  meta: string;
  done?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3">
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
          done ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
        }`}
      >
        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13px] font-semibold">{title}</span>
        <span className="block text-[11px] text-muted-foreground">{meta}</span>
      </span>
    </div>
  );
}

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-[11px] font-medium">
        <span>{label}</span>
        <span className="text-primary">{value}%</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-accent">
        <div
          className="h-2 rounded-full bg-primary"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function AppMockup({
  variant = "overview",
  className = "",
  float = false,
}: {
  variant?: Variant;
  className?: string;
  float?: boolean;
}) {
  const wrapper = `${float ? "float-slow" : ""} ${className}`;

  if (variant === "activities") {
    return (
      <Phone
        label="ClanHive activities screen showing activity cards, completion indicators and progress"
        className={wrapper}
      >
        <p className="text-sm font-semibold">Today&apos;s Activities</p>
        <Row title="Morning Walk" meta="Completed · 12 Aug" done />
        <Row title="Read 20 Pages" meta="Completed · 12 Aug" done />
        <Row title="Evening Reflection" meta="Scheduled · 8:00 PM" />
        <div className="rounded-2xl border border-border bg-card p-3">
          <Bar label="Weekly progress" value={78} />
          <div className="mt-3 flex items-center gap-2 text-[11px] font-medium text-teal">
            <Flame className="h-4 w-4" aria-hidden="true" /> 14 days consistent
          </div>
        </div>
        <div className="rounded-2xl bg-accent p-3 text-[11px] text-accent-foreground">
          Activity history · 26 completions this month
        </div>
      </Phone>
    );
  }

  if (variant === "progress") {
    return (
      <Phone
        label="ClanHive progress dashboard with completion percentage, achievements and calendar"
        className={wrapper}
      >
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-[11px] text-muted-foreground">Overall progress</p>
          <p className="text-3xl font-bold text-primary">82%</p>
          <div className="mt-3 space-y-2">
            <Bar label="Consistency" value={74} />
            <Bar label="Completed activities" value={90} />
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1.5 rounded-2xl border border-border bg-card p-3">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className={`aspect-square rounded-[5px] ${
                i % 5 === 0 ? "bg-accent" : i % 3 === 0 ? "bg-teal/60" : "bg-primary/80"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-accent p-3">
          <Trophy className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-[11px] font-medium text-accent-foreground">
            Achievement unlocked · 30 activities completed
          </span>
        </div>
      </Phone>
    );
  }

  if (variant === "community") {
    return (
      <Phone
        label="ClanHive community screen with member profiles, shared activities and notifications"
        className={wrapper}
      >
        <p className="text-sm font-semibold">Community</p>
        {["Sunrise Runners", "Readers Circle", "Mindful Evenings"].map((n, i) => (
          <div
            key={n}
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-[12px] font-bold text-accent-foreground">
              {n.slice(0, 2)}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-semibold">{n}</span>
              <span className="block text-[11px] text-muted-foreground">
                {8 + i * 3} members · shared activity
              </span>
            </span>
            <Users className="h-4 w-4 text-primary" aria-hidden="true" />
          </div>
        ))}
        <div className="flex items-center gap-3 rounded-2xl bg-accent p-3">
          <Bell className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="text-[11px] text-accent-foreground">
            New activity shared in your community
          </span>
        </div>
      </Phone>
    );
  }

  if (variant === "chat") {
    return (
      <Phone
        label="ClanHive chat screen with private messages, channel list and notification indicators"
        className={wrapper}
      >
        <p className="text-sm font-semibold">Messages</p>
        <div className="space-y-2">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-card p-3 text-[12px] shadow-[var(--shadow-card)]">
            How did your activity go today?
          </div>
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-primary p-3 text-[12px] text-primary-foreground">
            Completed it — three weeks consistent now.
          </div>
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-card p-3 text-[12px] shadow-[var(--shadow-card)]">
            Amazing progress. Let&apos;s keep going.
          </div>
        </div>
        <p className="pt-1 text-[11px] font-semibold text-muted-foreground">Channels</p>
        {["#morning-routines", "#self-improvement"].map((c, i) => (
          <div
            key={c}
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3"
          >
            <Hash className="h-4 w-4 text-teal" aria-hidden="true" />
            <span className="flex-1 text-[12px] font-medium">{c}</span>
            {i === 0 && (
              <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
                3
              </span>
            )}
          </div>
        ))}
      </Phone>
    );
  }

  if (variant === "calendar") {
    return (
      <Phone
        label="ClanHive calendar screen with scheduled activities and reminder notifications"
        className={wrapper}
      >
        <p className="text-sm font-semibold">August</p>
        <div className="grid grid-cols-7 gap-1.5 rounded-2xl border border-border bg-card p-3 text-center text-[10px]">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className="text-muted-foreground">
              {d}
            </span>
          ))}
          {Array.from({ length: 21 }).map((_, i) => (
            <span
              key={i}
              className={`rounded-md py-1 ${
                i === 11
                  ? "bg-primary font-bold text-primary-foreground"
                  : i % 4 === 0
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/70"
              }`}
            >
              {i + 1}
            </span>
          ))}
        </div>
        <Row title="Morning Walk" meta="7:00 AM · scheduled" />
        <Row title="Study Session" meta="6:30 PM · scheduled" />
        <div className="flex items-center gap-3 rounded-2xl bg-accent p-3">
          <Bell className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="text-[11px] text-accent-foreground">
            Reminder · Evening activity in 30 minutes
          </span>
        </div>
      </Phone>
    );
  }

  return (
    <Phone
      label="ClanHive application showing activities, progress, calendar, community, chat, channels, notifications and profile"
      className={wrapper}
    >
      <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-[12px] font-bold text-accent-foreground">
          CH
        </span>
        <span className="flex-1">
          <span className="block text-[13px] font-semibold">Your profile</span>
          <span className="block text-[11px] text-muted-foreground">
            14 days consistent
          </span>
        </span>
        <Bell className="h-4 w-4 text-primary" aria-hidden="true" />
      </div>
      <div className="rounded-2xl border border-border bg-card p-3">
        <Bar label="Today&apos;s progress" value={66} />
      </div>
      <Row title="Morning Walk" meta="Completed" done />
      <Row title="Read 20 Pages" meta="In progress" />
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-2xl bg-accent p-3 text-[11px] font-medium text-accent-foreground">
          <CalendarDays className="mb-1 h-4 w-4 text-primary" aria-hidden="true" />
          Calendar
        </div>
        <div className="rounded-2xl bg-accent p-3 text-[11px] font-medium text-accent-foreground">
          <Hash className="mb-1 h-4 w-4 text-teal" aria-hidden="true" />
          Channels
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3">
        <MessageCircle className="h-4 w-4 text-primary" aria-hidden="true" />
        <span className="text-[11px] text-muted-foreground">
          New message from your community
        </span>
      </div>
    </Phone>
  );
}
