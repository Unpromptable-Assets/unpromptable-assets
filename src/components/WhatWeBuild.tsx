import FadeIn from "./FadeIn";

const systems = [
  {
    title: "AI-Powered Assessment & Delivery System",
    description:
      "Turn your expertise into a lead generation engine that works while you sleep.",
    bullets: [
      "40% higher conversion rates",
      "Customized high-value results for every lead",
      "Trained on your methodology and expertise",
      "Automated follow-up sequences",
    ],
  },
  {
    title: "Fully Automated Content Ecosystem",
    description:
      "One idea in. A full week of content out. No burnout required.",
    bullets: [
      "Full pipeline from ideation to repurposing",
      "Your voice and perspective baked in",
      "Reclaims 10–15+ hours per week",
      "Self-updating system that evolves with you",
    ],
  },
  {
    title: "AI Sales Pipeline & Follow-Up Engine",
    description:
      "Stop losing deals to silence. Every lead gets followed up — automatically.",
    bullets: [
      "Automated lead scoring and prioritization",
      "Personalized follow-up at scale",
      "Full pipeline visibility and reporting",
      "Recaptures leaking revenue",
    ],
  },
];

export default function WhatWeBuild() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
            Our Work
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
            What We Build
          </h2>
          <p className="mt-4 max-w-[680px] text-lg leading-relaxed text-muted">
            Every system is custom. Here&rsquo;s what that can look like for
            you.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3">
          {systems.map((system, i) => (
            <FadeIn key={system.title} delay={i * 120}>
              <div className="flex h-full flex-col bg-white p-8 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {system.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {system.description}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {system.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <p className="mx-auto mt-12 max-w-[680px] text-center leading-relaxed text-muted md:mt-14">
            These are examples of what we can build. Every build we create is
            bespoke, tailored to your business, bottlenecks, and goals.
          </p>
        </FadeIn>

        <FadeIn delay={500} className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-block bg-foreground px-8 py-4 text-base font-medium text-white transition-colors duration-200 hover:bg-gold"
          >
            Find Out What Your Business Needs
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
