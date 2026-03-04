import FadeIn from "./FadeIn";

export default function ObjectionHandling() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            What If I&rsquo;m Not Technical?
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="mt-8 max-w-[680px] text-lg leading-relaxed text-muted">
            Good news: you don&rsquo;t need to be. We didn&rsquo;t build this
            for developers — we built it for business owners. The entire process
            is designed so that you understand every decision, every tool, and
            every workflow we put in place. If you can run your business, you can
            run your system. That&rsquo;s the whole point.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
