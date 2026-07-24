export type TechTag = {
  name: string;
  iconClass?: string;
  category: "language" | "framework";
};

export type MilestoneProject = {
  id: string;
  number: string;
  title: string;
  description: string;
  mainContribution: string;
  stack: string[];
};

export const TECH_TAGS: TechTag[] = [
  { name: "TypeScript", iconClass: "devicon-typescript-plain", category: "language" },
  { name: "Java", iconClass: "devicon-java-plain", category: "language" },
  { name: "Kotlin", iconClass: "devicon-kotlin-plain", category: "language" },
  { name: "Rust", iconClass: "devicon-rust-original", category: "language" },
  { name: "Docker", iconClass: "devicon-docker-plain", category: "framework" },
  { name: "Ionic", iconClass: "devicon-ionic-original", category: "framework" },
  { name: "Tauri", iconClass: "devicon-tauri-plain", category: "framework" },
  { name: "Express", iconClass: "devicon-express-original", category: "framework" },
  { name: "Angular", iconClass: "devicon-angular-plain", category: "framework" },
  { name: "MariaDB", iconClass: "devicon-mariadb-original", category: "framework" },
  { name: "KMP", iconClass: "devicon-kotlin-plain", category: "framework" },
  { name: "Linux", iconClass: "devicon-linux-plain", category: "framework" },
  { name: "Nginx", iconClass: "devicon-nginx-original", category: "framework" },
  { name: "Networking", category: "framework" },
];

export const MILESTONES: MilestoneProject[] = [
  {
    id: "tablet-diagnostics",
    number: "1.",
    title: "BUILT THE FOUNDATION OF PASSTHRU TABLET DIAGNOSTICS",
    description:
      "Designed and delivered the first stable diagnostic baseline for a custom Android tablet connected to VCI hardware, including transport protocol handling, message lifecycle, and failure recovery for workshop conditions.",
    mainContribution:
      "Defined the communication architecture and implemented critical reliability layers (session control, error handling, and reconnect strategy) that accelerated onboarding for subsequent diagnostic features.",
    stack: ["Ionic", "Angular", "Java"],
  },
  {
    id: "virtual-tool",
    number: "2.",
    title: "LED TECHNICAL DELIVERY OF PASSTHRU VIRTUAL TOOL",
    description:
      "Delivered the Passthru Virtual Tool across on-device and web platforms with a unified architecture, integrating secure authentication flows and hardened service communication between client and backend layers.",
    mainContribution:
      "Led technical execution end-to-end: translated product scope into deliverable modules, drove cross-team integration, and set security-first implementation standards that reduced deployment risk.",
    stack: ["Ionic", "Angular", "Express", "MariaDB", "Docker"],
  },
  {
    id: "sdk-modernization",
    number: "3.",
    title: "CONTRIBUTED TO PASSTHRU SDK ARCHITECTURE MODERNIZATION",
    description:
      "Contributed to the SDK modernization initiative by migrating legacy business flows to Kotlin and introducing cleaner module boundaries to support multiple hardware generations and future service expansion.",
    mainContribution:
      "Reworked core business logic for maintainability, collaborated on architectural decisions for Kotlin Multiplatform readiness, and improved long-term extensibility without breaking existing integrations.",
    stack: ["Kotlin", "KMP"],
  },
  {
    id: "system-admin-infrastructure",
    number: "4.",
    title: "OPERATED COMPANY LOCAL SERVER AND NETWORK INFRASTRUCTURE",
    description:
      "Handled day-to-day system administration for local servers and enterprise network infrastructure, ensuring internal tools, shared services, and developer environments remained stable and available.",
    mainContribution:
      "Managed server provisioning, access policies, and network segmentation; monitored system health; and resolved incidents quickly to maintain secure and reliable operations across teams.",
    stack: ["Linux", "Docker", "Nginx", "Networking"],
  },
];
