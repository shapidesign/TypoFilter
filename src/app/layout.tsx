import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "פונט בריף - גלריית גופנים בעברית",
  description: "גלה גופנים בעברית לפי אופי",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${assistant.variable} font-sans antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
