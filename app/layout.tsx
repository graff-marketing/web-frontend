import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${recursive.variable} antialiased mx-8 my-4`}
      >
        <Header />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
