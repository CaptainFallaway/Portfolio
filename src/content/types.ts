import type { LucideIcon } from 'lucide-react';
import type { FC, ComponentProps } from 'react';

export interface PersonalInfo {
  name: string;
  title: string;
  about: {
    short: string;
    long: string;
  };
  skills: Array<{
    name: string;
    level: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;
}

type IconComponent = LucideIcon | FC<ComponentProps<'svg'>>;

export interface NavbarButton {
  icon: IconComponent;
  label: string;
  onClick: () => void;
}

export interface NavbarItem {
  type: "button" | "separator" | "theme-toggle";
  item?: NavbarButton;
}

export type Navbar = Array<NavbarItem>;