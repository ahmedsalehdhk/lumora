import type { Metadata } from "next";
import "./globals.css";
import { Oswald } from 'next/font/google';


export const metadata: Metadata = {
  title: "Lumora",
  description: "Gamification of life",
};

const oswald = Oswald({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={oswald.className}>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
