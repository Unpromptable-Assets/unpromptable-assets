import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a conversation. You tell us where your business is, where you want it to be, and what's getting in the way. No pitch. No pressure. Just clarity.",
  },
  {
    number: "02",
    title: "Audit",
    description:
      "We dig into your workflows, tools, and operations to identify exactly where AI can create the most impact. You get a clear map of what to build and why.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design and build your custom AI-powered system — done with you, not for you. Every piece is tailored to how your business actually runs.",
  },
  {
    number: "04",
    title: "Handoff & Training",
    description:
      "We hand you the keys and make sure you know how to drive. You walk away with a system you own, understand, and can operate independently.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
            The Process
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-[680px] text-lg leading-relaxed text-muted">
            From first conversation to a fully operational AI system — in four
            steps.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 100}>
              <div className="flex gap-5">
                <span className="font-serif text-3xl font-bold text-gold md:text-4xl">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500} className="mt-14 text-center md:mt-16">
          <a
            href="#contact"
            className="inline-block bg-foreground px-8 py-4 text-base font-medium text-white transition-colors duration-200 hover:bg-gold"
          >
            See Where You Stand &rarr; Take the Diagnostic
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
