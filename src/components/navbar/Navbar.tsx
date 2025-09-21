import { CircleUser, HomeIcon, Library } from "lucide-react";
import { Linkedin, Github } from "../logos";

import { NavBarButton } from "./Button";
import { Seperator } from "./Seperator";
import { ThemeButton } from "./ThemeButton";

export function NavigationBar() {
  return (
    <div className="navbar">
      <NavBarButton label="Home">
        <HomeIcon className="navbar-button-logo" />
      </NavBarButton>
      <NavBarButton label="About">
        <Library className="navbar-button-logo" />
      </NavBarButton>
      <NavBarButton label="Contact">
        <CircleUser className="navbar-button-logo" />
      </NavBarButton>
      <Seperator />
      <NavBarButton label="Linkedin">
        <Linkedin className="navbar-button-logo" />
      </NavBarButton>
      <NavBarButton label="Github">
        <Github className="navbar-button-logo" />
      </NavBarButton>
      <Seperator />
      <ThemeButton />
    </div>
  );
}
