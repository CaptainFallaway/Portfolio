import { NavigationBar } from "@/components/navbar/Navbar";

export default function App() {
  return (
    <main>
      {/* Background */}
      <div className="fixed inset-0 w-screen h-screen">
        {/* <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        /> */}
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-20">
        <NavigationBar />
      </div>

      {/* Greetings */}
      <section></section>

      {/* Skills */}
      <section></section>

      {/* Where? */}
      <section></section>
    </main>
  );
}
