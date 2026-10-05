const categoryNames: Record<string, string> = {
  "electric-heavy-duty-movers": "Electric Heavy-Duty Movers",
  "manual-heavy-duty-movers": "Manual Heavy-Duty Movers",
  jacks: "Jacks",
  "stair-climbing-carts": "Stair-Climbing Carts",
  "pallet-trucks": "Pallet Trucks",
  stackers: "Stackers",
  "all-terrain-transporters": "All-Terrain Transporters",
  "gantry-cranes": "Gantry Cranes",
  "freight-lifts-aerial-work-equipment":
    "Freight Lifts & Aerial Work Equipment",
  "small-lifting-equipment": "Small Lifting Equipment",
  "lifting-rigging": "Lifting Rigging",
  "electronic-weighing-scales": "Electronic Weighing Scales",
  "line-work-tools": "Line-Work Tools",
  "pipeline-tools": "Pipeline Tools",
  "drilling-punching-equipment": "Drilling & Punching Equipment",
  "other-specialized-products": "Other Specialized Products",
};

const categoryProducts: Record<
  string,
  {
    name: string;
    slug: string;
    description: string;
  }[]
> = {
  "electric-heavy-duty-movers": [
    {
      name: "JA Series Electric Tank Transporters",
      slug: "ja-series-electric-tank-transporters",
      description:
        "Electric heavy-duty transport system designed for precise and efficient movement of large industrial loads.",
    },
    {
      name: "JA-B Series Electric Tank Transporters",
      slug: "ja-b-series-electric-tank-transporters",
      description:
        "Heavy-duty electric tank transporter series developed for industrial machinery and large equipment handling.",
    },
    {
      name: "JS Series Electric Tank Transporters",
      slug: "js-series-electric-tank-transporters",
      description:
        "Electric transporter solution for stable, controlled and reliable movement of heavy industrial loads.",
    },
    {
      name: "JD Series Electric Tank Transporters",
      slug: "jd-series-electric-tank-transporters",
      description:
        "Industrial electric mover series designed for demanding material handling and equipment relocation.",
    },
    {
      name: "JX Series Electric Tank Transporters",
      slug: "jx-series-electric-tank-transporters",
      description:
        "Electric heavy-load transport equipment for factory, warehouse and machinery-moving applications.",
    },
    {
      name: "JZ Series Heavy-Duty Load Movers",
      slug: "jz-series-heavy-duty-load-movers",
      description:
        "Heavy-duty load mover series designed for large industrial machinery and high-capacity transport applications.",
    },
    {
      name: "JQ Series Low-Profile Tank Transporters",
      slug: "jq-series-low-profile-tank-transporters",
      description:
        "Low-profile electric transporter designed for applications where reduced platform height is required.",
    },
  ],
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const categoryName = categoryNames[category] || "Product Category";

  const products = categoryProducts[category] || [];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="font-semibold uppercase tracking-wider text-orange-500">
            Product Category
          </p>

          <h1 className="mt-3 text-5xl font-black">
            {categoryName}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Explore available products in this category.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        {products.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.slug}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-56 overflow-hidden bg-zinc-100">
  <img
    src="/products/ja-series/ja-main.jpg"
    alt="JA Series Electric Tank Transporters"
    className="h-full w-full object-contain p-4"
  />
</div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold">
                    {product.name}
                  </h2>

                  <p className="mt-3 leading-7 text-zinc-600">
                    {product.description}
                  </p>

                  <a
                    href={`/products/${category}/${product.slug}`}
                    className="mt-5 inline-block font-semibold text-orange-500 hover:text-orange-600"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-10">
            <h2 className="text-2xl font-bold">
              Products coming soon
            </h2>

            <p className="mt-3 text-zinc-600">
              Product information for this category will be added soon.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}