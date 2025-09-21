import { NavigationBar } from "@/components/navbar/Navbar";

export default function App() {
  return (
    <main>
      {/* Navigation */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-20">
        <NavigationBar />
      </div>

      {/* Greetings */}
      <section>
        <h1 className="text-4xl font-bold">Hello, I'm Alex</h1>
      </section>

      {/* Skills */}
      <section></section>

      {/* Where? */}
      <section></section>
    </main>
  );
}
