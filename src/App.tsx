import { Suspense, useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import type { ITechnology } from "./types/technologyType";
import Technologies from "./components/Technologies/Technologies";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

const technologiesFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const [technologiesPromise] = useState(() => technologiesFetch());

  return (
    <div className="relative">
      <ToastContainer />

      <Nav />

      <main className="pt-20">
        <Hero />

        <Suspense fallback={<h2>🌀 Loading...</h2>}>
          <Technologies technologiesPromise={technologiesPromise} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;