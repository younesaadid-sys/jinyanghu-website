import { Icon } from "@iconify/react";
import QuoteModal from "@/app/components/QuoteModal";
import ProductGallery from "@/app/components/ProductGallery";
import ProductOptions from "@/app/components/ProductOptions";

const productData = {
  "ja-series-electric-tank-transporters": {
    name: "JA Series Electric Tank Transporters",
    shortName: "JA Series",
    description:
      "Electric Machinery Skates Dolly, 360° Mobile Mechanical Transporters, Machine Skates Dolly with 2pcs Straight Auxiliary Wheels Skates (60t - with a Pair of Auxiliary Wheels)",
    loadCapacity: "10T–60T",
    driveType: "Electric",
    gallery: [
      {
        src: "/products/ja-series/ja-main.jpg",
        alt: "JA Series Electric Tank Transporter",
      },
      {
        src: "/products/ja-series/ja-heavy-duty.jpg",
        alt: "JA Series heavy-duty handling",
      },
      {
        src: "/products/ja-series/ja-rotation.jpg",
        alt: "JA Series 360 degree rotation",
      },
      {
        src: "/products/ja-series/ja-use-cases.jpg",
        alt: "JA Series industrial use cases",
      },
      {
        src: "/products/ja-series/ja-led.jpg",
        alt: "JA Series LED headlights",
      },
      {
        src: "/products/ja-series/ja-motor.jpg",
        alt: "JA Series copper-core motors",
      },
      {
        src: "/products/ja-series/ja-wheel.jpg",
        alt: "JA Series heavy-duty wheels",
      },
    ],
    advantages: [
      "360° rotating platform",
      "Heavy-duty steel body",
      "Dual copper-core motors",
      "Built-in LED lighting",
    ],
    features: [
      {
        icon: "mdi:rotate-360",
        title: "360° Rotation",
        text: "Flexible rotating platform designed for precise positioning and maneuvering.",
      },
      {
        icon: "mdi:weight-lifter",
        title: "10T–60T Load Capacity",
        text: "Designed for moving heavy industrial machinery and large equipment.",
      },
      {
        icon: "mdi:shield-check-outline",
        title: "Heavy-Duty Structure",
        text: "Reinforced manganese steel body for demanding industrial applications.",
      },
      {
        icon: "mdi:engine-outline",
        title: "Dual Copper-Core Motors",
        text: "Powerful motor system for reliable and stable movement under heavy loads.",
      },
      {
        icon: "mdi:lightbulb-on-outline",
        title: "Built-In LED Lighting",
        text: "Integrated headlights improve visibility in low-light working environments.",
      },
      {
        icon: "mdi:car-tire-alert",
        title: "Durable Wheel System",
        text: "Heavy-duty wheel and bearing design for smooth and stable operation.",
      },
    ],
    applications: [
      "Factory machinery moving",
      "Warehouse material handling",
      "Heavy equipment relocation",
      "Industrial workshops",
      "Manufacturing plants",
      "Container and heavy-load transfer",
    ],
  },

  "ja-b-series-electric-tank-transporters": {
    name: "JA-B Series Electric Tank Transporters",
    shortName: "JA-B Series",
    description:
      "Heavy-duty electric transporter series designed for industrial machinery handling, flexible steering and high-capacity load movement.",
    loadCapacity: "10T–100T",
    driveType: "Electric",
    gallery: [
      {
        src: "/products/ja-b-series/ja-b-main.jpg",
        alt: "JA-B Series Electric Tank Transporter",
      },
      {
        src: "/products/ja-b-series/ja-b-rotation.jpg",
        alt: "JA-B Series 360 degree rotation",
      },
      {
        src: "/products/ja-b-series/ja-b-usage-method.jpg",
        alt: "JA-B Series usage method",
      },
      {
        src: "/products/ja-b-series/ja-b-product-photos.jpg",
        alt: "JA-B Series product photos",
      },
      {
        src: "/products/ja-b-series/ja-b-usage-scenarios.jpg",
        alt: "JA-B Series industrial usage scenarios",
      },
      {
        src: "/products/ja-b-series/ja-b-motor.jpg",
        alt: "JA-B Series brushless motor",
      },
      {
        src: "/products/ja-b-series/ja-b-load-capacity.png",
        alt: "JA-B Series load capacity",
      },
      {
        src: "/products/ja-b-series/ja-b-heavy-duty-load.png",
        alt: "JA-B Series heavy-duty load moving",
      },
    ],
    advantages: [
      "360° rotating turntable",
      "10T–100T load capacity",
      "High-power dual-channel brushless motor",
      "Heavy-duty industrial structure",
    ],
    features: [
      {
        icon: "mdi:rotate-360",
        title: "360° Rotating Turntable",
        text: "Rotating platform allows flexible movement and positioning in multiple directions.",
      },
      {
        icon: "mdi:weight-lifter",
        title: "10T–100T Load Capacity",
        text: "Designed for handling very heavy industrial equipment and machinery.",
      },
      {
        icon: "mdi:engine-outline",
        title: "Brushless Motor System",
        text: "High-power dual-channel brushless motor for efficient and reliable movement.",
      },
      {
        icon: "mdi:battery-charging",
        title: "Lithium Battery",
        text: "Long-lasting battery system suitable for continuous industrial operation.",
      },
      {
        icon: "mdi:remote",
        title: "Flexible Steering",
        text: "Supports controlled movement for demanding factory and warehouse environments.",
      },
      {
        icon: "mdi:shield-check-outline",
        title: "Industrial Heavy-Duty Build",
        text: "Robust structure designed for professional heavy-load applications.",
      },
    ],
    applications: [
      "Factory machinery moving",
      "Warehouse transport",
      "Heavy equipment relocation",
      "Container movement",
      "Industrial workshops",
      "Manufacturing facilities",
    ],
  },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    category: string;
    product: string;
  }>;
}) {
  const { product } = await params;

  const currentProduct =
    productData[product as keyof typeof productData];

  if (!currentProduct) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-black">Product not found</h1>
          <p className="mt-3 text-zinc-400">
            This product page is not available yet.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* PRODUCT HERO */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-start">
          {/* LEFT */}
          <ProductGallery images={currentProduct.gallery} />

          {/* RIGHT */}
          <div className="lg:pt-4">
            <div className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
              Electric Heavy-Duty Movers
            </div>

            <h1 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              {currentProduct.name}
            </h1>

            <p className="mt-5 text-lg leading-8 text-zinc-300">
              {currentProduct.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                <div className="text-sm text-zinc-400">
                  Load Capacity
                </div>

                <div className="mt-2 text-3xl font-black text-orange-500">
                  {currentProduct.loadCapacity}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                <div className="text-sm text-zinc-400">
                  Drive Type
                </div>

                <div className="mt-2 text-2xl font-black text-white">
                  {currentProduct.driveType}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-bold">Key Advantages</h2>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {currentProduct.advantages.map((advantage) => (
                  <div
                    key={advantage}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <Icon
                      icon="mdi:check-circle"
                      className="text-xl text-orange-500"
                    />

                    {advantage}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <QuoteModal />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT OPTIONS */}
      <ProductOptions />

      {/* KEY FEATURES */}
      <section className="bg-zinc-100">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-wider text-orange-500">
              Key Features
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Designed for industrial performance
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentProduct.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
                  <Icon
                    icon={feature.icon}
                    className="text-3xl text-orange-500"
                  />
                </div>

                <h3 className="mt-5 text-xl font-black">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="font-semibold uppercase tracking-wider text-orange-500">
            Applications
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Suitable for heavy industrial environments
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {currentProduct.applications.map((application) => (
              <div
                key={application}
                className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-5"
              >
                <Icon
                  icon="mdi:check-circle-outline"
                  className="shrink-0 text-2xl text-orange-500"
                />

                <span className="font-semibold">
                  {application}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-orange-500 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold uppercase tracking-wider text-orange-100">
              Need More Information?
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Request a quotation for the {currentProduct.shortName}
            </h2>

            <p className="mt-4 max-w-2xl text-orange-100">
              Tell us your required load capacity, working environment and
              application. Our sales team can help you choose the suitable
              configuration.
            </p>
          </div>

          <div className="shrink-0">
            <QuoteModal />
          </div>
        </div>
      </section>
    </main>
  );
}