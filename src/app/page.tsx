"use client";

import { XLogo, GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="min-h-screen px-6 pt-12 sm:px-32 sm:pt-16">
      <main className="flex flex-col items-start gap-4">
        <p className="text-lg font-medium tracking-tight">
          Effy Zhang, builder at{" "}
          <a
            href="https://claude.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-black dark:decoration-zinc-600 dark:hover:decoration-white"
          >
            Anthropic
          </a>
          . Previously YC S23 founder (Baserun), Cruise, and Square.
        </p>
        <nav className="flex gap-4">
          <a
            href="https://x.com/effyyzhang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-black dark:text-zinc-500 dark:hover:text-white"
            aria-label="Twitter"
          >
            <XLogo size={18} />
          </a>
          <a
            href="https://github.com/effyyzhang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-black dark:text-zinc-500 dark:hover:text-white"
            aria-label="GitHub"
          >
            <GithubLogo size={18} />
          </a>
          <a
            href="https://linkedin.com/in/effyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-black dark:text-zinc-500 dark:hover:text-white"
            aria-label="LinkedIn"
          >
            <LinkedinLogo size={18} />
          </a>
          <a
            href="mailto:effyyzhang@gmail.com"
            className="text-zinc-400 transition-colors hover:text-black dark:text-zinc-500 dark:hover:text-white"
            aria-label="Email"
          >
            <EnvelopeSimple size={18} />
          </a>
        </nav>
      </main>
    </div>
  );
}
