import { NavBarButton } from "./Button";
import { Seperator } from "./Seperator";
import { ThemeButton } from "./ThemeButton";

import { NAVBAR_ITEMS } from "@/content/navbar";

export function NavigationBar() {
  return (
    <div className="navbar">
      {NAVBAR_ITEMS.map((navItem, index) => {
        if (navItem.type === "separator") return <Seperator key={index} />;

        if (navItem.type === "theme-toggle") return <ThemeButton key={index} />;

        if (!navItem.item) {
          console.error("Nav item is missing 'item' property:", navItem);
          return null;
        }

        return (
          <NavBarButton
            key={index}
            onClick={navItem.item.onClick}
            label={navItem.item.label}
          >
            <navItem.item.Icon className="navbar-button-logo" />
          </NavBarButton>
        );
      })}
    </div>
  );
}
