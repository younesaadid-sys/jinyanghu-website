import { Icon } from "@iconify/react";

import QuoteModal from "@/app/components/QuoteModal";
import ProductGallery from "@/app/components/ProductGallery";
import ProductOptions from "@/app/components/ProductOptions";

const productData = {
  // =========================================================
  // JA SERIES
  // =========================================================
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

  // =========================================================
  // JA-B SERIES
  // =========================================================
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

  // =========================================================
  // JD SERIES
  // =========================================================
  "jd-series-electric-tank-transporters": {
    name: "JD Series Electric Machinery Skate Dolly",
    shortName: "JD Series",

    description:
      "Electric heavy-duty machinery skate dolly designed for safe and efficient movement of industrial equipment, with wireless remote control and flexible 360° positioning.",

    loadCapacity: "10T–60T",
    driveType: "Electric",

    gallery: [
      {
        src: "/products/jd-series/jd-main.jpg",
        alt: "JD Series Electric Machinery Skate Dolly",
      },
      {
        src: "/products/jd-series/jd-charging-box.jpg",
        alt: "JD Series removable charging power box",
      },
      {
        src: "/products/jd-series/jd-remote-control.jpg",
        alt: "JD Series wireless remote control",
      },
      {
        src: "/products/jd-series/jd-anti-slip-platform.jpg",
        alt: "JD Series 360 degree anti-slip platform",
      },
      {
        src: "/products/jd-series/jd-wheels.jpg",
        alt: "JD Series heavy-duty polyurethane wheels",
      },
      {
        src: "/products/jd-series/jd-specifications.jpg",
        alt: "JD Series technical specifications",
      },
    ],

    advantages: [
      "Wireless remote control",
      "360° rotating platform",
      "Removable charging power box",
      "Heavy-duty polyurethane wheels",
    ],

    features: [
      {
        icon: "mdi:remote",
        title: "Wireless Remote Control",
        text: "Industrial wireless remote control provides convenient and precise material handling.",
      },
      {
        icon: "mdi:rotate-360",
        title: "360° Rotating Platform",
        text: "Anti-slip rotating platform improves maneuverability and load positioning.",
      },
      {
        icon: "mdi:battery-charging",
        title: "Convenient Charging",
        text: "Removable power distribution box makes charging and maintenance more convenient.",
      },
      {
        icon: "mdi:weight-lifter",
        title: "10T–60T Capacity",
        text: "Multiple configurations are available for different industrial load requirements.",
      },
      {
        icon: "mdi:car-tire-alert",
        title: "Heavy-Duty Wheels",
        text: "Polyurethane wheel system provides strong grip, durability and stable movement.",
      },
      {
        icon: "mdi:shield-check-outline",
        title: "Industrial Construction",
        text: "Built for demanding factory, machinery-moving and warehouse applications.",
      },
    ],

    applications: [
      "Factory machinery moving",
      "Heavy equipment relocation",
      "Warehouse material handling",
      "Industrial equipment installation",
      "Manufacturing plants",
      "Heavy-load transport",
    ],
  },

  // =========================================================
  // JX SERIES
  // =========================================================
  "jx-series-electric-machinery-skate-dolly": {
    name: "JX Series Electric Machinery Skate Dolly",
    shortName: "JX Series",

    description:
      "Remote-controlled electric machinery skate dolly engineered for heavy industrial load movement, precise positioning and safe material handling.",

    loadCapacity: "20T–60T",
    driveType: "Electric",

    gallery: [
      {
        src: "/products/jx-series/jx-main.jpg",
        alt: "JX Series Electric Machinery Skate Dolly",
      },
      {
        src: "/products/jx-series/jx-product-overview.jpg",
        alt: "JX Series product overview",
      },
      {
        src: "/products/jx-series/jx-load-capacity.jpg",
        alt: "JX Series heavy load capacity",
      },
      {
        src: "/products/jx-series/jx-remote-range.jpg",
        alt: "JX Series long range remote control",
      },
      {
        src: "/products/jx-series/jx-remote-operation.jpg",
        alt: "JX Series remote control operation",
      },
      {
        src: "/products/jx-series/jx-premium-quality.jpg",
        alt: "JX Series premium quality construction",
      },
      {
        src: "/products/jx-series/jx-applications.jpg",
        alt: "JX Series industrial applications",
      },
    ],

    advantages: [
      "Long-range wireless remote control",
      "20T–60T heavy-load capacity",
      "High-capacity battery system",
      "Heavy-duty industrial construction",
    ],

    features: [
      {
        icon: "mdi:remote",
        title: "Long-Range Remote Control",
        text: "Wireless remote control enables safe and convenient operation from a distance.",
      },
      {
        icon: "mdi:weight-lifter",
        title: "20T–60T Load Capacity",
        text: "Designed for demanding heavy-load moving and industrial equipment handling.",
      },
      {
        icon: "mdi:battery-high",
        title: "High-Capacity Battery",
        text: "High-capacity battery system supports reliable operation during demanding industrial work.",
      },
      {
        icon: "mdi:shield-check-outline",
        title: "Heavy-Duty Construction",
        text: "Robust steel construction designed for demanding industrial environments.",
      },
      {
        icon: "mdi:car-tire-alert",
        title: "Precision Wheels",
        text: "Heavy-duty wheel system provides smooth, stable and controlled movement.",
      },
      {
        icon: "mdi:controller-classic-outline",
        title: "Easy Operation",
        text: "Intuitive controls provide accurate movement and efficient machinery positioning.",
      },
    ],

    applications: [
      "Production workshops",
      "Industrial equipment handling",
      "Ship maintenance",
      "Construction material handling",
      "Factory machinery relocation",
      "Warehouse heavy-load transport",
    ],
  },

  // =========================================================
  // JZ SERIES
  // =========================================================
  "jz-series-electric-pallet-truck": {
    name: "JZ Series Electric Pallet Truck",
    shortName: "JZ Series",

    description:
      "Heavy-duty electric pallet truck designed for efficient warehouse transport, industrial material handling and high-capacity load movement.",

    loadCapacity: "8000 kg / 17,600 lbs",
    driveType: "Electric",

    gallery: [
      {
        src: "/products/jz-series/jz-main.png",
        alt: "JZ Series Electric Pallet Truck",
      },
      {
        src: "/products/jz-series/jz-use-cases.png",
        alt: "JZ Series warehouse use case",
      },
      {
        src: "/products/jz-series/jz-why-choose-us.jpg",
        alt: "JZ Series advantages and quality",
      },
      {
        src: "/products/jz-series/jz-applications.jpg",
        alt: "JZ Series industrial applications",
      },
      {
        src: "/products/jz-series/jz-craftsmanship.jpg",
        alt: "JZ Series craftsmanship and component details",
      },
      {
        src: "/products/jz-series/jz-specifications.jpg",
        alt: "JZ Series technical specifications",
      },
    ],

    advantages: [
      "8000 kg rated load capacity",
      "48V / 60Ah battery system",
      "Heavy-duty polyurethane wheels",
      "Electric travel and lifting system",
    ],

    features: [
      {
        icon: "mdi:weight-lifter",
        title: "8000 kg Load Capacity",
        text: "Designed for moving heavy palletized loads in demanding warehouse and industrial environments.",
      },
      {
        icon: "mdi:battery-high",
        title: "48V / 60Ah Battery",
        text: "High-capacity battery system provides reliable power for industrial material handling operations.",
      },
      {
        icon: "mdi:engine-outline",
        title: "Electric Drive System",
        text: "Powered travel and lifting functions reduce operator effort and improve handling efficiency.",
      },
      {
        icon: "mdi:car-tire-alert",
        title: "Heavy-Duty Wheels",
        text: "Durable polyurethane wheels with metal cores provide stable movement under heavy loads.",
      },
      {
        icon: "mdi:shield-check-outline",
        title: "Industrial Construction",
        text: "Robust steel construction designed for long-term operation in demanding work environments.",
      },
      {
        icon: "mdi:warehouse",
        title: "Versatile Applications",
        text: "Suitable for warehouses, logistics operations, construction sites and industrial facilities.",
      },
    ],

    applications: [
      "Warehouse material handling",
      "Logistics and distribution",
      "Construction sites",
      "Industrial workshops",
      "Factory transport",
      "Heavy pallet movement",
    ],
  },

  // =========================================================
  // CRA SERIES
  // =========================================================
  "cra-series-tank-transporters": {
    name: "CRA Series Cargo Moving Skates",
    shortName: "CRA Series",

    description:
      "Manual heavy-duty cargo moving skates designed for stable, smooth and controlled movement of industrial machinery and equipment.",

    loadCapacity: "6T–25T",
    driveType: "Manual",

    gallery: [
      {
        src: "/products/cra-series/cra-main.jpg",
        alt: "CRA Series Cargo Moving Skates",
      },
      {
        src: "/products/cra-series/cra-load-capacity.jpg",
        alt: "CRA Series model comparison and load capacity",
      },
      {
        src: "/products/cra-series/cra-construction-details.jpg",
        alt: "CRA Series key construction details",
      },
      {
        src: "/products/cra-series/cra-load-moving-solution.jpg",
        alt: "CRA Series industrial load moving solution",
      },
      {
        src: "/products/cra-series/cra-wheel-options.jpg",
        alt: "CRA Series wheel options",
      },
      {
        src: "/products/cra-series/cra-complete-set.jpg",
        alt: "CRA Series complete set for heavy load handling",
      },
    ],

    advantages: [
      "6T–25T load capacity range",
      "360° rotating top plate",
      "Heavy-duty steel frame",
      "Steel and nylon wheel options",
    ],

    features: [
      {
        icon: "mdi:rotate-360",
        title: "360° Rotating Top Plate",
        text: "Rotating top plate allows flexible positioning and controlled movement under heavy machinery.",
      },
      {
        icon: "mdi:weight-lifter",
        title: "6T–25T Load Capacity",
        text: "Multiple CRA models are available for different heavy-load handling requirements.",
      },
      {
        icon: "mdi:shield-check-outline",
        title: "Heavy-Duty Steel Frame",
        text: "Industrial-grade steel construction provides strength and stability during load movement.",
      },
      {
        icon: "mdi:car-tire-alert",
        title: "Multiple Wheel Options",
        text: "Steel and nylon wheel configurations are available for different working environments.",
      },
      {
        icon: "mdi:arrow-expand-horizontal",
        title: "Smooth Horizontal Movement",
        text: "Low-profile design supports stable load distribution and smooth horizontal transport.",
      },
      {
        icon: "mdi:tools",
        title: "Complete Manual System",
        text: "Push rod, support plate and wheel assembly provide a practical manual moving solution.",
      },
    ],

    applications: [
      "Factory machinery relocation",
      "Industrial equipment moving",
      "Warehouse heavy-load transport",
      "Machine installation",
      "Workshop equipment handling",
      "Production line relocation",
    ],
  },

  // =========================================================
  // CRD SERIES
  // =========================================================
  "crd-series-tank-transporters": {
    name: "CRD Series Hand-Cranked Machine Skates",
    shortName: "CRD Series",

    description:
      "Manual hand-cranked machine skates designed for controlled movement and positioning of heavy industrial machinery, with a 360° swivel platform and optional nylon or steel wheels.",

    loadCapacity: "6T–18T",
    driveType: "Manual",

    gallery: [
      {
        src: "/products/crd-series/crd-main.png",
        alt: "CRD Series hand-cranked machine skate",
      },
      {
        src: "/products/crd-series/crd-capacity.png",
        alt: "CRD Series 6T to 18T capacity options",
      },
      {
        src: "/products/crd-series/crd-swivel-platform.png",
        alt: "CRD Series hand crank and 360 degree swivel platform",
      },
      {
        src: "/products/crd-series/crd-wheel-options.png",
        alt: "CRD Series nylon and steel wheel options",
      },
      {
        src: "/products/crd-series/crd-usage-method.png",
        alt: "CRD Series usage method",
      },
      {
        src: "/products/crd-series/crd-real-shot.png",
        alt: "CRD Series real product display",
      },
      {
        src: "/products/crd-series/crd-applications.png",
        alt: "CRD Series applicable industrial scenes",
      },
    ],

    advantages: [
      "6T–18T load capacity range",
      "360° swivel platform",
      "Hand-cranked steering control",
      "Nylon or steel wheel options",
    ],

    features: [
      {
        icon: "mdi:gesture-tap-button",
        title: "Hand-Cranked Control",
        text: "Manual crank mechanism provides controlled steering and positioning during heavy equipment movement.",
      },
      {
        icon: "mdi:rotate-360",
        title: "360° Swivel Platform",
        text: "Rotating support platform improves maneuverability and allows more flexible load positioning.",
      },
      {
        icon: "mdi:weight-lifter",
        title: "6T–18T Load Capacity",
        text: "Multiple model capacities are available for different machinery and heavy-load handling requirements.",
      },
      {
        icon: "mdi:car-tire-alert",
        title: "Optional Wheel Materials",
        text: "Nylon and steel wheel configurations are available for different surfaces and industrial environments.",
      },
      {
        icon: "mdi:cog-outline",
        title: "Gear-Driven Wheel System",
        text: "Integrated gear and roller construction supports controlled movement under heavy loads.",
      },
      {
        icon: "mdi:factory",
        title: "Industrial Applications",
        text: "Suitable for factories, construction sites, industrial facilities and heavy equipment relocation.",
      },
    ],

    applications: [
      "Factory workshops",
      "Construction sites",
      "Industrial facilities",
      "Ship docks",
      "Heavy machinery relocation",
      "Equipment installation",
    ],
  },

  // =========================================================
  // CWA SERIES
  // =========================================================
  "cwa-series-tank-transporters": {
    name: "CWA Series Tank Transporters",
    shortName: "CWA Series",

    description:
      "Manual heavy-duty tank transporters designed for controlled movement of industrial machinery, with flexible steering, stable load distribution and rugged steel construction.",

    loadCapacity: "6T–30T",
    driveType: "Manual",

    gallery: [
      {
        src: "/products/cwa-series/cwa-main.png",
        alt: "CWA Series Tank Transporters",
      },
      {
        src: "/products/cwa-series/cwa-workshop-layout.png",
        alt: "CWA Series workshop layout application",
      },
      {
        src: "/products/cwa-series/cwa-wheel-assembly.png",
        alt: "CWA Series wheel assembly and load distribution",
      },
      {
        src: "/products/cwa-series/cwa-construction-details.png",
        alt: "CWA Series key construction details",
      },
      {
        src: "/products/cwa-series/cwa-steering-operation.png",
        alt: "CWA Series flexible steering operation",
      },
      {
        src: "/products/cwa-series/cwa-specifications.png",
        alt: "CWA Series product specifications",
      },
    ],

    advantages: [
      "6T–30T load capacity range",
      "Flexible manual steering",
      "Stable multi-wheel load distribution",
      "Heavy-duty steel construction",
    ],

    features: [
      {
        icon: "mdi:steering",
        title: "Flexible Steering",
        text: "Manual steering design helps operators position and redirect heavy equipment with greater control.",
      },
      {
        icon: "mdi:weight-lifter",
        title: "6T–30T Load Capacity",
        text: "Multiple CWA models are available for different industrial load requirements.",
      },
      {
        icon: "mdi:car-tire-alert",
        title: "Multi-Wheel Load Distribution",
        text: "Multiple wheel configurations distribute heavy loads more evenly across contact surfaces.",
      },
      {
        icon: "mdi:shield-check-outline",
        title: "Heavy-Duty Steel Frame",
        text: "Rugged steel construction is designed for demanding factories, workshops and warehouses.",
      },
      {
        icon: "mdi:arrow-expand-horizontal",
        title: "Controlled Movement",
        text: "The low-profile transporter design supports stable and controlled machinery relocation.",
      },
      {
        icon: "mdi:factory",
        title: "Workshop Ready",
        text: "Suitable for machinery reconfiguration, production line changes and heavy equipment relocation.",
      },
    ],

    applications: [
      "Factory machinery relocation",
      "Workshop layout changes",
      "Production line reconfiguration",
      "Warehouse equipment moving",
      "Heavy machine positioning",
      "Industrial equipment installation",
    ],
  },
  // =========================================================
// CX+Y SERIES
// =========================================================
"cx-y-series-tank-transporters": {
  name: "CX+Y Series Tank Transporters",
  shortName: "CX+Y Series",

  description:
    "Manual heavy-duty transporter system combining steering and straight-running machine skates for controlled movement of industrial machinery and large equipment.",

  loadCapacity: "4T–32T",
  driveType: "Manual",

  gallery: [
  {
    src: "/products/CX+Y-series/cx+y-main.png",
    alt: "CX+Y Series Tank Transporters",
  },
  {
    src: "/products/CX+Y-series/cx+y-specifications.png",
    alt: "CX+Y Series model specifications and load capacities",
  },
  {
    src: "/products/CX+Y-series/cx+y-wheel-options.png",
    alt: "CX+Y Series alloy steel and polyurethane wheel options",
  },
  {
    src: "/products/CX+Y-series/cx+y-anti-slip-platform.png",
    alt: "CX+Y Series anti-slip threaded platform",
  },
  {
    src: "/products/CX+Y-series/cx+y-steel-plate.png",
    alt: "CX+Y Series thickened steel plate",
  },
  {
    src: "/products/CX+Y-series/cx+y-load-bearing-axis.png",
    alt: "CX+Y Series quenched load-bearing axis",
  },
  {
    src: "/products/CX+Y-series/cx+y-flexible-pull-rod.png",
    alt: "CX+Y Series flexible pull rod",
  },
],

  advantages: [
    "4T–32T load capacity range",
    "Steering and straight-running skate combination",
    "Alloy steel or polyurethane wheel options",
    "Heavy-duty reinforced construction",
  ],

  features: [
    {
      icon: "mdi:steering",
      title: "Flexible Steering System",
      text: "The steering unit works with the straight-running skates to provide controlled positioning during heavy machinery relocation.",
    },
    {
      icon: "mdi:weight-lifter",
      title: "4T–32T Load Capacity",
      text: "Multiple X+Y configurations are available for different industrial load requirements.",
    },
    {
      icon: "mdi:car-tire-alert",
      title: "Two Wheel Options",
      text: "Alloy steel wheels are suitable for hard outdoor surfaces, while polyurethane wheels are designed for indoor flooring.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Anti-Slip Platform",
      text: "The textured support surface improves load stability during transport and positioning.",
    },
    {
      icon: "mdi:layers-triple-outline",
      title: "Thickened Steel Plate",
      text: "Reinforced steel plate construction provides strength and durability under heavy industrial loads.",
    },
    {
      icon: "mdi:axis-arrow",
      title: "Quenched Load-Bearing Axis",
      text: "The reinforced load-bearing axis supports stable operation during demanding heavy-load movement.",
    },
  ],

  applications: [
    "Factory machinery relocation",
    "Heavy equipment installation",
    "Industrial workshop transport",
    "Production line reconfiguration",
    "Warehouse machinery handling",
    "Large equipment positioning",
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
          <h1 className="text-4xl font-black">
            Product not found
          </h1>

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
              {currentProduct.driveType === "Manual"
                ? "Manual Heavy-Duty Movers"
                : "Electric Heavy-Duty Movers"}
            </div>

            <h1 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              {currentProduct.name}
            </h1>

            <p className="mt-5 text-lg leading-8 text-zinc-300">
              {currentProduct.description}
            </p>

            {/* PRODUCT MAIN SPECS */}
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

            {/* KEY ADVANTAGES */}
            <div className="mt-8">
              <h2 className="text-lg font-bold">
                Key Advantages
              </h2>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {currentProduct.advantages.map((advantage) => (
                  <div
                    key={advantage}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <Icon
                      icon="mdi:check-circle"
                      className="shrink-0 text-xl text-orange-500"
                    />

                    <span>{advantage}</span>
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