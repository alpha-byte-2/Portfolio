import React, { useState, useEffect, useRef } from 'react';
import {
  NAV_ITEMS, TERMINAL_LINES, EXPERIENCE, PROJECTS,
  SKILL_GROUPS, EDUCATION, ACHIEVEMENTS
} from "../../data.js";
import Reveal from '../Revel/reveal.jsx';
import SectionEyebrow from '../SectionEyebrow/sectioneyebrow.jsx';
import SectionHeading from '../SectionHeading/sectionheading.jsx';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-24 scroll-mt-24">
      <Reveal>
        <SectionEyebrow>// experience</SectionEyebrow>
        <SectionHeading>Where I've worked</SectionHeading>
      </Reveal>
      {EXPERIENCE.map((job, i) => (
        <Reveal key={job.company}>
          <div className={i < EXPERIENCE.length - 1 ? 'pb-10 mb-10 border-b border-[var(--border)]' : ''}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)]">{job.role}</h3>
              <span className="font-mono-custom text-xs text-[var(--text-muted)]">{job.dates}</span>
            </div>
            <p className="text-[var(--accent)] font-semibold mb-3">{job.company}</p>
            <p className="text-[var(--text-muted)] leading-relaxed max-w-2xl">{job.description}</p>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
