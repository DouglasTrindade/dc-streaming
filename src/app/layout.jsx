import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DC Streaming",
  description: "DC Streaming",
  keywords: [
    "Streaming",
    "Streaming movie",
    "Streaming TV",
    "Channel Streaming",
    "DC Streaming",
    "DC",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${inter.className}`}>{children}</body>
    </html>
  );
}
