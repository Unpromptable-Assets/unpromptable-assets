import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote:
      "This was actually the first time I submitted an article that came back with no comments from QA at all — which honestly blew my mind a little. The AI system definitely played a big part in that. It made the writing process smoother and more natural, especially when trying to strike that conversational, human tone.",
    name: "Islam Ashraf",
    role: "Researcher",
    business: "LMSL",
    businessUrl: "https://lifemanagementsciencelabs.com/",
  },
  {
    quote:
      "James developed a detailed and accurate description of me and Gratefully Well, then built a custom writing assistant that actually captured my voice. His insights improved not just the tools I was using, but how I approached writing itself.",
    name: "Julius Torelli",
    role: "President & Founder",
    business: "Gratefully Well",
    businessUrl: "https://www.gratefullywell.com/",
  },
  {
    quote:
      "The system we built was custom to me — not to sound like anyone else, but to sound like LeiMya's CO-OP and our mission. I needed to be able to explain in one sentence what we stand for, who we are, and how we change the world. We achieved that.",
    name: "Elais",
    role: "Co-Founder & Head of Marketing",
    business: "LeiMya's CO-OP",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
            Testimonials
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
            What Our Clients Say
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 120}>
              <div className="flex h-full flex-col border-l-2 border-gold bg-white p-8 shadow-sm">
                <p className="flex-1 text-lg leading-relaxed text-foreground italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-medium text-foreground">{t.name}</p>
                  <p className="text-sm text-muted">
                    {t.role}
                    {t.business && (
                      <>
                        ,{" "}
                        {t.businessUrl ? (
                          <a
                            href={t.businessUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold hover:underline"
                          >
                            {t.business}
                          </a>
                        ) : (
                          <span>{t.business}</span>
                        )}
                      </>
                    )}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
