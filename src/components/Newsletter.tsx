import FadeIn from "./FadeIn";

const articles = [
  {
    title:
      "An AI-Powered Assessment That Turned 18 Years of Therapy Experience into A Unique Asset",
    subtitle:
      "This AI system generated 40 paid buyers and upsold 4 into high-ticket consultancies.",
    link: null,
  },
  {
    title:
      "OpenClaw for One-Person Businesses: What It Is, What I Tried, and What Matters for You",
    subtitle:
      "I've been running it for weeks. This is the full picture and the framework for deciding if it's for you.",
    link: "https://buildtolaunch.substack.com/p/openclaw-ai-agent-one-person-business",
  },
  {
    title: "The AI Skill Nobody's Teaching (That Will Matter Most in 2026)",
    subtitle:
      "It's not prompting. It's not automation. It's something far more human.",
    link: "https://unpromptable.substack.com/p/the-ai-skill-nobodys-teaching-that",
  },
  {
    title: "The Mental Barriers Preventing You From Building With AI",
    subtitle: "I asked 14 AI builders how to overcome them.",
    link: "https://unpromptable.substack.com/p/the-mental-barriers-preventing-you",
  },
  {
    title:
      "11 AI Systems That Compound Into Moats (And The Order To Build Them)",
    subtitle:
      "The early/mid/late game blueprint for AI-powered founders who refuse to be replaceable",
    link: "https://unpromptable.substack.com/p/11-ai-systems-that-compound-into?r=1uwq12",
  },
  {
    title: "5 AI Systems Nobody's Talking About (That Actually Build Moats)",
    subtitle:
      "While everyone's on an arm's race, dig deep moats with these AI system ideas.",
    link: "https://unpromptable.substack.com/p/5-ai-systems-nobodys-talking-about?r=1uwq12",
  },
];

export default function Newsletter() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            From Our Newsletter:
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {articles.map((article, i) => (
            <FadeIn key={article.title} delay={i * 100}>
              {article.link ? (
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full rounded-lg bg-[#ECECEC] p-6 shadow-md transition-all duration-200 hover:shadow-lg hover:bg-[#E5E5E5]"
                >
                  <h3 className="font-serif text-lg font-bold leading-snug text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {article.subtitle}
                  </p>
                </a>
              ) : (
                <div className="block h-full rounded-lg bg-[#ECECEC] p-6 shadow-md">
                  <h3 className="font-serif text-lg font-bold leading-snug text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {article.subtitle}
                  </p>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
