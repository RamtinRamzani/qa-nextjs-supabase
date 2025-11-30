import type { Metadata } from "next";

import "@/styles/globals.css";
import { inter } from "../public/fonts/fonts";

export const metadata: Metadata = {
  title: "Questions & Answers",
  description: "questions and answers by people...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="relative w-full min-h-screen">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
            }}
          />
          <div className="relative top-0">{children}</div>
        </div>
      </body>
    </html>
  );
}
