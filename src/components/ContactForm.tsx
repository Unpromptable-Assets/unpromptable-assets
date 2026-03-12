"use client";

import Script from "next/script";
import FadeIn from "./FadeIn";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <div className="mx-auto max-w-xl">
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
