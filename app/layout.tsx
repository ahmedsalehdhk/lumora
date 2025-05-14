import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Lumora",
  description: "Gamification of life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
