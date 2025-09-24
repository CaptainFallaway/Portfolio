import type { IconComponent } from "./common";
import type { FC } from "react";

export interface Section {
  id: string;
  title: string;
  Content: FC;
  NavbarIcon: IconComponent
}

/* 
 * This type represents the whole portfolio site.
 * 
 * It includes the title of the site but also the sections that make up the site.
*/
export interface Site {
  title: string;
  sections: Section[];
}