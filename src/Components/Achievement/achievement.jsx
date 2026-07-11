import React, { useState, useEffect, useRef } from 'react';
import {
  NAV_ITEMS, TERMINAL_LINES, EXPERIENCE, PROJECTS,
  SKILL_GROUPS, EDUCATION, ACHIEVEMENTS
} from "../../data.js";
import Reveal from '../Revel/reveal.jsx';
import SectionEyebrow from '../SectionEyebrow/sectioneyebrow.jsx';
import SectionHeading from '../SectionHeading/sectionheading.jsx';
const focusRing = "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 sm:py-24 scroll-mt-24">
      <Reveal>
        <SectionEyebrow>// achievements</SectionEyebrow>
        <SectionHeading>A few things I got</SectionHeading>
      </Reveal>
      {ACHIEVEMENTS.map((item, i) => (
        <Reveal key={item.title}>
          <div className={i < ACHIEVEMENTS.length - 1 ? 'pb-8 mb-8 border-b border-[var(--border)]' : ''}>
            <h3 className="text-xl font-bold text-[var(--text)] mb-2">{item.title}</h3>
            <p className="text-[var(--text-muted)] leading-relaxed max-w-2xl">{item.description}</p>

            {/* link->button */}
            {item.links && (
              <div className="flex flex-wrap gap-4 mt-4">
                {item.links.map(link => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-mono-custom text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors w-max ${focusRing} focus-visible:ring-offset-[var(--bg)] rounded`}
                  >
                    View {link.label} <span>→</span>
                  </a>
                ))}
              </div>
            )}

          </div>
        </Reveal>
      ))}
    </section>
  );
}