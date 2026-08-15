# ClanHive: Grow Together

Create a modern, premium, production-ready official website for **ClanHive**, a social personal-growth and community mobile application.

==================================================

IMPORTANT CONTENT RULE — MUST FOLLOW

==================================================

DO NOT USE THESE WORDS ANYWHERE ON THE WEBSITE:

- habit

- habits

- habit-building

- habit tracking

- goal

- goals

- goal-setting

- goal tracking

Use **"Activities"** as the primary terminology instead.

ClanHive should be presented as an **Activities, Progress, Community, and Personal Growth platform**.

Use these concepts throughout the website:

- Activities

- Personal Growth

- Progress

- Consistency

- Achievements

- Calendar

- Community

- Chat

- Channels

- Notifications

- Daily Routines

- Self-Improvement

Examples:

Instead of:

"Track your habits and goals."

Use:

"Create activities, track your progress, and stay consistent."

Instead of:

"Set goals and build better habits."

Use:

"Create meaningful activities and make consistent progress."

Instead of:

"Everything you need for habit and goal tracking."

Use:

"Everything you need to manage activities and track your progress."

Instead of:

"Build Better Habits. Together."

Use:

**Grow. Track. Connect. Together.**

The restricted words must NOT appear anywhere, including:

- Headings

- Paragraphs

- Buttons

- Navigation

- Footer

- About page

- Privacy Policy

- Terms & Conditions

- SEO metadata

- Meta descriptions

- Open Graph metadata

- Accessibility labels

- Image alt text

- App mockup text

- UI text

==================================================

1. TECHNOLOGY STACK

==================================================

Build the entire website using:

- React.js

- Vite

- JavaScript or TypeScript

- `react-router-dom`

- Tailwind CSS or clean modular CSS

- Lucide React icons

DO NOT use Next.js.

Use `react-router-dom` for all internal routing and navigation.

Use:

- BrowserRouter

- Routes

- Route

- NavLink

- Link

- useNavigate where required

Do not use normal `<a href>` for internal page navigation.

==================================================

2. ROUTES

==================================================

Create these routes:

`/`

Home page

`/about`

About page

`/privacy-policy`

Privacy Policy page

`/terms-and-conditions`

Terms & Conditions page

`*`

404 Not Found page

The 404 page should contain:

**Page Not Found**

"The page you're looking for doesn't exist or may have been moved."

Button:

**Back to Home**

Use React Router to navigate back to `/`.

==================================================

3. PROJECT STRUCTURE

==================================================

Use a clean reusable React structure:

src/

├── components/

│   ├── Navbar.jsx

│   ├── Footer.jsx

│   ├── Hero.jsx

│   ├── FeatureCard.jsx

│   ├── FeatureGrid.jsx

│   ├── AppMockup.jsx

│   ├── CTASection.jsx

│   ├── DeveloperCard.jsx

│   ├── LegalLayout.jsx

│   └── TableOfContents.jsx

│

├── pages/

│   ├── Home.jsx

│   ├── About.jsx

│   ├── PrivacyPolicy.jsx

│   ├── TermsConditions.jsx

│   └── NotFound.jsx

│

├── data/

│   ├── features.js

│   └── legal.js

│

├── assets/

│   └── images/

│

├── App.jsx

├── main.jsx

└── index.css

Do not put the entire application inside `App.jsx`.

Use reusable components.

==================================================

4. CLANHIVE BRAND

==================================================

App name:

**ClanHive**

Primary tagline:

**Grow. Track. Connect. Together.**

ClanHive helps users:

- Create and manage activities

- Track activity progress

- Monitor consistency

- Participate in community activities

- Manage their calendar

- Connect with other users

- Chat privately

- Join channels

- Receive notifications

- Manage their profile

- Invite friends

- Track personal progress

Position ClanHive as:

**Activities + Progress + Personal Growth + Community**

==================================================

5. BRAND COLORS

==================================================

Match the existing ClanHive mobile application.

Primary Green:

`#2E7D32`

Light Green:

`#E8F5E9`

Secondary Green:

`#388E3C`

Teal:

`#00897B`

Dark Text:

`#263238`

White:

`#FFFFFF`

Use the primary green for:

- Logo

- Primary buttons

- CTA buttons

