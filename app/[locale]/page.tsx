import { Icon } from "@iconify/react";
import Image from "next/image";
import { Anton } from "next/font/google";
import { getLocale, getTranslations } from "next-intl/server";
import HomeBanner from "../components/HomeBanner";
import newsData from "../../data/news.json";
import NewsTabs from "../components/NewsTabs";
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default async function Home() {
  const t = await getTranslations("home");
  const locale = await getLocale();
  const latestNews = Array.isArray(newsData)
  ? newsData
  : [];
  return (
    
    <main className="min-h-screen bg-white text-zinc-900">
      {/* AUTOMATIC BANNER */}
<HomeBanner />


{/* HERO */}
<section
  id="home"
  className="relative overflow-hidden bg-zinc-950 text-white"
>
  {/* BACKGROUND EFFECT */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-orange-500 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1440px] px-6 py-20 lg:px-8">
    <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

      {/* LEFT SIDE */}
      <div className="max-w-[680px] text-left">
        <div className="mb-5 inline-flex rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
          {t("hero.badge")}
        </div>

        <h1
          className={`${anton.className} text-left uppercase leading-[0.95] tracking-tight`}
        >
          <span className="block text-5xl text-white md:text-7xl">
            {t("hero.title1")}
          </span>

         <span className="mt-2 block whitespace-nowrap">
  <span className="text-4xl text-white md:text-6xl">
    {t("hero.for")}{" "}
  </span>

  <span className="text-4xl text-orange-500 md:text-6xl">
    {t("hero.title2")}
  </span>
</span>
        </h1>

        <p className="mt-7 max-w-[620px] text-left text-lg leading-8 text-zinc-300">
          {t("hero.description")}
        </p>

        <div className="mt-9 flex flex-wrap justify-start gap-4">
          <a
            href="/products/electric-heavy-duty-movers/ja-series-electric-tank-transporters"
            className="rounded-md bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
          >
            {t("hero.featuredProduct")}
          </a>

          <a
            href="/#contact"
            className="rounded-md border border-zinc-600 px-7 py-4 font-semibold text-white transition hover:border-white"
          >
            {t("hero.contactSales")}
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">

       

        {/* FEATURED PRODUCT VIDEO */}
<div className="rounded-[30px] border border-zinc-800 bg-zinc-900 p-4 shadow-2xl">
  <div className="overflow-hidden rounded-[24px] bg-black">
    <div className="relative aspect-video w-full lg:min-h-[460px]">
      <iframe
        className="absolute inset-0 h-full w-full"
        src="https://www.youtube.com/embed/eZI0aQcoraw?rel=0"
        title="Tank Mover Product Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
</div>
      </div>
    </div>

    {/* TRUST / SALES BAR */}
    <div className="mt-16 overflow-hidden rounded-xl bg-orange-600 text-white">
      {/* EXPERIENCE BADGE ABOVE SALES BAR */}
<div className="mb-[-10px] flex -translate-y-6 justify-center">
  <div className="relative z-20 inline-flex items-center gap-3 rounded-full border border-orange-500/40 bg-zinc-950 px-7 py-4 shadow-xl">
    <div className="h-3 w-3 rounded-full bg-orange-500" />

    <span className="text-lg font-bold text-white">
      <span className="text-orange-500">+20</span> {t("hero.yearsExperience")}
    </span>
  </div>
</div>
{/* TRUST / SALES BAR */}
<div className="mt-10 overflow-hidden rounded-xl bg-orange-600 text-white"></div>
      <div className="grid -translate-y-5 md:grid-cols-4">

        <div className="flex items-center justify-center gap-5 px-6 py-4 md:border-r md:border-white/25">
          <Icon
            icon="mdi:earth"
            className="shrink-0 text-5xl text-orange-100"
          />

          <div>
            <div className="text-2xl font-black leading-none">
              {t("hero.globalB2B")}
            </div>

            <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-orange-100">
              {t("hero.industrialSupply")}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 px-6 py-4 md:border-r md:border-white/25">
          <Icon
            icon="mdi:cog-outline"
            className="shrink-0 text-5xl text-orange-100"
          />

          <div>
            <div className="text-2xl font-black leading-none">
              OEM / ODM
            </div>

            <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-orange-100">
              {t("hero.customSolutions")}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 px-6 py-4 md:border-r md:border-white/25">
          <Icon
            icon="mdi:flash-outline"
            className="shrink-0 text-5xl text-orange-100"
          />

          <div>
            <div className="text-2xl font-black leading-none">
              {t("hero.fastQuote")}
            </div>

            <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-orange-100">
              {t("hero.salesSupport")}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 px-6 py-4">
          <Icon
            icon="mdi:shield-check-outline"
            className="shrink-0 text-5xl text-orange-100"
          />

          <div>
            <div className="text-2xl font-black leading-none">
              {t("hero.qualityFocus")}
            </div>

            <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-orange-100">
              {t("hero.reliableEquipment")}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="bg-zinc-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          {/* COMPANY / FACTORY VIDEO */}
<div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
  <video
    className="absolute inset-0 h-full w-full object-cover"
    src="/videos/company-factory.mp4"
    autoPlay
    muted
    loop
    playsInline
  />
</div>

          <div>
            <p className="font-semibold uppercase tracking-wider text-orange-500">
              {t("about.title")}
            </p>

            <h2 className="mt-3 text-4xl font-black leading-tight">
              {t("about.description")}
            </h2>

            <p className="mt-6 leading-8 text-zinc-600">
              {t("about.descriptionLong")}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-5">
                <div className="text-2xl font-black text-orange-500">
                  {t("about.quality")}
                </div>

                <p className="mt-2 text-sm text-zinc-600">
                  {t("about.qualityDescription")}
                </p>
              </div>

              <div className="rounded-xl bg-white p-5">
                <div className="text-2xl font-black text-orange-500">
                  {t("about.service")}
                </div>

                <p className="mt-2 text-sm text-zinc-600">
                  {t("about.serviceDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* PRODUCT COLLECTIONS */}
<section className="bg-white">
  <div className="mx-auto max-w-[1600px] px-6 py-16">

    {/* ================= ELECTRIC ================= */}
    <div className="mb-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            {t("products.featured")}
          </p>

          <h2 className="mt-1 text-3xl font-black text-zinc-900">
            {t("products.electricHeavyDutyMovers")}
          </h2>
        </div>

        <a
          href="/products?category=electric-heavy-duty-movers"
          className="text-sm font-semibold text-zinc-600 transition hover:text-orange-500"
        >
          {t("products.viewMore")} →
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

        {/* JA */}
        <a
          href="/products/electric-heavy-duty-movers/ja-series-electric-tank-transporters"
          className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative h-[220px] bg-white">
            <Image
              src="/products/ja-series/ja-main.jpg"
              alt="JA Series"
              fill
              unoptimized
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              className="object-contain p-5 transition group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-bold">JA Series</h3>
            <p className="mt-2 text-sm text-zinc-500">
              {t("products.jaSeriesDescription")}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-bold text-orange-500">{t("products.viewProduct")}</span>
              <span>→</span>
            </div>
          </div>
        </a>

        {/* JA-B */}
        <a
          href="/products/electric-heavy-duty-movers/ja-b-series-electric-tank-transporters"
          className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
        >
           <div className="relative h-[220px] bg-white">
            <Image
              src="/products/ja-b-series/ja-b-main-v2.jpg"
              alt="JA-B Series"
              fill
              unoptimized
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              className="object-contain p-5 transition group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-bold">JA-B Series</h3>
            <p className="mt-2 text-sm text-zinc-500">
              {t("products.jaBSeriesDescription")}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-bold text-orange-500">{t("products.viewProduct")}</span>
              <span>→</span>
            </div>
          </div>
        </a>

        {/* JS */}
        <a
          href="/products/electric-heavy-duty-movers/js-series-electric-tank-transporters"
          className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
        >
           <div className="relative h-[220px] bg-white">
            <Image
              src="/products/js-series/js-main.png"
              alt="JS Series"
              fill
              unoptimized
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              className="object-contain p-5 transition group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-bold">JS Series</h3>
            <p className="mt-2 text-sm text-zinc-500">
              {t("products.jsSeriesDescription")}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-bold text-orange-500">{t("products.viewProduct")}</span>
              <span>→</span>
            </div>
          </div>
        </a>

        {/* JD */}
        <a
          href="/products/electric-heavy-duty-movers/jd-series-electric-tank-transporters"
          className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative h-[220px] bg-white">
            <Image
              src="/products/jd-series/jd-main.jpg"
              alt="JD Series"
              fill
              unoptimized
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              className="object-contain p-5 transition group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-bold">JD Series</h3>
            <p className="mt-2 text-sm text-zinc-500">
              {t("products.jdSeriesDescription")}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-bold text-orange-500">{t("products.viewProduct")}</span>
              <span>→</span>
            </div>
          </div>
        </a>

        {/* JX */}
        <a
          href="/products/electric-heavy-duty-movers/jx-series-electric-machinery-skate-dolly"
          className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative h-[220px] bg-white">
            <Image
              src="/products/jx-series/jx-main.jpg"
              alt="JX Series"
              fill
              unoptimized
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              className="object-contain p-5 transition group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-bold">JX Series</h3>
            <p className="mt-2 text-sm text-zinc-500">
              {t("products.jxSeriesDescription")}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-bold text-orange-500">{t("products.viewProduct")}</span>
              <span>→</span>
            </div>
          </div>
        </a>

      </div>
    </div>


    {/* ================= MANUAL ================= */}
    <div className="mb-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            {t("products.featured")}
          </p>

          <h2 className="mt-1 text-3xl font-black text-zinc-900">
            {t("products.manualHeavyDutyMovers")}
          </h2>
        </div>

        <a
          href="/products?category=manual-heavy-duty-movers"
          className="text-sm font-semibold text-zinc-600 transition hover:text-orange-500"
        >
          {t("products.viewMore")} →
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

        {[
          ["CRA Series", "/products/cra-series/cra-main.jpg", "cra-series-tank-transporters"],
          ["CWA Series", "/products/cwa-series/cwa-main.png", "cwa-series-tank-transporters"],
          ["CRD Series", "/products/crd-series/crd-main.png", "crd-series-tank-transporters"],
          ["CX+Y Series", "/products/cx-y-series/cx-y-main.png", "cx-y-series-tank-transporters"],
          ["CRP Series", "/products/crp-series/crp-main.png", "crp-series-tank-transporters"],
        ].map(([name, image, slug]) => (
          <a
            key={slug}
            href={`/products/manual-heavy-duty-movers/${slug}`}
            className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-[220px] bg-white">
              <Image
                src={image}
                alt={name}
                fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-contain p-5 transition group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold">{name}</h3>

              <p className="mt-2 text-sm text-zinc-500">
                {t("products.manualHeavyDutyDescription")}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="font-bold text-orange-500">
                  {t("products.viewProduct")}
                </span>
                <span>→</span>
              </div>
            </div>
          </a>
        ))}

      </div>
    </div>


    {/* ================= JACKS ================= */}
    <div>
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            {t("products.featured")}
          </p>

          <h2 className="mt-1 text-3xl font-black text-zinc-900">
            {t("products.jacks")}
          </h2>
        </div>

        <a
          href="/products?category=jacks"
          className="text-sm font-semibold text-zinc-600 transition hover:text-orange-500"
        >
          {t("products.viewMore")}
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

        {[
          ["MA Series", "/products/ma-series/ma-main.png", "ma-series-dual-purpose-claw-jacks"],
          ["MB Series", "/products/mb-series/mb-main.png", "mb-series-multi-stage-claw-jacks"],
          ["MC Series", "/products/mc-series/mc-main.png", "mc-series-single-stage-claw-jacks"],
          ["MD Series", "/products/md-series/md-main.png", "md-series-manual-claw-jacks"],
          ["ME Series", "/products/me-series/me-main.png", "me-series-remote-operated-claw-jacks"],
        ].map(([name, image, slug]) => (
          <a
            key={slug}
            href={`/products/jacks/${slug}`}
            className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-[220px] bg-white">
              <Image
                src={image}
                alt={name}
                fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-contain p-5 transition group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold">{name}</h3>

              <p className="mt-2 text-sm text-zinc-500">
                {t("products.jacksDescription")}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="font-bold text-orange-500">
                  {t("products.viewProduct")}
                </span>
                <span>→</span>
              </div>
            </div>
          </a>
        ))}

      </div>
    </div>

  </div>
</section>
<NewsTabs
  news={latestNews}
  locale={locale}
/>
      {/* CONTACT */}
<section id="contact" className="bg-orange-500 text-white">
  <div className="mx-auto max-w-7xl px-6 py-12">
    <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-center lg:justify-between">

      {/* LEFT TEXT */}
      <div className="max-w-[650px]">
        <p className="font-semibold uppercase tracking-wider text-orange-100">
          {t("contact.businessCooperation")}
        </p>

        <h2 className="mt-3 text-4xl font-black leading-tight">
          {t("contact.needQuotation")}
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-orange-100">
          {t("contact.sendDetails")}
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="grid w-full gap-4 lg:ml-auto lg:w-[360px]">

        {/* EMAIL */}
        <a
          href="mailto:genefen@jcsqz.com"
          className="flex items-center gap-4 rounded-xl bg-white/10 p-5 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:bg-white/20 hover:shadow-lg"
        >
          <Icon
            icon="mdi:email-outline"
            className="shrink-0 text-3xl text-white"
          />

          <div>
            <div className="text-sm font-semibold text-orange-100">
              Email
            </div>

            <div className="mt-1 font-bold">
              genefen@jcsqz.com
            </div>
          </div>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/8613100006833"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl bg-white/10 p-5 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:bg-white/20 hover:shadow-lg"
        >
          <Icon
            icon="mdi:whatsapp"
            className="shrink-0 text-3xl text-white"
          />

          <div>
            <div className="text-sm font-semibold text-orange-100">
              WhatsApp
            </div>

            <div className="mt-1 font-bold">
              +86 131 0000 6833
            </div>
          </div>
        </a>

        {/* RESPONSE TIME */}
        <div className="flex items-center gap-4 rounded-xl bg-white/10 p-5 backdrop-blur-sm">
          <Icon
            icon="mdi:clock-outline"
            className="shrink-0 text-3xl text-white"
          />

          <div>
            <div className="text-sm font-semibold text-orange-100">
              {t("contact.responseTime")}
            </div>

            <div className="mt-1 font-bold">
              {t("contact.within24Hours")}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t-4 border-orange-500 bg-zinc-950 text-white">
  <div className="mx-auto max-w-7xl px-6 py-16">
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

      {/* BRAND */}
      <div>
        <h3 className="text-2xl font-black italic tracking-tight">
          JIN YANG HU
        </h3>

        <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">
          Professional industrial lifting, moving and material handling
          equipment for factories, distributors and business partners.
        </p>
      </div>

      {/* QUICK LINKS */}
      <div>
        <h4 className="text-base font-bold text-white">
          Quick Links
        </h4>

        <div className="mt-6 flex flex-col gap-4 text-sm text-zinc-400">
          <a href="#home" className="transition hover:text-orange-500">
            Home
          </a>

          <a href="#about" className="transition hover:text-orange-500">
            About Us
          </a>

          <a href="#contact" className="transition hover:text-orange-500">
            Contact
          </a>

          <a href="/en/products" className="transition hover:text-orange-500">
            Products
          </a>
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <div>
        <h4 className="text-base font-bold text-white">
          Featured Products
        </h4>

        <div className="mt-6 flex flex-col gap-4 text-sm text-zinc-400">
          <a
            href="/en/products/electric-heavy-duty-load-skates/ja-series-electric-tank-transporters"
            className="transition hover:text-orange-500"
          >
            JA Series
          </a>

          <a
            href="/en/products/electric-heavy-duty-load-skates/ja-b-series-electric-tank-transporters"
            className="transition hover:text-orange-500"
          >
            JA-B Series
          </a>

          <a
            href="/en/products/electric-heavy-duty-load-skates/js-series-electric-tank-transporters"
            className="transition hover:text-orange-500"
          >
            JS Series
          </a>

          <a
            href="/en/products/equipment-jacks/ma-series-dual-purpose-claw-jacks"
            className="transition hover:text-orange-500"
          >
            MA Series
          </a>
        </div>
      </div>

      {/* CONTACT */}
     <div id="contact">
  <h4 className="text-base font-bold text-white">
    Contact
  </h4>

  <div className="mt-6 space-y-5 text-sm text-zinc-400">

    <a
      href="mailto:genefen@jcsqz.com"
      className="flex items-center gap-3 transition hover:text-orange-500"
    >
      <Icon
        icon="mdi:email-outline"
        className="text-xl text-orange-500"
      />
      <span>genefen@jcsqz.com</span>
    </a>

    <a
      href="tel:+8613100006833"
      className="flex items-center gap-3 transition hover:text-orange-500"
    >
      <Icon
        icon="mdi:phone-outline"
        className="text-xl text-orange-500"
      />
      <span>+86 131 0000 6833</span>
    </a>

    <a
      href="https://wa.me/8613100006833"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 transition hover:text-orange-500"
    >
      <Icon
        icon="mdi:whatsapp"
        className="text-xl text-orange-500"
      />
      <span>WhatsApp</span>
    </a>

    <div className="flex items-center gap-3">
      <Icon
        icon="mdi:map-marker-outline"
        className="text-xl text-orange-500"
      />
      <span>China</span>
    </div>

  </div>
</div>
    </div>

    {/* BOTTOM */}
    <div className="mt-14 flex flex-col gap-5 border-t border-zinc-800 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
      <p>
        © 2026 JIN YANG HU. All rights reserved.
      </p>

      <div className="flex gap-6">
        <a href="#" className="transition hover:text-orange-500">
          Privacy Policy
        </a>

        <a href="#" className="transition hover:text-orange-500">
          Terms
        </a>
      </div>
    </div>
  </div>
</footer>
    </main>
  );
}