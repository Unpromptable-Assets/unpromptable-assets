import FadeIn from "./FadeIn";

const systems = [
  {
    title: "AI-Powered Diagnostic Forms",
    description:
      "Train AI to deliver customized assessments that qualify, nurture, and book leads for you.",
    bullets: [
      "Automated follow-up sequences to book meetings",
      "Customized, high-value, branded reports for every lead to boost trust",
      "Gather deep user intel for market research, nurture sequence, and outreach strategy",
    ],
    result:
      "You get: 40% higher conversion rates + deep user data.",
  },
  {
    title: "Automated Content Ecosystem",
    description:
      "Create AI systems trained on how you create, whatever your media, platform, or skill level.",
    bullets: [
      "Your best works built-in as reference",
      "One input, optimized output on every platform",
      "Protect your unique presence and maintain trust",
      "Integrate AI according to your skill level and comfort",
      "Plug and play builds reclaim your hours and energy from Day 1",
    ],
    result:
      "Save 15+ hours every week on content creation. Plus a seamless, consistent presence that builds trust without burnout.",
  },
  {
    title: "24/7 AI Sales Assistant",
    description:
      "Build an AI teammate that cold-emails, follows-up, and nurtures leads at all hours of the day.",
    bullets: [
      "Automate lead gathering and personalized outreach",
      "Automated follow ups ensures you never miss a lead again",
      "Full pipeline visibility and reporting ensure data-driven decision-making",
    ],
    result:
      "Reclaim 30-50% of inbound leads lost and 5-10 hours/week on disorganized follow-ups.",
  },
];

export default function WhatWeBuild() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
            Our Work
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
            We Build Defensible, AI-Powered Systems
          </h2>
          <p className="mt-4 max-w-[680px] text-lg leading-relaxed text-muted">
            Automate your business. Build an AI-powered edge your competitors
            can&rsquo;t copy.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3">
          {systems.map((system, i) => (
            <FadeIn key={system.title} delay={i * 120}>
              <div className="flex h-full flex-col rounded-lg bg-white p-8 shadow-sm">
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
                <p className="mt-5 text-sm font-bold leading-relaxed text-foreground">
                  {system.result}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500} className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-block rounded-md bg-foreground px-8 py-4 text-base font-medium text-white transition-colors duration-200 hover:bg-gold"
          >
            Find Out What Your Business Needs
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
