import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "JA Series",
    category: "Electric Heavy-Duty Movers",
    description: "10T–60T Electric Tank Transporters",
    image: "/products/ja-series/ja-main.jpg",
    href: "/products/electric-heavy-duty-movers/ja-series-electric-tank-transporters",
  },
  {
    name: "JA-B Series",
    category: "Electric Heavy-Duty Movers",
    description: "Heavy-Duty Electric Transporters",
    image: "",
    href: "/products/electric-heavy-duty-movers/ja-b-series-electric-tank-transporters",
  },
  {
    name: "JS Series",
    category: "Electric Heavy-Duty Movers",
    description: "Industrial Machinery Moving System",
    image: "",
    href: "/products/electric-heavy-duty-movers/js-series-electric-tank-transporters",
  },
  {
    name: "JD Series",
    category: "Electric Heavy-Duty Movers",
    description: "Heavy-Load Industrial Transport",
    image: "",
    href: "/products/electric-heavy-duty-movers/jd-series-electric-tank-transporters",
  },
  {
    name: "JX Series",
    category: "Electric Heavy-Duty Movers",
    description: "Factory & Warehouse Transport Solution",
    image: "",
    href: "/products/electric-heavy-duty-movers/jx-series-electric-tank-transporters",
  },
  {
    name: "JZ Series",
    category: "Electric Heavy-Duty Movers",
    description: "High-Capacity Heavy-Duty Load Movers",
    image: "",
    href: "/products/electric-heavy-duty-movers/jz-series-heavy-duty-load-movers",
  },
  {
    name: "JQ Series",
    category: "Electric Heavy-Duty Movers",
    description: "Low-Profile Tank Transporters",
    image: "",
    href: "/products/electric-heavy-duty-movers/jq-series-low-profile-tank-transporters",
  },
];

const scrollingProducts = [...products, ...products];

export default function OurProducts() {
  return (
    <section className="overflow-hidden bg-orange-500 py-20">
      {/* TITLE */}
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
          Our Products
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
          Heavy-duty solutions for industrial movement
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-orange-100">
          Explore our industrial equipment designed for moving, lifting and
          positioning heavy machinery safely and efficiently.
        </p>
      </div>

      {/* MOVING PRODUCTS */}
      <div className="mt-12 overflow-hidden">
        <div className="products-marquee flex w-max gap-5 px-5">
          {scrollingProducts.map((product, index) => (
            <Link
              key={`${product.name}-${index}`}
              href={product.href}
              className="group w-[310px] shrink-0 overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* PRODUCT IMAGE */}
              <div className="relative flex h-[210px] items-center justify-center overflow-hidden bg-zinc-100">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-5 transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-zinc-100">
                    <span className="text-sm font-medium text-zinc-400">
                      Product Image
                    </span>
                  </div>
                )}
              </div>

              {/* PRODUCT INFO */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-500">
                    Electric
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                    →
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-black text-zinc-900">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-zinc-400">
                  {product.category}
                </p>

                <p className="mt-4 min-h-[48px] text-sm leading-6 text-zinc-600">
                  {product.description}
                </p>

                <div className="mt-6 border-t border-zinc-100 pt-4">
                  <span className="font-bold text-orange-500">
                    View Product →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}