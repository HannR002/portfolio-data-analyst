import Link from "next/link";
import {
  FaArrowRight,
  FaArrowUp,
  FaEnvelope,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { profile, projects } from "../data/portfolio";
import { SiteHeader } from "../components/SiteHeader";
import { PortraitScene } from "../components/PortraitScene";
import { ProjectExplorer } from "../components/ProjectExplorer";

const expertise = [
  {
    number: "01",
    title: "Data & spatial thinking",
    description:
      "Database relationships, geographic context, and analytical workflows that make information easier to explore.",
    tools: "SQL / PostGIS / Leaflet / Earth Engine",
  },
  {
    number: "02",
    title: "Useful digital systems",
    description:
      "Connected workflows for inventory, publishing, campus services, and the people behind them.",
    tools: "Laravel / Express / Prisma / MySQL",
  },
  {
    number: "03",
    title: "Interfaces with intention",
    description:
      "Responsive web experiences with clear navigation, thoughtful interactions, and room to grow.",
    tools: "Next.js / React / TypeScript / Tailwind",
  },
];

export default function Portfolio() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-topline">
            <p className="eyebrow">
              <span className="status-dot" /> DEVELOPER / JAMBI, INDONESIA
            </p>
            <span className="edition">PORTFOLIO — VOL. 2026</span>
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hero-intro">Hello, I’m Muhammad Farhan.</p>
              <h1 id="hero-title">
                Making data
                <br />
                <span className="serif-word">useful.</span>
                <span className="hero-asterisk" aria-hidden="true">
                  ✳
                </span>
                <br />
                <span className="hero-ending">
                  Building what’s <span className="next-word">next.</span>
                </span>
              </h1>
              <p className="hero-description">
                I connect data, design, and development to turn complex
                workflows into clear digital experiences.
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
            <PortraitScene />
          </div>
          <div className="hero-bottom">
            <span>DATA THINKING. SYSTEMS BUILDING.</span>
            <a href="#work">
              SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
            </a>
            <span>
              BASED IN JAMBI <span className="coordinate-note">UTC+7</span>
            </span>
          </div>
        </section>
        <div className="discipline-strip" aria-label="Areas of work">
          <div className="shell">
            <span>Spatial analytics</span>
            <i aria-hidden="true">✳</i>
            <span>Information systems</span>
            <i aria-hidden="true">✳</i>
            <span>Web experiences</span>
            <i aria-hidden="true">✳</i>
            <span>Digital publishing</span>
          </div>
        </div>
        <section
          id="work"
          className="work-section shell section-space"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2 id="work-title">
                Ideas, built
                <br />
                into <em>projects.</em>
                <sup>({String(projects.length).padStart(2, "0")})</sup>
              </h2>
            </div>
            <p>
              From spatial questions to everyday workflows.
              <br />
              Explore the thinking, the build, and the next step.
            </p>
          </div>
          <ProjectExplorer />
        </section>
        <section
          id="about"
          className="about-section section-space"
          aria-labelledby="about-title"
        >
          <div className="shell about-layout">
            <div className="about-label">
              <p className="eyebrow">02 / THE PERSON BEHIND THE PROJECTS</p>
              <div className="about-mark" aria-hidden="true">
                mf<span>✳</span>
              </div>
              <p>
                Based in Jambi, Indonesia.
                <br />
                Curious by default.
              </p>
            </div>
            <div className="about-copy">
              <h2 id="about-title">
                Good systems start
                <br />
                with <em>good questions.</em>
              </h2>
              <p className="about-lead">
                I’m Farhan, a developer interested in the space between
                structured data and the people who use it.
              </p>
              <p>
                My work spans spatial analysis, inventory systems, academic
                publishing, and tools for everyday life. I enjoy untangling a
                workflow, finding the right data structure, and making the
                result feel straightforward to use.
              </p>
              <p>
                Every project here shares its context, implementation, and
                remaining work. It’s a record of how I think and what I’m
                building.
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
          </div>
        </section>
        <section
          className="expertise-section shell section-space"
          aria-labelledby="expertise-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / WHAT I BRING</p>
              <h2 id="expertise-title">
                Different disciplines.
                <br />
                <em>Connected thinking.</em>
              </h2>
            </div>
            <p>
              From the underlying relationships
              <br />
              to the final interaction.
            </p>
          </div>
          <div className="expertise-list">
            {expertise.map((item) => (
              <article key={item.number}>
                <span className="expertise-number">{item.number}</span>
                <h3>{item.title}</h3>
                <div>
                  <p>{item.description}</p>
                  <span className="tool-line">{item.tools}</span>
                </div>
                <span className="expertise-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </section>
        <section
          className="process-section shell section-space"
          aria-labelledby="process-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / THE WAY I WORK</p>
              <h2 id="process-title">
                Start with
                <br />
                <em>the question.</em>
              </h2>
            </div>
            <p>
              A clear path from an open question
              <br />
              to something you can use.
            </p>
          </div>
          <ol className="process-grid">
            <li>
              <span>01 / DISCOVER</span>
              <h3>Understand the real need.</h3>
              <p>
                Identify the people, the workflow, and the information they need
                before choosing the tools.
              </p>
            </li>
            <li>
              <span>02 / CONNECT</span>
              <h3>Give the idea structure.</h3>
              <p>
                Translate requirements into data relationships, system
                boundaries, and an intentional interaction flow.
              </p>
            </li>
            <li>
              <span>03 / MAKE</span>
              <h3>Build. Test. Refine.</h3>
              <p>
                Implement in steps, verify the behavior, and document what the
                next iteration should improve.
              </p>
            </li>
          </ol>
        </section>
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="shell">
            <div className="contact-topline">
              <p className="eyebrow">05 / LET’S CONNECT</p>
              <span>JAMBI, INDONESIA / UTC+7</span>
            </div>
            <div className="contact-heading">
              <h2 id="contact-title">
                Have a project
                <br />
                <em>in mind?</em>
              </h2>
              <a
                className="contact-round"
                href={`mailto:${profile.email}`}
                aria-label="Start a conversation by email"
              >
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="contact-bottom">
              <div>
                <p>I’d love to hear about the problem you’re working on.</p>
                <a className="contact-email" href={`mailto:${profile.email}`}>
                  {profile.email}
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
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub aria-hidden="true" />
                  GitHub<span className="sr-only"> (opens in a new tab)</span>
                  <FaArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <Link
          className="footer-wordmark"
          href="/"
          aria-label="Muhammad Farhan home"
        >
          farhan<span>✳</span>
        </Link>
        <p>
          © 2026 {profile.name}
          <span>Made with intention. Always evolving.</span>
        </p>
        <a href="#main-content" className="text-link">
          Back to top <FaArrowUp aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
