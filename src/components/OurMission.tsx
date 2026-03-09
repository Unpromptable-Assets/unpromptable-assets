import FadeIn from "./FadeIn";

const principles = [
  {
    title: "AI as a force multiplier for your business.",
    description:
      "We believe AI is the single biggest leverage point available to business owners right now. With the right application, AI lets a small team operate in the big leagues, turn a good business into an exceptional one. Every system we build is designed to put that leverage directly in your hands.",
  },
  {
    title: "Global, fully digital, built for how you work.",
    description:
      "We're a small business that serves everyone across the world. No office visits, no timezone headaches, no friction. Our entire process — from discovery call to handoff — is designed to be seamless, whether you're in New York, London, China, or anywhere in between. You show up. We build.",
  },
  {
    title: "Builders, strategists, and teachers.",
    description:
      "We aren't just building AI systems for clients; we're building in public. With a combined audience of 25,000+ across Substack, Medium, and LinkedIn, we're part of a new breed of builder-creators who practice what we preach. We write about what we're learning, share what's working, and teach others to do the same. We don't just sell AI expertise, we live, breath, and teach it.",
  },
];

export default function OurMission() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
            Our Mission
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Unpromptability in everything we do.
          </h2>
          <p className="mt-4 max-w-[800px] text-lg leading-relaxed text-muted">
            We don&rsquo;t build generic AI tools. We build with a deep
            understanding of your business and positioning; your mission, your
            vision, your values, your data, and build AI systems that are
            inseparable from who you are and how you operate.
          </p>
          <p className="mt-4 max-w-[800px] text-lg leading-relaxed text-muted">
            The result is a tool that no one else has. It&rsquo;s AI-powered
            infrastructure so deeply encoded with your competitive advantage
            that no one using off-the-shelf AI could replicate it.
          </p>
          <p className="mt-4 max-w-[800px] text-lg leading-relaxed text-muted">
            That&rsquo;s what we mean by unpromptability: becoming irreplaceable
            by anyone, including anyone using AI.
          </p>
        </FadeIn>

        <div className="mt-14 space-y-10 md:mt-16">
          {principles.map((principle, i) => (
            <FadeIn key={principle.title} delay={i * 120}>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground md:text-2xl">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-[800px] leading-relaxed text-muted">
                  {principle.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
