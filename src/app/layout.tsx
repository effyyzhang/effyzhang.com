import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const brunswickGrotesque = localFont({
  src: "../fonts/BrunswickGrotesque-Regular.otf",
  variable: "--font-brunswick",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Effy Zhang",
  description: "Personal website of Effy Zhang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={brunswickGrotesque.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(window.matchMedia('(prefers-color-scheme:dark)').matches)document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${brunswickGrotesque.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
