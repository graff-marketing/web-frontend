import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";

const recursive = Recursive({
  variable: "--font-recursive",
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Graff",
  description: "Social Media Management Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${recursive.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
