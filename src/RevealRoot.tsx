import assert from "minimalistic-assert";
import { type ReactNode, useEffect, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  options?: Readonly<Reveal.Options>;
}

/**
 * A React wapper for Reveal.js.
 * @param props - React props.
 * @param props.children - Slides to add.
 * @param props.options - Options to be passed to Reveal.js.
 * @returns `<div class="reveal">...</div>`.
 */
export default function RevealRoot({ children, options }: RevealProps) {
  const deckDivRef = useRef<HTMLDivElement | null>(null);
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current) {
      return;
    }

    const init = async () => {
      assert(deckDivRef.current);

      const { default: Reveal } = await import("reveal.js");
      deckRef.current = new Reveal(deckDivRef.current, options ?? {});

      await deckRef.current.initialize();
    };

    init().catch(console.error);

    return () => {
      deckRef.current?.destroy();
      deckRef.current = null;
    };
  }, [options]);

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">{children}</div>
    </div>
  );
}
