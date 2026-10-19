"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { categories, projects } from "../data/portfolio";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectExplorer() {
  const [category, setCategory] = useState<string>("All projects");
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filtered = projects.filter(
    (project) =>
      (category === "All projects" || project.category === category) &&
      [project.title, project.summary, project.category, ...project.stack]
        .join(" ")
        .toLocaleLowerCase()
        .includes(normalizedQuery),
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
              {item}
            </button>
          ))}
        </div>
        <label className="search-field">
          <FaSearch aria-hidden="true" />
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            placeholder="Search projects or tools"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>
      <p className="results-count" role="status">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </p>
      <div className="project-grid">
        {filtered.map((project) => (
          <article key={project.slug} className="project-card glass">
            <Link
              href={`/work/${project.slug}`}
              className="project-art-link"
              tabIndex={-1}
              aria-hidden="true"
            >
              <ProjectVisual kind={project.visual} />
            </Link>
            <div className="project-copy">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.number}</span>
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
                  aria-label={`Read ${project.title} case study`}
                >
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-state glass">
          <h3>No matching projects</h3>
          <p>Try another keyword or explore all projects.</p>
          <button
            type="button"
            className="button secondary"
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
