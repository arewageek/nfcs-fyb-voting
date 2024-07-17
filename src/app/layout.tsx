import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer />
      </body>
    </html>
  );
}
