"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface SectionContextType {
  currentSection: number;
  setCurrentSection: (section: number) => void;
  scrollToNextSection: (totalSections: number) => void;
}

const SectionContext = createContext<SectionContextType | null>(null);

export const useScrollSectionContext = () => {
  const ctx = useContext(SectionContext);
  if (!ctx) {
    throw new Error("useSectionContext must be used within SectionProvider");
  }
  return ctx;
};

export function ScrollSectionProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToNextSection = (totalSections: number) => {
    if (currentSection < totalSections - 1) {
      const nextSection = currentSection + 1;
      const element = document.getElementById(`section-${nextSection}`);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setCurrentSection(nextSection);
      }
    }
  };

  return (
    <SectionContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        scrollToNextSection,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}
