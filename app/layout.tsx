import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baghchal",
  description: "A nepali folk game made in nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${inter.className} bg-slate-950`}>
          {/* adding navbar will render on all pages */}
          <Navbar />
          <div className="pt-20">
           {children}
          </div>
        </body>
      </html>
  );
}
