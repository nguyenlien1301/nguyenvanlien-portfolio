"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [displayPosition, setDisplayPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const positionRef = useRef({ x: 0, y: 0 });
  const displayPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const updateCursor = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName.match(/^(a|button|input|textarea|select)$/) ||
        target.classList.contains("interactive") ||
        !!target.closest('a, button, [role="button"]');

      setIsHovering(!!isInteractive);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      const easing = 0.15;
      const dx = positionRef.current.x - displayPositionRef.current.x;
      const dy = positionRef.current.y - displayPositionRef.current.y;

      displayPositionRef.current.x += dx * easing;
      displayPositionRef.current.y += dy * easing;

      setDisplayPosition({
        x: displayPositionRef.current.x,
        y: displayPositionRef.current.y,
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  if (!mounted) return null;

  const size = isHovering ? 50 : 35;

  return (
    <div
      className={`hidden sm:block fixed pointer-events-none z-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-200`}
      style={{
        left: `${displayPosition.x}px`,
        top: `${displayPosition.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="relative flex items-center justify-center transition-all duration-200"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-blue-500/60 shadow-lg shadow-blue-400/40"></div>
        <div className="relative w-2 h-2 rounded-full bg-blue-100 shadow-md"></div>
      </div>
    </div>
  );
}