- Active navigation

- Important links

- Main icons

- Brand accents

Use light green for:

- Feature backgrounds

- Highlight cards

- Soft sections

- Badges

- Decorative elements

Do not introduce random brand colors.

==================================================

6. TYPOGRAPHY

==================================================

The ClanHive mobile app uses **Poppins**.

Use Poppins throughout the entire website.

Font weights:

- 400 Regular

- 500 Medium

- 600 SemiBold

- 700 Bold

Fallback:

`Poppins, Arial, sans-serif`

Hero:

Poppins 700

Section headings:

Poppins 600–700

Card titles:

Poppins 600

Body:

Poppins 400

Buttons:

Poppins 600

Navbar:

Poppins 500–600

Legal pages:

Poppins 400 body

Poppins 600–700 headings

Do not use another font family.

==================================================

7. NAVBAR

==================================================

Create a modern sticky responsive Navbar.

Left:

**ClanHive**

Create a simple logo inspired by:

- Community

- Connection

- Growth

- Progress

- Hive/network concept

Navigation:

Home

About

Privacy Policy

Terms & Conditions

Right:

**Get Started**

**Download App**

Use `#2E7D32` for the primary CTA.

Use React Router:

- `Link`

- `NavLink`

Internal navigation must use `react-router-dom`.

On mobile, use a hamburger menu.

Add subtle blur/background effect while scrolling.

==================================================

8. HOME PAGE — /

==================================================

Create a premium landing page.

--------------------------------------------------

HERO

--------------------------------------------------

Heading:

**Grow. Track. Connect. Together.**

Description:

"ClanHive helps you create meaningful activities, track your progress, stay consistent, participate in community activities, and connect with people."

Buttons:

**Get Started**

**Download ClanHive**

Use `#2E7D32` for the primary CTA.

Show a modern ClanHive mobile application mockup.

The mockup should visually represent:

- Activities

- Progress

- Calendar

- Community

- Chat

- Channels

- Notifications

- Profile

Do not use fake statistics.

Do not use fake user counts.

--------------------------------------------------

FEATURES

--------------------------------------------------

Heading:

**Everything You Need for Personal Growth**

Subtitle:

"ClanHive brings activities, progress tracking, communication, and community into one simple experience."

Create feature cards for:

### Activities

Create, manage, and participate in meaningful activities.

### Progress Tracking

Track completed activities, consistency, achievements, and progress.

### Calendar

View activities and progress through an organized calendar.

### Community

Connect with people and participate in shared activities.

### Chat

Privately communicate with other ClanHive users.

### Channels

Join channels and participate in shared conversations.

### Notifications

Stay updated about messages, activities, reminders, and important events.

### Profile

Manage your profile and control the information you choose to make public.

### Achievements

Track milestones and celebrate your progress.

### Invite Friends

Invite friends and grow together.

Store these feature definitions in:

`src/data/features.js`

Render them using reusable components.

==================================================

9. ACTIVITIES SECTION

==================================================

Heading:

**Turn Small Actions Into Progress**

Description:

"Create meaningful activities, complete them consistently, and see how your progress grows over time."

Show a modern mobile interface containing:

- Activity cards

- Completion indicators

- Progress percentage

- Streak indicators

- Activity history

- Completion dates

- Progress status

Use:

`#E8F5E9`

as the background.

==================================================

10. PROGRESS SECTION

==================================================

Heading:

**See How Far You've Come**

Description:

"Track your consistency and understand your personal growth journey through clear progress information."

Show:

- Progress percentage

- Completed activities

- Achievement indicators

- Activity history

- Calendar

- Consistency indicators

Use a modern dashboard-style mobile mockup.

==================================================

11. COMMUNITY SECTION

==================================================

Heading:

**Grow Together**

Description:

"Personal growth doesn't have to be a solo journey. Connect with people, participate in activities, join channels, and motivate each other."

Show:

- User profiles

- Community activities

- Chat

- Channels

- Notifications

- Social interactions

Use subtle connected UI elements.

==================================================

12. CHAT & CHANNELS SECTION

==================================================

Heading:

**Stay Connected**

Create two feature areas.

### Private Chat

"Communicate directly with other ClanHive users."

### Channels

"Join shared spaces, participate in conversations, and stay connected with your community."

