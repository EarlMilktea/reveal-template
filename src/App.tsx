import RevealRoot from "./RevealRoot.tsx";

const OPTIONS: Readonly<Reveal.Options> = {
  history: true,
  slideNumber: true,
};

/**
 * The app component.
 * @returns Slides.
 */
export default function App() {
  return (
    <RevealRoot options={OPTIONS}>
      <section>Slide 1</section>
      <section>Slide 2</section>
    </RevealRoot>
  );
}
