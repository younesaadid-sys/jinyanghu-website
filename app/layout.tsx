import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JIN YANG HU | Industrial Lifting Solutions",
  description:
    "Professional industrial lifting, moving and heavy-load handling equipment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <MobileHeader />
        <Header />

        <main className="flex-1">{children}</main>
        <a
  href="https://wa.me/8613100006833"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110 hover:bg-green-600"
>
  <svg
    viewBox="0 0 32 32"
    className="h-8 w-8 fill-current"
    aria-hidden="true"
  >
    <path d="M19.11 17.44c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
    <path d="M16.03 3.2c-7.08 0-12.84 5.76-12.84 12.84 0 2.26.59 4.47 1.72 6.42L3.08 29.1l6.79-1.78a12.79 12.79 0 0 0 6.15 1.56h.01c7.08 0 12.84-5.76 12.84-12.84 0-3.43-1.34-6.65-3.76-9.08A12.76 12.76 0 0 0 16.03 3.2zm0 23.51h-.01c-1.93 0-3.82-.52-5.47-1.5l-.39-.23-4.03 1.06 1.08-3.93-.25-.4a10.62 10.62 0 0 1-1.63-5.67c0-5.9 4.8-10.7 10.71-10.7 2.86 0 5.55 1.11 7.57 3.14a10.63 10.63 0 0 1 3.14 7.57c0 5.9-4.8 10.7-10.72 10.7z" />
  </svg>
</a>
      </body>
    </html>
  );
}