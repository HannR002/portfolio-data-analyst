import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link href="/" className="wordmark" aria-label="Muhammad Farhan home">
        <span className="monogram" aria-hidden="true">
          mf.
        </span>
        <span className="wordmark-caption">DATA & SYSTEMS</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
      <ThemeToggle />
    </header>
  );
}
