import React, { useState, useEffect, useRef } from 'react';
import {
  NAV_ITEMS, TERMINAL_LINES, EXPERIENCE, PROJECTS,
  SKILL_GROUPS, EDUCATION, ACHIEVEMENTS
} from "../../data.js";
import Reveal from '../Revel/reveal.jsx';
import SectionEyebrow from '../SectionEyebrow/sectioneyebrow.jsx';
import SectionHeading from '../SectionHeading/sectionheading.jsx';
export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-24 scroll-mt-24">
      <Reveal>
        <SectionEyebrow>// skills</SectionEyebrow>
        <SectionHeading>What I work with</SectionHeading>
      </Reveal>
      <div className="grid sm:grid-cols-3 gap-10">
        {SKILL_GROUPS.map(group => (
          <Reveal key={group.label}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: group.dot }}></span>
              <h3 className="font-mono-custom text-sm font-semibold text-[var(--text)]">{group.label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map(item => (
                <span key={item} className="text-sm px-3 py-1.5 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)]">{item}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
