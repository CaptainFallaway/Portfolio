import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import { NavBarButton } from "./Button";

export function ThemeButton() {
  const theme = useTheme();

  const toggleTheme = () => {
    const newTheme = theme.theme === "light" ? "dark" : "light";
    theme.setTheme(newTheme);
  };

  return (
    <NavBarButton
      label={`Toggle ${theme.theme === "light" ? "Dark" : "Light"} Theme`}
      onClick={toggleTheme}
    >
      {theme.theme === "light" ? (
        <Moon className="navbar-button-logo" />
      ) : (
        <Sun className="navbar-button-logo" />
      )}
    </NavBarButton>
  );
}
