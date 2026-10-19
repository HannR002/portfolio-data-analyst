import {
  FaArrowRight,
  FaArrowUp,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaMapMarkedAlt,
  FaProjectDiagram,
  FaWhatsapp,
} from "react-icons/fa";
import { profile } from "../data/portfolio";
import { SiteHeader } from "../components/SiteHeader";
import { ProjectExplorer } from "../components/ProjectExplorer";

export default function Portfolio() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="shell">
        <section className="hero glass" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              {profile.location}
            </p>
            <p className="hero-intro">Hello, I’m {profile.name}.</p>
            <h1 id="hero-title">
              Making data useful.
              <br />
              <span>Building what’s next.</span>
            </h1>
            <p className="hero-description">
              An Information Systems student exploring the connection between
              data, digital workflows, and the people who use them.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work <FaArrowRight aria-hidden="true" />
              </a>
              <a className="text-link" href="#contact">
                Let’s talk <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-art-core">
              <FaDatabase />
              <span>DATA</span>
            </div>
            <div className="orbit-label label-one">
              <FaMapMarkedAlt />
              Spatial context
            </div>
            <div className="orbit-label label-two">
              <FaProjectDiagram />
              Connected systems
            </div>
            <span className="art-footnote">
              FROM INFORMATION TO APPLICATION
            </span>
          </div>
          <div className="hero-bottom">
            <span>DATA & SYSTEMS PORTFOLIO</span>
            <span>Selected work / 2026</span>
          </div>
        </section>

        <section
          id="about"
          className="about-grid section-space"
          aria-labelledby="about-title"
        >
          <div className="about-copy glass">
            <p className="eyebrow">01 / A LITTLE CONTEXT</p>
            <h2 id="about-title">
              Curious about the data.
              <br />
              Focused on the workflow.
            </h2>
            <p>
              I’m Farhan, an Information Systems student based in Jambi. My
              projects span spatial information, campus services, and digital
              tools for small businesses.
            </p>
            <p>
              I’m interested in how structured data and thoughtful interfaces
              can make everyday work easier to understand and manage.
            </p>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore my GitHub <FaArrowRight aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <div className="focus-grid">
            <article className="focus-card glass">
              <FaDatabase aria-hidden="true" />
              <h3>Data foundations</h3>
              <p>
                Database structure, SQL, and the relationships behind a useful
                system.
              </p>
            </article>
            <article className="focus-card glass">
              <FaMapMarkedAlt aria-hidden="true" />
              <h3>Spatial information</h3>
              <p>
                WebGIS interfaces that connect geographic context with analysis
                workflows.
              </p>
            </article>
            <article className="focus-card glass wide">
              <FaProjectDiagram aria-hidden="true" />
              <div>
                <h3>Systems that connect</h3>
                <p>
                  From requirements and process design to interfaces,
                  implementation, and verification.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          id="work"
          className="section-space"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / SELECTED WORK</p>
              <h2 id="work-title">Ideas, built into projects.</h2>
            </div>
            <p>
              A closer look at the problem, the approach,
              <br className="desktop-break" /> and what comes next.
            </p>
          </div>
          <ProjectExplorer />
        </section>

        <section
          className="process-section section-space"
          aria-labelledby="process-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / HOW I APPROACH A PROJECT</p>
              <h2 id="process-title">Start with the question.</h2>
            </div>
          </div>
          <ol className="process-grid">
            <li>
              <span>01</span>
              <h3>Understand</h3>
              <p>
                Identify the people, the workflow, and the information they
                need.
              </p>
            </li>
            <li>
              <span>02</span>
              <h3>Structure</h3>
              <p>
                Turn requirements into data relationships and a clear
                interaction flow.
              </p>
            </li>
            <li>
              <span>03</span>
              <h3>Build & verify</h3>
              <p>
                Implement in steps, test the behavior, and document what still
                needs work.
              </p>
            </li>
          </ol>
        </section>

        <section
          id="contact"
          className="contact-section glass section-space"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="eyebrow">04 / LET’S CONNECT</p>
            <h2 id="contact-title">Have a project in mind?</h2>
            <p>I’d love to hear about the problem you’re working on.</p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <FaEnvelope aria-hidden="true" />
              Email
              <FaArrowRight aria-hidden="true" />
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
              WhatsApp<span className="sr-only"> (opens in a new tab)</span>
              <FaArrowRight aria-hidden="true" />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" />
              GitHub<span className="sr-only"> (opens in a new tab)</span>
              <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <p>
          © 2026 {profile.name}
          <span>Built with curiosity. Improved through practice.</span>
        </p>
        <a href="#main-content" className="text-link">
          Back to top <FaArrowUp aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
