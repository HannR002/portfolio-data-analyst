import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import { getProject, projects } from "../../../data/portfolio";
import { SiteHeader } from "../../../components/SiteHeader";
import { ProjectVisual } from "../../../components/ProjectVisual";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const nextProject =
    projects[
      (projects.findIndex((item) => item.slug === slug) + 1) % projects.length
    ];

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="shell case-study">
        <Link href="/#work" className="text-link back-link">
          <FaArrowLeft aria-hidden="true" />
          All projects
        </Link>
        <header className="case-header">
          <p className="eyebrow">CASE STUDY / {project.category}</p>
          <h1>{project.title}</h1>
          <p className="case-summary">{project.summary}</p>
          <div className="case-meta">
            <span className="stage">
              <i aria-hidden="true" />
              {project.stage}
            </span>
            <span>Implementation snapshot / October 2026</span>
          </div>
        </header>
        <ProjectVisual kind={project.visual} />
        <div className="case-layout">
          <aside className="case-sidebar glass">
            <p className="eyebrow">PROJECT AT A GLANCE</p>
            <h2>Tools & context</h2>
            <ul className="tag-list">
              {project.stack.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
            <a
              className="button primary"
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub aria-hidden="true" />
              View repository
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              className="text-link"
              href={project.evidence}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.evidenceLabel}
              <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            {project.attribution && (
              <p className="project-attribution">{project.attribution}</p>
            )}
          </aside>
          <div className="case-content">
            <section>
              <p className="eyebrow">01 / THE PROBLEM</p>
              <h2>What needed attention</h2>
              <p>{project.problem}</p>
            </section>
            <section>
              <p className="eyebrow">02 / THE APPROACH</p>
              <h2>How the work is structured</h2>
              <ul>
                {project.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <p className="eyebrow">03 / THE IMPLEMENTATION</p>
              <h2>What’s in the project</h2>
              <ul>
                {project.delivered.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="next-steps glass">
              <p className="eyebrow">04 / STILL TO EXPLORE</p>
              <h2>Where it goes next</h2>
              <p>{project.next}</p>
            </section>
          </div>
        </div>
        <nav className="case-next" aria-label="More projects">
          <Link className="text-link" href="/#work">
            <FaArrowLeft aria-hidden="true" />
            All projects
          </Link>
          <Link className="text-link" href={`/work/${nextProject.slug}`}>
            Next: {nextProject.title}
            <FaArrowRight aria-hidden="true" />
          </Link>
        </nav>
      </main>
      <footer className="site-footer shell">
        <p>Muhammad Farhan / Data & Systems</p>
        <Link className="text-link" href="/#contact">
          Let’s connect <span aria-hidden="true">↗</span>
        </Link>
      </footer>
    </>
  );
}
