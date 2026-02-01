import type { LucideIcon } from "lucide-react";

export type NavItem = {
  name: string;
  link: string;
};

export type socialIcon = {
  icon: LucideIcon;
  alt: string;
};

export interface MenuField {
  href: string;
  key: string;
}

export type Skill = {
  name: string;
  icon: string;
  color: string;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};
