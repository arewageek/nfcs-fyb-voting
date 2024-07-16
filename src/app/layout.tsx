import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFCS FYB Personalities",
  description: "Nominate and vote for your favourite personalities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="static min-h-[200vh]">
        <Header />
        {children}
      </body>
    </html>
  );
}
