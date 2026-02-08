export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Effy Zhang
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          Welcome to my corner of the internet.
        </p>
        <nav className="flex gap-6 text-sm font-medium">
          <a
            href="https://github.com/effyyzhang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/effyzhang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@effyzhang.com"
            className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
          >
            Email
          </a>
        </nav>
      </main>
      <footer className="absolute bottom-8 text-xs text-zinc-400">
        &copy; {new Date().getFullYear()} Effy Zhang
      </footer>
    </div>
  );
}
