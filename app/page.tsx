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
{/* PRODUCT COLLECTIONS */}
<section className="bg-white">
  <div className="mx-auto max-w-[1600px] px-6 py-16">

    {/* ================= ELECTRIC ================= */}
    <div className="mb-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            Featured Products
          </p>

          <h2 className="mt-1 text-3xl font-black text-zinc-900">
            Electric Heavy-Duty Movers
          </h2>
        </div>

        <a
          href="/products?category=electric-heavy-duty-movers"
          className="text-sm font-semibold text-zinc-600 transition hover:text-orange-500"
        >
          View More →
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

        {/* JA */}
        <a
          href="/products/electric-heavy-duty-movers/ja-series-electric-tank-transporters"
          className="group overflow-hidden rounded-xl bg-zinc-50 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative h-[220px]">
            <Image
              src="/products/ja-series/ja-main.jpg"
              alt="JA Series"
              fill
              className="object-contain p-5 transition group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-bold">JA Series</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Electric heavy-duty tank transporter
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-bold text-orange-500">View Product</span>
              <span>→</span>
            </div>
          </div>
        </a>

        {/* JA-B */}
        <a
          href="/products/electric-heavy-duty-movers/ja-b-series-electric-tank-transporters"
          className="group overflow-hidden rounded-xl bg-zinc-50 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative h-[220px]">
            <Image
              src="/products/ja-b-series/ja-b-main.jpg"
              alt="JA-B Series"
              fill
              className="object-contain p-5 transition group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-bold">JA-B Series</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Heavy-duty electric transport equipment
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-bold text-orange-500">View Product</span>
              <span>→</span>
            </div>
          </div>
        </a>

        {/* JS */}
        <a
          href="/products/electric-heavy-duty-movers/js-series-electric-tank-transporters"
          className="group overflow-hidden rounded-xl bg-zinc-50 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative h-[220px]">
            <Image
              src="/products/js-series/js-main.png"
              alt="JS Series"
              fill
              className="object-contain p-5 transition group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-bold">JS Series</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Wireless electric transporter
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-bold text-orange-500">View Product</span>
              <span>→</span>
            </div>
          </div>
        </a>

        {/* JD */}
        <a
          href="/products/electric-heavy-duty-movers/jd-series-electric-tank-transporters"
          className="group overflow-hidden rounded-xl bg-zinc-50 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative h-[220px]">
            <Image
              src="/products/jd-series/jd-main.jpg"
              alt="JD Series"
              fill
              className="object-contain p-5 transition group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-bold">JD Series</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Industrial heavy-load moving equipment
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-bold text-orange-500">View Product</span>
              <span>→</span>
            </div>
          </div>
        </a>

        {/* JX */}
        <a
          href="/products/electric-heavy-duty-movers/jx-series-electric-machinery-skate-dolly"
          className="group overflow-hidden rounded-xl bg-zinc-50 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative h-[220px]">
            <Image
              src="/products/jx-series/jx-main.jpg"
              alt="JX Series"
              fill
              className="object-contain p-5 transition group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-bold">JX Series</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Remote-controlled machinery transporter
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-bold text-orange-500">View Product</span>
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
            Featured Products
          </p>

          <h2 className="mt-1 text-3xl font-black text-zinc-900">
            Manual Heavy-Duty Movers
          </h2>
        </div>

        <a
          href="/products?category=manual-heavy-duty-movers"
          className="text-sm font-semibold text-zinc-600 transition hover:text-orange-500"
        >
          View More →
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
            className="group overflow-hidden rounded-xl bg-zinc-50 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-[220px]">
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain p-5 transition group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold">{name}</h3>

              <p className="mt-2 text-sm text-zinc-500">
                Manual heavy-duty moving equipment
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="font-bold text-orange-500">
                  View Product
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
            Featured Products
          </p>

          <h2 className="mt-1 text-3xl font-black text-zinc-900">
            Jacks
          </h2>
        </div>

        <a
          href="/products?category=jacks"
          className="text-sm font-semibold text-zinc-600 transition hover:text-orange-500"
        >
          View More →
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
            className="group overflow-hidden rounded-xl bg-zinc-50 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-[220px]">
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain p-5 transition group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold">{name}</h3>

              <p className="mt-2 text-sm text-zinc-500">
                Professional hydraulic lifting equipment
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="font-bold text-orange-500">
                  View Product
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
{/* NEWS SECTION */}
<section className="bg-white">
  <div className="mx-auto max-w-[1500px] px-6 py-16">

    {/* HEADER */}
    <div className="mb-10 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
        News & Information
      </p>

      <h2 className="mt-2 text-3xl font-black text-zinc-900">
        Latest Updates
      </h2>

      <p className="mt-3 text-zinc-500">
        Industry news, company updates and technical information.
      </p>
    </div>

    {/* 3 COLUMNS */}
    <div className="grid gap-8 md:grid-cols-3">

      {/* INDUSTRY NEWS */}
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-xl font-black text-zinc-900">
            Industry News
          </h3>

          <a
            href="/news"
            className="text-sm font-semibold text-orange-500 hover:text-orange-600"
          >
            More →
          </a>
        </div>

        <div className="space-y-4">
          <a href="#" className="block border-b border-zinc-200 pb-3">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-medium text-zinc-700 hover:text-orange-500">
                Heavy-load transport equipment market continues to grow
              </p>
              <span className="shrink-0 text-xs text-zinc-400">
                10.15
              </span>
            </div>
          </a>

          <a href="#" className="block border-b border-zinc-200 pb-3">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-medium text-zinc-700 hover:text-orange-500">
                New trends in industrial material handling
              </p>
              <span className="shrink-0 text-xs text-zinc-400">
                10.12
              </span>
            </div>
          </a>

          <a href="#" className="block">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-medium text-zinc-700 hover:text-orange-500">
                Smart factories drive demand for automated transport
              </p>
              <span className="shrink-0 text-xs text-zinc-400">
                10.08
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* COMPANY NEWS */}
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-xl font-black text-zinc-900">
            Company News
          </h3>

          <a
            href="/news"
            className="text-sm font-semibold text-orange-500 hover:text-orange-600"
          >
            More →
          </a>
        </div>

        <div className="space-y-4">
          <a href="#" className="block border-b border-zinc-200 pb-3">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-medium text-zinc-700 hover:text-orange-500">
                JIN YANG HU expands industrial lifting product range
              </p>
              <span className="shrink-0 text-xs text-zinc-400">
                10.14
              </span>
            </div>
          </a>

          <a href="#" className="block border-b border-zinc-200 pb-3">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-medium text-zinc-700 hover:text-orange-500">
                New equipment solutions for global B2B customers
              </p>
              <span className="shrink-0 text-xs text-zinc-400">
                10.09
              </span>
            </div>
          </a>

          <a href="#" className="block">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-medium text-zinc-700 hover:text-orange-500">
                Production and quality control standards upgraded
              </p>
              <span className="shrink-0 text-xs text-zinc-400">
                10.03
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* TECHNICAL INFORMATION */}
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-xl font-black text-zinc-900">
            Technical Information
          </h3>

          <a
            href="/news"
            className="text-sm font-semibold text-orange-500 hover:text-orange-600"
          >
            More →
          </a>
        </div>

        <div className="space-y-4">
          <a href="#" className="block border-b border-zinc-200 pb-3">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-medium text-zinc-700 hover:text-orange-500">
                How to choose the right machinery moving skate
              </p>
              <span className="shrink-0 text-xs text-zinc-400">
                10.13
              </span>
            </div>
          </a>

          <a href="#" className="block border-b border-zinc-200 pb-3">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-medium text-zinc-700 hover:text-orange-500">
                Safety tips for heavy equipment lifting
              </p>
              <span className="shrink-0 text-xs text-zinc-400">
                10.07
              </span>
            </div>
          </a>

          <a href="#" className="block">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-medium text-zinc-700 hover:text-orange-500">
                Understanding load capacity and industrial transport
              </p>
              <span className="shrink-0 text-xs text-zinc-400">
                09.30
              </span>
            </div>
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