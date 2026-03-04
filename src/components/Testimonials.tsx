import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote:
      "Working with Unpromptable completely changed how we approach our marketing pipeline.",
    name: "Alex R.",
    role: "Founder",
  },
  {
    quote:
      "The content system they built saves us 15 hours a week. It's like having an extra team member.",
    name: "Sarah M.",
    role: "CEO",
  },
  {
    quote:
      "I was skeptical about AI, but they made it practical and approachable. Now I can't imagine running without it.",
    name: "David K.",
    role: "Business Owner",
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
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
