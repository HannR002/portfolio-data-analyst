"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaSearch, FaThLarge, FaList } from "react-icons/fa";
import { categories, projects } from "../data/portfolio";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectExplorer() {
  const [category, setCategory] = useState<string>("All projects");
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const filtered = projects.filter(
    (project) =>
      (category === "All projects" || project.category === category) &&
      [project.title, project.summary, project.category, ...project.stack]
        .join(" ")
        .toLocaleLowerCase()
        .includes(query.trim().toLocaleLowerCase()),
  );
  return (
    <>
      <div className="project-toolbar">
        <div
          className="filter-list"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item === "All projects" ? (
                <>
                  All projects{" "}
                  <span>{String(projects.length).padStart(2, "0")}</span>
                </>
              ) : (
                item
              )}
            </button>
          ))}
        </div>
        <div className="explorer-utilities">
          <label className="search-field">
            <FaSearch aria-hidden="true" />
            <span className="sr-only">Search projects</span>
            <input
              type="search"
              placeholder="Find a project or tool"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <div className="view-switch" role="group" aria-label="Project layout">
            <button
              type="button"
              aria-label="Grid view"
              aria-pressed={view === "grid"}
              onClick={() => setView("grid")}
            >
              <FaThLarge aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="List view"
              aria-pressed={view === "list"}
              onClick={() => setView("list")}
            >
              <FaList aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div className="results-line">
        <p className="results-count" role="status">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </p>
        <span>SELECTED EXPLORATIONS / 2026</span>
      </div>
      <div className={`project-grid${view === "list" ? " list-view" : ""}`}>
        {filtered.map((project) => (
          <article
            key={project.slug}
            className={`project-card card-${project.visual}`}
          >
            <Link
              href={`/work/${project.slug}`}
              className="project-art-link"
              tabIndex={-1}
              aria-hidden="true"
            >
              <ProjectVisual kind={project.visual} />
              <span className="art-open">
                View project <span>↗</span>
              </span>
            </Link>
            <div className="project-copy">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>/{project.number}</span>
              </div>
              <h3>
                <Link href={`/work/${project.slug}`}>{project.title}</Link>
              </h3>
              <p>{project.summary}</p>
              <ul className="tag-list" aria-label="Project tools">
                {project.stack.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <div className="project-card-footer">
                <span className="stage">
                  <i aria-hidden="true" />
                  {project.stage}
                </span>
                <Link
                  href={`/work/${project.slug}`}
                  className="case-study-link"
                  aria-label={`Read ${project.title} case study`}
                >
                  Case study <FaArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-state">
          <span aria-hidden="true">↗</span>
          <h3>No matching projects</h3>
          <p>Try another keyword or explore all projects.</p>
          <button
            type="button"
            className="button primary"
            onClick={() => {
              setCategory("All projects");
              setQuery("");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </>
  );
}
