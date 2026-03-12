"use client";

import Script from "next/script";
import FadeIn from "./FadeIn";

export default function ContactForm() {
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
            <div
              style={{ width: "100%", height: "500px" }}
              data-fillout-id="4ABM6vfhNaus"
              data-fillout-embed-type="standard"
              data-fillout-inherit-parameters
              data-fillout-dynamic-resize
            />
            <Script src="https://server.fillout.com/embed/v1/" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
