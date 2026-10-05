import { Icon } from "@iconify/react";
import HomeBanner from "./components/HomeBanner";
import QuoteModal from "./components/QuoteModal";
import MobileHeader from "./components/MobileHeader";
import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const categories = [
    "Tank Movers",
    "Hydraulic Jacks",
    "Electric Jacks",
    "Machine Moving Equipment",
    "Lifting Equipment",
    "Warehouse Handling Equipment",
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <MobileHeader />

      {/* HEADER */}
      <header className="sticky top-0 z-50 hidden border-b border-zinc-200 bg-white/95 backdrop-blur md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/jin-yang-hu-logo.png"
              alt="JIN YANG HU"
              width={190}
              height={70}
              className="h-auto w-[180px]"
              priority
            />

            <div className="hidden text-sm text-zinc-500 md:block">
              Industrial Lifting Solutions
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="/" className="hover:text-orange-500">
              Home
            </a>

            <a href="/products" className="hover:text-orange-500">
              Products
            </a>

            <a href="/#about" className="hover:text-orange-500">
              About Us
            </a>

            <a href="/#contact" className="hover:text-orange-500">
              Contact
            </a>
          </nav>

          <QuoteModal />
        </div>
      </header>

      {/* AUTOMATIC BANNER */}
      <HomeBanner />

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-zinc-950 text-white"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-orange-500 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            {/* LEFT SIDE */}
            <div>
              <div className="mb-5 inline-flex rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
                Professional Industrial Equipment Manufacturer
              </div>

              <h1
                className={`${anton.className} uppercase leading-[0.95] tracking-tight`}
              >
                <span className="block whitespace-nowrap text-5xl text-white md:text-7xl">
                  Powerful Solutions
                </span>

                <span className="mt-2 flex items-baseline gap-3 whitespace-nowrap">
                  <span className="text-4xl text-white md:text-6xl">For</span>

                  <span className="text-4xl text-orange-500 md:text-6xl">
                    Heavy Load Movement
                  </span>
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                Reliable tank movers, hydraulic jacks, lifting systems and
                industrial handling equipment designed for factories,
                warehouses and heavy-duty applications.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/products"
                  className="rounded-md bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  Explore Products
                </a>

                <a
                  href="/#contact"
                  className="rounded-md border border-zinc-600 px-6 py-3 font-semibold text-white transition hover:border-white"
                >
                  Contact Sales
                </a>
              </div>
            </div>

            {/* EXPERIENCE BADGE */}
            <div className="absolute bottom-[170px] left-[500px] z-20">
              <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-zinc-900/90 px-6 py-3 shadow-lg backdrop-blur-md">
                <div className="h-3 w-3 rounded-full bg-orange-500" />

                <span className="text-lg font-bold text-white">
                  <span className="text-orange-500">+20</span> Years of
                  Experience
                </span>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative lg:justify-self-end lg:translate-x-6 lg:-translate-y-4">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 shadow-2xl">
                <div className="flex min-h-[330px] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 lg:w-[420px]">
                  <div className="px-8 text-center">
                    <div className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                      Featured Product
                    </div>

                    <div className="mt-4 text-4xl font-black text-white">
                      Tank Mover
                    </div>

                    <div className="mt-3 text-lg text-white/90">
                      Flexible · Precise · Heavy Duty
                    </div>

                    <div className="mt-8 rounded-xl bg-black/20 px-6 py-5 text-white">
                      Product image will be placed here
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TRUST / SALES BAR */}
          <div className="mt-14 overflow-hidden rounded-xl bg-orange-600 text-white">
            <div className="grid md:grid-cols-4">
              <div className="flex items-center justify-center gap-5 px-6 py-6 md:border-r md:border-white/25">
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

              <div className="flex items-center justify-center gap-5 px-6 py-6 md:border-r md:border-white/25">
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

              <div className="flex items-center justify-center gap-5 px-6 py-6 md:border-r md:border-white/25">
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

              <div className="flex items-center justify-center gap-5 px-6 py-6">
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

      {/* PRODUCTS PREVIEW */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="font-semibold uppercase tracking-wider text-orange-500">
            Product Range
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Industrial Equipment Categories
          </h2>

          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Professional solutions for lifting, moving and handling heavy
            equipment safely and efficiently.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={category}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-56 items-center justify-center bg-zinc-100">
                <span className="text-sm text-zinc-400">
                  Product image {index + 1}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{category}</h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  Heavy-duty equipment engineered for professional industrial
                  use.
                </p>

                <a
                  href="/products"
                  className="mt-5 inline-block font-semibold text-orange-500 hover:text-orange-600"
                >
                  View Products →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-zinc-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div className="min-h-[420px] rounded-2xl bg-zinc-300" />

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

            <div className="mt-8 grid grid-cols-2 gap-6">
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

      {/* CONTACT */}
      <section id="contact" className="bg-orange-500 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-wider text-orange-100">
                Business Cooperation
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Need a quotation or product recommendation?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-orange-100">
                Send us your required model, load capacity and application. Our
                team will help you select the right equipment.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="flex items-center gap-4 rounded-xl bg-white/10 p-5 backdrop-blur-sm">
                <Icon
                  icon="mdi:email-outline"
                  className="shrink-0 text-3xl text-white"
                />

                <div>
                  <div className="text-sm font-semibold text-orange-100">
                    Email
                  </div>

                  <div className="mt-1 font-bold">sales@jinyanghu.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-white/10 p-5 backdrop-blur-sm">
                <Icon
                  icon="mdi:whatsapp"
                  className="shrink-0 text-3xl text-white"
                />

                <div>
                  <div className="text-sm font-semibold text-orange-100">
                    WhatsApp
                  </div>

                  <div className="mt-1 font-bold">+86 XXX XXXX XXXX</div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-white/10 p-5 backdrop-blur-sm">
                <Icon
                  icon="mdi:clock-outline"
                  className="shrink-0 text-3xl text-white"
                />

                <div>
                  <div className="text-sm font-semibold text-orange-100">
                    Response Time
                  </div>

                  <div className="mt-1 font-bold">Within 24 Hours</div>
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
              <h3 className="text-base font-bold text-white">Quick Links</h3>

              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a href="/" className="transition hover:text-orange-500">
                  Home
                </a>

                <a
                  href="/products"
                  className="transition hover:text-orange-500"
                >
                  Products
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

            {/* PRODUCTS */}
            <div>
              <h3 className="text-base font-bold text-white">Product Range</h3>

              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a
                  href="/products"
                  className="transition hover:text-orange-500"
                >
                  Tank Movers
                </a>

                <a
                  href="/products"
                  className="transition hover:text-orange-500"
                >
                  Hydraulic Jacks
                </a>

                <a
                  href="/products"
                  className="transition hover:text-orange-500"
                >
                  Lifting Equipment
                </a>

                <a
                  href="/products"
                  className="transition hover:text-orange-500"
                >
                  Warehouse Equipment
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-base font-bold text-white">Contact</h3>

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

                  <span>Taiyuan, Shanxi, China</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-zinc-800 pt-6">
            <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
              <div>© 2026 JIN YANG HU. All rights reserved.</div>

              <div className="flex gap-5">
                <a href="#" className="transition hover:text-orange-500">
                  Privacy Policy
                </a>

                <a href="#" className="transition hover:text-orange-500">
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