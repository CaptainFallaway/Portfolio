import { WavingHand } from "@/components/icons";
import { CircleUser, Library } from "lucide-react";

import type { Site } from "./types/site";

import Hello from "@/components/sections/Hello";
import About from "@/components/sections/About";
import Socials from "@/components/sections/Socials";

export const SITE: Site = {
  title: "CaptainFallaway's Portfolio",
  sections: [
    {
      id: "hello",
      title: "Hello",
      Content: Hello,
      NavbarIcon: WavingHand,
    },
    {
      id: "about",
      title: "About",
      Content: About,
      NavbarIcon: Library,
    },
    {
      id: "socials",
      title: "Socials",
      Content: Socials,
      NavbarIcon: CircleUser,
    },
  ],
} as const;
