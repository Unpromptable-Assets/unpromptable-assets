"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    question: "How is this different from a standard agency?",
    answer:
      "Most agencies use no-code tools to stitch together generic apps that break the moment your business outgrows them. We build custom systems around your specific business logic — your workflows, your edge cases, your growth trajectory. The result is infrastructure you can scale on, not a patchwork you'll need to replace in six months.",
  },
  {
    question: "What is "The Diagnostic"?",
    answer:
      "The Diagnostic is a strategic assessment of your operations, workflows, and growth bottlenecks — mapped against where AI can create the most leverage in your specific business. We built it because roughly 80% of AI projects fail when teams skip the strategy phase and jump straight to building. The Diagnostic makes sure we're solving the right problem before a single line of code is written.",
  },
  {
    question: "Who is your typical client?",
    answer:
      "If any of this feels like you, we're a 100% fit: You're running a growing business, experimented with ChatGPT, maybe set up a few automations — but you know there's a bigger play and you don't have the time or the technical team to figure it out. You're not looking for a chatbot. You want systems that remove bottlenecks, free up your time, and help you scale without scaling headcount.",
  },
  {
    question: "What happens after the system is delivered?",
    answer:
      "You own everything we build — the code, the logic, the infrastructure. Every system is designed to run independently, and we hand over full documentation and walk your team through how it works. If you want ongoing iteration or new builds, we offer retained partnerships, but the system works without us.",
  },
  {
    question: "How much does a custom build cost?",
    answer:
      "Most projects fall between £5,000 and £15,000 depending on complexity. We scope everything after The Diagnostic, so you know exactly what you're paying for before we start. Most builds pay for themselves within the first quarter.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 font-serif text-lg font-bold text-foreground">
          {question}
        </span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-muted transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[680px] leading-relaxed text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <h2 className="font-serif text-3xl font-bold text-foreground text-center md:text-4xl">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="mx-auto mt-10 max-w-3xl md:mt-14">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
