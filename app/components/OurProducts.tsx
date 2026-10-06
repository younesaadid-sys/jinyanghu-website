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
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-semibold uppercase tracking-wider text-orange-500">
          Our Products
        </p>

        <div className="mt-3 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-black text-zinc-900">
              Heavy-duty solutions for industrial movement
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
              Explore our industrial transport equipment designed for moving
              heavy machinery safely, precisely and efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* MOVING PRODUCTS */}
      <div className="mt-12 overflow-hidden">
        <div className="products-marquee flex w-max gap-5 px-6">
          {scrollingProducts.map((product, index) => (
            <Link
              key={`${product.name}-${index}`}
              href={product.href}
              className="group w-[300px] shrink-0 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-500">
                  Electric
                </span>

                <span className="text-xl text-orange-500 transition group-hover:translate-x-1">
                  →
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-black text-zinc-900">
                {product.name}
              </h3>

              <p className="mt-2 text-sm font-medium text-zinc-400">
                {product.category}
              </p>

              <p className="mt-5 min-h-[48px] text-sm leading-6 text-zinc-600">
                {product.description}
              </p>

              <div className="mt-7 border-t border-zinc-100 pt-5">
                <span className="font-bold text-orange-500">
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