Show modern:

- Chat UI

- Message bubbles

- Channel list

- User avatars

- Notification indicators

==================================================

13. CALENDAR & NOTIFICATIONS

==================================================

Heading:

**Plan. Track. Stay Consistent.**

Create this visual flow:

Calendar → Activities → Progress → Notifications → Consistency

Description:

"Organize your activities, monitor your progress, and stay informed with useful notifications."

Show:

- Calendar UI

- Activity schedule

- Progress cards

- Notification cards

==================================================

14. WHY CLANHIVE

==================================================

Heading:

**Why ClanHive?**

Create four cards.

### Stay Consistent

Build a consistent routine through meaningful activities.

### Track Your Journey

Understand your activities, achievements, and progress.

### Grow Together

Connect with people and stay motivated through community.

### Everything in One Place

Activities, progress, calendar, chat, channels, notifications, and community in one application.

==================================================

15. PRIVACY SECTION

==================================================

Heading:

**Your Privacy Matters**

Description:

"ClanHive is designed to give users control over their information and what they choose to share with others."

Mention:

- Account privacy

- Public profile controls

- Responsible data handling

- Account deletion

Button:

**Read Privacy Policy**

Navigate using React Router to:

`/privacy-policy`

==================================================

16. FINAL CTA

==================================================

Heading:

**Ready to Grow Together?**

Description:

"Start your journey with ClanHive, create meaningful activities, track your progress, connect with your community, and keep moving forward."

Buttons:

**Get Started**

**Download ClanHive**

Use:

`GOOGLE_PLAY_STORE_URL`

as a configuration placeholder.

Do not create a fake Google Play URL.

==================================================

17. ABOUT PAGE — /about

==================================================

Hero:

**About ClanHive**

Subtitle:

**Grow. Track. Connect. Together.**

Description:

"ClanHive is a social personal-growth and self-improvement platform designed to help people create meaningful activities, track progress, participate in community experiences, and connect with others."

==================================================

18. OUR MISSION

==================================================

Heading:

**Our Mission**

Focus on:

- Personal growth

- Consistency

- Accountability

- Progress

- Positive activities

- Community

- Self-improvement

Message:

"We believe meaningful change starts with small, consistent actions."

==================================================

19. DEVELOPER / FOUNDER

==================================================

Heading:

**Meet the Developer**

Use real information if provided.

If information is not provided, use placeholders:

`[Developer Name]`

`Founder & Developer of ClanHive`

Description:

"ClanHive was created with the vision of combining personal development with meaningful social connection. The goal is to create a simple platform where people can track their progress while staying connected with others."

Optional:

- Developer Name

- Founder

- Developer role

- Location

- Contact Email

- LinkedIn

- GitHub

DO NOT invent personal information.

Create a professional DeveloperCard component.

==================================================

20. WHY CLANHIVE WAS CREATED

==================================================

Heading:

**Why ClanHive?**

Description:

"Personal growth can be difficult when you try to do everything alone. ClanHive brings activities, progress, communication, and community into one experience."

==================================================

21. OUR VISION

==================================================

Heading:

**Our Vision**

Description:

"To create a positive digital space where people can grow, track meaningful progress, participate in activities, and connect with others."

End with:

**Grow. Track. Connect. Together.**

==================================================

22. PRIVACY POLICY — /privacy-policy

==================================================

Create a professional legal documentation page.

Use:

`LegalLayout.jsx`

and:

`TableOfContents.jsx`

Desktop:

- Left table of contents

- Main legal content

Mobile:

- Collapsible table of contents

- Single-column readable content

Sections:

1. Introduction

2. Information We Collect

3. Account Information

4. Activity Information

5. Progress and Activity Data

6. Profile Information

7. Chat and Messages

8. Channels and Community Activities

9. Calendar Information

10. Notifications

11. How We Use Information

12. Data Storage

13. Data Security

14. Data Sharing

15. Third-Party Services

16. Data Retention

17. Public Information

18. Your Rights

19. Account Deletion

20. Children's Privacy

21. Changes to This Privacy Policy

22. Contact Us

Use placeholders:

`[Company/Developer Name]`

`[Support Email]`

`[Effective Date]`

Do not invent legal compliance certifications or unsupported security claims.

