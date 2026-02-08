"use client";

import { XLogo, GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-screen px-6 pt-12 sm:px-32 sm:pt-16">
        <main className="flex flex-col items-start gap-4">
          <p className="text-lg font-medium tracking-tight">
            Effy Zhang, builder at{" "}
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://claude.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-black dark:decoration-zinc-600 dark:hover:decoration-white"
                >
                  Anthropic
                </a>
              </TooltipTrigger>
              <TooltipContent>Current</TooltipContent>
            </Tooltip>
            . Previously YC S23 founder (
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-default">Baserun</span>
              </TooltipTrigger>
              <TooltipContent>2023–2025</TooltipContent>
            </Tooltip>
            ),{" "}
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-default">Cruise</span>
              </TooltipTrigger>
              <TooltipContent>2020–2023</TooltipContent>
            </Tooltip>
            , and{" "}
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://block.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-black dark:decoration-zinc-600 dark:hover:decoration-white"
                >
                  Block
                </a>
              </TooltipTrigger>
              <TooltipContent>2015–2020</TooltipContent>
            </Tooltip>
            .
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
    </TooltipProvider>
  );
}
