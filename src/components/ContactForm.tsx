"use client";

import { useState, type FormEvent } from "react";
import FadeIn from "./FadeIn";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Let&rsquo;s Talk About Your Business
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Fill out the form and we&rsquo;ll be in touch within 24–48 hours.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="mx-auto mt-10 max-w-xl md:mt-14">
            {submitted ? (
              <div className="py-12 text-center">
                <p className="font-serif text-2xl font-bold text-foreground">
                  Thank you.
                </p>
                <p className="mt-3 text-lg text-muted">
                  We&rsquo;ve received your message and will be in touch within
                  24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-foreground transition-colors placeholder:text-gray-400 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-foreground transition-colors placeholder:text-gray-400 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Business Name
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    required
                    className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-foreground transition-colors placeholder:text-gray-400 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Brief description of what you&rsquo;re looking for
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    required
                    className="w-full resize-none rounded-md border border-gray-200 bg-white px-4 py-3 text-foreground transition-colors placeholder:text-gray-400 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-foreground px-8 py-4 text-base font-medium text-white transition-colors duration-200 hover:bg-gold"
                >
                  Request a Discovery Call
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
