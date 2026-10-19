import Image from "next/image";
import Link from "next/link";

const productGroups = [
  {
    category: "Electric Heavy-Duty Movers",
    slug: "electric-heavy-duty-movers",
    products: [
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
        image: "/products/ja-b-series/ja-b-main-v2.jpg",
      },
      {
        name: "JS Series",
        slug: "js-series-electric-tank-transporters",
        description:
          "Electric lifting transporter with wireless remote control",
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
        description: "Remote-controlled heavy-duty machinery transporter",
        image: "/products/jx-series/jx-main.jpg",
      },
      {
        name: "JZ Series",
        slug: "jz-series-electric-pallet-truck",
        description: "Heavy-duty electric pallet truck",
        image: "/products/jz-series/jz-main.png",
      },
      {
        name: "JQ Series",
        slug: "jq-series-low-profile-tank-transporters",
        description: "Low-profile heavy-duty electric transporters",
      },
    ],
  },

  {
    category: "Manual Heavy-Duty Movers",
    slug: "manual-heavy-duty-movers",
    products: [
      {
        name: "CRA Series",
        slug: "cra-series-tank-transporters",
        description: "Manual heavy-duty cargo moving skates",
        image: "/products/cra-series/cra-main.jpg",
      },
      {
        name: "CWA Series",
        slug: "cwa-series-tank-transporters",
        description: "Heavy-duty manual tank transporters",
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
        description: "Manual heavy-duty transporter system",
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
        description: "Heavy-duty universal machinery moving skates",
        image: "/products/crq-series/crq-main.webp",
      },
      {
        name: "CRM Series",
        slug: "crm-series-tank-transporters",
        description: "Heavy-duty crawler machinery skates",
        image: "/products/crm-series/crm-product-view.webp",
      },
      {
        name: "CRF Series",
        slug: "crf-series-tank-transporters",
        description: "Heavy-duty machinery skates with rotating turntable",
        image: "/products/crf-series/crf-main.webp",
      },
      {
        name: "CRW Series",
        slug: "crw-series-tank-transporters",
        description: "Hydraulic lift omnidirectional machinery skates",
        image: "/products/crw-series/crw-main.webp",
      },
    ],
  },

  {
    category: "Jacks",
    slug: "jacks",
    products: [
      {
        name: "MA Series",
        slug: "ma-series-dual-purpose-claw-jacks",
        description: "Dual-purpose hydraulic claw jacks",
        image: "/products/ma-series/ma-main.png",
      },
      {
        name: "MB Series",
        slug: "mb-series-multi-stage-claw-jacks",
        description: "Multi-stage adjustable claw jacks",
        image: "/products/mb-series/mb-main.png",
      },
      {
        name: "MC Series",
        slug: "mc-series-single-stage-claw-jacks",
        description: "Single-stage high-stroke hydraulic claw jacks",
        image: "/products/mc-series/mc-main.png",
      },
      {
        name: "MD Series",
        slug: "md-series-manual-claw-jacks",
        description: "Manual hydraulic claw jacks",
        image: "/products/md-series/md-main.png",
      },
      {
        name: "ME Series",
        slug: "me-series-remote-operated-claw-jacks",
        description: "Remote-operated hydraulic claw jacks",
        image: "/products/me-series/me-main.png",
      },
      {
        name: "MF Series",
        slug: "mf-series-hydraulic-lifters",
        description: "Compact hydraulic lifters",
        image: "/products/mf-series/mf-main.webp",
      },
      {
        name: "MG Series",
        slug: "mg-series-wedge-jacks",
        description: "Low-profile hydraulic wedge jacks",
        image: "/products/mg-series/mg-main.webp",
      },
      {
        name: "MH Series",
        slug: "mh-series-remote-operated-jacks",
        description: "Compact remote-operated hydraulic jacks",
        image: "/products/mh-series/mh-main.webp",
      },
      {
        name: "MI Series",
        slug: "mi-series-hand-operated-toe-jacks",
        description: "Manual self-locking toe jacks",
        image: "/products/mi-series/mi-main.webp",
      },
      {
        name: "MJ Series",
        slug: "mj-series-low-profile-hand-operated-toe-jacks",
        description: "Low-profile hand-operated toe jacks",
        image: "/products/mj-series/mj-main.webp",
      },
      {
        name: "MK Series",
        slug: "mk-series-multi-position-adjustable-toe-jacks",
        description: "Multi-position adjustable manual toe jacks",
        image: "/products/mk-series/mk-main.webp",
      },
    ],
  },
];

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const selectedCategory = params.category;

  const visibleGroups = selectedCategory
    ? productGroups.filter((group) => group.slug === selectedCategory)
    : productGroups;
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-zinc-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-semibold uppercase tracking-wider text-orange-500">
            Our Products
          </p>

          <h1 className="mt-3 text-5xl font-black">
            Industrial Lifting Solutions
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
            Explore our complete range of industrial lifting, moving and
            material handling equipment.
          </p>
        </div>
      </section>

      {/* PRODUCT GROUPS */}
      <section className="mx-auto max-w-[1500px] px-6 py-16">
        <div className="space-y-16">
          {visibleGroups.map((group) => (
            <div key={group.slug} id={group.slug}>

              {/* SERIES HEADER */}
<div className="mb-6 flex items-end justify-between">
  <div>
    <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
      Product Series
    </p>

    <h2 className="mt-1 text-2xl font-black text-zinc-900">
      {group.category}
    </h2>
  </div>

  <a
    href="/products"
    className="text-sm font-semibold text-zinc-600 transition hover:text-orange-500"
  >
    View More →
  </a>
</div>

              {/* PRODUCTS */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {group.products.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${group.slug}/${product.slug}`}
                    className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
                  >
                    <div className="relative h-[240px] bg-white">
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                          className="object-contain p-5 transition duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-lg font-bold text-zinc-300">
                          JIN YANG HU
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <h3 className="text-xl font-black text-zinc-900">
                        {product.name}
                      </h3>

                      <p className="mt-2 min-h-[48px] text-sm leading-6 text-zinc-500">
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
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}