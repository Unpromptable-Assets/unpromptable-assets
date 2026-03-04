"use client";

import { type FormEvent, useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (email) setSubscribed(true);
  }

  return (
    <footer className="bg-foreground py-16 text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white">
              Unpromptable Assets
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Custom AI-powered systems for business owners who want an
              irreplaceable edge.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white">
              Join the Unpromptable Newsletter
            </h4>
            {subscribed ? (
              <p className="mt-4 text-sm text-gray-400">
                You&rsquo;re in. Watch your inbox.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your email"
                  className="w-full border border-gray-700 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 bg-white px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-gold hover:text-white"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col items-start md:items-end">
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Substack
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                LinkedIn
              </a>
            </div>
            <div className="mt-4 flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6">
          <p className="text-center text-sm text-gray-500">
            &copy; 2026 Unpromptable Assets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
