import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";

import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="flex min-h-screen flex-col"
      >
        <MobileHeader />
        <Header />

        <main className="flex-1">{children}</main>
      </div>
    </NextIntlClientProvider>
  );
}