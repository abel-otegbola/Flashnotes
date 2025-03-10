import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Topbar from "@/components/topbar/topbar";
import TodosProvider from "@/context/todoContext";
import NotesProvider from "@/context/noteContext";
import AuthProvider from "@/context/authContext";
import FlashcardsProvider from "@/context/flashcardContext";

const inter = Inter({ subsets: ['latin'] })

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
    <TodosProvider>
    <FlashcardsProvider>
    <html lang="en">
      <body
        className={`${inter.className} antialiased text-[#37353c] dark:bg-dark dark:text-white/[0.9] md:text-[14px] text-[12px]`}
      >
      <AuthProvider>
        <NotesProvider>
          <Topbar />
          {children}
          <Footer />
        </NotesProvider>
      </AuthProvider>
      </body>
    </html>
    </FlashcardsProvider>
    </TodosProvider>
  );
}
