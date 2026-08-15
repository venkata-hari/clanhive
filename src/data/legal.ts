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
      `This Privacy Policy explains how ${C} ("we", "us") handles information when you use the ClanHive mobile application and this website. By using ClanHive, you agree to the practices described here.`,

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
      "When you register, we collect basic account details such as your name or username, email address, and authentication data. This information identifies your account and allows you to sign in.",
    ],
  },
  {
    id: "activity-information",
    title: "Activity Information",
    body: [
      "Activities you create, edit, join, or complete are stored so ClanHive can display them to you, show them in your calendar, and reflect them in your progress.",
    ],
  },
  {
    id: "progress-and-activity-data",
    title: "Progress and Activity Data",
    body: [
      "We store completion records, consistency information, achievements, and history connected to your activities. This data is used to present your personal progress inside the app.",
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
      "Messages you send through ClanHive are stored so they can be delivered and displayed to the intended recipients. Please do not share sensitive personal information through chat.",
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
      "If you enable notifications, we may process device tokens and notification preferences to send reminders, message alerts, and important service updates. You can disable notifications from your device settings.",
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
      "Information is stored using third-party infrastructure and database providers used to operate ClanHive. Storage locations depend on the providers we use.",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    body: [
      "We take reasonable technical and organisational measures to protect your information. No method of transmission or storage can be guaranteed to be completely secure, and we do not claim absolute security.",
    ],
  },
  {
    id: "data-sharing",
    title: "Data Sharing",
    body: [
      "We do not sell your personal information. Information may be shared with service providers who help operate ClanHive, or where required by applicable law.",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    body: [
      "ClanHive relies on third-party services for functions such as hosting, authentication, storage, and notification delivery. These providers process information according to their own terms and policies.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    body: [
      "We keep your information for as long as your account remains active or as needed to provide the service. When you delete your account, associated data is removed or anonymised within a reasonable period, except where retention is required by law.",
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
      "Request deletion of your account and data",
      "Object to or restrict certain processing",
    ],
  },
  {
    id: "account-deletion",
    title: "Account Deletion",
    body: [
      `You can request deletion of your ClanHive account from within the application, or by contacting us at ${E}. Deleting your account removes your profile and associated personal data from active systems.`,
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    body: [
      "ClanHive is not intended for children below the minimum age required by the laws of their country. We do not knowingly collect information from such users. If you believe a child has provided information, contact us so we can remove it.",
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
    body: [`If you have questions about this Privacy Policy, contact ${C} at ${E}.`],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "acceptance-of-terms",
    title: "Acceptance of Terms",
    body: [
      `By downloading, accessing, or using ClanHive, you agree to these Terms & Conditions. If you do not agree, please do not use the service.`,
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    body: [
      "You may use ClanHive only if you can form a binding agreement under the laws of your country and meet the minimum age requirement that applies to you.",
    ],
  },
  {
    id: "user-accounts",
    title: "User Accounts",
    body: [
      "You are responsible for the accuracy of your account details and for keeping your credentials secure. You are responsible for actions taken through your account.",
    ],
  },
  {
    id: "using-clanhive",
    title: "Using ClanHive",
    body: [
      "ClanHive is provided for personal growth, activity management, progress tracking, and community participation. You agree to use the service respectfully and lawfully.",
    ],
  },
  {
    id: "activities",
    title: "Activities",
    body: [
      "You may create, join, and complete activities inside ClanHive. Activity records reflect the information you enter and are provided for personal reference only.",
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
    id: "channels-and-communities",
    title: "Channels and Communities",
    body: [
      "Channels are shared spaces. Participants are expected to follow these Terms and any additional rules set for a channel. We may remove content or participation that violates these Terms.",
    ],
  },
  {
    id: "prohibited-activities",
    title: "Prohibited Activities",
    body: ["When using ClanHive, you must not:"],
    list: [
      "Attempt unauthorized access to accounts, systems, or data",
      "Distribute malicious software",
      "Harass or threaten others",
      "Impersonate another person",
      "Use ClanHive for illegal purposes",
      "Abuse chat or channels",
      "Interfere with or disrupt the service",
      "Upload harmful or unlawful content",
    ],
  },
  {
    id: "harassment-and-abuse",
    title: "Harassment and Abuse",
    body: [
      "ClanHive is a community-focused platform. Harassment, hate speech, threats, and targeted abuse are not permitted and may result in removal of content or termination of access.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: [
      "The ClanHive name, brand, interface, and software are owned by the developer. You may not copy, modify, or redistribute them without permission.",
    ],
  },
  {
    id: "notifications",
    title: "Notifications",
    body: [
      "We may send service-related notifications such as reminders, message alerts, and important updates. You can manage notification permissions from your device settings.",
    ],
  },
  {
    id: "service-availability",
    title: "Service Availability",
    body: [
      "We aim to keep ClanHive available and reliable, but the service may be interrupted for maintenance, updates, or reasons outside our control. Features may change over time.",
    ],
  },
  {
    id: "account-suspension-or-termination",
    title: "Account Suspension or Termination",
    body: [
      "We may suspend or terminate access where these Terms are violated or where necessary to protect users and the service. You may stop using ClanHive and delete your account at any time.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: [
      "ClanHive is provided on an \"as is\" and \"as available\" basis. The service supports personal growth and is not a substitute for professional medical, psychological, financial, or legal advice.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    body: [
      "To the extent permitted by applicable law, the developer is not liable for indirect or consequential losses arising from the use of ClanHive.",
    ],
  },
  {
    id: "changes-to-these-terms",
    title: "Changes to These Terms",
    body: [
      "These Terms may be updated from time to time. Continued use of ClanHive after an update means you accept the revised Terms.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    body: [`For questions about these Terms, contact ${C} at ${E}.`],
  },
];
