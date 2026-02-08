import type { Metadata } from "next";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";

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
    <html lang="en" className={GeistPixelSquare.variable}>
      <body className={`${GeistPixelSquare.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
