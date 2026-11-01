import Link from "next/link";
import { projects } from "../data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link href="/" className="wordmark" aria-label="Muhammad Farhan home">
        <span className="monogram" aria-hidden="true">
          farhan<span>✳</span>
        </span>
        <span className="wordmark-caption">
          DATA & SYSTEMS
          <br />
          DEVELOPER
        </span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#work">
          Work<span>{String(projects.length).padStart(2, "0")}</span>
        </Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">
          Contact <span aria-hidden="true">↗</span>
        </Link>
      </nav>
      <ThemeToggle />
    </header>
  );
}
