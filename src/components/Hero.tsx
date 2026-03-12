import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-white pt-20">
      <div className="mx-auto w-full max-w-[1200px] px-6">
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
              href="https://www.unpromptable.dev/ai-readiness-diagnostic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-foreground px-8 py-4 text-base font-medium text-white transition-colors duration-200 hover:bg-gold"
            >
              Take the AI Readiness Diagnostic
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-12 md:gap-16">
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-gray-400 md:text-4xl">
                10+
              </p>
              <p className="mt-1 text-sm text-muted">Products shipped</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-gray-400 md:text-4xl">
                25k
              </p>
              <p className="mt-1 text-sm text-muted">Audience</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-gray-400 md:text-4xl">
                100+
              </p>
              <p className="mt-1 text-sm text-muted">Paying users</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
