import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="shell empty-state glass">
        <p className="eyebrow">404 / NOT FOUND</p>
        <h1>This page isn’t here.</h1>
        <p>Explore the selected projects or return to the homepage.</p>
        <Link className="button primary" href="/#work">
          Back to projects
        </Link>
      </main>
    </>
  );
}
