"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import QuoteModal from "./QuoteModal";

const categories = [
  {
    name: "Electric Heavy-Load Skates",
    slug: "electric-heavy-duty-load-skates",
  },
  {
    name: "Manual Load Skates",
    slug: "manual-load-skates",
  },
  {
    name: "Equipment Jacks",
    slug: "equipment-jacks",
  },
  {
    name: "Heavy-Duty Load Skates",
    slug: "heavy-duty-load-skates",
  },
  {
    name: "AGV (Automated Guided Vehicle)",
    slug: "agv-automated-guided-vehicle",
  },
];

const products: Record<
  string,
  {
    name: string;
    slug: string;
    description: string;
    image?: string;
  }[]
> = {
  // =========================================================
  // ELECTRIC HEAVY-DUTY MOVERS
  // =========================================================
  "electric-heavy-duty-load-skates": [
    {
      name: "JA Series",
      slug: "ja-series-electric-tank-transporters",
      description: "10T–60T electric tank transporters",
      image: "/products/ja-series/ja-main.jpg",
    },
    {
      name: "JA-B Series",
      slug: "ja-b-series-electric-tank-transporters",
      description: "Heavy-duty electric transporter series",
      image: "/products/ja-b-series/ja-b-main.jpg",
    },
    {
      name: "JS Series",
      slug: "js-series-electric-tank-transporters",
      description:
        "Electric lifting transporter with wireless remote control and flexible heavy-load movement",
      image: "/products/js-series/js-main.png",
    },
    {
      name: "JD Series",
      slug: "jd-series-electric-tank-transporters",
      description: "Industrial heavy-load moving equipment",
      image: "/products/jd-series/jd-main.jpg",
    },
    {
      name: "JX Series",
      slug: "jx-series-electric-machinery-skate-dolly",
      description:
        "Remote-controlled heavy-duty machinery transporter",
      image: "/products/jx-series/jx-main.jpg",
    },
    {
      name: "JZ Series",
      slug: "jz-series-electric-pallet-truck",
      description:
        "Heavy-duty electric pallet truck for industrial transport",
      image: "/products/jz-series/jz-main.png",
    },
    {
      name: "JQ Series",
      slug: "jq-series-low-profile-tank-transporters",
      description: "Low-profile heavy-duty electric transporters",
    },
  ],

  // =========================================================
  // MANUAL HEAVY-DUTY MOVERS
  // =========================================================
    "manual-load-skates": [
    {
      name: "CRA Series",
      slug: "cra-series-tank-transporters",
      description: "Manual heavy-duty cargo moving skates",
      image: "/products/cra-series/cra-main.jpg",
    },
    {
      name: "CWA Series",
      slug: "cwa-series-tank-transporters",
      description:
        "Heavy-duty manual tank transporters for controlled movement of industrial equipment and heavy loads.",
      image: "/products/cwa-series/cwa-main.png",
    },
    {
      name: "CRD Series",
      slug: "crd-series-tank-transporters",
      description: "Hand-cranked heavy-duty machine skates",
      image: "/products/crd-series/crd-main.png",
    },
    {
      name: "CX+Y Series",
      slug: "cx-y-series-tank-transporters",
      description:
        "Manual heavy-duty transporter system with steering and straight-running skates",
      image: "/products/cx-y-series/cx-y-main.png",
    },
    {
      name: "CRP Series",
      slug: "crp-series-tank-transporters",
      description: "360° rotating manual machinery moving skate",
      image: "/products/crp-series/crp-main.png",
    },
    {
      name: "CRQ Series",
      slug: "crq-series-tank-transporters",
      description:
        "Heavy-duty universal machinery moving skates for precise positioning",
      image: "/products/crq-series/crq-main.png",
    },
    {
      name: "CRM Series",
      slug: "crm-series-tank-transporters",
      description:
        "Heavy-duty crawler machinery skates for straight-line transport of industrial loads",
      image: "/products/crm-series/crm-product-view.png",
    },
    {
      name: "CRF Series",
      slug: "crf-series-tank-transporters",
      description:
        "Heavy-duty machinery skates with 360° rotating turntable and flexible wheel options",
      image: "/products/crf-series/crf-main.png",
    },
    {
      name: "CRW Series",
      slug: "crw-series-tank-transporters",
      description:
        "Hydraulic lift omnidirectional machinery skates for heavy equipment moving",
      image: "/products/crw-series/crw-main.png",
    },
  ],

  // =========================================================
  // JACKS
  // =========================================================
  "equipment-jacks": [
    {
      name: "MA Series",
      slug: "ma-series-dual-purpose-claw-jacks",
      description:
        "Dual-purpose hydraulic claw jacks for heavy equipment lifting",
      image: "/products/ma-series/ma-main.png",
    },
    {
      name: "MB Series",
      slug: "mb-series-multi-stage-claw-jacks",
      description:
        "Multi-stage adjustable claw jacks for heavy-duty industrial lifting",
      image: "/products/mb-series/mb-main.png",
    },
    {
      name: "MC Series",
      slug: "mc-series-single-stage-claw-jacks",
      description:
        "Single-stage high-stroke hydraulic claw jacks for industrial lifting",
      image: "/products/mc-series/mc-main.png",
    },
    {
      name: "MD Series",
      slug: "md-series-manual-claw-jacks",
      description:
        "Manual hydraulic claw jacks for heavy-duty industrial lifting and equipment handling",
      image: "/products/md-series/md-main.png",
    },
    {
      name: "ME Series",
      slug: "me-series-remote-operated-claw-jacks",
      description:
        "Remote-operated hydraulic claw jacks for efficient industrial lifting",
      image: "/products/me-series/me-main.png",
    },
    {
      name: "MF Series",
      slug: "mf-series-hydraulic-lifters",
      description:
        "Compact hydraulic lifters for lifting and moving industrial loads",
      image: "/products/mf-series/mf-main.png",
    },
    {
      name: "MG Series",
      slug: "mg-series-wedge-jacks",
      description:
        "Low-profile hydraulic wedge jacks for lifting, pushing and precision positioning",
      image: "/products/mg-series/mg-main.png",
    },
    {
      name: "MH Series",
      slug: "mh-series-remote-operated-jacks",
      description:
        "Compact remote-operated hydraulic jacks for industrial lifting and support",
      image: "/products/mh-series/mh-main.png",
    },
    {
      name: "MI Series",
      slug: "mi-series-hand-operated-toe-jacks",
      description:
        "Manual self-locking toe jacks for industrial lifting, positioning and equipment installation",
      image: "/products/mi-series/mi-main.png",
    },
    {
      name: "MJ Series",
      slug: "mj-series-low-profile-hand-operated-toe-jacks",
      description:
        "Low-profile hand-operated toe jacks for lifting and positioning heavy industrial equipment",
      image: "/products/mj-series/mj-main.png",
    },
    {
      name: "MK Series",
      slug: "mk-series-multi-position-adjustable-toe-jacks",
      description:
        "Multi-position adjustable manual toe jacks for lifting, positioning and track or equipment support",
      image: "/products/mk-series/mk-main.png",
    },
  ],
  "heavy-duty-load-skates": [
  // products هنا
],

"agv-automated-guided-vehicle": [
  // products هنا
],
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState(
    "electric-heavy-duty-movers"
  );

  const activeCategoryInfo = categories.find(
    (category) => category.slug === activeCategory
  );

  const activeProducts = products[activeCategory] || [];
const [searchQuery, setSearchQuery] = useState("");
const [searchOpen, setSearchOpen] = useState(false);

const searchableProducts = categories.flatMap((category) =>
  (products[category.slug] || []).map((product) => ({
    ...product,
    categoryName: category.name,
    categorySlug: category.slug,
  }))
);

const normalizedSearch = searchQuery.trim().toLowerCase();

const searchResults = normalizedSearch
  ? searchableProducts
      .filter((product) => {
        const text =
          `${product.name} ${product.description} ${product.categoryName}`.toLowerCase();

        return text.includes(normalizedSearch);
      })
      .slice(0, 8)
  : [];
  return (
    <header className="sticky top-0 z-50 hidden border-b border-zinc-200 bg-white md:block">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/jin-yang-hu-logo.png"
            alt="JIN YANG HU"
            width={190}
            height={70}
            className="h-auto w-[180px]"
            priority
          />

          <span className="hidden text-sm text-zinc-500 lg:block">
            Industrial Lifting and Transport Solutions
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-8 text-base font-medium text-zinc-900">
          <Link
            href="/"
            className="transition hover:text-orange-500"
          >
            Home
          </Link>

          {/* PRODUCTS */}
          <div
            className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 py-6 transition hover:text-orange-500"
            >
              Products
              <span className="text-xs">▼</span>
            </button>

            {menuOpen && (
              <div className="absolute left-1/2 top-full z-[100] w-[960px] -translate-x-1/2 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl">
                <div className="grid grid-cols-[320px_1fr]">
                  {/* LEFT CATEGORIES */}
                  <div className="border-r border-zinc-200 bg-zinc-50 p-4">
                    <p className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Product Categories
                    </p>

                    <div>
                      {categories.map((category) => (
                        <button
                          key={category.slug}
                          type="button"
                          onMouseEnter={() =>
                            setActiveCategory(category.slug)
                          }
                          className={`
                            flex w-full items-center justify-between rounded-lg
                            px-3 py-3 text-left text-sm transition
                            ${
                              activeCategory === category.slug
                                ? "bg-orange-500 font-semibold text-white"
                                : "text-zinc-700 hover:bg-zinc-200"
                            }
                          `}
                        >
                          <span>{category.name}</span>
                          <span>›</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT PRODUCTS */}
                  <div className="p-7">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                        Category
                      </p>

                      <h3 className="mt-1 text-2xl font-black text-zinc-900">
                        {activeCategoryInfo?.name}
                      </h3>
                    </div>

                    {activeProducts.length > 0 ? (
                      <div className="mt-6 grid max-h-[500px] grid-cols-3 gap-4 overflow-y-auto pr-1">
                        {activeProducts.map((product) => (
                          <Link
                            key={product.slug}
                            href={`/products/${activeCategory}/${product.slug}`}
                            className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:border-orange-300 hover:bg-orange-50 hover:shadow-md"
                            onClick={() => setMenuOpen(false)}
                          >
                            {product.image && (
                              <div className="relative h-24 w-full overflow-hidden bg-white">
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  sizes="300px"
                                  className="object-contain p-2 transition duration-300 group-hover:scale-105"
                                />
                              </div>
                            )}

                            <div className="p-4">
                              <div className="flex items-center justify-between gap-3">
                                <h4 className="font-bold text-zinc-900 group-hover:text-orange-500">
                                  {product.name}
                                </h4>

                                <span className="shrink-0 text-orange-500">
                                  →
                                </span>
                              </div>

                              <p className="mt-2 text-sm leading-6 text-zinc-500">
                                {product.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50 p-8">
                        <p className="font-semibold text-zinc-900">
                          Products will be added soon.
                        </p>

                        <p className="mt-2 text-sm leading-6 text-zinc-500">
                          New products for this category will be available
                          here soon.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="flex items-center justify-between border-t border-zinc-200 bg-zinc-950 px-6 py-4 text-white">
                  <div>
                    <p className="font-semibold">
                      Need help choosing the right equipment?
                    </p>

                    <p className="mt-1 text-xs text-zinc-400">
                      Our sales team can recommend the suitable model for
                      your application.
                    </p>
                  </div>

                  <Link
                    href="/#contact"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/#about"
            className="transition hover:text-orange-500"
          >
            About Us
          </Link>

          <Link
            href="/#contact"
            className="transition hover:text-orange-500"
          >
            Contact
          </Link>
        </nav>
{/* PRODUCT SEARCH */}
<div className="relative hidden xl:block">
  <div
    className={`flex h-11 w-[260px] items-center gap-2 rounded-xl border px-3 transition ${
      searchOpen
        ? "border-orange-400 bg-white shadow-sm"
        : "border-zinc-200 bg-zinc-50"
    }`}
  >
    {/* SEARCH ICON */}
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 fill-none stroke-zinc-400"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>

    <input
      type="search"
      value={searchQuery}
      placeholder="Search products..."
      aria-label="Search products"
      onChange={(e) => {
        setSearchQuery(e.target.value);
        setSearchOpen(true);
      }}
      onFocus={() => {
        setSearchOpen(true);
        setMenuOpen(false);
      }}
      onBlur={() => {
        setTimeout(() => {
          setSearchOpen(false);
        }, 150);
      }}
      className="min-w-0 flex-1 bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
    />

    {searchQuery && (
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => {
          setSearchQuery("");
          setSearchOpen(true);
        }}
        className="flex h-6 w-6 items-center justify-center rounded-full text-zinc-400 transition hover:bg-zinc-200 hover:text-zinc-700"
      >
        ×
      </button>
    )}
  </div>

  {/* SEARCH RESULTS */}
  {searchOpen && searchQuery.trim() && (
    <div className="absolute right-0 top-[calc(100%+10px)] z-[120] w-[390px] overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl">

      <div className="border-b border-zinc-100 px-4 py-3">
        <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
          Product Search
        </p>
      </div>

      {searchResults.length > 0 ? (
        <div className="max-h-[430px] overflow-y-auto p-2">
          {searchResults.map((product) => (
            <Link
              key={`${product.categorySlug}-${product.slug}`}
              href={`/products/${product.categorySlug}/${product.slug}`}
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery("");
              }}
              className="group flex items-center gap-3 rounded-xl p-3 transition hover:bg-orange-50"
            >
              {/* IMAGE */}
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-zinc-100 bg-white">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="56px"
                    className="object-contain p-1"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs font-bold text-zinc-300">
                    JYH
                  </div>
                )}
              </div>

              {/* PRODUCT INFO */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate text-sm font-bold text-zinc-900 group-hover:text-orange-500">
                    {product.name}
                  </p>

                  <span className="shrink-0 text-orange-500">
                    →
                  </span>
                </div>

                <p className="mt-1 truncate text-xs text-zinc-500">
                  {product.categoryName}
                </p>

                <p className="mt-1 truncate text-xs text-zinc-400">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="px-5 py-7 text-center">
          <p className="font-semibold text-zinc-900">
            No products found
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            Try another model or product name.
          </p>
        </div>
      )}
    </div>
  )}
</div>
        {/* QUOTE */}
        <div>
          <QuoteModal />
        </div>
      </div>
    </header>
  );
}