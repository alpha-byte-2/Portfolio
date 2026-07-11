import React, { useState, useEffect, useRef } from 'react';
import {
  NAV_ITEMS, TERMINAL_LINES, EXPERIENCE, PROJECTS,
  SKILL_GROUPS, EDUCATION, ACHIEVEMENTS
} from "../../data.js";
import Reveal from '../Revel/reveal.jsx';
const focusRing = "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2";
export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-custom text-[var(--text-muted)]">
        <span>© 2026 Aman Choudhary</span>
        <a href="#home" className={`hover:text-[var(--accent)] transition-colors rounded ${focusRing} focus-visible:ring-offset-[var(--bg)]`}>back to top ↑</a>
      </div>
    </footer>
  );
}