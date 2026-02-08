"use client";

import { XLogo, GithubLogo, EnvelopeSimple } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Effy Zhang, builder at Anthropic.
        </h1>
        <nav className="flex gap-6">
          <a
            href="https://x.com/effyyzhang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-black dark:hover:text-white"
            aria-label="Twitter"
          >
            <XLogo size={20} />
          </a>
          <a
            href="https://github.com/effyyzhang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-black dark:hover:text-white"
            aria-label="GitHub"
          >
            <GithubLogo size={20} />
          </a>
          <a
            href="mailto:effyyzhang@gmail.com"
            className="text-zinc-500 transition-colors hover:text-black dark:hover:text-white"
            aria-label="Email"
          >
            <EnvelopeSimple size={20} />
          </a>
        </nav>
      </main>
      <footer className="absolute bottom-8 text-xs text-zinc-400">
        &copy; {new Date().getFullYear()} Effy Zhang
      </footer>
    </div>
  );
}
