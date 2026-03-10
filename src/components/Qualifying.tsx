import FadeIn from "./FadeIn";

const forYou = [
  "You run a real business with revenue and clients",
  "You're tired of piecemeal AI experiments that go nowhere",
  "You're ready to invest in infrastructure that compounds over time",
  "You want to be involved in the build — not just handed a black box",
  "You're ready to build a future-proof, AI-integrated, defensible business",
];

const notForYou = [
  "You don't have a business yet",
  "You think AI is a quick hack or a magic tool",
  "You want someone to just \"do it\" with zero involvement on your part",
];

export default function Qualifying() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Is This Right for Your Business?
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-16">
          <FadeIn delay={100}>
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground">
                This is for you if:
              </h3>
              <ul className="mt-6 space-y-4">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="leading-relaxed text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground">
                This probably isn&rsquo;t for you if:
              </h3>
              <ul className="mt-6 space-y-4">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="leading-relaxed text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
