import React, { useState, useEffect, useRef } from 'react';
import {
  NAV_ITEMS, TERMINAL_LINES, EXPERIENCE, PROJECTS,
  SKILL_GROUPS, EDUCATION, ACHIEVEMENTS
} from "../../data.js";


const focusRing = "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2";

export default function Nav({ activeSection }) {
  return (
    <nav aria-label="Site sections" className="fixed top-0 left-0 right-0 z-50 bg-[var(--surface-translucent)] backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex items-center px-3 sm:px-6">
        <div className="flex items-center pr-3 mr-1 border-r border-[var(--border)] shrink-0">
          <span className="w-7 h-7 rounded-md bg-[var(--accent)] text-[var(--bg)] font-mono-custom font-bold text-xs flex items-center justify-center">AC</span>
        </div>
        <div className="flex items-center overflow-x-auto no-scrollbar">
          {NAV_ITEMS.map(item => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`group flex items-center gap-2 px-3.5 sm:px-4 py-3.5 border-b-2 whitespace-nowrap text-xs sm:text-sm font-mono-custom font-medium transition-colors ${focusRing} focus-visible:ring-offset-[var(--surface)] ${isActive
                  ? 'border-[var(--accent)] text-[var(--text)]'
                  : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border)]'
                  }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? 'bg-[var(--accent)]' : 'bg-[var(--border)] group-hover:bg-[var(--text-muted)]'}`}></span>
                {item.label}
              </a>
            );
          })}
        </div>
        <a
          href="#contact"
          className={`hidden sm:flex ml-auto shrink-0 items-center gap-2 text-xs font-mono-custom font-semibold text-[var(--bg)] bg-[var(--accent)] hover:brightness-110 px-4 py-2 rounded-md transition-all ${focusRing} focus-visible:ring-offset-[var(--surface)]`}
        >
          Let's talk
        </a>
      </div>
    </nav>
  );
}