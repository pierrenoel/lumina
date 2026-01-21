import { useState } from "react";
import Gradiant from "./Gradiant";
import Shadow from "./Shadow";

export default function App() {
  const [toogle, setToogle] = useState(1);

  return (
    <>
      <div className="min-h-screen bg-white p-4 md:p-10 font-sans text-slate-900">
        <div className="max-w-5xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-black tracking-tight italic">
              LUMINA
            </h1>
            <p className="opacity-60">Master the art of CSS gradients.</p>
            <div className="my-5 flex gap-x-5">
              <button className="btn btn-primary" onClick={() => setToogle(1)}>
                Gradiant
              </button>
              <button className="btn btn-primary" onClick={() => setToogle(2)}>
                Shadow
              </button>
            </div>
          </header>

          {toogle == 1 ? <Gradiant /> : <Shadow />}
        </div>
      </div>
    </>
  );
}
