/// <reference types="vite/client" />

import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "./custom.css.ts";

import assert from "minimalistic-assert";
import { useEffect, useRef } from "react";

const OPTIONS: Readonly<Reveal.Options> = {
  history: true,
  slideNumber: true,
};

export default function App() {
  const deckDivRef = useRef<HTMLDivElement | null>(null);
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current) {
      return;
    }

    const init = async () => {
      assert(deckDivRef.current);

      const { default: Reveal } = await import("reveal.js");
      deckRef.current = new Reveal(deckDivRef.current, OPTIONS);

      await deckRef.current.initialize();
    };

    init().catch(console.error);

    return () => {
      deckRef.current?.destroy();
      deckRef.current = null;
    };
  }, []);

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>Slide 1</section>
        <section>Slide 2</section>
      </div>
    </div>
  );
}
