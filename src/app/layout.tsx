import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans, instrumentSerif } from "./fonts";

export const metadata: Metadata = {
  title: "Experiments",
  description: "Experiments by Daniel Moura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
