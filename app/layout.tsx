import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMES Coding Club",
  description: "Created by members of the Coding Club.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://eu.umami.is/script.js"
        data-website-id="ba79bfe6-6e55-4f59-ab15-d4161f00d21f"
      />
      <body className={`${inter.className} bg-black text-white`}>
        <div className="max-w-7xl mx-4 sm:6 md:mx-8 lg:mx-auto">
          {" "}
          {children}
        </div>
      </body>
    </html>
  );
}
