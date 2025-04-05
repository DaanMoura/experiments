import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans, instrumentSerif } from "./fonts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryProvider from "@/components/QueryProvider";

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
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
