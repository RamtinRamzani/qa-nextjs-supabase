import type { Metadata } from "next";

import "@/styles/globals.css";
import { inter } from "../public/fonts/fonts";

export const metadata: Metadata = {
  title: "ْQuestions & Answers",
  description: "questions and answers by people...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
