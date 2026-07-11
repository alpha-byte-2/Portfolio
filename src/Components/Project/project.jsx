import React, { useState, useEffect, useRef } from 'react';
import {
  NAV_ITEMS, TERMINAL_LINES, EXPERIENCE, PROJECTS,
  SKILL_GROUPS, EDUCATION, ACHIEVEMENTS
} from "../../data.js";
import Reveal from '../Revel/reveal.jsx';
import SectionEyebrow from '../SectionEyebrow/sectioneyebrow.jsx';
import SectionHeading from '../SectionHeading/sectionheading.jsx';

const focusRing = "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2";


function ProjectCard({ project }) {
  return (
    <div className="group h-full flex flex-col rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--accent)] transition-colors">
      <h3 className="font-mono-custom font-bold text-lg text-[var(--text)] mb-3">{project.name}</h3>
      <p className="text-[var(--text-muted)] leading-relaxed mb-5 text-sm flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map(tag => (
          <span key={tag} className="font-mono-custom text-[11px] px-2.5 py-1 rounded bg-[var(--surface-2)] text-[var(--accent-2)] border border-[var(--border)]">{tag}</span>
        ))}
      </div>
      <a
        href={project.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 text-xs font-mono-custom text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors mt-auto w-max ${focusRing} focus-visible:ring-offset-[var(--surface)] rounded`}
      >
        View project <span className="group-hover:translate-x-0.5 transition-transform">→</span>
      </a>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-24 scroll-mt-24">
      <Reveal>
        <SectionEyebrow>// projects</SectionEyebrow>
        <SectionHeading>Things I've built</SectionHeading>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map(project => (
          <Reveal key={project.name} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
