import { NavigationBar } from "@/components/navbar/Navbar";
import { useEffect } from "react";
import scrollManager from "./lib/scrollManager";

export default function App() {
  useEffect(() => {
    scrollManager.attachListener();

    scrollManager.scrollToSection("hello");

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

      {/* Greetings */}
      <section id="hello">
        <div className="flex md:flex-row flex-col gap-4 justify-center h-[72vh] w-[82vw]">
          <div className="card p-6 w-full h-full flex justify-center"></div>
          <div className="card p-6 w-full h-full flex justify-center"></div>
          <div className="card p-6 w-full h-full flex justify-center"></div>
        </div>
      </section>

      {/* Skills */}
      <section id="about">
        <h2 className="text-2xl font-semibold">
          Experiences, Competence, What I like to work on.
        </h2>
      </section>

      {/* Where? */}
      <section id="socials">
        <h2 className="text-2xl font-semibold">Where to find me</h2>
      </section>
    </main>
  );
}
