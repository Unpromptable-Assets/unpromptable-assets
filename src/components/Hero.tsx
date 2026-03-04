import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="bg-white pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Build the Business That
            <br className="hidden sm:block" /> Can&rsquo;t Be Replaced.
          </h1>

          <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-muted md:mt-8 md:text-xl">
            We build custom AI-powered systems for business owners who want an
            irreplaceable edge in marketing, operations, and sales. Take the
            free diagnostic to find out where you stand.
          </p>

          <div className="mt-8 md:mt-10">
            <a
              href="#contact"
              className="inline-block bg-foreground px-8 py-4 text-base font-medium text-white transition-colors duration-200 hover:bg-gold"
            >
              Take the Free Diagnostic &rarr;
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
