import React, { useState, useEffect, useRef } from 'react';
import {
  NAV_ITEMS, TERMINAL_LINES, EXPERIENCE, PROJECTS,
  SKILL_GROUPS, EDUCATION, ACHIEVEMENTS
} from "../../data.js";






export default function TerminalHero() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) { setVisibleCount(TERMINAL_LINES.length); return; }
    if (visibleCount >= TERMINAL_LINES.length) return;
    const delay = visibleCount === 0 ? 400 : 700;
    const t = setTimeout(() => setVisibleCount(v => v + 1), delay);
    return () => clearTimeout(t);
  }, [visibleCount]);

  const done = visibleCount >= TERMINAL_LINES.length;

  return (
    <div className="w-full max-w-xl rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--surface-2)]">
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E1685C' }}></span>
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E8B34C' }}></span>
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#6FB582' }}></span>
        <span className="ml-2 text-xs font-mono-custom text-[var(--text-muted)]">aman@portfolio — zsh</span>
      </div>
      <div className="p-5 sm:p-6 font-mono-custom text-sm leading-relaxed min-h-[210px]">
        {TERMINAL_LINES.slice(0, visibleCount).map((line, i) => (
          <div key={i} className="mb-4 last:mb-0">
            <div className="text-[var(--accent)]">{line.prompt}</div>
            <div className={line.isStatus ? 'text-[var(--accent-2)] mt-1' : 'text-[var(--text)] mt-1'}>
              {line.isStatus && <span className="pulse-dot inline-block mr-1">●</span>}
              {line.output}
            </div>
          </div>
        ))}
        {done && <span className="inline-block w-2 h-4 bg-[var(--accent)] cursor-blink align-middle"></span>}
      </div>
    </div>
  );
}