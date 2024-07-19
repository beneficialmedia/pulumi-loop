import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rate Craig",
  description: "Let's rate Craig!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className+ ' bg-purple-100'}>{children}</body>
    </html>
  );
}
