
import React from "react";

export default function SectionHeading({ children }) {
  return <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-12 sm:mb-14 tracking-tight">{children}</h2>;
}
