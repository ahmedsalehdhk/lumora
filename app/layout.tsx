import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Lumora - Gamify your life",
  description: "Gamification of life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-screen lg:h-screen flex flex-col lg:flex-row relative bg-[#F3F3F3]`}>
        <Navbar />
        <main className="bg-amber-60 lg:flex-1 px-5 lg:px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
