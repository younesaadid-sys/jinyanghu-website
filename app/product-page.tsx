import Image from "next/image";
import Link from "next/link";

const allProducts = [
  {
    name: "JA Series",
    description: "Electric heavy-duty tank transporters",
    image: "/products/ja-series/ja-main.jpg",
    href: "/products/electric-heavy-duty-movers/ja-series-electric-tank-transporters",
  },
  {
    name: "JA-B Series",
    description: "Heavy-duty electric transport equipment",
    image: "/products/ja-b-series/ja-b-main.jpg",
    href: "/products/electric-heavy-duty-movers/ja-b-series-electric-tank-transporters",
  },
  {
    name: "JS Series",
    description: "Electric transporter with wireless remote control",
    image: "/products/js-series/js-main.png",
    href: "/products/electric-heavy-duty-movers/js-series-electric-tank-transporters",
  },
  {
    name: "JX Series",
    description: "Remote-controlled machinery skate",
    image: "/products/jx-series/jx-main.jpg",
    href: "/products/electric-heavy-duty-movers/jx-series-electric-machinery-skate-dolly",
  },
  {
    name: "CRA Series",
    description: "Manual heavy-duty machinery skates",
    image: "/products/cra-series/cra-main.jpg",
    href: "/products/manual-heavy-duty-movers/cra-series-tank-transporters",
  },
  {
    name: "MA Series",
    description: "Hydraulic claw jack",
    image: "/products/ma-series/ma-main.png",
    href: "/products/jacks/ma-series-dual-purpose-claw-jacks",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-zinc-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-semibold uppercase tracking-wider text-orange-500">
            Our Products
          </p>

          <h1 className="mt-3 text-5xl font-black">
            Industrial Lifting Solutions
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-300">
            Explore our industrial lifting, moving and material handling equipment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allProducts.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-[260px] bg-zinc-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-black text-zinc-900">
                  {product.name}
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="font-bold text-orange-500">
                    View Product
                  </span>

                  <span className="text-xl text-orange-500">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}