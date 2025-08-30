import type { Metadata } from "next";
import { Audiowide } from "next/font/google";
import "./globals.css";

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "n8n Preet",
  description: "Welcome to the n8n Preet landing page",
    icons: {
    icon: "/n8n.png", // this sets your PNG as the browser tab icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${audiowide.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
