import Link from "next/link";
import { Icon } from "@iconify/react";

const categories = [
  {
    name: "Electric Heavy-Duty Movers",
    slug: "electric-heavy-duty-movers",
    icon: "mdi:truck-cargo-container",
  },
  {
    name: "Manual Heavy-Duty Movers",
    slug: "manual-heavy-duty-movers",
    icon: "mdi:cart-outline",
  },
  {
    name: "Jacks",
    slug: "jacks",
    icon: "mdi:car-jack",
  },
  {
    name: "Stair-Climbing Carts",
    slug: "stair-climbing-carts",
    icon: "mdi:stairs",
  },
  {
    name: "Pallet Trucks",
    slug: "pallet-trucks",
    icon: "mdi:forklift",
  },
  {
    name: "Stackers",
    slug: "stackers",
    icon: "mdi:warehouse",
  },
  {
    name: "All-Terrain Transporters",
    slug: "all-terrain-transporters",
    icon: "mdi:terrain",
  },
  {
    name: "Gantry Cranes",
    slug: "gantry-cranes",
    icon: "mdi:crane",
  },
  {
    name: "Freight Lifts & Aerial Work Equipment",
    slug: "freight-lifts-aerial-work-equipment",
    icon: "mdi:elevator",
  },
  {
    name: "Small Lifting Equipment",
    slug: "small-lifting-equipment",
    icon: "mdi:weight-lifter",
  },
  {
    name: "Lifting Rigging",
    slug: "lifting-rigging",
    icon: "mdi:hook",
  },
  {
    name: "Electronic Weighing Scales",
    slug: "electronic-weighing-scales",
    icon: "mdi:scale",
  },
  {
    name: "Line-Work Tools",
    slug: "line-work-tools",
    icon: "mdi:tools",
  },
  {
    name: "Pipeline Tools",
    slug: "pipeline-tools",
    icon: "mdi:pipe",
  },
  {
    name: "Drilling & Punching Equipment",
    slug: "drilling-punching-equipment",
    icon: "mdi:drill",
  },
  {
    name: "Other Specialized Products",
    slug: "other-specialized-products",
    icon: "mdi:cog-outline",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="font-semibold uppercase tracking-wider text-orange-500">
            Our Products
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Industrial Equipment Categories
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Explore our heavy-duty lifting, transport and industrial handling
            solutions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 transition group-hover:bg-orange-500">
                <Icon
                  icon={category.icon}
                  className="text-3xl text-orange-500 transition group-hover:text-white"
                />
              </div>

              <h2 className="mt-5 text-xl font-black text-zinc-900">
                {category.name}
              </h2>

              <div className="mt-5 flex items-center gap-2 text-sm font-bold text-orange-500">
                View Products
                <Icon
                  icon="mdi:arrow-right"
                  className="text-lg transition group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}