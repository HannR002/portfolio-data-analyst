export const profile = {
  name: "Muhammad Farhan",
  role: "Data & Systems Portfolio",
  location: "Jambi, Indonesia",
  email: "mf13132504@gmail.com",
  github: "https://github.com/HannR002",
  whatsapp: "https://wa.me/6289699161526",
};

export type ProjectCategory =
  "Spatial analytics" | "Information systems" | "Digital commerce";
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
  visual: "spatial" | "campus" | "florist";
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
];

export const categories = [
  "All projects",
  "Spatial analytics",
  "Information systems",
  "Digital commerce",
] as const;
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
