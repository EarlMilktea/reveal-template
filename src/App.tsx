import { Deck, Slide } from "@revealjs/react";

const OPTIONS = {
  history: true,
  slideNumber: true,
} as const;

/**
 * The app component.
 * @returns Slides.
 */
export default function App() {
  return (
    <Deck config={OPTIONS}>
      <Slide>Slide 1</Slide>
      <Slide>Slide 2</Slide>
    </Deck>
  );
}
