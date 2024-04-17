import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Cavalcanti",
  description: "Full-Stack Web Developer Curriculum Vitae",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
