import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-slate-950 to-slate-800 text-white`}
      >
        <div className="max-w-7xl mx-4 sm:6 md:mx-8 lg:mx-auto">
          {" "}
          {children}
        </div>
      </body>
    </html>
  );
}
