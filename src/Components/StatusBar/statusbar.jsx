import React, { useState, useEffect, useRef } from 'react';
import {
  NAV_ITEMS, TERMINAL_LINES, EXPERIENCE, PROJECTS,
  SKILL_GROUPS, EDUCATION, ACHIEVEMENTS
} from "../../data.js";


export default function StatusBar({ activeSection }) {
  const activeItem = NAV_ITEMS.find(i => i.id === activeSection);
  const activeLabel = activeItem ? activeItem.label : 'home.tsx';
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--surface-translucent)] backdrop-blur-sm border-t border-[var(--border)] text-[11px] sm:text-xs font-mono-custom text-[var(--text-muted)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-3 sm:px-6 py-2">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="flex items-center gap-1.5 text-[var(--text)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-2)] pulse-dot"></span>
            available
          </span>
          <span className="hidden sm:inline">● {activeLabel}</span>
        </div>
       
      </div>
    </div>
  );
}
