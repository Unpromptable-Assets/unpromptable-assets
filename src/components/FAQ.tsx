"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    question: "How long does the process take?",
    answer:
      "Most engagements run 4–8 weeks depending on complexity. We'll give you a clear timeline after the audit.",
  },
  {
    question: "What kind of AI tools do you work with?",
    answer:
      "We're tool-agnostic. We use whatever serves your business best — from ChatGPT and Claude to custom automations, APIs, and workflow tools.",
  },
  {
    question: "Do I need to be involved in the build?",
    answer:
      "Yes — and that's by design. This is done-with-you, not done-for-you. Your involvement means you understand and own every piece.",
  },
  {
    question: "What happens after the system is delivered?",
    answer:
      "You own it completely. We do a full handoff with training. Optional ongoing support is available.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Every engagement is custom-scoped. The best way to get a clear picture is to take the diagnostic or book a discovery call — no obligation.",
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
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
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
