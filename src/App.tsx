/// <reference types="vite/client" />

import assert from "minimalistic-assert";
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";

import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";

export default function App() {
  const deckDivRef = useRef<HTMLDivElement | null>(null);
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current) {
      return;
    }
    assert(deckDivRef.current);

    deckRef.current = new Reveal(deckDivRef.current, {
      center: false,
      history: true,
    });
    deckRef.current.initialize().catch(console.error);

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