==================================================

23. TERMS & CONDITIONS — /terms-and-conditions

==================================================

Create a professional legal documentation page using the same LegalLayout.

Sections:

1. Acceptance of Terms

2. Eligibility

3. User Accounts

4. Using ClanHive

5. Activities

6. User Content

7. Public Content

8. Chat and Communication

9. Channels and Communities

10. Prohibited Activities

11. Harassment and Abuse

12. Intellectual Property

13. Notifications

14. Service Availability

15. Account Suspension or Termination

16. Disclaimer

17. Limitation of Liability

18. Changes to These Terms

19. Contact Us

Address ClanHive's social features.

Users must not:

- Attempt unauthorized access

- Distribute malicious software

- Harass or threaten others

- Impersonate another person

- Use ClanHive for illegal activities

- Abuse chat or channels

- Interfere with the service

- Upload harmful or unlawful content

Users are responsible for content they submit.

Do not create unreasonable or unsupported legal claims.

==================================================

24. 404 PAGE — /*

==================================================

Create a clean branded 404 page.

Heading:

**Page Not Found**

Description:

"The page you're looking for doesn't exist or may have been moved."

Button:

**Back to Home**

Use:

`useNavigate()`

or:

`Link`

from `react-router-dom`.

==================================================

25. FOOTER

==================================================

Create a reusable Footer component.

Display:

**ClanHive**

"Grow. Track. Connect. Together."

Product:

- Home

- About

- Activities

- Community

Legal:

- Privacy Policy

- Terms & Conditions

Developer:

- About Developer

- Contact

Download:

- Google Play

Use React Router for internal links.

Bottom:

**© 2026 ClanHive. All rights reserved.**

==================================================

26. DESIGN STYLE

==================================================

The website should feel:

- Modern

- Premium

- Clean

- Friendly

- Motivating

- Trustworthy

- Community-focused

- Mobile-app focused

Use:

- Poppins

- #2E7D32

- #E8F5E9

- #388E3C

- #00897B

- Rounded cards

- Soft shadows

- Subtle borders

- White sections

- Smooth transitions

- Large mobile app mockups

- Strong typography

- Excellent spacing

Avoid:

- Excessive gradients

- Excessive animations

- Clutter

- Generic stock-photo-heavy design

- Fake testimonials

- Fake statistics

- Fake reviews

- Fake user counts

- Random colors

==================================================

27. RESPONSIVE DESIGN

==================================================

The website must work perfectly on:

- Desktop

- Laptop

- Tablet

- Mobile

Create proper responsive layouts.

Do not simply shrink desktop content.

Ensure:

- Mobile navbar works correctly

- Cards stack correctly

- Text remains readable

- App mockups resize correctly

- Legal pages remain readable

- Footer works correctly

- Buttons are touch-friendly

==================================================

28. ANIMATIONS

==================================================

Use subtle professional animations:

- Fade-in

- Scroll reveal

- Card hover

- Button hover

- Smooth transitions

- Floating app UI

Do not overuse animations.

Prioritize performance.

==================================================

29. SEO

==================================================

Home:

Title:

**ClanHive — Grow. Track. Connect. Together.**

Description:

"ClanHive helps you create activities, track progress, participate in community activities, connect with others, and grow together."

About:

**About ClanHive — Grow, Track & Connect**

Privacy:

**ClanHive Privacy Policy**

Terms:

**ClanHive Terms & Conditions**

Add:

- Meta descriptions

- Open Graph metadata

- Semantic HTML

- Proper heading hierarchy

- Accessible labels

- Descriptive image alt text

Do not use the restricted words anywhere in SEO metadata.

==================================================

30. CONFIGURATION

==================================================

Create a configuration file for values that will be replaced later.

Example:

```js

export const APP_CONFIG = {

  appName: "ClanHive",

  googlePlayUrl: "GOOGLE_PLAY_STORE_URL",

  supportEmail: "SUPPORT_EMAIL",

  developerName: "DEVELOPER_NAME",

  developerLinkedIn: "DEVELOPER_LINKEDIN",

  developerGithub: "DEVELOPER_GITHUB",

};

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://clanhive-growth-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/73c9d798-777f-404b-a2f5-e1718ff915e7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
