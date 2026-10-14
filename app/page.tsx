import { Icon } from "@iconify/react";
import Image from "next/image";
import { Anton } from "next/font/google";

import HomeBanner from "./components/HomeBanner";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
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
          Professional Industrial Equipment Manufacturer
        </div>

        <h1
          className={`${anton.className} text-left uppercase leading-[0.95] tracking-tight`}
        >
          <span className="block text-5xl text-white md:text-7xl">
            Powerful Solutions
          </span>

         <span className="mt-2 block whitespace-nowrap">
  <span className="text-4xl text-white md:text-6xl">
    For{" "}
  </span>

  <span className="text-4xl text-orange-500 md:text-6xl">
    Heavy Load Movement
  </span>
</span>
        </h1>

        <p className="mt-7 max-w-[620px] text-left text-lg leading-8 text-zinc-300">
          Reliable tank movers, hydraulic jacks, lifting systems and
          industrial handling equipment designed for factories,
          warehouses and heavy-duty applications.
        </p>

        <div className="mt-9 flex flex-wrap justify-start gap-4">
          <a
            href="/products/electric-heavy-duty-movers/ja-series-electric-tank-transporters"
            className="rounded-md bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
          >
            View Featured Product
          </a>

          <a
            href="/#contact"
            className="rounded-md border border-zinc-600 px-7 py-4 font-semibold text-white transition hover:border-white"
          >
            Contact Sales
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
      <span className="text-orange-500">+20</span> Years of Experience
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
              Global B2B
            </div>

            <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-orange-100">
              Industrial Supply
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
              Custom Solutions
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
              Fast Quote
            </div>

            <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-orange-100">
              Sales Support
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
              Quality Focus
            </div>

            <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-orange-100">
              Reliable Equipment
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
          {/* IMAGE PLACEHOLDER */}
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-zinc-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Icon
                  icon="mdi:factory"
                  className="mx-auto text-7xl text-zinc-400"
                />

                <p className="mt-4 font-semibold text-zinc-500">
                  Company / Factory Image
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-wider text-orange-500">
              About JIN YANG HU
            </p>

            <h2 className="mt-3 text-4xl font-black leading-tight">
              Professional Lifting and Material Handling Solutions
            </h2>

            <p className="mt-6 leading-8 text-zinc-600">
              We focus on industrial lifting, moving and warehouse handling
              equipment for factories, distributors and professional users.
              Our products are designed around reliability, safety and
              practical operation.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-5">
                <div className="text-2xl font-black text-orange-500">
                  Quality
                </div>

                <p className="mt-2 text-sm text-zinc-600">
                  Industrial-grade product design.
                </p>
              </div>

              <div className="rounded-xl bg-white p-5">
                <div className="text-2xl font-black text-orange-500">
                  Service
                </div>

                <p className="mt-2 text-sm text-zinc-600">
                  Professional B2B support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* FEATURED PRODUCTS */}
