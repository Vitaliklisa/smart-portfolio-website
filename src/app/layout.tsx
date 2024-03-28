import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {ThemeProvider} from "./components/ThemeProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Vitalii Khomenko",
    default: "Vitalii Khomenko",
  },
  description: "Look out my smart portfolio website with custom AI chatbot. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute="class">
        <Navbar />
        <main className="max-w-3x1 mx-auto px-3 py-10">{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
