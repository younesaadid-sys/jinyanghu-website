import Link from "next/link";

const products = [
  {
    name: "JA Series",
    category: "Electric Heavy-Duty Movers",
    description: "10T–60T Electric Tank Transporters",
    href: "/products/electric-heavy-duty-movers/ja-series-electric-tank-transporters",
  },
  {
    name: "JA-B Series",
    category: "Electric Heavy-Duty Movers",
    description: "Heavy-Duty Electric Transporters",
    href: "/products/electric-heavy-duty-movers/ja-b-series-electric-tank-transporters",
  },
  {
    name: "JS Series",
    category: "Electric Heavy-Duty Movers",
    description: "Industrial Machinery Moving System",
    href: "/products/electric-heavy-duty-movers/js-series-electric-tank-transporters",
  },
  {
    name: "JD Series",
    category: "Electric Heavy-Duty Movers",
    description: "Heavy-Load Industrial Transport",
    href: "/products/electric-heavy-duty-movers/jd-series-electric-tank-transporters",
  },
  {
    name: "JX Series",
    category: "Electric Heavy-Duty Movers",
    description: "Factory & Warehouse Transport Solution",
    href: "/products/electric-heavy-duty-movers/jx-series-electric-tank-transporters",
  },
  {
    name: "JZ Series",
    category: "Electric Heavy-Duty Movers",
    description: "High-Capacity Heavy-Duty Load Movers",
    href: "/products/electric-heavy-duty-movers/jz-series-heavy-duty-load-movers",
  },
  {
    name: "JQ Series",
    category: "Electric Heavy-Duty Movers",
    description: "Low-Profile Tank Transporters",
    href: "/products/electric-heavy-duty-movers/jq-series-low-profile-tank-transporters",
  },
];

const scrollingProducts = [...products, ...products];

export default function OurProducts() {
  return (
    <section className="overflow-hidden bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Our Products
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Heavy-duty solutions built for serious industrial work
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
            Explore our equipment range designed for moving, lifting and
            positioning heavy machinery safely and efficiently.
          </p>
        </div>
      </div>

      <div className="mt-14 overflow-hidden">
        <div className="products-marquee flex w-max gap-5 px-6">
          {scrollingProducts.map((product, index) => (
            <Link
              key={`${product.name}-${index}`}
              href={product.href}
              className="
                group
                relative
                w-[320px]
                shrink-0
                overflow-hidden
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-6
                transition
                duration-300
                hover:-translate-y-2
                hover:border-orange-500/60
                hover:shadow-2xl
              "
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-orange-500 to-orange-300" />

              <div className="flex items-center justify-between">
                <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-400">
                  Electric
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-orange-400 transition group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
                  →
                </span>
              </div>

              <div className="mt-10">
                <h3 className="text-3xl font-black text-white">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-zinc-500">
                  {product.category}
                </p>

                <p className="mt-6 min-h-[52px] text-sm leading-6 text-zinc-300">
                  {product.description}
                </p>
              </div>

              <div className="mt-8 border-t border-zinc-800 pt-5">
                <span className="font-bold text-orange-400 transition group-hover:text-orange-300">
                  View Product →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}