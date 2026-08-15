import { APP_CONFIG } from "@/config";

export type LegalSection = {
  id: string;
  title: string;
  body: string[];
  list?: string[];
};

const C = APP_CONFIG.companyName;
const E = APP_CONFIG.supportEmail;

export const privacySections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: [
      `Effective Date: August 15, 2026`,
      `This Privacy Policy explains how ${C} ("we", "us") handles information when you use the ClanHive mobile application and website. By using ClanHive, you agree to the practices described here.`,
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: [
      "We collect only the information needed to operate ClanHive and provide its activities, progress, communication, and community features.",
    ],
    list: [
      "Information you provide when creating an account",
      "Information you create inside the app, such as activities and progress entries",
      "Information you choose to share publicly",
      "Technical information required to deliver and secure the service",
    ],
  },
  {
    id: "account-information",
    title: "Account Information",
    body: [
      "When you register, we collect basic account details such as your name or username, email address, and authentication data via Firebase Authentication to identify your account and allow you to sign in securely.",
    ],
  },
  {
    id: "activity-information",
    title: "Activity Information",
    body: [
      "Activities you create, edit, join, or complete are stored in Google Firebase Realtime Database so ClanHive can display them to you, show them in your calendar, and reflect them in your progress.",
    ],
  },
  {
    id: "progress-and-activity-data",
    title: "Progress and Activity Data",
    body: [
      "We store completion records, consistency information, achievements, and history connected to your activities in Google Firebase Realtime Database. This data is used to present your personal progress inside the app.",
    ],
  },
  {
    id: "profile-information",
    title: "Profile Information",
    body: [
      "Your profile may include a display name, photo, short description, and other optional details. You control which parts of your profile are visible to other users.",
    ],
  },
  {
    id: "chat-and-messages",
    title: "Chat and Messages",
    body: [
      "Messages you send through ClanHive are processed and stored using Google Firebase Realtime Database so they can be delivered and displayed to the intended recipients. Please do not share sensitive personal information through chat.",
    ],
  },
  {
    id: "channels-and-community-activities",
    title: "Channels and Community Activities",
    body: [
      "Content you post in channels or shared community activities is visible to other participants of those spaces. Consider this before posting.",
    ],
  },
  {
    id: "calendar-information",
    title: "Calendar Information",
    body: [
      "Scheduling details connected to your activities are stored so your calendar view remains accurate and up to date.",
    ],
  },
  {
    id: "notifications",
    title: "Notifications",
    body: [
      "If you enable notifications, we process FCM push notification tokens using Firebase Cloud Messaging to send reminders, message alerts, and important service updates. You can disable notifications at any time from your device settings.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    body: ["We use the information described above to:"],
    list: [
      "Provide and maintain ClanHive features",
      "Display your activities, calendar, and progress",
      "Deliver messages, channel content, and notifications",
      "Support community participation and connections",
      "Improve reliability, usability, and safety of the service",
      "Respond to support requests",
    ],
  },
  {
    id: "data-storage",
    title: "Data Storage",
    body: [
      "Information is stored securely using Google Firebase cloud infrastructure (Firebase Realtime Database) and Vercel hosting services.",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    body: [
      "We take reasonable technical and organizational measures to protect your information. No method of transmission or storage can be guaranteed to be completely secure, and we do not claim absolute security.",
    ],
  },
  {
    id: "data-sharing",
    title: "Data Sharing",
    body: [
      "We do not sell your personal information. Information may be shared with trusted service providers who help operate ClanHive, or where required by applicable law.",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    body: [
      "ClanHive relies on third-party service providers for infrastructure, authentication, database management, and notification delivery. These providers handle data according to their respective privacy policies:",
    ],
    list: [
      "Google Firebase Authentication (User Authentication)",
      "Google Firebase Realtime Database (Data Storage & Real-Time Sync)",
      "Google Firebase Cloud Messaging / FCM (Push Notification Delivery)",
      "Vercel (Web Hosting Infrastructure)",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    body: [
      "We keep your information for as long as your account remains active or as needed to provide the service. When you request account deletion, associated personal data is permanently removed or anonymized from active servers.",
    ],
  },
  {
    id: "public-information",
    title: "Public Information",
    body: [
      "Some information, such as parts of your profile, community participation, and channel messages, may be visible to other users. You decide what you make public.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: ["Depending on your location, you may have the right to:"],
    list: [
      "Access the information associated with your account",
      "Correct inaccurate information",
      "Request deletion of your account and personal data",
      "Object to or restrict certain processing",
    ],
  },
  {
    id: "account-deletion",
    title: "Account Deletion",
    body: [
      `You have the right to delete your account and associated data at any time. You can initiate account deletion within the settings section of the ClanHive application, or by submitting a deletion request via email to ${E}. Upon receiving your request, your profile, authentication records, and real-time database records will be permanently removed from active servers.`,
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    body: [
      "ClanHive is not intended for children below the minimum age required by applicable law. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us for prompt deletion.",
    ],
  },
  {
    id: "changes-to-this-privacy-policy",
    title: "Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time. Material changes will be communicated within the application or on this page, along with an updated effective date.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    body: [`If you have questions or concerns regarding this Privacy Policy, please contact ${C} at ${E}.`],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "acceptance-of-terms",
    title: "Acceptance of Terms",
    body: [
      `Effective Date: August 15, 2026`,
      `By downloading, accessing, or using ${C}, you agree to these Terms & Conditions. If you do not agree, please do not use the service.`,
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    body: [
      `You may use ${C} only if you can form a binding agreement under the laws of your country and meet the minimum age requirement that applies to you.`,
    ],
  },
  {
    id: "user-accounts",
    title: "User Accounts",
    body: [
      "You are responsible for the accuracy of your account details and for keeping your credentials secure. You are responsible for all actions taken through your account.",
    ],
  },
  {
    id: "using-clanhive",
    title: "Using ClanHive",
    body: [
      `${C} is provided for personal growth, activity management, progress tracking, and community participation. You agree to use the service respectfully and lawfully.`,
    ],
  },
  {
    id: "activities",
    title: "Activities",
    body: [
      `You may create, join, and complete activities inside ${C}. Activity records reflect the information you enter and are provided for personal reference only.`,
    ],
  },
  {
    id: "user-content",
    title: "User Content",
    body: [
      "You retain ownership of content you submit. By posting content, you grant us a limited licence to store, display, and transmit it as required to operate the service.",
    ],
  },
  {
    id: "public-content",
    title: "Public Content",
    body: [
      "Content you choose to make public, including parts of your profile and community participation, may be visible to other users. You are responsible for what you choose to share.",
    ],
  },
  {
    id: "chat-and-communication",
    title: "Chat and Communication",
    body: [
      "Chat is intended for respectful communication between users. Do not use chat to send unlawful, abusive, deceptive, or unsolicited promotional content.",
    ],
  },
  {
    id: "ugc-policy-and-moderation",
    title: "User-Generated Content (UGC) Policy & Moderation",
    body: [
      `${C} maintains a zero-tolerance policy for objectionable content and abusive behavior. Users are strictly prohibited from submitting, sharing, or posting objectionable material, including hate speech, harassment, sexually explicit content, or illegal material.`,
      "We provide in-app tools allowing users to report objectionable content and block abusive users. We reserve the right to review reported content, remove violating material, and terminate non-compliant accounts.",
    ],
  },
  {
    id: "channels-and-communities",
    title: "Channels and Communities",
    body: [
      "Channels are shared spaces. Participants are expected to follow these Terms and any additional rules set for a channel. We may remove content or participation that violates these Terms.",
    ],
  },
  {
    id: "prohibited-activities",
    title: "Prohibited Activities",
    body: [`When using ${C}, you must not:`],
    list: [
      "Attempt unauthorized access to accounts, systems, or data",
      "Distribute malicious software or spam",
      "Harass, threaten, or intimidate others",
      "Impersonate another person or entity",
      "Use the service for illegal purposes",
      "Abuse chat or community channels",
      "Interfere with or disrupt the operation of the service",
      "Upload harmful, dangerous, or unlawful content",
    ],
  },
  {
    id: "harassment-and-abuse",
    title: "Harassment and Abuse",
    body: [
      `${C} is a community-focused platform. Harassment, hate speech, threats, and targeted abuse are not permitted and will result in removal of content or permanent termination of access.`,
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: [
      `The ${C} name, brand, interface, and software are owned by the developer. You may not copy, modify, or redistribute them without permission.`,
    ],
  },
  {
    id: "notifications",
    title: "Notifications",
    body: [
      "We may send service-related notifications such as reminders, message alerts, and important updates via push notifications. You can manage notification permissions from your device settings.",
    ],
  },
  {
    id: "service-availability",
    title: "Service Availability",
    body: [
      `We aim to keep ${C} available and reliable, but the service may be interrupted for maintenance, updates, or reasons outside our control. Features may change over time.`,
    ],
  },
  {
    id: "account-suspension-or-termination",
    title: "Account Suspension or Termination",
    body: [
      `We may suspend or terminate access where these Terms are violated or where necessary to protect users and the service. You may stop using ${C} and delete your account at any time.`,
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: [
      `${C} is provided on an "as is" and "as available" basis. The service supports personal growth and is not a substitute for professional medical, psychological, financial, or legal advice.`,
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    body: [
      `To the extent permitted by applicable law, the developer is not liable for indirect or consequential losses arising from the use of ${C}.`,
    ],
  },
  {
    id: "changes-to-these-terms",
    title: "Changes to These Terms",
    body: [
      `These Terms may be updated from time to time. Continued use of ${C} after an update means you accept the revised Terms.`,
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    body: [`For questions about these Terms, contact ${C} at ${E}.`],
  },
];
