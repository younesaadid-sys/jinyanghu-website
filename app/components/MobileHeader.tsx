"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import QuoteModal from "./QuoteModal";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <a href="#home" onClick={() => setOpen(false)}>
          <Image
            src="/jin-yang-hu-logo.png"
            alt="JIN YANG HU"
            width={160}
            height={60}
            className="h-auto w-[140px]"
            priority
          />
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 text-zinc-900"
          aria-label="Open menu"
        >
          <Icon
            icon={open ? "mdi:close" : "mdi:menu"}
            className="text-2xl"
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-4 pb-5 pt-3 shadow-lg">
          <nav className="flex flex-col">
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="border-b border-zinc-100 py-4 font-semibold text-zinc-900 transition hover:text-orange-500"
            >
              Home
            </a>

            <a
              href="/products"
              onClick={() => setOpen(false)}
              className="border-b border-zinc-100 py-4 font-semibold text-zinc-900 transition hover:text-orange-500"
            >
              Products
            </a>

            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="border-b border-zinc-100 py-4 font-semibold text-zinc-900 transition hover:text-orange-500"
            >
              About Us
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="py-4 font-semibold text-zinc-900 transition hover:text-orange-500"
            >
              Contact
            </a>
          </nav>

          <div className="mt-4">
            <QuoteModal />
          </div>
        </div>
      )}
    </header>
  );
}