<section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-20">

    {/* SECTION HEADER */}
    <div className="mb-10">
      <p className="font-semibold uppercase tracking-wider text-orange-500">
        Featured Products
      </p>

      <h2 className="mt-2 text-4xl font-black text-zinc-900">
        Industrial Equipment Solutions
      </h2>

      <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
        Explore some of our most popular lifting and heavy-load moving
        equipment.
      </p>
    </div>

    {/* PRODUCTS GRID */}
    <div className="mx-auto grid max-w-[1600px] gap-5 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

      {/* PRODUCT 1 */}
      <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-[185px] bg-zinc-50">
          <Image
            src="/products/ja-series/ja-main.jpg"
            alt="JA Series"
            fill
            className="object-contain p-5 transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-black text-zinc-900">
            JA Series
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Electric heavy-duty tank transporters for industrial machinery.
          </p>

          <a
            href="/products/electric-heavy-duty-movers/ja-series-electric-tank-transporters"
            className="mt-5 flex w-full items-center justify-center rounded-lg bg-orange-500 px-4 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            View Product
          </a>
        </div>
      </div>

      {/* PRODUCT 2 */}
      <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
       <div className="relative h-[185px] bg-zinc-50">
          <Image
            src="/products/ja-b-series/ja-b-main.jpg"
            alt="JA-B Series"
            fill
            className="object-contain p-5 transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-black text-zinc-900">
            JA-B Series
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Heavy-duty electric transport equipment for demanding loads.
          </p>

          <a
            href="/products/electric-heavy-duty-movers/ja-b-series-electric-tank-transporters"
            className="mt-5 flex w-full items-center justify-center rounded-lg bg-orange-500 px-4 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            View Product
          </a>
        </div>
      </div>

      {/* PRODUCT 3 */}
      <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-[185px] bg-zinc-50">
          <Image
            src="/products/jx-series/jx-main.jpg"
            alt="JX Series"
            fill
            className="object-contain p-5 transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-black text-zinc-900">
            JX Series
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Remote-controlled machinery skate for heavy-load transport.
          </p>

          <a
            href="/products/electric-heavy-duty-movers/jx-series-electric-machinery-skate-dolly"
            className="mt-5 flex w-full items-center justify-center rounded-lg bg-orange-500 px-4 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            View Product
          </a>
        </div>
      </div>

      {/* PRODUCT 4 */}
      <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-[185px] bg-zinc-50">
          <Image
            src="/products/cra-series/cra-main.jpg"
            alt="CRA Series"
            fill
            className="object-contain p-5 transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-black text-zinc-900">
            CRA Series
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Manual heavy-duty machinery skates for industrial moving.
          </p>

          <a
            href="/products/manual-heavy-duty-movers/cra-series-tank-transporters"
            className="mt-5 flex w-full items-center justify-center rounded-lg bg-orange-500 px-4 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            View Product
          </a>
        </div>
      </div>

      {/* PRODUCT 5 */}
      <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-[185px] bg-zinc-50">
          <Image
            src="/products/ma-series/ma-main.png"
            alt="MA Series"
            fill
            className="object-contain p-5 transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h3 className="text-xl font-black text-zinc-900">
            MA Series
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Hydraulic claw jack for heavy equipment lifting and positioning.
          </p>

          <a
            href="/products/jacks/ma-series-dual-purpose-claw-jacks"
            className="mt-4 flex w-full items-center justify-center rounded-lg bg-orange-500 px-4 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            View Product
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* CONTACT */}
<section id="contact" className="bg-orange-500 text-white">
  <div className="mx-auto max-w-7xl px-6 py-12">
    <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-center lg:justify-between">

      {/* LEFT TEXT */}
      <div className="max-w-[650px]">
        <p className="font-semibold uppercase tracking-wider text-orange-100">
          Business Cooperation
        </p>

        <h2 className="mt-3 text-4xl font-black leading-tight">
          Need a quotation or product recommendation?
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-orange-100">
          Send us your required model, load capacity and application. Our team
          will help you select the right equipment.
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
              Response Time
            </div>

            <div className="mt-1 font-bold">
              Within 24 Hours
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 text-zinc-400">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* COMPANY */}
            <div>
              <a href="/">
                <Image
                  src="/jin-yang-hu-logo.png"
                  alt="JIN YANG HU"
                  width={180}
                  height={70}
                  className="h-auto w-[170px] brightness-0 invert"
                />
              </a>

              <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
                Professional industrial lifting, moving and material handling
                equipment for factories, distributors and business partners.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-base font-bold text-white">
                Quick Links
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a
                  href="/"
                  className="transition hover:text-orange-500"
                >
                  Home
                </a>

                <a
                  href="/#about"
                  className="transition hover:text-orange-500"
                >
                  About Us
                </a>

                <a
                  href="/#contact"
                  className="transition hover:text-orange-500"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* FEATURED PRODUCT */}
            <div>
              <h3 className="text-base font-bold text-white">
                Featured Product
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a
                  href="/products/electric-heavy-duty-movers/ja-series-electric-tank-transporters"
                  className="transition hover:text-orange-500"
                >
                  JA Series
                </a>

                <a
                  href="/products/electric-heavy-duty-movers/ja-b-series-electric-tank-transporters"
                  className="transition hover:text-orange-500"
                >
                  JA-B Series
                </a>

                <a
                  href="/products/electric-heavy-duty-movers/js-series-electric-tank-transporters"
                  className="transition hover:text-orange-500"
                >
                  JS Series
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-base font-bold text-white">
                Contact
              </h3>

              <div className="mt-4 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Icon
                    icon="mdi:email-outline"
                    className="text-xl text-orange-500"
                  />

                  <span>sales@jinyanghu.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <Icon
                    icon="mdi:phone-outline"
                    className="text-xl text-orange-500"
                  />

                  <span>+86 XXX XXXX XXXX</span>
                </div>

                <div className="flex items-start gap-3">
                  <Icon
                    icon="mdi:map-marker-outline"
                    className="mt-0.5 text-xl text-orange-500"
                  />

                  <span>China</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-zinc-800 pt-6">
            <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
              <div>
                © 2026 JIN YANG HU. All rights reserved.
              </div>

              <div className="flex gap-5">
                <a
                  href="#"
                  className="transition hover:text-orange-500"
                >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="transition hover:text-orange-500"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}