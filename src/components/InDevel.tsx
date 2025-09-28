export function InDevel() {
  if (window.location.hostname === "localhost") return;

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 pt-4">
      <div className="text-center p-2 w-[60vw] bg-amber-300 rounded-lg">
        <h1 className="text-4xl font-bold text-zinc-800">
          🚧 Page Under Development 🚧
        </h1>
      </div>
    </div>
  );
}
