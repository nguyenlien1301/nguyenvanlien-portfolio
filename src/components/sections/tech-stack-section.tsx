"use client";

import { skills } from "@/shared/data/skills";
import type { Skill } from "@/types/global";
import React, { useMemo, useState } from "react";

// Split the flat skills array into two balanced rows at module level
const half = Math.ceil(skills.length / 2);
const rawRow1 = skills.slice(0, half);
const rawRow2 = skills.slice(half);

// Duplicate each row so the CSS loop never shows a gap
const marqueeRow1: Skill[] = [...rawRow1, ...rawRow1];
const marqueeRow2: Skill[] = [...rawRow2, ...rawRow2];

// ---------------------------------------------------------------------------
// SkillPill — glassmorphism pill with icon + colored dot fallback
// ---------------------------------------------------------------------------
const SkillPill = React.memo(function SkillPill({ skill }: { skill: Skill }) {
  const [imgError, setImgError] = useState(false);

  // Treat clearly-broken paths (no extension, empty filename) as failed
  const isBrokenPath =
    !skill.icon ||
    skill.icon.endsWith("/") ||
    skill.icon === "/images/skills/.svg";

  const showIcon = !imgError && !isBrokenPath;

  return (
    <div className="group flex flex-shrink-0 items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5 px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:bg-blue-50/80 hover:shadow-[0_0_18px_rgba(59,130,246,0.12)] dark:hover:border-white/30 dark:hover:bg-white/10 dark:hover:shadow-[0_0_18px_rgba(99,179,237,0.18)] cursor-default select-none whitespace-nowrap">
      {/* Icon — falls back to colored dot on error */}
      {showIcon ? (
        <img
          src={skill.icon}
          alt={skill.name}
          width={16}
          height={16}
          className="h-4 w-4 flex-shrink-0 object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <span
          className="h-2 w-2 rounded-full flex-shrink-0 ring-2 ring-black/20"
          style={{
            backgroundColor: skill.color,
            boxShadow: `0 0 6px ${skill.color}80`,
          }}
          aria-hidden="true"
        />
      )}

      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 dark:text-slate-200 dark:group-hover:text-white transition-colors duration-300">
        {skill.name}
      </span>
    </div>
  );
});

// ---------------------------------------------------------------------------
// MarqueeRow — single infinite-scrolling track
// ---------------------------------------------------------------------------
interface MarqueeRowProps {
  skills: Skill[];
  /** "left" = right-to-left, "right" = left-to-right */
  direction: "left" | "right";
}

const MarqueeRow = React.memo(function MarqueeRow({
  skills,
  direction,
}: MarqueeRowProps) {
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    // Edge fade mask — hides the seam points at both ends
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
      <div className={`flex w-max gap-3 ${animClass}`}>
        {skills.map((skill, i) => (
          <SkillPill key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

// ---------------------------------------------------------------------------
// TechStackSection — main export
// ---------------------------------------------------------------------------
export default function TechStackSection() {
  // useMemo keeps references stable across any parent re-renders
  const row1 = useMemo(() => marqueeRow1, []);
  const row2 = useMemo(() => marqueeRow2, []);

  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32">
      {/* ── Background ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0 -z-10">
        {/* Light mode: soft white-blue gradient / Dark mode: deep navy */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/60 to-white dark:from-[#0a1628] dark:via-[#0d1f3c] dark:to-[#0a1628]" />

        {/* Subtle dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Center radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(59,130,246,0.06)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(56,189,248,0.06)_0%,transparent_70%)]" />

        {/* Accent glows */}
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-400/8 dark:bg-[#6366f1]/10 blur-[80px]" />
        <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-indigo-300/8 dark:bg-[#0ea5e9]/8 blur-[80px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center md:mb-16">
          <div className="flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 dark:border-cyan-500/30 dark:bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
            <span
              className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_#3b82f6] dark:bg-cyan-400 dark:shadow-[0_0_6px_#22d3ee]"
              aria-hidden="true"
            />
            Technology
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
        </div>

        {/* ── Marquee rows ───────────────────────────────────────────────── */}
        <div className="flex flex-col gap-4 md:gap-5">
          <MarqueeRow skills={row1} direction="left" />
          <MarqueeRow skills={row2} direction="right" />
        </div>
      </div>
    </section>
  );
}
