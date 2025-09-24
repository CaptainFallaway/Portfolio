import type { IconComponent } from './common';

export interface NavbarButton {
  Icon: IconComponent;
  label: string;
  onClick: () => void;
}

export interface NavbarItem {
  type: "button" | "separator" | "theme-toggle";
  item?: NavbarButton;
}

export type Navbar = Array<NavbarItem>;