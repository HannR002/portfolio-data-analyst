export const profile = {
  name: "Muhammad Farhan",
  role: "Data & Systems Portfolio",
  location: "Jambi, Indonesia",
  email: "mf13132504@gmail.com",
  github: "https://github.com/HannR002",
  whatsapp: "https://wa.me/6289699161526",
};

export type ProjectCategory =
  | "Spatial analytics"
  | "Information systems"
  | "Digital commerce"
  | "Web platforms"
  | "Academic publishing"
  | "Personal apps";
export type Project = {
  slug: string;
  number: string;
  title: string;
  category: ProjectCategory;
  stage: string;
  summary: string;
  stack: string[];
  repository: string;
  evidence: string;
  evidenceLabel: string;
  problem: string;
  approach: string[];
  delivered: string[];
  next: string;
  visual:
    | "spatial"
    | "campus"
    | "florist"
    | "platform"
    | "publisher"
    | "journal"
    | "cat";
  attribution?: string;
};

// Editorial snapshots verified against linked public sources on 19 October 2026.
// Implementation evidence does not establish production adoption or business impact.
export const projects: Project[] = [
  {
    slug: "p4i-webgis",
    number: "01",
    title: "P4I Spatial Analytics",
    category: "Spatial analytics",
    stage: "In development",
    summary:
      "Connecting spatial data, map exploration, and a structured flood-risk analysis workflow in one WebGIS application.",
    stack: ["Next.js", "PostGIS", "Leaflet", "Earth Engine"],
    repository: "https://github.com/HannR002/p4i-webgis",
    evidence:
      "https://github.com/HannR002/p4i-webgis/blob/main/docs/flood-analysis-architecture.md",
    evidenceLabel: "Architecture documentation",
    problem:
      "Spatial analysis needs more than a map. Boundaries, model inputs, access permissions, and analysis results need a consistent path through the application.",
    approach: [
      "Connect the map interface to server-side boundary and analysis repositories.",
      "Separate numerical analysis results from temporary map tiles, with explicit model and dataset versions.",
      "Document authorization, migration, import, and staging checks alongside the application.",
    ],
    delivered: [
      "A Next.js application with Leaflet mapping and a PostGIS-oriented data architecture.",
      "A documented flood-analysis API contract and Earth Engine integration workflow.",
      "Migration, boundary-import, and deployment guidance for review before external changes.",
    ],
    next: "Complete staging verification and validate model assumptions, datasets, and thresholds with the relevant domain stakeholders. Production use and analytical accuracy are not established by this case study.",
    visual: "spatial",
  },
  {
    slug: "kampushub",
    number: "02",
    title: "KampusHub",
    category: "Information systems",
    stage: "Interactive prototype",
    summary:
      "Exploring a student marketplace with scheduled meetups, designated meeting points, and a transaction verification flow.",
    stack: ["React", "TypeScript", "SQL"],
    repository: "https://github.com/HannR002/kantin-fst-ecommerce",
    evidence:
      "https://github.com/HannR002/kantin-fst-ecommerce/blob/main/src/App.tsx",
    evidenceLabel: "Prototype implementation",
    problem:
      "A campus marketplace needs a clear handover process: where to meet, when to arrive, and how both parties confirm the exchange.",
    approach: [
      "Model buyer, seller, listing, meeting point, and scheduled transaction states.",
      "Prototype meetup scheduling and a handshake verification interaction.",
      "Use a sandbox to explore transaction rules and alternative user personas.",
    ],
    delivered: [
      "An interactive marketplace sandbox with sample listings and user profiles.",
      "Meetup scheduling and transaction verification interface components.",
      "SQL and transaction-action source files to support the system design.",
    ],
    next: "Connect the prototype to verified server-side authentication and persistence, then test the complete transaction lifecycle. Current demo transactions use simulated client state.",
    visual: "campus",
  },
  {
    slug: "nga-florist",
    number: "03",
    title: "NGA Florist",
    category: "Digital commerce",
    stage: "Browser demo",
    summary:
      "A florist storefront concept that brings product options, a shopping cart, and a WhatsApp inquiry journey into one place.",
    stack: ["React", "TypeScript", "Browser storage"],
    repository: "https://github.com/HannR002/web-iris",
    evidence: "https://github.com/HannR002/web-iris/blob/main/src/App.tsx",
    evidenceLabel: "Storefront implementation",
    problem:
      "Custom flower orders involve product choices and personal details. A structured storefront can help customers prepare an inquiry before contacting the merchant.",
    approach: [
      "Separate merchant configuration, product data, and storefront components.",
      "Build product selection, cart, checkout, and order-summary interactions.",
      "Prototype merchant administration with browser storage for demonstration.",
    ],
    delivered: [
      "A component-based storefront with product details and a cart drawer.",
      "Checkout and order-confirmation interfaces for a florist ordering journey.",
      "Merchant configuration and demo administration persisted in the browser.",
    ],
    next: "Introduce server-side authentication, catalog and order persistence, and merchant validation before real transactions. A WhatsApp link does not confirm message delivery or payment.",
    visual: "florist",
  },
  {
    slug: "p4i-corporate-hub",
    number: "04",
    title: "P4I Corporate Hub",
    category: "Web platforms",
    stage: "Implemented / under review",
    summary:
      "An institutional information portal that brings P4I’s profile, programs, activities, and external publishing channels together.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repository: "https://github.com/HannR002/p4i-corporate-hub",
    evidence:
      "https://github.com/HannR002/p4i-corporate-hub/blob/main/README.md",
    evidenceLabel: "Portal documentation",
    problem:
      "Institutional information needs a clear structure so visitors can find the organization, its programs, and the right publishing platform without confusing separate services.",
    approach: [
      "Organize profile, program, activity, and publication information into dedicated routes.",
      "Centralize platform destinations, route visibility, and editable content in source data.",
      "Document accessibility, security headers, and publication controls as part of the portal workflow.",
    ],
    delivered: [
      "An institutional portal built with Next.js, React, TypeScript, and Tailwind CSS.",
      "Content and route registries with feature flags and links to external journal and e-book services.",
      "Documented browser checks, keyboard interactions, and media-publication controls.",
    ],
    next: "Continue editorial review and verify hosting configuration against the approved release. The portal manages information in source files; its journal and e-book links lead to separate systems.",
    visual: "platform",
  },
  {
    slug: "p4i-publisher-ebook",
    number: "05",
    title: "P4I Publisher E-book",
    category: "Academic publishing",
    stage: "In development",
    summary:
      "A Laravel publishing application connecting a digital catalog, manual payment review, reader access, and author submission workflows.",
    stack: ["Laravel", "PHP", "Blade", "SQL"],
    repository: "https://github.com/HannR002/P4I-Publisher-Ebook",
    evidence:
      "https://github.com/HannR002/P4I-Publisher-Ebook/blob/master/routes/web.php",
    evidenceLabel: "Application route implementation",
    problem:
      "A digital publisher needs connected workflows for readers, authors, and administrators: finding a publication, requesting access, reviewing payment, and curating new manuscripts.",
    approach: [
      "Separate public catalog routes from authenticated reader, author, and administrator areas.",
      "Connect manual orders and proof submission to administrator payment verification routes.",
      "Organize author submissions and manuscript curation alongside publication management.",
    ],
    delivered: [
      "Catalog, library, account, order, and reader routes in a Laravel application.",
      "Manual-payment submission and administrator verification workflows in the route structure.",
      "Author submission, manuscript curation, publication management, and reporting entry points.",
    ],
    next: "Verify authorization, file access, payment-state transitions, and complete reader/author workflows in staging. The route implementation alone does not establish production readiness or successful payment processing.",
    visual: "publisher",
  },
  {
    slug: "ojs-journal-development",
    number: "06",
    title: "OJS Journal Development",
    category: "Academic publishing",
    stage: "Prepared for review",
    summary:
      "A development workspace for reviewing and extending an Open Journal Systems installation, with a documented handoff for further technical work.",
    stack: ["OJS", "PHP", "Smarty", "Plugins"],
    repository: "https://github.com/HannR002/ojs-journal-development",
    evidence:
      "https://github.com/HannR002/ojs-journal-development/blob/main/docs/CODEX_HANDOFF.md",
    evidenceLabel: "Project handoff documentation",
    problem:
      "An existing journal platform needs an inspectable development workspace before its themes, plugins, and deployment-specific changes can be reviewed responsibly.",
    approach: [
      "Prepare the existing OJS source in version control with a documented directory and customization map.",
      "Identify themes and plugins as the intended extension points for project-specific work.",
      "Record audit priorities and distinguish repository preparation from functional customization.",
    ],
    delivered: [
      "An OJS source repository with the standard journal-platform directory structure.",
      "A handoff describing customization locations, dependencies, and follow-up audit areas.",
      "Repository guidance for excluding production configuration, manuscripts, databases, and caches.",
    ],
    next: "Identify and document project-specific theme/plugin changes, then validate them in a separate development environment. The handoff records preparation for review rather than completed functional improvements.",
    attribution:
      "Open Journal Systems is developed by the Public Knowledge Project (PKP). This case study covers the project workspace and development preparation, not authorship of the OJS platform.",
    visual: "journal",
  },
  {
    slug: "my-cat",
    number: "07",
    title: "My Cat",
    category: "Personal apps",
    stage: "In development",
    summary:
      "A browser-based companion app for cat profiles, sound libraries, and interaction records, with local data storage and backup workflows.",
    stack: ["React", "TypeScript", "IndexedDB", "Vite"],
    repository: "https://github.com/HannR002/My-Cat",
    evidence: "https://github.com/HannR002/My-Cat/blob/main/src/services/db.ts",
    evidenceLabel: "Local database implementation",
    problem:
      "Profiles, interaction records, favorite sounds, and imported audio need to remain organized and recoverable when the app stores its data on the user’s device.",
    approach: [
      "Separate cat profiles, interactions, favorites, imported audio, and settings into IndexedDB stores.",
      "Connect the sound library and interaction views to a shared local data service.",
      "Provide metadata-only and full backup formats with validation before restoration.",
    ],
    delivered: [
      "React views for the sound library, cat profiles, interactions, favorites, and settings.",
      "A local IndexedDB service for profile records, imported audio blobs, and application settings.",
      "Backup export and merge/replace restoration code with an explicit payload-validation step.",
    ],
    next: "Continue browser-level verification of audio behavior, backup restoration, and persistence. Local browser data is not an account-based cloud sync service.",
    visual: "cat",
  },
];

export const categories = [
  "All projects",
  "Spatial analytics",
  "Information systems",
  "Digital commerce",
  "Web platforms",
  "Academic publishing",
  "Personal apps",
] as const;
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
