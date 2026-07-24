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
];

export const MILESTONES: MilestoneProject[] = [
  {
    id: "tablet-diagnostics",
    number: "1.",
    title: "BUILT THE FOUNDATION OF PASSTHRU TABLET DIAGNOSTICS",
    description:
      "Established core architecture for robust communication between a custom Android OS and VCI hardware, creating a reliable baseline for future diagnostic modules.",
    stack: ["Ionic", "Angular", "Java"],
  },
  {
    id: "virtual-tool",
    number: "2.",
    title: "LED TECHNICAL DELIVERY OF PASSTHRU VIRTUAL TOOL",
    description:
      "Delivered a virtualization version across on-tool and web experiences with strict multi-layer security from app to server, reducing operational risk and improving deployment confidence.",
    stack: ["Ionic", "Angular", "Express", "MariaDB", "Docker"],
  },
  {
    id: "sdk-modernization",
    number: "3.",
    title: "CONTRIBUTED TO PASSTHRU SDK ARCHITECTURE MODERNIZATION",
    description:
      "Helped shape the SDK rewrite with business logic rebuilt in Kotlin, addressing legacy hardware and technology constraints while improving maintainability and long-term extensibility.",
    stack: ["Kotlin", "KMP"],
  },
];
