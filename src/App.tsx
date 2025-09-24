import { useEffect } from "react";
import { NavigationBar } from "@/components/navbar/Navbar";

import scrollManager from "@/lib/scrollManager";

import { SITE } from "@/content/site";

export default function App() {
  useEffect(() => {
    scrollManager.attachListener();

    scrollManager.scrollToSection(SITE.sections[0].id);

    return () => {
      scrollManager.detachListener();
    };
  }, []);

  return (
    <main>
      {/* Navigation */}
      <div className="navbar-parent">
        <NavigationBar />
      </div>

      {SITE.sections.map((section, index) => (
        <section id={section.id} key={index}>
          <section.Content />
        </section>
      ))}
    </main>
  );
}
