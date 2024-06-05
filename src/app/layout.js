import { Inter } from "next/font/google";
import "./globals.css";
import { Head } from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kanban Blog",
  description: "Best kanban blog application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
