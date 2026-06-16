"use client";

import React, { useCallback, useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Max tilt angle in degrees (default: 7) */
  maxTilt?: number;
  /** Glow color on hover (default: rgba(250,204,21,0.12)) */
  glowColor?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 7,
  glowColor = "rgba(250,204,21,0.12)",
  onMouseEnter,
  onMouseLeave,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovering, setIsHovering] = useState(false);
  // RAF id to throttle mousemove
  const rafId = useRef<number | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (rafId.current !== null) return; // skip if a frame is already scheduled

      rafId.current = requestAnimationFrame(() => {
        rafId.current = null;
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        // Normalise cursor position to -1…+1 from center
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        // rotateY: positive when cursor is right → card tilts right
        // rotateX: negative when cursor is below → card tilts away
        const rotateY = (x - 0.5) * 2 * maxTilt;
        const rotateX = (0.5 - y) * 2 * maxTilt;

        setTilt({ rotateX, rotateY });
      });
    },
    [maxTilt],
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
    onMouseEnter?.();
  }, [onMouseEnter]);

  const handleMouseLeave = useCallback(() => {
    // Cancel any pending frame
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovering(false);
    onMouseLeave?.();
  }, [onMouseLeave]);

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${isHovering ? 1.02 : 1})`,
        transition: "transform 300ms ease-out, box-shadow 300ms ease-out, border-color 300ms ease-out",
        willChange: "transform",
        transformStyle: "preserve-3d",
        boxShadow: isHovering
          ? `0 20px 40px rgba(0,0,0,0.12), 0 0 20px ${glowColor}`
          : undefined,
      }}
    >
      {/* Glow overlay — fades in on hover */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          background: `radial-gradient(ellipse at ${((tilt.rotateY / maxTilt) * 0.5 + 0.5) * 100}% ${((-(tilt.rotateX) / maxTilt) * 0.5 + 0.5) * 100}%, ${glowColor}, transparent 70%)`,
          opacity: isHovering ? 1 : 0,
          transition: "opacity 300ms ease-out",
          zIndex: 1,
        }}
      />
      {/* Content stays above glow */}
      <div style={{ position: "relative", zIndex: 2 }} className="flex flex-col h-full">
        {children}
      </div>
    </div>
  );
}
