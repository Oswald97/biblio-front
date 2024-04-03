import { Button } from "./components/ui/button";
import { Header, NavMenu } from "./layouts";

function App() {
  return (
    <div className="grid  min-h-screen w-full md:grid-cols-[220px_1fr]">
      <div className="hidden md:block bg-muted/40 border-r">
        <NavMenu />
      </div>
      <div className="flex flex-col">
        <Header />
        <main className="flex-1">
          {/* The app content goes here */}
        </main>
      </div>
    </div>
  );
}

export default App;
