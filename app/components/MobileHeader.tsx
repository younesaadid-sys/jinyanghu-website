"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import QuoteModal from "./QuoteModal";
import { useLocale, useTranslations } from "next-intl";
import {
  Link,
  usePathname,
  useRouter,
} from "../../i18n/navigation";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (newLocale: "en" | "fr" | "ar") => {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* LOGO */}
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src="/jin-yang-hu-logo.png"
            alt="JIN YANG HU"
            width={160}
            height={60}
            className="h-auto w-[140px]"
            priority
          />
        </Link>

        {/* MENU BUTTON */}
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
          {/* NAVIGATION */}
          <nav className="flex flex-col">
            <Link
              href="/#home"
              onClick={() => setOpen(false)}
              className="border-b border-zinc-100 py-4 font-semibold text-zinc-900 transition hover:text-orange-500"
            >
              {t("home")}
            </Link>

            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className="border-b border-zinc-100 py-4 font-semibold text-zinc-900 transition hover:text-orange-500"
            >
              {t("products")}
            </Link>

            <Link
              href="/#about"
              onClick={() => setOpen(false)}
              className="border-b border-zinc-100 py-4 font-semibold text-zinc-900 transition hover:text-orange-500"
            >
              {t("about")}
            </Link>

            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="py-4 font-semibold text-zinc-900 transition hover:text-orange-500"
            >
              {t("contact")}
            </Link>
          </nav>

          {/* LANGUAGE SELECTOR */}
          <div className="mt-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
              Language
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => changeLanguage("en")}
                className={`flex-1 rounded-lg px-3 py-2 text-sm font-bold transition ${
                  locale === "en"
                    ? "bg-orange-500 text-white"
                    : "bg-zinc-100 text-zinc-700"
                }`}
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => changeLanguage("fr")}
                className={`flex-1 rounded-lg px-3 py-2 text-sm font-bold transition ${
                  locale === "fr"
                    ? "bg-orange-500 text-white"
                    : "bg-zinc-100 text-zinc-700"
                }`}
              >
                FR
              </button>

              <button
                type="button"
                onClick={() => changeLanguage("ar")}
                className={`flex-1 rounded-lg px-3 py-2 text-sm font-bold transition ${
                  locale === "ar"
                    ? "bg-orange-500 text-white"
                    : "bg-zinc-100 text-zinc-700"
                }`}
              >
                AR
              </button>
            </div>
          </div>

          {/* QUOTE BUTTON */}
          <div className="mt-5">
            <QuoteModal />
          </div>
        </div>
      )}
    </header>
  );
}