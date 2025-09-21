import { CircleUser, HomeIcon, Library } from "lucide-react";
import { Linkedin, Github } from "../logos";

import { NavBarButton } from "./Button";
import { Seperator } from "./Seperator";
import { ThemeButton } from "./ThemeButton";

export function NavigationBar() {
  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const scrollOneViewHeight = (index: number) => {
    window.scrollTo({
      top: window.innerHeight * index,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar">
      <NavBarButton onClick={() => scrollOneViewHeight(0)} label="Home">
        <HomeIcon className="navbar-button-logo" />
      </NavBarButton>
      <NavBarButton onClick={() => scrollOneViewHeight(1)} label="About">
        <Library className="navbar-button-logo" />
      </NavBarButton>
      <NavBarButton onClick={() => scrollOneViewHeight(2)} label="Contact">
        <CircleUser className="navbar-button-logo" />
      </NavBarButton>
      <Seperator />
      <NavBarButton
        onClick={() =>
          handleSocialClick(
            "https://www.linkedin.com/in/alexander-wollm%C3%A9r-507618191/"
          )
        }
        label="Linkedin"
      >
        <Linkedin className="navbar-button-logo" />
      </NavBarButton>
      <NavBarButton
        onClick={() => handleSocialClick("https://github.com/CaptainFallaway")}
        label="Github"
      >
        <Github className="navbar-button-logo" />
      </NavBarButton>
      <Seperator />
      <ThemeButton />
    </div>
  );
}
