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

  const isArabic = locale === "ar";

  const changeLanguage = (newLocale: "en" | "fr" | "ar") => {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  return (
    <header
      dir={isArabic ? "rtl" : "ltr"}
      className="sticky top-0 z-[9999] border-b border-zinc-200 bg-white md:hidden"
    >
      {/* TOP BAR */}
      <div className="flex h-[68px] items-center justify-between px-4">
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="shrink-0"
        >
          <Image
            src="/jin-yang-hu-logo.png"
            alt="JIN YANG HU"
            width={160}
            height={60}
            className="h-auto w-[130px] sm:w-[145px]"
            priority
          />
        </Link>

        {/* MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-900 shadow-sm transition active:scale-95"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon
            icon={open ? "mdi:close" : "mdi:menu"}
            className="text-[26px]"
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute left-0 top-full w-full border-t border-zinc-200 bg-white shadow-xl">
          <div className="max-h-[calc(100vh-68px)] overflow-y-auto px-4 pb-6 pt-2">
            {/* NAVIGATION */}
            <nav className="flex flex-col">
              <Link
                href="/#home"
                onClick={() => setOpen(false)}
                className="flex min-h-[58px] items-center justify-between border-b border-zinc-100 py-4 text-base font-bold text-zinc-900 transition active:text-orange-500"
              >
                <span>{t("home")}</span>
                <Icon
                  icon={isArabic ? "mdi:chevron-left" : "mdi:chevron-right"}
                  className="text-xl text-zinc-400"
                />
              </Link>

              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="flex min-h-[58px] items-center justify-between border-b border-zinc-100 py-4 text-base font-bold text-zinc-900 transition active:text-orange-500"
              >
                <span>{t("products")}</span>
                <Icon
                  icon={isArabic ? "mdi:chevron-left" : "mdi:chevron-right"}
                  className="text-xl text-zinc-400"
                />
              </Link>

              <Link
                href="/#about"
                onClick={() => setOpen(false)}
                className="flex min-h-[58px] items-center justify-between border-b border-zinc-100 py-4 text-base font-bold text-zinc-900 transition active:text-orange-500"
              >
                <span>{t("about")}</span>
                <Icon
                  icon={isArabic ? "mdi:chevron-left" : "mdi:chevron-right"}
                  className="text-xl text-zinc-400"
                />
              </Link>

              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="flex min-h-[58px] items-center justify-between py-4 text-base font-bold text-zinc-900 transition active:text-orange-500"
              >
                <span>{t("contact")}</span>
                <Icon
                  icon={isArabic ? "mdi:chevron-left" : "mdi:chevron-right"}
                  className="text-xl text-zinc-400"
                />
              </Link>
            </nav>

            {/* LANGUAGE SELECTOR */}
            <div className="mt-6 rounded-2xl bg-zinc-50 p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-400">
                Language
              </p>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => changeLanguage("en")}
                  className={`rounded-xl px-3 py-3 text-sm font-bold transition ${
                    locale === "en"
                      ? "bg-orange-500 text-white shadow-sm"
                      : "border border-zinc-200 bg-white text-zinc-700"
                  }`}
                >
                  EN
                </button>

                <button
                  type="button"
                  onClick={() => changeLanguage("fr")}
                  className={`rounded-xl px-3 py-3 text-sm font-bold transition ${
                    locale === "fr"
                      ? "bg-orange-500 text-white shadow-sm"
                      : "border border-zinc-200 bg-white text-zinc-700"
                  }`}
                >
                  FR
                </button>

                <button
                  type="button"
                  onClick={() => changeLanguage("ar")}
                  className={`rounded-xl px-3 py-3 text-sm font-bold transition ${
                    locale === "ar"
                      ? "bg-orange-500 text-white shadow-sm"
                      : "border border-zinc-200 bg-white text-zinc-700"
                  }`}
                >
                  AR
                </button>
              </div>
            </div>

            {/* QUOTE BUTTON */}
            <div className="mt-5 [&>button]:w-full [&>button]:py-4">
              <QuoteModal />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}