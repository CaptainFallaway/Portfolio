import { NavigationBar } from "@/components/navbar/Navbar";

export default function App() {
  return (
    <main>
      {/* Navigation */}
      <div className="fixed w-screen bottom-0 left-1/2 -translate-x-1/2 z-20">
        <NavigationBar />
      </div>

      {/* Greetings */}
      <section id="home">
        <h1 className="text-4xl font-bold">Hello, I'm Alex</h1>
      </section>

      {/* Skills */}
      <section id="about">
        <h2 className="text-2xl font-semibold">Skills</h2>
      </section>

      {/* Where? */}
      <section id="socials"></section>
    </main>
  );
}
