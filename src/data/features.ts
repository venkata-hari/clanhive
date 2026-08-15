import {
  Activity,
  TrendingUp,
  CalendarDays,
  Users,
  MessageCircle,
  Hash,
  Bell,
  UserCircle,
  Trophy,
  UserPlus,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const features: Feature[] = [
  {
    title: "Activities",
    description: "Create, manage, and participate in meaningful activities.",
    icon: Activity,
  },
  {
    title: "Progress Tracking",
    description:
      "Track completed activities, consistency, achievements, and progress.",
    icon: TrendingUp,
  },
  {
    title: "Calendar",
    description: "View activities and progress through an organized calendar.",
    icon: CalendarDays,
  },
  {
    title: "Community",
    description: "Connect with people and participate in shared activities.",
    icon: Users,
  },
  {
    title: "Chat",
    description: "Privately communicate with other ClanHive users.",
    icon: MessageCircle,
  },
  {
    title: "Channels",
    description: "Join channels and participate in shared conversations.",
    icon: Hash,
  },
  {
    title: "Notifications",
    description:
      "Stay updated about messages, activities, reminders, and important events.",
    icon: Bell,
  },
  {
    title: "Profile",
    description:
      "Manage your profile and control the information you choose to make public.",
    icon: UserCircle,
  },
  {
    title: "Achievements",
    description: "Track milestones and celebrate your progress.",
    icon: Trophy,
  },
  {
    title: "Invite Friends",
    description: "Invite friends and grow together.",
    icon: UserPlus,
  },
];

export const whyClanHive = [
  {
    title: "Stay Consistent",
    description: "Build a consistent routine through meaningful activities.",
    icon: Activity,
  },
  {
    title: "Track Your Journey",
    description: "Understand your activities, achievements, and progress.",
    icon: TrendingUp,
  },
  {
    title: "Grow Together",
    description: "Connect with people and stay motivated through community.",
    icon: Users,
  },
  {
    title: "Everything in One Place",
    description:
      "Activities, progress, calendar, chat, channels, notifications, and community in one application.",
    icon: Hash,
  },
];
