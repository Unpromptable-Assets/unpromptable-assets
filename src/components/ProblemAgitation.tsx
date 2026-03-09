import FadeIn from "./FadeIn";

const painPoints = [
  "You've downloaded the AI tools. You know the power of AI. Maybe even tried some tools yourself. But nothing sticks — and your business still runs manually.",
  "You see competitors talking about AI-powered workflows and wonder what they know that you don't.",
  "You're not anti-AI. You're anti-wasting-time on tools and courses that don't move the needle.",
];

export default function ProblemAgitation() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Sound Familiar?
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-8 md:mt-14">
          {painPoints.map((point, i) => (
            <FadeIn key={i} delay={i * 120}>
              <p className="max-w-[680px] text-lg leading-relaxed text-muted">
                {point}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <p className="mt-12 font-serif text-xl font-bold text-foreground md:text-2xl">
            That&rsquo;s what we&rsquo;re here for.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
