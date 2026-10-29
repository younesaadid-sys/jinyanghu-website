import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Icon } from "@iconify/react";
import QuoteModal from "@/app/components/QuoteModal";
import ProductGallery from "@/app/components/ProductGallery";
import ProductOptions from "@/app/components/ProductOptions";

const productData = {
  // =========================================================
  // JA SERIES
  // =========================================================
  "ja-series-electric-tank-transporters": {
    purchaseLinks: {
      amazon: "",
      aliexpress: "",
      alibaba: "",
    },
   name: "JA Series Electric Tank Tugger",
shortName: "JA Series",

options: {
  defaultCapacity: "10T",

  capacities: [
    {
      value: "10T",
      label: "10T",
      description: "JA-10T model",
      tooltip: "Towing Capacity: 10T | Rated Load: 5T",
    },
    {
      value: "20T",
      label: "20T",
      description: "JA-20T model",
      tooltip: "Towing Capacity: 20T | Rated Load: 10T",
    },
    {
      value: "25T",
      label: "25T",
      description: "JA-25T model",
      tooltip: "Towing Capacity: 25T | Rated Load: 12.5T",
    },
    {
      value: "30T",
      label: "30T",
      description: "JA-30T model",
      tooltip: "Towing Capacity: 30T | Rated Load: 15T",
    },
    {
      value: "35T",
      label: "35T",
      description: "JA-35T model",
      tooltip: "Towing Capacity: 35T | Rated Load: 17.5T",
    },
    {
      value: "40T",
      label: "40T",
      description: "JA-40T model",
      tooltip: "Towing Capacity: 40T | Rated Load: 20T",
    },
    {
      value: "50T",
      label: "50T",
      description: "JA-50T model",
      tooltip: "Towing Capacity: 50T | Rated Load: 25T",
    },
    {
      value: "60T",
      label: "60T",
      description: "JA-60T model",
      tooltip: "Towing Capacity: 60T | Rated Load: 30T",
    },
    {
      value: "100T",
      label: "100T",
      description: "JA-100T model",
      tooltip: "Towing Capacity: 100T | Rated Load: 50T",
    },
  ],

  aboutItems: [
    {
      title: "Heavy-Duty Electric Transport",
      text: "Designed specifically for efficient transportation of large machinery, industrial equipment and steel structural components.",
    },
    {
      title: "Powerful Electric Drive",
      text: "Equipped with a powerful electric drive system and wireless remote control operation for easier heavy-load movement.",
    },
    {
      title: "Stable Straight-Line Movement",
      text: "One electric transport trolley together with two straight-line trolleys provides stable straight-line movement.",
    },
    {
      title: "Improved Load Distribution",
      text: "Using multiple electric transport trolleys can improve load-carrying capacity, maneuverability and load distribution for ultra-heavy equipment.",
    },
    {
      title: "Wireless Remote Control",
      text: "Remote-controlled operation improves safety and convenience when moving heavy machinery in industrial environments.",
    },
  ],
},

specTable: {
  columns: [
    "Model",
    "Towing Capacity",
    "Rated Load",
    "Motor Power",
    "Battery",
    "Drive Wheels",
    "Steel Plate",
    "Net Weight",
  ],

  rows: [
    ["JA-10T", "10T", "5T", "500W×2", "48V60A", "4pcs 135×90", "10mm", "115KG"],
    ["JA-20T", "20T", "10T", "750W×2", "48V60A", "4pcs 135×90", "10mm", "120KG"],
    ["JA-25T", "25T", "12.5T", "1000W×2", "48V60A", "4pcs 135×90", "12mm", "130KG"],
    ["JA-30T", "30T", "15T", "1000W×2", "48V60A", "4pcs 140×110", "12mm", "150KG"],
    ["JA-35T", "35T", "17.5T", "1000W×2", "48V60A", "4pcs 140×110", "12mm", "180KG"],
    ["JA-40T", "40T", "20T", "1500W×2", "48V120A", "4pcs 140×140", "16mm", "180KG"],
    ["JA-50T", "50T", "25T", "2000W×2", "48V120A", "4pcs 140×140", "16mm", "210KG"],
    ["JA-60T", "60T", "30T", "3000W×2", "72V120A", "4pcs 165×150", "18mm", "220KG"],
    ["JA-100T", "100T", "50T", "2000W×4", "48V240A", "8pcs 140×140", "20mm", "600KG"],
  ],

  commonSpecs: [
    {
      label: "Remote Control",
      value: "C6/C7 Remote Control (Industrial-Grade Remote Control)",
    },
    {
      label: "Wheel Material",
      value: "High-hardness, fully imported polyurethane material",
    },
    {
      label: "Gears",
      value: "High-Strength Titanium Alloy Gears",
    },
    {
      label: "Operating Time",
      value: "4–6 hours",
    },
    {
      label: "Charging Time",
      value: "6–8 hours",
    },
  ],
},

description:
  "Heavy-duty electric tank tugger designed for efficient transportation of large machinery, industrial equipment and steel structural components, with electric drive and wireless remote control.",

loadCapacity: "10T–100T",
driveType: "Electric",
    gallery: [
      {
        src: "/products/ja-series/ja-main.jpg",
        alt: "JA Series Electric Tank Transporter",
      },
      {
        src: "/products/ja-series/ja-heavy-duty.webp",
        alt: "JA Series heavy-duty handling",
      },
      {
        src: "/products/ja-series/ja-rotation.webp",
        alt: "JA Series 360 degree rotation",
      },
      {
        src: "/products/ja-series/ja-use-cases.webp",
        alt: "JA Series industrial use cases",
      },
      {
        src: "/products/ja-series/ja-led.webp",
        alt: "JA Series LED headlights",
      },
      {
        src: "/products/ja-series/ja-motor.webp",
        alt: "JA Series copper-core motors",
      },
      {
        src: "/products/ja-series/ja-wheel.webp",
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
    purchaseLinks: {
      amazon: "",
      aliexpress: "",
      alibaba: "",
    },
    name: "JA-B Series Electric Tank Transporters",
    shortName: "JA-B Series",
options: {
  defaultCapacity: "20Ton",

  capacities: [
    {
      value: "20Ton",
      label: "20Ton",
      description: "Standard configuration",
      tooltip: "Size: 20Ton",
    },
    {
      value: "20Ton + Auxiliary Wheels",
      label: "20Ton + Auxiliary Wheels",
      description: "20-ton configuration with auxiliary wheels",
      tooltip: "Size: 20Ton + Auxiliary wheels",
    },
    {
      value: "25Ton + Auxiliary Wheels",
      label: "25Ton + Auxiliary Wheels",
      description: "25-ton configuration with auxiliary wheels",
      tooltip: "Size: 25Ton + Auxiliary wheels",
    },
    {
      value: "30Ton",
      label: "30Ton",
      description: "Standard 30-ton configuration",
      tooltip: "Size: 30Ton",
    },
    {
      value: "30Ton + Auxiliary Wheels",
      label: "30Ton + Auxiliary Wheels",
      description: "30-ton configuration with auxiliary wheels",
      tooltip: "Size: 30Ton + Auxiliary wheels",
    },
    {
      value: "40Ton",
      label: "40Ton",
      description: "Standard 40-ton configuration",
      tooltip: "Size: 40Ton",
    },
    {
      value: "40Ton + Auxiliary Wheels",
      label: "40Ton + Auxiliary Wheels",
      description: "40-ton configuration with auxiliary wheels",
      tooltip: "Size: 40Ton + Auxiliary wheels",
    },
    {
      value: "50Ton",
      label: "50Ton",
      description: "Standard 50-ton configuration",
      tooltip: "Size: 50Ton",
    },
    {
      value: "50Ton + Auxiliary Wheels",
      label: "50Ton + Auxiliary Wheels",
      description: "50-ton configuration with auxiliary wheels",
      tooltip: "Size: 50Ton + Auxiliary wheels",
    },
  ],

aboutItems: [
  {
    title: "Customization Tailored to Your Needs",
    text: "Enjoy comprehensive customization options with the JIN YANG HU electric machinery skate dolly. We support customized colors, logos, punching, alarm installation and enterprise batch customization.",
  },
  {
    title: "How to Use",
    text: "The machinery skate dolly should be used together with suitable straight-line auxiliary wheels. Lift the heavy object with appropriate lifting equipment, place the transporter underneath, then lower the load securely onto the tank car.",
  },
  {
    title: "Wireless Remote Control",
    text: "Equipped with an advanced C7 wireless intelligent remote control for smooth and convenient operation within an approximate range of 6–10 meters. Industrial-specific remote control options are also available.",
  },
  {
    title: "Thoughtful Design Details",
    text: "Features an integrated 360° anti-slip turntable for enhanced stability and controlled rotation, a built-in power display for easy battery monitoring, and front lighting to improve visibility in low-light environments.",
  },
  {
    title: "Wide Range of Uses",
    text: "Suitable for factories, warehouses, workshops, docks and other industrial environments where heavy equipment needs to be transported. Custom solutions are also available for special applications and enterprise batch requirements.",
  },
],
}, // ✅ HNA KANSADDO options

specTable: {
  columns: [
    "Net Weight",
    "Rated Load",
    "Wheel Size",
    "Motor Power",
    "Battery Specification",
    "Dimensions (L × W × H)",
  ],

  rows: [
    [
      "120 kg",
      "10T",
      "90×135×4",
      "2×750W",
      "48V/60Ah",
      "720×640×170 mm",
    ],
    [
      "130 kg",
      "12.5T",
      "90×135×4",
      "2×1000W",
      "48V/60Ah",
      "720×640×170 mm",
    ],
    [
      "155 kg",
      "15T",
      "90×135×4",
      "2×1000W",
      "48V/60Ah",
      "770×640×190 mm",
    ],
    [
      "205 kg",
      "20T",
      "140×140×4",
      "2×1500W",
      "48V/120Ah",
      "810×810×190 mm",
    ],
    [
      "215 kg",
      "25T",
      "140×140×4",
      "2×2000W",
      "48V/120Ah",
      "810×800×210 mm",
    ],
  ],

  commonSpecs: [
    {
      label: "Drive Type",
      value: "Electric",
    },
    {
      label: "Application",
      value: "Heavy-duty industrial machinery transport",
    },
  ],
},
description:
  "Heavy-duty electric transporter series designed for industrial machinery handling, flexible steering and high-capacity load movement.",
    loadCapacity: "10T–100T",
    driveType: "Electric",

    gallery: [
      {
        src: "/products/ja-b-series/ja-b-main-v2.jpg",
        alt: "JA-B Series Electric Tank Transporter",
      },
      {
        src: "/products/ja-b-series/ja-b-rotation.webp",
        alt: "JA-B Series 360 degree rotation",
      },
      {
        src: "/products/ja-b-series/ja-b-usage-method.webp",
        alt: "JA-B Series usage method",
      },
      {
        src: "/products/ja-b-series/ja-b-product-photos.webp",
        alt: "JA-B Series product photos",
      },
      {
        src: "/products/ja-b-series/ja-b-usage-scenarios.webp",
        alt: "JA-B Series industrial usage scenarios",
      },
      {
        src: "/products/ja-b-series/ja-b-motor.webp",
        alt: "JA-B Series brushless motor",
      },
      {
        src: "/products/ja-b-series/ja-b-load-capacity.webp",
        alt: "JA-B Series load capacity",
      },
      {
        src: "/products/ja-b-series/ja-b-heavy-duty-load.webp",
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
  // JS SERIES
  // =========================================================
  "js-series-electric-tank-transporters": {
    purchaseLinks: {
      amazon: "",
      aliexpress: "",
      alibaba: "",
    },
    name: "JS Series Electric Tank Transporters",
    shortName: "JS Series",
options: {
  defaultCapacity: "20 T",

  capacities: [
    {
      value: "20 T",
      label: "20 T",
      description: "20-ton configuration",
      tooltip: "Size: 20 T",
    },
    {
      value: "30 T",
      label: "30 T",
      description: "30-ton configuration",
      tooltip: "Size: 30 T",
    },
  ],

  aboutItems: [
  {
    title: "Electric Powered Movement",
    text: "Helps reduce manual effort when transporting heavy machinery and industrial equipment.",
  },
  {
    title: "Integrated Lifting Function",
    text: "Designed to assist with lifting and positioning heavy equipment during machinery relocation.",
  },
  {
    title: "Remote Control Operation",
    text: "Allows convenient control of the mover during equipment handling and positioning.",
  },
  {
    title: "Heavy-Duty Industrial Design",
    text: "Built for demanding machinery transport tasks in warehouses, factories, workshops, and industrial facilities.",
  },
  {
    title: "Wide Application",
    text: "Suitable for moving large machinery, industrial equipment, and other heavy loads on compatible floors.",
  },
],
},

specTable: {
  columns: [
    "Rated Load",
    "Lifting Load",
    "Wheel Size",
    "Motor Power",
    "Battery Specification",
    "Dimensions (L × W × H)",
  ],

  rows: [
    [
      "5T",
      "5T",
      "4 pcs 110×100",
      "500W×2",
      "48V60A",
      "980×750×190 mm",
    ],
    [
      "10T",
      "10T",
      "4 pcs 135×90",
      "750W×2",
      "48V60A",
      "980×750×190 mm",
    ],
    [
      "12.5T",
      "12.5T",
      "4 pcs 135×90",
      "1000W×2",
      "48V60A",
      "980×750×190 mm",
    ],
    [
      "15T",
      "15T",
      "4 pcs 140×110",
      "1000W×2",
      "48V60A",
      "1220×950×200 mm",
    ],
    [
      "17.5T",
      "15T",
      "4 pcs 140×110",
      "1000W×2",
      "48V60A",
      "1220×950×200 mm",
    ],
    [
      "20T",
      "15T",
      "4 pcs 140×140",
      "1500W×2",
      "48V120A",
      "1220×950×200 mm",
    ],
    [
      "25T",
      "15T",
      "4 pcs 140×140",
      "2000W×2",
      "48V120A",
      "1220×950×200 mm",
    ],
    [
      "25T",
      "15T",
      "4 pcs 165×150",
      "3000W×2",
      "48V120A",
      "1220×950×200 mm",
    ],
  ],

  commonSpecs: [
    {
      label: "Drive Type",
      value: "Electric",
    },
    {
      label: "Control Type",
      value: "Wireless Remote Control",
    },
    {
      label: "Application",
      value: "Heavy machinery lifting and transport",
    },
  ],
},
    description:
      "Electric heavy-duty transporter designed for moving, lifting and positioning industrial machinery. The JS Series combines wireless remote control, electric lifting, flexible movement and a powerful copper-core motor for efficient heavy-equipment handling.",

    loadCapacity: "Heavy-Duty",
    driveType: "Electric",

    gallery: [
      {
        src: "/products/js-series/js-main.png",
        alt: "JS Series electric heavy-duty transporter",
      },
      {
        src: "/products/js-series/js-remote-control.webp",
        alt: "JS Series wireless remote control",
      },
      {
        src: "/products/js-series/js-copper-core-motor.webp",
        alt: "JS Series high-performance copper core motor",
      },
      {
        src: "/products/js-series/js-transport-and-lift.webp",
        alt: "JS Series transport and lifting application",
      },
      {
        src: "/products/js-series/js-lifting-system.webp",
        alt: "JS Series electric lifting system",
      },
      {
        src: "/products/js-series/js-product-overview.webp",
        alt: "JS Series heavy-duty electric transporter overview",
      },
    ],

    advantages: [
      "Wireless remote-controlled operation",
      "Electric lifting and positioning",
      "High-performance copper-core motor",
      "Flexible heavy-load movement",
    ],

    features: [
      {
        icon: "mdi:remote",
        title: "Wireless Remote Control",
        text: "Wireless remote control enables safer long-distance operation and convenient control of transporter movement and lifting.",
      },
      {
        icon: "mdi:engine-outline",
        title: "Copper-Core Motor",
        text: "The high-performance copper-core motor provides efficient power for demanding industrial transportation tasks.",
      },
      {
        icon: "mdi:arrow-up-down-bold",
        title: "Electric Lifting",
        text: "The integrated lifting mechanism allows heavy loads to be raised and positioned with reduced manual effort.",
      },
      {
        icon: "mdi:rotate-360",
        title: "Flexible Movement",
        text: "The transporter is designed for flexible multidirectional movement and precise positioning of large machinery.",
      },
      {
        icon: "mdi:weight-lifter",
        title: "Heavy-Duty Load Handling",
        text: "The reinforced transporter structure supports stable movement of heavy industrial machinery and equipment.",
      },
      {
        icon: "mdi:arrow-collapse-down",
        title: "Low-Profile Design",
        text: "The low-profile transporter body allows easier access underneath machinery for lifting and relocation.",
      },
    ],

    applications: [
      "Factory machinery relocation",
      "Heavy mold transportation",
      "Industrial equipment installation",
      "Production line reconfiguration",
      "Heavy machinery positioning",
      "Warehouse equipment handling",
    ],
  },

  // =========================================================
  // JD SERIES
  // =========================================================
  "jd-series-electric-tank-transporters": {
    purchaseLinks: {
      amazon: "",
      aliexpress: "",
      alibaba: "",
    },
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
        src: "/products/jd-series/jd-charging-box.webp",
        alt: "JD Series removable charging power box",
      },
      {
        src: "/products/jd-series/jd-remote-control.webp",
        alt: "JD Series wireless remote control",
      },
      {
        src: "/products/jd-series/jd-anti-slip-platform.webp",
        alt: "JD Series 360 degree anti-slip platform",
      },
      {
        src: "/products/jd-series/jd-wheels.webp",
        alt: "JD Series heavy-duty polyurethane wheels",
      },
      {
        src: "/products/jd-series/jd-specifications.webp",
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
    purchaseLinks: {
      amazon: "",
      aliexpress: "",
      alibaba: "",
    },
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
        src: "/products/jx-series/jx-product-overview.webp",
        alt: "JX Series product overview",
      },
      {
        src: "/products/jx-series/jx-load-capacity.webp",
        alt: "JX Series heavy load capacity",
      },
      {
        src: "/products/jx-series/jx-remote-range.webp",
        alt: "JX Series long range remote control",
      },
      {
        src: "/products/jx-series/jx-remote-operation.webp",
        alt: "JX Series remote control operation",
      },
      {
        src: "/products/jx-series/jx-premium-quality.webp",
        alt: "JX Series premium quality construction",
      },
      {
        src: "/products/jx-series/jx-applications.webp",
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
    purchaseLinks: {
      amazon: "",
      aliexpress: "",
      alibaba: "",
    },
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
        src: "/products/jz-series/jz-use-cases.webp",
        alt: "JZ Series warehouse use case",
      },
      {
        src: "/products/jz-series/jz-why-choose-us.webp",
        alt: "JZ Series advantages and quality",
      },
      {
        src: "/products/jz-series/jz-applications.webp",
        alt: "JZ Series industrial applications",
      },
      {
        src: "/products/jz-series/jz-craftsmanship.webp",
        alt: "JZ Series craftsmanship and component details",
      },
      {
        src: "/products/jz-series/jz-specifications.webp",
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
    purchaseLinks: {
      amazon: "",
      aliexpress: "",
      alibaba: "",
    },
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
        src: "/products/cra-series/cra-load-capacity.webp",
        alt: "CRA Series model comparison and load capacity",
      },
      {
        src: "/products/cra-series/cra-construction-details.webp",
        alt: "CRA Series key construction details",
      },
      {
        src: "/products/cra-series/cra-load-moving-solution.webp",
        alt: "CRA Series industrial load moving solution",
      },
      {
        src: "/products/cra-series/cra-wheel-options.webp",
        alt: "CRA Series wheel options",
      },
      {
        src: "/products/cra-series/cra-complete-set.webp",
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
    purchaseLinks: {
      amazon: "",
      aliexpress: "",
      alibaba: "",
    },
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
        src: "/products/crd-series/crd-capacity.webp",
        alt: "CRD Series 6T to 18T capacity options",
      },
      {
        src: "/products/crd-series/crd-swivel-platform.webp",
        alt: "CRD Series hand crank and 360 degree swivel platform",
      },
      {
        src: "/products/crd-series/crd-wheel-options.webp",
        alt: "CRD Series nylon and steel wheel options",
      },
      {
        src: "/products/crd-series/crd-usage-method.webp",
        alt: "CRD Series usage method",
      },
      {
        src: "/products/crd-series/crd-real-shot.webp",
        alt: "CRD Series real product display",
      },
      {
        src: "/products/crd-series/crd-applications.webp",
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
    purchaseLinks: {
      amazon: "",
      aliexpress: "",
      alibaba: "",
    },
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
        src: "/products/cwa-series/cwa-workshop-layout.webp",
        alt: "CWA Series workshop layout application",
      },
      {
        src: "/products/cwa-series/cwa-wheel-assembly.webp",
        alt: "CWA Series wheel assembly and load distribution",
      },
      {
        src: "/products/cwa-series/cwa-construction-details.webp",
        alt: "CWA Series key construction details",
      },
      {
        src: "/products/cwa-series/cwa-steering-operation.webp",
        alt: "CWA Series flexible steering operation",
      },
      {
        src: "/products/cwa-series/cwa-specifications.webp",
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
    purchaseLinks: {
      amazon: "",
      aliexpress: "",
      alibaba: "",
    },
    name: "CX+Y Series Tank Transporters",
    shortName: "CX+Y Series",

    description:
      "Manual heavy-duty transporter system combining steering and straight-running machine skates for controlled movement of industrial machinery and large equipment.",

    loadCapacity: "4T–32T",
    driveType: "Manual",

    gallery: [
      {
        src: "/products/cx-y-series/cx-y-main.png",
        alt: "CX+Y Series Tank Transporters",
      },
      {
        src: "/products/cx-y-series/cx-y-specifications.webp",
        alt: "CX+Y Series model specifications and load capacities",
      },
      {
        src: "/products/cx-y-series/cx-y-wheel-options.webp",
        alt: "CX+Y Series alloy steel and polyurethane wheel options",
      },
      {
        src: "/products/cx-y-series/cx-y-anti-slip-platform.webp",
        alt: "CX+Y Series anti-slip threaded platform",
      },
      {
        src: "/products/cx-y-series/cx-y-steel-plate.webp",
        alt: "CX+Y Series thickened steel plate",
      },
      {
        src: "/products/cx-y-series/cx-y-load-bearing-axis.webp",
        alt: "CX+Y Series quenched load-bearing axis",
      },
      {
        src: "/products/cx-y-series/cx-y-flexible-pull-rod.webp",
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

  // =========================================================
  // CRP SERIES
  // =========================================================
  "crp-series-tank-transporters": {
    purchaseLinks: {
      amazon: "",
      aliexpress: "",
      alibaba: "",
    },
    name: "CRP Series Machinery Moving Skate",
    shortName: "CRP Series",

    description:
      "Manual heavy-duty machinery moving skate designed for controlled equipment relocation, featuring a 360° rotating platform, durable steel construction and wear-resistant caster wheels.",

    loadCapacity: "3T Rated / 4T Max",
    driveType: "Manual",

    gallery: [
      {
        src: "/products/crp-series/crp-main.png",
        alt: "CRP Series machinery moving skate",
      },
      {
        src: "/products/crp-series/crp-specifications.webp",
        alt: "CRP Series specifications and dimensions",
      },
      
      {
        src: "/products/crp-series/crp-removable-handle.webp",
        alt: "CRP Series removable handle system",
      },
      {
        src: "/products/crp-series/crp-construction-details.webp",
        alt: "CRP Series construction details",
      },
      {
        src: "/products/crp-series/crp-detail-view.webp",
        alt: "CRP Series detailed product view",
      },
    ],

    advantages: [
      "360° free rotation",
      "4T maximum load capacity",
      "Heavy-duty steel construction",
      "Wear-resistant caster wheels",
    ],

    features: [
      {
        icon: "mdi:rotate-360",
        title: "360° Free Rotation",
        text: "The rotating platform allows flexible positioning and directional control during machinery movement.",
      },
      {
        icon: "mdi:weight-lifter",
        title: "4T Maximum Load",
        text: "CRP-4 supports a maximum load of 4 tons with a rated working load of 3 tons.",
      },
      {
        icon: "mdi:shield-check-outline",
        title: "Thickened Steel Base",
        text: "Reinforced steel construction provides strength and stability during heavy equipment relocation.",
      },
      {
        icon: "mdi:car-tire-alert",
        title: "Wear-Resistant Casters",
        text: "Durable caster wheels support smooth movement and reliable industrial operation.",
      },
      {
        icon: "mdi:circle-double",
        title: "Ball Bearing Rotation",
        text: "Integrated ball bearings support smooth and controlled platform rotation.",
      },
      {
        icon: "mdi:tools",
        title: "Removable Handle",
        text: "The detachable handle simplifies positioning, transport and storage when not in use.",
      },
    ],

    applications: [
      "Factory machinery relocation",
      "Industrial equipment positioning",
      "Workshop machine moving",
      "Warehouse equipment handling",
      "Heavy equipment installation",
      "Production line reconfiguration",
    ],
  },

  // =========================================================
  // CRQ SERIES
  // =========================================================
  "crq-series-tank-transporters": {
    purchaseLinks: {
      amazon: "",
      aliexpress: "",
      alibaba: "",
    },
    name: "CRQ Series Heavy-Duty Universal Skates",
    shortName: "CRQ Series",

    description:
      "Manual heavy-duty universal skates designed for industrial equipment moving, machine relocation and precise positioning with multi-directional movement and stable load support.",

    loadCapacity: "6T–16T",
    driveType: "Manual",

    gallery: [
      {
        src: "/products/crq-series/crq-main.webp",
        alt: "CRQ Series heavy-duty universal skates",
      },
      {
        src: "/products/crq-series/crq-application.webp",
        alt: "CRQ Series industrial equipment moving application",
      },
      {
        src: "/products/crq-series/crq-construction-details.webp",
        alt: "CRQ Series key construction details",
      },
      
      {
        src: "/products/crq-series/crq-specifications.webp",
        alt: "CRQ Series product specifications",
      },
      {
        src: "/products/crq-series/crq-size-guide.webp",
        alt: "CRQ Series size selection guide",
      },
      {
        src: "/products/crq-series/crq-load-capacity.webp",
        alt: "CRQ Series load capacity overview",
      },
    ],

    advantages: [
      "6T–16T load capacity range",
      "Universal multi-direction movement",
      "Rotating load plate",
      "Heavy-duty PU wheel system",
    ],

    features: [
      {
        icon: "mdi:rotate-360",
        title: "Universal Movement",
        text: "Multi-direction wheel assemblies provide flexible movement and precise positioning of heavy industrial equipment.",
      },
      {
        icon: "mdi:weight-lifter",
        title: "6T–16T Load Capacity",
        text: "Available in multiple sizes for different heavy-duty machinery relocation requirements.",
      },
      {
        icon: "mdi:circle-slice-8",
        title: "Rotating Load Plate",
        text: "The central rotating plate supports smoother positioning and directional adjustment under heavy loads.",
      },
      {
        icon: "mdi:car-tire-alert",
        title: "Heavy-Duty PU Wheels",
        text: "Durable polyurethane wheels provide stable movement and reduced friction during industrial transport.",
      },
      {
        icon: "mdi:shield-check-outline",
        title: "Reinforced Steel Frame",
        text: "Heavy-duty frame and reinforced support arms are designed for demanding industrial environments.",
      },
      {
        icon: "mdi:target",
        title: "Precision Positioning",
        text: "Designed for accurate final positioning of large machines and industrial equipment.",
      },
    ],

    applications: [
      "Factory machinery relocation",
      "Industrial equipment positioning",
      "Production line reconfiguration",
      "Machine installation",
      "Workshop equipment moving",
      "Heavy equipment alignment",
    ],
  },

  // =========================================================
  // CRM SERIES
  // =========================================================
  "crm-series-tank-transporters": {
    purchaseLinks: {
      amazon: "",
      aliexpress: "",
      alibaba: "",
    },
    name: "CRM Series Crawler Machinery Skates",
    shortName: "CRM Series",

    description:
      "Manual heavy-duty crawler machinery skates designed for straight-line movement of industrial machinery and extremely heavy loads, featuring alloy steel rollers, anti-slip support pads and reinforced steel construction.",

    loadCapacity: "8T–500T",
    driveType: "Manual",

    gallery: [
      {
        src: "/products/crm-series/crm-product-view.webp",
        alt: "CRM Series crawler machinery skate",
      },
      {
        src: "/products/crm-series/crm-30t-overview.webp",
        alt: "CRM30 30 ton crawler machinery skate overview",
      },
      {
        src: "/products/crm-series/crm-specifications.webp",
        alt: "CRM Series specifications and load capacity table",
      },
      {
        src: "/products/crm-series/crm-anti-slip-pad.webp",
        alt: "CRM Series anti-slip support pad",
      },
      {
        src: "/products/crm-series/crm-alloy-steel-wheels.webp",
        alt: "CRM Series alloy steel rollers",
      },
      {
        src: "/products/crm-series/crm-thickened-steel.webp",
        alt: "CRM Series thickened steel construction",
      },
      {
        src: "/products/crm-series/crm-steel-shaft-casters.webp",
        alt: "CRM Series steel shaft rollers",
      },
      {
        src: "/products/crm-series/crm-real-shot.webp",
        alt: "CRM Series real product display",
      },
      {
        src: "/products/crm-series/crm-applications.webp",
        alt: "CRM Series application scenarios",
      },
    ],

    advantages: [
      "8T–500T load capacity range",
      "Heavy-duty alloy steel rollers",
      "Anti-slip load support surface",
      "Reinforced thickened steel structure",
    ],

    features: [
      {
        icon: "mdi:weight-lifter",
        title: "8T–500T Load Capacity",
        text: "The CRM Series is available in multiple models from CRM8 up to CRM500 for very heavy industrial load movement.",
      },
      {
        icon: "mdi:circle-multiple-outline",
        title: "Alloy Steel Rollers",
        text: "Precision-cut alloy steel rollers provide high load-bearing strength and durable straight-line movement.",
      },
      {
        icon: "mdi:shield-check-outline",
        title: "Thickened Steel Structure",
        text: "The reinforced base and central load-bearing structure are designed for demanding industrial applications.",
      },
      {
        icon: "mdi:shoe-print",
        title: "Anti-Slip Support Pad",
        text: "Textured support surfaces help improve stability while carrying heavy machinery.",
      },
      {
        icon: "mdi:axis-arrow",
        title: "Steel Shaft Rollers",
        text: "Heavy-duty roller shafts support stable operation under high industrial loads.",
      },
      {
        icon: "mdi:arrow-right-bold",
        title: "Straight-Line Transport",
        text: "Crawler roller design is optimized for controlled straight-line movement of heavy equipment.",
      },
    ],

    applications: [
      "Factory machinery relocation",
      "Heavy industrial equipment transport",
      "Production line installation",
      "Machine tool positioning",
      "Warehouse heavy-load handling",
      "Construction and industrial equipment movement",
    ],
  },

  // =========================================================
  // CRF SERIES
  // =========================================================
  "crf-series-tank-transporters": {
    purchaseLinks: {
      amazon: "",
      aliexpress: "",
      alibaba: "",
    },
    name: "CRF Series Heavy-Duty Machinery Skates",
    shortName: "CRF Series",

    description:
      "Manual heavy-duty machinery skates designed for controlled movement and positioning of industrial equipment, featuring a 360° rotating turntable, reinforced steel construction and optional alloy steel or polyurethane wheels.",

    loadCapacity: "Heavy-Duty",
    driveType: "Manual",

    gallery: [
      {
        src: "/products/crf-series/crf-main.webp",
        alt: "CRF Series heavy-duty machinery skates",
      },
      {
        src: "/products/crf-series/crf-360-rotation.webp",
        alt: "CRF Series 360 degree rotating turntable",
      },
      {
        src: "/products/crf-series/crf-heavy-duty-overview.webp",
        alt: "CRF Series heavy-duty machinery skate overview",
      },
      {
        src: "/products/crf-series/crf-product-details.webp",
        alt: "CRF Series product construction details",
      },
      {
        src: "/products/crf-series/crf-wheel-options.webp",
        alt: "CRF Series alloy steel and polyurethane wheel options",
      },
      {
        src: "/products/crf-series/crf-detachable-handle.webp",
        alt: "CRF Series detachable handle",
      },
    ],

    advantages: [
      "360° rotating turntable",
      "Heavy-duty reinforced construction",
      "Alloy steel or polyurethane wheel options",
      "Detachable handle for flexible operation",
    ],

    features: [
      {
        icon: "mdi:rotate-360",
        title: "360° Rotating Turntable",
        text: "The rotating central plate allows flexible steering and easier directional control when positioning heavy machinery.",
      },
      {
        icon: "mdi:weight-lifter",
        title: "Heavy-Duty Load Support",
        text: "Designed for demanding machinery moving applications requiring stable and controlled heavy-load transport.",
      },
      {
        icon: "mdi:shield-check-outline",
        title: "Reinforced Steel Construction",
        text: "The heavy-duty steel frame provides strength, durability and reliable support during industrial use.",
      },
      {
        icon: "mdi:car-tire-alert",
        title: "Multiple Wheel Options",
        text: "Available with alloy steel wheels for hard surfaces or polyurethane wheels for smoother indoor floor protection.",
      },
      {
        icon: "mdi:circle-double",
        title: "Non-Slip Turntable",
        text: "The textured rotating plate improves grip and load stability during movement and positioning.",
      },
      {
        icon: "mdi:tools",
        title: "Detachable Handle",
        text: "The removable handle provides flexible operation and makes the equipment easier to transport and store.",
      },
    ],

    applications: [
      "Factory machinery relocation",
      "Industrial equipment positioning",
      "Workshop machine moving",
      "Production line reconfiguration",
      "Warehouse equipment handling",
      "Heavy machinery installation",
    ],
  },

  // =========================================================
  // CRW SERIES
  // =========================================================
  "crw-series-tank-transporters": {
    purchaseLinks: {
      amazon: "",
      aliexpress: "",
      alibaba: "",
    },
    name: "CRW Series Hydraulic Moving Skates",
    shortName: "CRW Series",

    description:
      "Manual hydraulic lifting machinery skates designed for controlled movement, lifting and precise positioning of heavy industrial equipment. The omnidirectional wheel system provides flexible steering while the hydraulic unit allows controlled lifting and lowering.",

    loadCapacity: "Heavy-Duty",
    driveType: "Manual / Hydraulic",

    gallery: [
      {
        src: "/products/crw-series/crw-main.webp",
        alt: "CRW Series hydraulic machinery moving skate",
      },
      {
        src: "/products/crw-series/crw-load-capacity.webp",
        alt: "CRW Series strong load capacity",
      },
      {
        src: "/products/crw-series/crw-dimensions.webp",
        alt: "CRW Series product dimensions",
      },
      {
        src: "/products/crw-series/crw-omnidirectional-movement.webp",
        alt: "CRW Series omnidirectional machinery moving skate",
      },
      {
        src: "/products/crw-series/crw-product-details.webp",
        alt: "CRW Series product construction details",
      },
      {
        src: "/products/crw-series/crw-hydraulic-lift.webp",
        alt: "CRW Series hydraulic lifting system",
      },
    ],

    advantages: [
      "Hydraulic lifting and lowering system",
      "Omnidirectional flexible movement",
      "360° steering capability",
      "Heavy-duty PU wheel construction",
    ],

    features: [
      {
        icon: "mdi:hydraulic-oil-level",
        title: "Hydraulic Lift System",
        text: "The hydraulic system provides controlled lifting and lowering for safer positioning of heavy industrial equipment.",
      },
      {
        icon: "mdi:rotate-360",
        title: "Omnidirectional Movement",
        text: "Multiple swivel wheel assemblies provide flexible steering and precise movement in different directions.",
      },
      {
        icon: "mdi:weight-lifter",
        title: "Strong Load Support",
        text: "The reinforced structure is designed for stable and secure transportation of heavy machinery and industrial loads.",
      },
      {
        icon: "mdi:car-tire-alert",
        title: "Heavy-Duty PU Wheels",
        text: "Durable polyurethane wheels provide smooth movement, good grip and reduced impact on industrial floors.",
      },
      {
        icon: "mdi:circle-double",
        title: "Non-Slip Turntable",
        text: "The textured central load plate improves grip and helps maintain equipment stability during transport.",
      },
      {
        icon: "mdi:tools",
        title: "Detachable Handle",
        text: "The long detachable traction handle provides easier control, steering and storage.",
      },
    ],

    applications: [
      "Factory machinery relocation",
      "Industrial equipment installation",
      "Production line reconfiguration",
      "Heavy machine positioning",
      "Warehouse equipment handling",
      "Workshop machinery transport",
    ],
  },

  // =========================================================
  // MA SERIES
  // =========================================================
  "ma-series-dual-purpose-claw-jacks": {
    purchaseLinks: {
      amazon: "",
      aliexpress: "",
      alibaba: "",
    },
    name: "MA Series Dual-Purpose Claw Jacks",
    shortName: "MA Series",

    description:
      "Heavy-duty hydraulic claw jack series designed for lifting, holding and positioning industrial machinery. The MA Series combines low-position claw lifting, top lifting, adjustable working height and mobile operation in one compact unit.",

    loadCapacity: "6T–20T",
    driveType: "Hydraulic",

   gallery: [
  {
    src: "/products/ma-series/ma-main.png",
    alt: "MA Series Dual-Purpose Claw Jack",
  },
  {
    src: "/products/ma-series/ma-specifications.webp",
    alt: "MA Series product specifications",
  },
  {
    src: "/products/ma-series/ma-advantages.webp",
    alt: "MA Series core advantages",
  },
  {
    src: "/products/ma-series/ma-height-adjustment.webp",
    alt: "MA Series multi-stage height adjustment",
  },
  {
    src: "/products/ma-series/ma-heavy-duty.webp",
    alt: "MA Series heavy-duty hydraulic claw jack",
  },
  {
    src: "/products/ma-series/ma-structure.webp",
    alt: "MA Series hydraulic claw jack structure",
  },
],
advantages: [
  "6T–20T lifting capacity range",
  "Multi-stage height adjustment",
  "Low-position claw and top lifting",
  "Mobile wheels for easy positioning",
],

features: [
  {
    icon: "mdi:hydraulic-oil-level",
    title: "Hydraulic Lifting System",
    text: "Integrated hydraulic system provides powerful and controlled lifting for heavy industrial equipment.",
  },
  {
    icon: "mdi:arrow-expand-vertical",
    title: "Multi-Stage Height Adjustment",
    text: "Multiple adjustment positions allow the claw height to match different working conditions.",
  },
  {
    icon: "mdi:arrow-up-bold",
    title: "Dual-Purpose Lifting",
    text: "Supports both low-position claw lifting and top lifting for greater flexibility.",
  },
  {
    icon: "mdi:weight-lifter",
    title: "6T–20T Load Capacity",
    text: "Available in MA-6T, MA-10T, MA-15T and MA-20T models for demanding lifting applications.",
  },
  {
    icon: "mdi:wheel-barrow",
    title: "Movable Design",
    text: "Integrated wheels and handle make the jack easier to move and position around industrial equipment.",
  },
  {
    icon: "mdi:shield-check-outline",
    title: "Heavy-Duty Construction",
    text: "Reinforced industrial structure provides stable lifting, durability and reliable operation.",
  },
  
],
    applications: [
      "Industrial machinery lifting",
      "Factory equipment installation",
      "Machine maintenance",
      "Heavy equipment positioning",
      "Production line adjustment",
      "Warehouse equipment servicing",
    ],
},
    // =========================================================
// MB SERIES
// =========================================================
"mb-series-multi-stage-claw-jacks": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "MB Series Multi-Stage Claw Jacks",
  shortName: "MB Series",

  description:
    "Heavy-duty multi-stage claw jacks designed for precise height adjustment, stable load support and industrial equipment lifting. The MB Series combines a reinforced steel body, adjustable lifting positions and a wide stable base for demanding machinery handling applications.",

  loadCapacity: "Heavy-Duty",
  driveType: "Manual",

  gallery: [
  {
    src: "/products/mb-series/mb-main.png",
    alt: "MB Series Multi-Stage Claw Jack",
  },
  {
    src: "/products/mb-series/mb-applications.webp",
    alt: "MB Series industrial applications",
  },
  {
    src: "/products/mb-series/mb-height-adjustment.webp",
    alt: "MB Series multi-stage adjustable top",
  },
  {
    src: "/products/mb-series/mb-details.webp",
    alt: "MB Series durable and safe design details",
  },
  {
    src: "/products/mb-series/mb-multi-stage.webp",
    alt: "MB Series heavy-duty multi-stage adjustable top",
  },
  {
  src: "/products/mb-series/mb-heavy-duty.webp",
  alt: "MB Series heavy-duty adjustable toe jack",
},
],

  advantages: [
    "Multi-stage height adjustment",
    "Wide and stable base",
    "Heavy-duty steel structure",
    "Precise lifting and support",
  ],

  features: [
    {
      icon: "mdi:arrow-expand-vertical",
      title: "Multi-Stage Height Adjustment",
      text: "Multiple adjustment holes allow the lifting height to be selected according to different working requirements.",
    },
    {
      icon: "mdi:rotate-360",
      title: "Rotating Adjustment",
      text: "The adjustable top mechanism provides flexible positioning and controlled height selection.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Durable Steel Structure",
      text: "Reinforced steel construction provides reliable support and durability for demanding industrial applications.",
    },
    {
      icon: "mdi:weight-lifter",
      title: "Heavy-Duty Load Support",
      text: "Designed to support heavy machinery and industrial equipment during lifting, positioning and maintenance work.",
    },
    {
      icon: "mdi:arrow-expand-horizontal",
      title: "Wide Stable Base",
      text: "The wide base improves stability during lifting and helps distribute the load more securely.",
    },
    {
      icon: "mdi:cog-outline",
      title: "Easy Operation",
      text: "Simple manual adjustment and compact construction make the jack practical for industrial maintenance and equipment handling.",
    },
  ],

  applications: [
    "Heavy machinery lifting",
    "Industrial equipment support",
    "Factory maintenance",
    "Workshop equipment handling",
    "Construction equipment positioning",
    "Heavy-load installation",
],
},
// =========================================================
// MC SERIES
// =========================================================
"mc-series-single-stage-claw-jacks": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "MC Series Single-Stage Claw Jacks",
  shortName: "MC Series",

  description:
    "Single-stage high-stroke hydraulic claw jacks designed for vertical lifting, heavy equipment positioning and industrial maintenance. The MC Series combines high lifting stroke, stable load support and a compact reinforced structure for demanding industrial applications.",

  loadCapacity: "5T–16T",
  driveType: "Hydraulic",

  gallery: [
    {
      src: "/products/mc-series/mc-main.png",
      alt: "MC Series Single-Stage Claw Jack",
    },
    {
      src: "/products/mc-series/mc-specifications.webp",
      alt: "MC Series product specifications",
    },
    {
      src: "/products/mc-series/mc-heavy-duty.webp",
      alt: "MC Series heavy-duty high-stroke hydraulic jack",
    },
    {
      src: "/products/mc-series/mc-applications.webp",
      alt: "MC Series industrial applications",
    },
    {
      src: "/products/mc-series/mc-high-stroke.webp",
      alt: "MC Series single-stage high-stroke hydraulic jack",
    },
    {
      src: "/products/mc-series/mc-details.webp",
      alt: "MC Series product details",
    },
  ],

  advantages: [
    "5T–16T load capacity range",
    "Single-stage high-stroke lifting",
    "Stable heavy-duty base",
    "Compact hydraulic construction",
  ],

  features: [
    {
      icon: "mdi:arrow-expand-vertical",
      title: "High-Stroke Lifting",
      text: "The single-stage hydraulic cylinder provides a wide lifting stroke for industrial equipment lifting and positioning.",
    },
    {
      icon: "mdi:weight-lifter",
      title: "5T–16T Load Capacity",
      text: "Available in MC-05S, MC-10S and MC-16S models for different heavy-duty lifting requirements.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Stable and Reliable",
      text: "Heavy-duty construction and a reinforced base provide stable support during industrial lifting operations.",
    },
    {
      icon: "mdi:hydraulic-oil-level",
      title: "Hydraulic Operation",
      text: "Hydraulic lifting provides controlled vertical movement for machinery installation, maintenance and positioning.",
    },
    {
      icon: "mdi:hand-back-right-outline",
      title: "Ergonomic Handle",
      text: "Integrated handle design makes the jack easier to carry, position and operate around industrial equipment.",
    },
    {
      icon: "mdi:shoe-print",
      title: "Non-Slip Support",
      text: "Textured contact surfaces improve load stability and help provide safer operation during lifting.",
    },
  ],

  applications: [
    "Industrial machinery lifting",
    "Equipment installation",
    "Factory maintenance",
    "Workshop equipment handling",
    "Heavy-load positioning",
    "Construction and logistics equipment support",
  ],
},
// =========================================================
// MD SERIES
// =========================================================
"md-series-manual-claw-jacks": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "MD Series Manual Claw Jacks",
  shortName: "MD Series",

  description:
    "Manual hydraulic claw jacks designed for heavy-duty industrial lifting, equipment positioning and maintenance. The MD Series combines a reinforced housing, stable load-bearing base, durable hydraulic reservoir and protected sealing system for reliable operation in demanding environments.",

  loadCapacity: "Heavy-Duty",
  driveType: "Manual / Hydraulic",

  gallery: [
    {
      src: "/products/md-series/md-main.png",
      alt: "MD Series Manual Claw Jack",
    },
    {
      src: "/products/md-series/md-applications.webp",
      alt: "MD Series industrial application scenarios",
    },
    {
      src: "/products/md-series/md-reservoir.webp",
      alt: "MD Series heavy-duty seamless reservoir",
    },
    {
      src: "/products/md-series/md-stable-base.webp",
      alt: "MD Series heavy-duty stable base",
    },
    {
      src: "/products/md-series/md-impact-resistant-housing.webp",
      alt: "MD Series impact-resistant housing",
    },
    {
      src: "/products/md-series/md-cylinder-sealing.webp",
      alt: "MD Series three-layer cylinder sealing system",
    },
  ],

  advantages: [
    "Heavy-duty stable base",
    "Impact-resistant protective housing",
    "Anti-corrosion hydraulic reservoir",
    "Three-layer cylinder sealing system",
  ],

  features: [
    {
      icon: "mdi:hydraulic-oil-level",
      title: "Manual Hydraulic Operation",
      text: "Manual hydraulic operation provides controlled lifting for industrial machinery, maintenance and equipment positioning.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Impact-Resistant Housing",
      text: "Reinforced protective housing helps protect the internal structure and improves durability in demanding industrial environments.",
    },
    {
      icon: "mdi:layers-triple-outline",
      title: "Three-Layer Sealing System",
      text: "Multiple sealing components help reduce cylinder wear and support longer service life.",
    },
    {
      icon: "mdi:database-outline",
      title: "Heavy-Duty Reservoir",
      text: "The hydraulic reservoir is designed with protective surface layers for corrosion resistance and long-term use.",
    },
    {
      icon: "mdi:weight-lifter",
      title: "Stable Load Support",
      text: "The reinforced base and claw structure provide stable support during heavy-duty lifting operations.",
    },
    {
      icon: "mdi:factory",
      title: "Wide Industrial Application",
      text: "Suitable for machinery moving, equipment handling, construction work, rail maintenance and foundry applications.",
    },
  ],

  applications: [
    "Rail maintenance",
    "Construction engineering",
    "Machine moving",
    "Foundry machinery",
    "Industrial equipment handling",
    "Factory maintenance",
  ],
},
"me-series-remote-operated-claw-jacks": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "ME Series Remote-Operated Claw Jacks",
  shortName: "ME Series",

  description:
    "Remote-operated hydraulic claw jack series designed for efficient heavy-duty lifting, machine moving and equipment positioning. The ME Series combines an electric hydraulic power unit with a compact claw jack structure for fast, stable and labor-saving industrial operation.",

  loadCapacity: "Heavy-Duty",
  driveType: "Electric Hydraulic",

  gallery: [
    {
      src: "/products/me-series/me-main.png",
      alt: "ME Series remote-operated claw jack main product",
    },
    {
      src: "/products/me-series/me-operation.webp",
      alt: "ME Series simple and efficient operation",
    },
    {
      src: "/products/me-series/me-hydraulic-system.webp",
      alt: "ME Series powerful hydraulic system",
    },
    {
      src: "/products/me-series/me-electric-claw-jack.webp",
      alt: "ME Series electric claw jack",
    },
    {
      src: "/products/me-series/me-machine-moving.webp",
      alt: "ME Series machine moving application",
    },
    {
      src: "/products/me-series/me-wide-application.webp",
      alt: "ME Series wide application scenarios",
    },
  ],

  advantages: [
    "Remote-operated electric hydraulic system",
    "Fast and efficient lifting operation",
    "Stable support for heavy equipment",
    "Compact design for narrow industrial spaces",
  ],

  features: [
    {
      icon: "mdi:remote",
      title: "Remote-Operated Control",
      text: "Equipped with an external hydraulic power unit for convenient remote operation and improved working efficiency.",
    },
    {
      icon: "mdi:hydraulic-oil-level",
      title: "Powerful Hydraulic System",
      text: "Electric hydraulic system delivers strong and stable lifting force for industrial equipment handling.",
    },
    {
      icon: "mdi:lightning-bolt-outline",
      title: "Fast Lifting",
      text: "Provides quick lifting response to reduce labor intensity and improve on-site productivity.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Stable Support",
      text: "Heavy-duty structure ensures secure load support and stable operation during lifting and positioning.",
    },
    {
      icon: "mdi:factory",
      title: "Industrial Applications",
      text: "Suitable for equipment installation, factory relocation, machine moving and heavy load lifting.",
    },
    {
      icon: "mdi:cog-outline",
      title: "Labor-Saving Operation",
      text: "Remote hydraulic actuation reduces manual effort and makes operation easier in demanding work environments.",
    },
  ],

  applications: [
    "Machine moving",
    "Equipment installation",
    "Factory relocation",
    "Heavy machinery lifting",
    "Warehouse handling",
    "Industrial maintenance",
  ],
},
"mf-series-hydraulic-lifters": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "MF Series Hydraulic Lifters",
  shortName: "MF Series",

  description:
    "Compact hydraulic lifter series designed for powerful lifting, load handling and industrial positioning tasks. The MF Series combines strong hydraulic force, portable operation and a durable structure for safe and efficient use in industrial environments.",

  loadCapacity: "Heavy-Duty",
  driveType: "Hydraulic Manual",

  gallery: [
    {
      src: "/products/mf-series/mf-main.webp",
      alt: "MF Series hydraulic lifter main product",
    },
    {
      src: "/products/mf-series/mf-hydraulic-lifter.webp",
      alt: "MF Series hydraulic lifter overview",
    },
    {
      src: "/products/mf-series/mf-cylinder.webp",
      alt: "MF Series precision hydraulic cylinder",
    },
    {
      src: "/products/mf-series/mf-wide-application.webp",
      alt: "MF Series wide application scenarios",
    },
    {
      src: "/products/mf-series/mf-details.webp",
      alt: "MF Series product dimensions and premium details",
    },
    {
      src: "/products/mf-series/mf-powerful-lifting.webp",
      alt: "MF Series powerful lifting performance",
    },
  ],

  advantages: [
    "Powerful hydraulic lifting force",
    "Compact and portable design",
    "Durable cylinder structure",
    "Suitable for lifting and moving tasks",
  ],

  features: [
    {
      icon: "mdi:hydraulic-oil-level",
      title: "Hydraulic Lifting Power",
      text: "Delivers strong and stable hydraulic lifting performance for industrial handling and positioning tasks.",
    },
    {
      icon: "mdi:briefcase-outline",
      title: "Portable Design",
      text: "Compact body and practical structure make the lifter easy to carry, use and store.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Safe & Reliable",
      text: "Built for dependable operation with a durable body and stable support during lifting work.",
    },
    {
      icon: "mdi:cog-outline",
      title: "Easy Operation",
      text: "User-friendly operation reduces effort and allows efficient lifting in different work situations.",
    },
    {
      icon: "mdi:tune-vertical",
      title: "Precision Hydraulic Cylinder",
      text: "High-quality hydraulic cylinder and sealing structure provide smooth movement and long service life.",
    },
    {
      icon: "mdi:factory",
      title: "Wide Application",
      text: "Suitable for machinery lifting, warehouse handling, construction work and industrial equipment support.",
    },
  ],

  applications: [
    "Machinery lifting",
    "Industrial equipment handling",
    "Warehouse operations",
    "Construction lifting tasks",
    "Heavy load positioning",
    "Workshop maintenance",
  ],
},
"mg-series-wedge-jacks": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "MG Series Wedge Jacks",
  shortName: "MG Series",

  description:
    "Low-profile hydraulic wedge jacks designed for precise lifting, pushing and positioning of heavy equipment in narrow spaces. The MG Series is ideal for industrial installation, machine leveling, rail maintenance and heavy-duty horizontal pushing applications.",

  loadCapacity: "Heavy-Duty",
  driveType: "Hydraulic",

  gallery: [
    {
      src: "/products/mg-series/mg-main.webp",
      alt: "MG Series wedge jack main product",
    },
    {
      src: "/products/mg-series/mg-pushing-stroke.webp",
      alt: "MG Series 150mm pushing stroke",
    },
    {
      src: "/products/mg-series/mg-industrial-installation.webp",
      alt: "MG Series industrial equipment installation",
    },
    {
      src: "/products/mg-series/mg-hydraulic-wedge-jack.webp",
      alt: "MG Series hydraulic wedge jack overview",
    },
    {
      src: "/products/mg-series/mg-machine-tool-installation.webp",
      alt: "MG Series machine tool installation",
    },
    {
      src: "/products/mg-series/mg-rail-maintenance.webp",
      alt: "MG Series rail equipment maintenance",
    },
  ],

  advantages: [
    "Low-profile wedge lifting design",
    "150mm pushing stroke for horizontal movement",
    "Precise positioning and leveling",
    "Suitable for heavy industrial applications",
  ],

  features: [
    {
      icon: "mdi:arrow-expand-horizontal",
      title: "150mm Pushing Stroke",
      text: "Long pushing stroke supports horizontal movement of heavy loads with precision and control.",
    },
    {
      icon: "mdi:hydraulic-oil-level",
      title: "Hydraulic Wedge Lifting",
      text: "Hydraulic wedge structure provides efficient low-profile lifting for loads with limited ground clearance.",
    },
    {
      icon: "mdi:factory",
      title: "Industrial Installation",
      text: "Ideal for equipment installation, machine base leveling and heavy-duty industrial positioning work.",
    },
    {
      icon: "mdi:train",
      title: "Rail Maintenance",
      text: "Suitable for lifting rail-bound equipment for inspection, servicing and maintenance operations.",
    },
    {
      icon: "mdi:cog-outline",
      title: "Precision Setup",
      text: "Designed for accurate positioning, leveling work and controlled setup of heavy machinery.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Durable Construction",
      text: "Strong body structure built for reliable performance in demanding work environments.",
    },
  ],

  applications: [
    "Machine tool installation",
    "Industrial equipment positioning",
    "Heavy machinery leveling",
    "Rail equipment maintenance",
    "Workshop setup and alignment",
    "Horizontal pushing of heavy loads",
  ],
},
"mh-series-remote-operated-jacks": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "MH Series Remote-Operated Jacks",
  shortName: "MH Series",

  description:
    "The MH Series remote-operated jacks are compact hydraulic lifting solutions designed for industrial lifting, machine tool installation, steel structure support, shipbuilding, and factory equipment maintenance. They offer high-capacity lifting, reliable performance, and controlled operation in confined working spaces.",

  loadCapacity: "10T–100T",
  driveType: "Remote-Operated Hydraulic",

  gallery: [
    {
      src: "/products/mh-series/mh-main.webp",
      alt: "MH Series remote-operated jacks main product",
    },
    {
      src: "/products/mh-series/mh-overview.webp",
      alt: "MH Series remote-operated jacks overview",
    },
    {
      src: "/products/mh-series/mh-details-show.webp",
      alt: "MH Series details show",
    },
    {
      src: "/products/mh-series/mh-high-capacity-lifting.webp",
      alt: "MH Series high capacity lifting",
    },
    {
      src: "/products/mh-series/mh-wide-application.webp",
      alt: "MH Series wide application",
    },
    {
      src: "/products/mh-series/mh-machine-tool-installation.webp",
      alt: "MH Series machine tool installation",
    },
  ],

  advantages: [
    "Compact low-profile structure",
    "High-capacity lifting from 10T to 100T",
    "Reliable hydraulic performance",
    "Suitable for demanding industrial applications",
  ],

  features: [
    {
      icon: "mdi:arrow-collapse",
      title: "Compact Design",
      text: "Compact and low-profile design allows operation in narrow and confined industrial spaces.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Durable Construction",
      text: "Strong body construction ensures long service life and stable operation under heavy-duty conditions.",
    },
    {
      icon: "mdi:target",
      title: "High Precision",
      text: "Provides accurate pressure control and smooth lifting performance for industrial support tasks.",
    },
    {
      icon: "mdi:weight-lifter",
      title: "High Capacity Lifting",
      text: "Available in a wide capacity range from 10T to 100T for heavy industrial loads.",
    },
    {
      icon: "mdi:wrench-cog-outline",
      title: "Quick Connection",
      text: "Equipped with a quick connector for fast hydraulic connection and convenient field use.",
    },
    {
      icon: "mdi:factory",
      title: "Wide Industrial Use",
      text: "Suitable for machinery installation, bridge construction, shipbuilding, factory equipment, and lifting applications.",
    },
  ],

  applications: [
    "Machine tool installation",
    "Machinery installation",
    "Steel structure support",
    "Bridge construction",
    "Shipbuilding",
    "Factory equipment lifting",
  ],
},
// =========================================================
// MI SERIES
// =========================================================
"mi-series-hand-operated-toe-jacks": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "MI Series Hand-Operated Toe Jacks",
  shortName: "MI Series",

  description:
    "Heavy-duty manual toe jacks designed for lifting, positioning and supporting industrial machinery. The MI Series features a self-locking ratchet mechanism, thickened non-slip lifting hook and foldable operating handle for safe and controlled operation.",

  loadCapacity: "Heavy-Duty",
  driveType: "Manual",

  gallery: [
    {
      src: "/products/mi-series/mi-main.webp",
      alt: "MI Series hand-operated toe jack",
    },
    {
      src: "/products/mi-series/mi-ratchet-jack-overview.webp",
      alt: "MI Series self-locking ratchet jack overview",
    },
    {
      src: "/products/mi-series/mi-self-locking-brake-system.webp",
      alt: "MI Series self-locking brake system",
    },
    {
      src: "/products/mi-series/mi-thickened-non-slip-hook.webp",
      alt: "MI Series thickened non-slip lifting hook",
    },
    {
      src: "/products/mi-series/mi-foldable-handle.webp",
      alt: "MI Series foldable operating handle",
    },
    {
      src: "/products/mi-series/mi-application-scope.webp",
      alt: "MI Series industrial application scope",
    },
  ],

  advantages: [
    "Self-locking ratchet mechanism",
    "Thickened non-slip lifting hook",
    "Foldable operating handle",
    "Compact heavy-duty construction",
  ],

  features: [
    {
      icon: "mdi:lock-check-outline",
      title: "Self-Locking Ratchet",
      text: "The mechanical ratchet system locks automatically during operation for safer and more controlled lifting.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Self-Locking Brake System",
      text: "The integrated brake mechanism helps prevent accidental downward movement while supporting heavy equipment.",
    },
    {
      icon: "mdi:hook",
      title: "Non-Slip Lifting Hook",
      text: "A thickened grooved lifting hook improves grip and helps reduce load slippage during operation.",
    },
    {
      icon: "mdi:arm-flex-outline",
      title: "Heavy-Duty Construction",
      text: "Reinforced steel construction provides reliable support for demanding industrial lifting applications.",
    },
    {
      icon: "mdi:arrow-collapse",
      title: "Foldable Handle",
      text: "The foldable operating handle saves storage space and makes the jack easier to transport.",
    },
    {
      icon: "mdi:factory",
      title: "Wide Industrial Use",
      text: "Suitable for machinery installation, factories, rail maintenance, workshops and industrial equipment positioning.",
    },
  ],

  applications: [
    "Industrial machinery installation",
    "Factory equipment positioning",
    "Railway maintenance",
    "Workshop lifting",
    "Heavy equipment servicing",
    "Mechanical equipment installation",
  ],
},
// =========================================================
// MJ SERIES
// =========================================================
"mj-series-low-profile-hand-operated-toe-jacks": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "MJ Series Low-Profile Hand-Operated Toe Jacks",
  shortName: "MJ Series",

  description:
    "Heavy-duty low-profile hand-operated toe jacks designed for lifting, leveling and positioning industrial machinery in confined spaces. The MJ Series combines a compact toe lifting structure, manual operation, reinforced steel construction and easy positioning.",

  loadCapacity: "Heavy-Duty",
  driveType: "Manual",

  gallery: [
    {
      src: "/products/mj-series/mj-main.webp",
      alt: "MJ Series low-profile hand-operated toe jack",
    },
    {
      src: "/products/mj-series/mj-overview.webp",
      alt: "MJ Series low-profile hand-operated toe jack overview",
    },
    {
      src: "/products/mj-series/mj-low-profile-design.webp",
      alt: "MJ Series low-profile lifting design",
    },
    {
      src: "/products/mj-series/mj-operation.webp",
      alt: "MJ Series simple manual operation",
    },
    {
      src: "/products/mj-series/mj-applications.webp",
      alt: "MJ Series wide industrial applications",
    },
    {
      src: "/products/mj-series/mj-details.webp",
      alt: "MJ Series high-quality construction details",
    },
  ],

  advantages: [
    "Low-profile lifting design",
    "Manual hand-operated mechanism",
    "Heavy-duty steel construction",
    "Easy positioning and operation",
  ],

  features: [
    {
      icon: "mdi:arrow-collapse-vertical",
      title: "Low-Profile Design",
      text: "The compact toe structure allows the jack to access low-clearance areas beneath machinery and industrial equipment.",
    },
    {
      icon: "mdi:hand-back-right-outline",
      title: "Hand-Operated Mechanism",
      text: "Manual operation provides controlled lifting without requiring external electric or hydraulic power units.",
    },
    {
      icon: "mdi:cog-outline",
      title: "Precision Gear System",
      text: "The internal gear mechanism supports smooth and controlled lifting during equipment positioning.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Heavy-Duty Construction",
      text: "Reinforced steel components provide reliable support and durability for demanding industrial applications.",
    },
    {
      icon: "mdi:wheel-barrow",
      title: "Easy Positioning",
      text: "Integrated wheel components help move and position the jack around machinery and work areas.",
    },
    {
      icon: "mdi:factory",
      title: "Wide Industrial Use",
      text: "Suitable for machinery installation, steel structures, factory equipment, heavy lifting and industrial maintenance.",
    },
  ],

  applications: [
    "Industrial machinery installation",
    "Machine tool positioning",
    "Factory equipment lifting",
    "Steel structure adjustment",
    "Heavy equipment maintenance",
    "Low-clearance lifting applications",
  ],
},
// =========================================================
// MK SERIES
// =========================================================
"mk-series-multi-position-adjustable-toe-jacks": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "MK Series Multi-Position Adjustable Toe Jacks",
  shortName: "MK Series",

  description:
    "Heavy-duty multi-position adjustable manual toe jacks designed for flexible height lifting, stable support and equipment positioning. The MK Series features a multi-level column structure, manual operation, secure locking and durable construction for industrial, railway, warehouse and port applications.",

  loadCapacity: "Heavy-Duty",
  driveType: "Manual",

  gallery: [
    {
      src: "/products/mk-series/mk-main.webp",
      alt: "MK Series multi-position adjustable toe jack",
    },
    {
      src: "/products/mk-series/mk-overview.webp",
      alt: "MK Series adjustable manual toe jack overview",
    },
    {
      src: "/products/mk-series/mk-applications.webp",
      alt: "MK Series wide application",
    },
    {
      src: "/products/mk-series/mk-operation.webp",
      alt: "MK Series simple operation and stable support",
    },
    {
      src: "/products/mk-series/mk-details.webp",
      alt: "MK Series premium details",
    },
    {
      src: "/products/mk-series/mk-port-handling.webp",
      alt: "MK Series port and equipment handling",
    },
  ],

  advantages: [
    "Multi-position adjustable height",
    "Manual operation with stable support",
    "Heavy-duty steel structure",
    "Secure locking and durable construction",
  ],

  features: [
    {
      icon: "mdi:arrow-expand-vertical",
      title: "Adjustable Height",
      text: "The multi-section column with multiple positioning holes allows flexible height adjustment for different lifting and support needs.",
    },
    {
      icon: "mdi:lock-check-outline",
      title: "Multi-Position Locking",
      text: "Secure locking points help keep the jack stable during lifting, positioning and support operations.",
    },
    {
      icon: "mdi:hand-back-right-outline",
      title: "Manual Operation",
      text: "The hand-operated mechanism makes lifting and positioning straightforward without requiring external power.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Heavy-Duty Structure",
      text: "Built with a reinforced column and solid support base to handle industrial environments and repeated use.",
    },
    {
      icon: "mdi:tools",
      title: "Stable Support",
      text: "The wide foot base and strong connection points improve stability during equipment support and adjustment.",
    },
    {
      icon: "mdi:warehouse",
      title: "Wide Application",
      text: "Suitable for factories, railways, steel structures, warehouses, ports and equipment handling tasks.",
    },
  ],

  applications: [
    "Industrial lifting",
    "Track and railway maintenance",
    "Equipment positioning",
    "Warehouse operations",
    "Steel structure support",
    "Port and heavy equipment handling",
  ],
},
// =========================================================
// JCA SERIES
// =========================================================
"jca-series-tracked-stair-climbing-robot": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "JCA Series Tracked Stair-Climbing Robot",
  shortName: "JCA Series",

  description:
    "The JCA Series Tracked Stair-Climbing Robot is a powered stair-climbing cart designed for transporting heavy goods, furniture, appliances and other bulky items across stairs with less effort and greater safety. Its tracked structure, strong motor output, low-noise operation and easy handling make it suitable for logistics, delivery, moving services and industrial applications.",

  loadCapacity: "Heavy-Duty",
  driveType: "Electric Tracked Drive",

  gallery: [
    {
      src: "/products/jca-series/jca-main.webp",
      alt: "JCA Series tracked stair-climbing robot",
    },
    {
      src: "/products/jca-series/jca-overview.webp",
      alt: "JCA Series crawler stair climbing machine overview",
    },
    {
      src: "/products/jca-series/jca-why-buy.webp",
      alt: "JCA Series stair-climbing robot use cases",
    },
    {
      src: "/products/jca-series/jca-upgrade.webp",
      alt: "JCA Series upgraded efficient handling",
    },
    {
      src: "/products/jca-series/jca-low-noise.webp",
      alt: "JCA Series low-noise operation",
    },
    {
      src: "/products/jca-series/jca-motor.webp",
      alt: "JCA Series high-power motor output",
    },
  ],

  advantages: [
    "Tracked stair-climbing design",
    "Easy operation and high maneuverability",
    "Low-noise performance under 60 dB",
    "Strong motor output for heavy-duty transport",
  ],

  features: [
    {
      icon: "mdi:robot-outline",
      title: "Tracked Climbing System",
      text: "The crawler-type track system helps the machine climb stairs smoothly and maintain stability during transportation.",
    },
    {
      icon: "mdi:arrow-up-bold-outline",
      title: "Efficient Stair Handling",
      text: "Designed to reduce physical effort when moving heavy goods upstairs or downstairs in residential or commercial environments.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Safe and Easy to Control",
      text: "The machine offers strong controllability and secure handling, making transportation safer in narrow stairways and confined spaces.",
    },
    {
      icon: "mdi:volume-low",
      title: "Low-Noise Operation",
      text: "Operating noise is controlled to less than 60 dB, helping provide quieter performance during use.",
    },
    {
      icon: "mdi:cog-outline",
      title: "High-Power Motor",
      text: "The powerful motor delivers stable output for reliable stair-climbing performance without sacrificing efficiency.",
    },
    {
      icon: "mdi:dolly",
      title: "Wide Application",
      text: "Suitable for moving furniture, home appliances, large goods and other heavy items in delivery, logistics and relocation work.",
    },
  ],

  applications: [
    "Furniture moving",
    "Home appliance transportation",
    "Delivery and logistics",
    "Warehouse handling",
    "Building stair transport",
    "Heavy goods relocation",
  ],
},
// =========================================================
// JCL SERIES
// =========================================================
"jcl-series-tracked-stair-climber": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "JCL Series Tracked Stair-Climber",
  shortName: "JCL Series",

  description:
    "Electric tracked stair-climber designed for transporting heavy goods, cartons, appliances and industrial loads safely across different stair types. The JCL Series combines a 500W motor, 660 lbs load capacity, lithium battery power and reinforced crawler tracks for reliable stair-climbing performance.",

  loadCapacity: "660 lbs / 300 kg",
  driveType: "Electric Tracked Drive",

  gallery: [
    {
      src: "/products/jcl-series/jcl-main.webp",
      alt: "JCL Series tracked stair-climber",
    },
    {
      src: "/products/jcl-series/jcl-660lbs-motor.webp",
      alt: "JCL Series 660 lbs load capacity and 500W motor",
    },
    {
      src: "/products/jcl-series/jcl-stair-types.webp",
      alt: "JCL Series suitable for different stair types",
    },
    {
      src: "/products/jcl-series/jcl-applications.webp",
      alt: "JCL Series product usage scenarios",
    },
    {
      src: "/products/jcl-series/jcl-product-details.webp",
      alt: "JCL Series reinforced crawler track and motor details",
    },
    {
      src: "/products/jcl-series/jcl-lithium-battery.webp",
      alt: "JCL Series lithium battery system",
    },
  ],

  advantages: [
    "660 lbs / 300 kg load capacity",
    "500W powerful electric motor",
    "Lithium battery powered",
    "Reinforced tracked stair-climbing system",
  ],

  features: [
    {
      icon: "mdi:weight-lifter",
      title: "660 lbs Load Capacity",
      text: "Designed to transport loads up to approximately 660 lbs or 300 kg for delivery, warehouse and material handling applications.",
    },
    {
      icon: "mdi:engine-outline",
      title: "500W Powerful Motor",
      text: "The 500W motor provides strong and stable power for climbing and descending stairs while carrying heavy loads.",
    },
    {
      icon: "mdi:stairs",
      title: "Tracked Stair-Climbing System",
      text: "Reinforced crawler tracks provide strong grip and stable movement across different stair configurations.",
    },
    {
      icon: "mdi:battery-high",
      title: "Lithium Battery",
      text: "The rechargeable lithium battery provides convenient cordless operation and efficient working time.",
    },
    {
      icon: "mdi:gesture-tap-button",
      title: "One-Click Start",
      text: "Simple controls allow convenient starting and operation for easier handling during transport work.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Durable Construction",
      text: "Paint-coated panels and reinforced track components improve abrasion resistance, corrosion resistance and overall durability.",
    },
  ],

  applications: [
    "Cargo delivery",
    "Warehouse material handling",
    "Furniture and appliance transport",
    "Moving services",
    "Port and logistics operations",
    "Stair transport of heavy goods",
  ],
},
// =========================================================
// JCD SERIES
// =========================================================
"jcd-series-wheeled-stair-climber": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "JCD Series Wheeled Stair-Climber",
  shortName: "JCD Series",

  description:
    "Electric wheeled stair-climber designed to assist operators in transporting heavy goods safely and efficiently up and down stairs. Its powered climbing mechanism, durable frame and lithium battery system make it suitable for delivery, warehouse, household appliance and industrial handling applications.",

  loadCapacity: "Heavy-Duty",
  driveType: "Electric",

 gallery: [
  {
    src: "/products/jcd-series/jcd-main.webp",
    alt: "JCD Series Wheeled Stair-Climber",
  },
  {
    src: "/products/jcd-series/jcd-overview.webp",
    alt: "JCD Series electric stair climbing machine overview",
  },
  {
    src: "/products/jcd-series/jcd-core-configurations.webp",
    alt: "JCD Series six major core configurations",
  },
  {
    src: "/products/jcd-series/jcd-advantages.webp",
    alt: "JCD Series stair climber advantages",
  },
  {
    src: "/products/jcd-series/jcd-applications.webp",
    alt: "JCD Series application scenarios",
  },
  {
    src: "/products/jcd-series/jcd-lithium-battery.webp",
    alt: "JCD Series industrial lithium battery",
  },
],

  advantages: [
    "Electric powered stair-climbing system",
    "Wheeled design for easy ground movement",
    "Industrial lithium battery",
    "Suitable for climbing stairs up to approximately 45°",
  ],

  features: [
    {
      icon: "mdi:stairs",
      title: "Powered Stair Climbing",
      text: "The powered climbing mechanism assists the operator when transporting heavy goods up and down stairs.",
    },
    {
      icon: "mdi:wheelchair-accessibility",
      title: "Wheeled Ground Transport",
      text: "Integrated wheels allow the unit to move conveniently on flat floors before and after stair transport.",
    },
    {
      icon: "mdi:battery-high",
      title: "Lithium Battery",
      text: "A large-capacity industrial lithium battery provides reliable power for repeated stair-climbing operations.",
    },
    {
      icon: "mdi:engine-outline",
      title: "Brushless Motor",
      text: "The dedicated motor provides stable power output for demanding climbing and transport applications.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Durable Frame",
      text: "A reinforced structural frame improves stability and durability while carrying heavy goods.",
    },
    {
      icon: "mdi:gesture-tap-button",
      title: "Simple Control",
      text: "Operator-friendly controls make climbing, descending and positioning easier to manage.",
    },
  ],

  applications: [
    "Household appliance delivery",
    "Office equipment transportation",
    "Gas cylinder delivery",
    "Bottled water delivery",
    "Warehouse cargo handling",
    "Moving and relocation services",
    "Building material transportation",
    "Industrial equipment handling",
  ],
},
// =========================================================
// JCE SERIES
// =========================================================
"jce-series-stand-on-tracked-stair-climber": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "JCE Series Stand-on Tracked Stair-Climber",
  shortName: "JCE Series",

  description:
    "Electric tracked stair-climber designed for controlled transportation of heavy goods on stairs. Its tracked climbing system, reinforced structure, foldable frame and anti-slip descent control provide stable and convenient operation across different stair environments.",

  loadCapacity: "Heavy-Duty",
  driveType: "Electric",

  gallery: [
    {
      src: "/products/jce-series/jce-main.webp",
      alt: "JCE Series stand-on tracked stair-climber",
    },
    {
      src: "/products/jce-series/jce-foldable-body.webp",
      alt: "JCE Series foldable body and portable design",
    },
    {
      src: "/products/jce-series/jce-stair-compatibility.webp",
      alt: "JCE Series compatibility with different stair types",
    },
    {
      src: "/products/jce-series/jce-anti-slip-descent-control.webp",
      alt: "JCE Series intelligent anti-slip descent control",
    },
    {
      src: "/products/jce-series/jce-applications.webp",
      alt: "JCE Series stair-climber application scenarios",
    },
    {
      src: "/products/jce-series/jce-ultra-quiet-electric.webp",
      alt: "JCE Series ultra-quiet electric stair climber",
    },
  ],

  advantages: [
    "Tracked stair-climbing system",
    "Intelligent anti-slip descent control",
    "Foldable and transport-friendly body",
    "Suitable for different stair configurations",
  ],

  features: [
    {
      icon: "mdi:stairs",
      title: "Tracked Stair-Climbing System",
      text: "The tracked drive provides stable contact with stair surfaces for controlled climbing and descending.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Anti-Slip Descent Control",
      text: "Controlled descent helps improve stability and reduces the risk of slipping while moving loads downstairs.",
    },
    {
      icon: "mdi:folder-outline",
      title: "Foldable Body",
      text: "The foldable structure reduces storage space and makes transportation in vehicles more convenient.",
    },
    {
      icon: "mdi:stairs-up",
      title: "Wide Stair Compatibility",
      text: "Designed for use on different staircase layouts and surfaces in residential, commercial and industrial environments.",
    },
    {
      icon: "mdi:volume-low",
      title: "Quiet Electric Operation",
      text: "Electric operation provides smooth stair climbing while helping keep operating noise low.",
    },
    {
      icon: "mdi:shield-outline",
      title: "Reinforced Construction",
      text: "A reinforced steel structure provides reliable support for demanding transport applications.",
    },
  ],

  applications: [
    "Household appliance transportation",
    "Furniture and moving services",
    "Warehouse material handling",
    "Commercial building deliveries",
    "Industrial equipment transportation",
    "Office equipment relocation",
    "Residential stair transport",
    "General heavy-load handling",
  ],
},
"jcs-series-wheeled-stair-climber": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "JCS Series Wheeled Stair-Climber",
  shortName: "JCS Series",

  description:
    "Electric wheeled stair-climber designed for transporting heavy goods safely and efficiently on stairs. It features a brushless motor, lithium battery system, foldable loading plate, adjustable handle height and durable wheeled structure for warehouse, delivery and industrial handling tasks.",

  loadCapacity: "400 kg",
  driveType: "Electric",

  gallery: [
    {
      src: "/products/jcs-series/jcs-main.webp",
      alt: "JCS Series wheeled stair-climber main view",
    },
    {
      src: "/products/jcs-series/jcs-product-analysis.webp",
      alt: "JCS Series product detail analysis",
    },
    {
      src: "/products/jcs-series/jcs-core-features.webp",
      alt: "JCS Series core feature details",
    },
    {
      src: "/products/jcs-series/jcs-overview.webp",
      alt: "JCS Series electric stair climbing machine overview",
    },
    {
      src: "/products/jcs-series/jcs-adjustable-foldable.webp",
      alt: "JCS Series adjustable height and foldable design",
    },
    {
      src: "/products/jcs-series/jcs-collapsible-carry.webp",
      alt: "JCS Series collapsible and easy-to-carry design",
    },
  ],

  advantages: [
    "400 kg heavy load capacity",
    "Brushless motor for stable performance",
    "Foldable and space-saving structure",
    "Lithium battery powered stair-climbing assistance",
  ],

  features: [
    {
      icon: "mdi:engine-outline",
      title: "Brushless Motor",
      text: "The upgraded brushless motor delivers stable power output for efficient stair-climbing and heavy-load transport.",
    },
    {
      icon: "mdi:battery-high",
      title: "Lithium Battery",
      text: "The large-capacity lithium battery provides reliable power and supports efficient long-duration operation.",
    },
    {
      icon: "mdi:arrow-collapse",
      title: "Foldable Design",
      text: "Its collapsible structure and foldable loading plate save storage space and make transportation easier.",
    },
    {
      icon: "mdi:arrow-up-down",
      title: "Adjustable Height",
      text: "The handle height can be adjusted for better comfort, easier control and more convenient use.",
    },
    {
      icon: "mdi:wheel",
      title: "Aluminum Alloy Wheels",
      text: "Durable wheels improve mobility, support heavy loads and contribute to long service life.",
    },
    {
      icon: "mdi:shield-check-outline",
      title: "Durable Frame",
      text: "The reinforced body and swing-arm structure improve toughness and help support demanding applications.",
    },
  ],

  applications: [
    "Warehouse cargo transport",
    "Household appliance delivery",
    "Industrial equipment handling",
    "Building material transportation",
    "Commercial deliveries",
    "General stair transport tasks",
    "Moving and logistics services",
    "Heavy goods handling",
  ],
},
"jcq-series-electric-flatbed-cart": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "JCQ Series Electric Flatbed Cart",
  shortName: "JCQ Series",

  description:
    "Electric flatbed cart designed for efficient material handling in warehouses, workshops, factories and home-use environments. It features a 350W geared motor, pure copper motor construction, planetary gear system and stable platform design, making it suitable for transporting goods safely and efficiently, including on slopes up to approximately 35°.",

  loadCapacity: "Heavy-Duty",
  driveType: "Electric",

 gallery: [
  {
    src: "/products/jcq-series/jcq-main.webp",
    alt: "JCQ Series electric flatbed cart",
  },
  {
    src: "/products/jcq-series/jcq-overview.webp",
    alt: "JCQ Series electric dolly overview",
  },
  {
    src: "/products/jcq-series/jcq-climbing-capability.webp",
    alt: "JCQ Series 35 degree climbing capability",
  },
  {
  
  src: "/products/jcq-series/jcq-motor-components.webp",
  alt: "JCQ Series motor and planetary gear components",
  },
  {
    src: "/products/jcq-series/jcq-350w-moto.webp",
    alt: "JCQ Series 350W high power motor",
  },
  {
    src: "/products/jcq-series/jcq-applications.webp",
    alt: "JCQ Series application scenarios",
  },
],

  advantages: [
    "Efficient electric material handling",
    "35° climbing capability",
    "350W high-power geared motor",
    "Wide application across industrial and commercial scenarios",
  ],

  features: [
    {
      icon: "mdi:engine-outline",
      title: "350W High-Power Motor",
      text: "The geared 350W motor provides strong horsepower and reliable power for efficient transport performance.",
    },
    {
      icon: "mdi:cog-outline",
      title: "Planetary Gear Set",
      text: "The upgraded planetary gear structure delivers high torque output and improved transmission efficiency.",
    },
    {
      icon: "mdi:copper-coin",
      title: "Pure Copper Motor",
      text: "The pure copper motor design improves stability, durability and consistent power delivery.",
    },
    {
      icon: "mdi:chart-line",
      title: "35° Climbing Capability",
      text: "The flatbed cart is designed to maintain stable material handling performance on slopes up to around 35 degrees.",
    },
    {
      icon: "mdi:package-variant-closed",
      title: "Flatbed Cargo Platform",
      text: "The wide platform allows convenient transport of cartons, goods and materials in industrial or logistics settings.",
    },
    {
      icon: "mdi:warehouse",
      title: "Wide Application",
      text: "Suitable for warehouses, workshops, factories, logistics operations and home-use transport scenarios.",
    },
  ],

  applications: [
    "Warehouse transport",
    "Workshop material handling",
    "Factory goods movement",
    "Logistics operations",
    "Cargo transport",
    "Home-use handling",
    "Commercial storage facilities",
    "Industrial material movement",
  ],
},
"jcv-series-follow-me-electric-flatbed-cart": {
  purchaseLinks: {
    amazon: "",
    aliexpress: "",
    alibaba: "",
  },
  name: "JCV Series Follow-Me Electric Flatbed Cart",
  shortName: "JCV Series",

  description:
    "JCV Series Follow-Me Electric Flatbed Cart is a heavy-duty electric transport solution designed for efficient cargo handling in warehouses, workshops, logistics spaces and home-use environments. It features a follow-me towing design, large-capacity battery, foldable handle and dual braking system for safer, smoother and more convenient transport of heavy loads.",

  loadCapacity: "1100 LBS",
  driveType: "Electric",

  gallery: [
    {
      src: "/products/jcv-series/jcv-main.webp",
      alt: "JCV Series follow-me electric flatbed cart",
    },
    {
      src: "/products/jcv-series/jcv-size.webp",
      alt: "JCV Series product size",
    },
    {
      src: "/products/jcv-series/jcv-battery.webp",
      alt: "JCV Series 36V 8Ah battery",
    },
    {
      src: "/products/jcv-series/jcv-overview.webp",
      alt: "JCV Series heavy-duty electric flatbed trolley",
    },
    {
      src: "/products/jcv-series/jcv-dual-braking.png",
      alt: "JCV Series dual braking system",
    },
    {
      src: "/products/jcv-series/jcv-applications.webp",
      alt: "JCV Series application scenarios",
    },
    {
      src: "/products/jcv-series/jcv-hauling.webp",
      alt: "JCV Series heavy-duty hauling",
    },
  ],

  advantages: [
    "1100 lbs heavy-duty load capacity",
    "Follow-me towing design for easy transport",
    "Dual electronic and physical braking system",
    "Large-capacity battery for longer operation",
  ],

  features: [
    {
      icon: "mdi:cart-outline",
      title: "Heavy-Duty Platform",
      text: "Large flatbed platform designed for transporting cartons, crates and industrial cargo.",
    },
    {
      icon: "mdi:battery-high",
      title: "36V 8Ah Battery",
      text: "Large-capacity battery provides reliable power for repeated material-handling operations.",
    },
    {
      icon: "mdi:car-brake-alert",
      title: "Dual Braking System",
      text: "Electronic and physical brakes provide better stopping control and help prevent unwanted rolling.",
    },
    {
      icon: "mdi:weight",
      title: "1100 LBS Capacity",
      text: "Heavy-duty construction supports loads of up to approximately 1100 lbs.",
    },
    {
      icon: "mdi:gesture-tap-button",
      title: "Easy Electric Assistance",
      text: "Electric drive assistance reduces operator effort during warehouse and logistics transport.",
    },
    {
      icon: "mdi:warehouse",
      title: "Wide Application",
      text: "Suitable for warehouses, factories, workshops, logistics operations and general cargo handling.",
    },
  ],

  applications: [
    "Warehouse cargo transport",
    "Workshop material handling",
    "Factory internal logistics",
    "Home-use heavy load moving",
    "Carton and package delivery",
    "General industrial transport",
  ],
},
};


const purchaseLinks: Record<string, {
  amazon?: string;
  aliexpress?: string;
  alibaba?: string;
  taobao?: string;
}> = {
  "ja-series-electric-tank-transporters": {
    amazon: "https://www.amazon.com/dp/B0G3WY4GQZ",
    aliexpress: "https://es.aliexpress.com/item/1005009383246418.html?gatewayAdapt=glo2esp",
    alibaba: "https://www.alibaba.com/product-detail/Heavy-Duty-Electric-Track-Tank-Vehicle_1601681053613.html?spm=a2700.shop_pl.41413.19.2f7d23aeE8vZ8W",
    taobao: "https://detail.tmall.com/item.htm?abbucket=0&id=1019672290504&mi_id=0000F2uTZ6UPP2ovsJoRGtfr5xpwHCTAzdYcqDt0aNZPJsk&ns=1&skuId=6030163440725&spm=a21xtw.29978516.product_shelf.110.18351f34tsKIWS&xxc=taobaoSearch",
  },
  "ja-b-series-electric-tank-transporters": {
  amazon: "https://www.amazon.com/gp/product/B0FWRJQQCW?th=1",
  aliexpress: "https://ko.aliexpress.com/item/1005009077667743.html?gatewayAdapt=glo2kor",
  alibaba: "https://www.alibaba.com/product-detail/30T-50T-Heavy-Duty-Electric-Roller_1601430510771.html?spm=a2700.micro_product_manager.0.0.5d083e5f050og1",
  taobao: "https://detail.tmall.com/item.htm?abbucket=0&id=972406463364&mi_id=0000q8H4lgb3EqK1FSyCHGxBC8mCKHk0h0W4tcG4ScljCWc&ns=1&skuId=5925771589743&spm=a21xtw.29978516.product_shelf.105.18351f34tsKIWS&xxc=taobaoSearch",
},
"js-series-electric-tank-transporters": {
  amazon: "https://www.amazon.com/dp/B0HNMSZ3M8",
  alibaba: "https://www.alibaba.com/product-detail/CE-Battery-Powered-Moving-Trolley-Electric_1601986288524.html?spm=a2700.micro_product_manager.0.0.1db43e5f1jOIKF",
  aliexpress: "https://www.aliexpress.com/item/1005013463668030.html",
  taobao: "https://detail.tmall.com/item.htm?abbucket=5&id=1064539961704&mi_id=0000tzZY_JPovFMaZ5dooh8qXfjVPBuGzWk08OMRGJgMnWY&ns=1&priceTId=213e071117925476845252541e1936&skuId=6110720680975&spm=a21n57.1.hoverItem.1&utparam=%7B%22aplus_abtest%22%3A%228c5c15a93def838e34a1899c5bacb417%22%7D&xxc=taobaoSearch",
},
"jd-series-electric-tank-transporters": {
  amazon: "https://www.amazon.com/dp/B0F9L9P873?th=1",
  aliexpress: "https://es.aliexpress.com/item/1005012970386896.html?gatewayAdapt=glo2esp",
  alibaba: "https://www.alibaba.com/product-detail/20t-30t-40t-Cargo-Rigger-Moving_1601741105198.html?spm=a2700.micro_product_manager.0.0.5d083e5fWzshut",
  taobao: "https://item.jd.com/10229506310611.html?sdx=ehi-lLxFuZiE6JnKY4pZjMAjsTCXCQorsmpKuadAYZH7cJjZKZlU5H3hokjiVg&purchasetab=dpgm",
},
"jx-series-electric-machinery-skate-dolly": {
  amazon: "https://www.amazon.com/dp/B0H6SBPFQ2?th=1",
  aliexpress: "https://www.aliexpress.com/item/1005012641922853.html",
  alibaba: "https://www.alibaba.com/product-detail/JYH-20T-35T-60T-Center-Lift_1601851291042.html?spm=a2700.shop_pl.41413.20.a6c423aeLJ7o3x",
  taobao: "https://detail.tmall.com/item.htm?abbucket=0&id=1065763812469&mi_id=0000SUOWEPrAGu_W51i02h7e0ZLNKqSaHZcsatwCl_0Uuv8&ns=1&skuId=6276023822960&spm=a21xtw.29978516.product_shelf.131.a6851f34gKgQlC&xxc=taobaoSearch",
},
"jz-series-electric-pallet-truck": {
  amazon: "YOUR_AMAZON_LINK",
  aliexpress: "YOUR_ALIEXPRESS_LINK",
  alibaba: "YOUR_ALIBABA_LINK",
  taobao: "YOUR_TAOBAO_LINK",
},
"cra-series-tank-transporters": {
  amazon: "https://www.amazon.com/dp/B0HNWCM1YX",
  aliexpress: "https://it.aliexpress.com/item/1005012497545256.html?gatewayAdapt=glo2ita",
  alibaba: "https://www.alibaba.com/product-detail/CRA-Type-Mechanical-Movers-4T-6T_1601873441132.html?spm=a2700.shop_plser.41413.2.c7804c0bauqfDw",
  taobao: "https://detail.tmall.com/item.htm?id=1027007496325&spm=a21dvs.23580594.0.0.4fee2c1bHVVzJ9",
},
"cwa-series-tank-transporters": {
  amazon: "https://www.amazon.com/dp/B0F29DCKLC",
  alibaba: "https://www.alibaba.com/product-detail/CRA-Type-Mechanical-Movers-4T-6T_1601873441132.html?spm=a2700.shop_plser.41413.2.c7804c0bauqfDw",
  taobao: "https://detail.tmall.com/item.htm?abbucket=0&id=1027007496325&mi_id=0000VUgjqUINs3WLLHHjj42U84-9pxl_5BtS4Nj3woMTmxk&ns=1&skuId=6201135802515&spm=a21xtw.29978516.product_shelf.114.a6851f34r8zNgC&xxc=taobaoSearch",
},
"crd-series-tank-transporters": {
  amazon: "https://www.amazon.com/dp/B0G8CTZZX5/ref=mweb_up_am_fl_st_na_un_up_sm_sxts_snpl_1_0_d26e24db-d6a0-41ff-bb8a-bf1969aea086",
  alibaba: "https://www.alibaba.com/product-detail/CRA-Type-Mechanical-Movers-4T-6T_1601873441132.html?spm=a2700.shop_plser.41413.2.c7804c0bauqfDw",
  taobao: "https://detail.tmall.com/item.htm?abbucket=0&id=1027007496325&mi_id=0000VUgjqUINs3WLLHHjj42U8xcOYDgQ77EpwnP-ivtDpqI&ns=1&skuId=6201135802513&spm=a21xtw.29178619.product_shelf.113.17a41f34mxjMKi&xxc=taobaoSearch",
},
"cx-y-series-tank-transporters": {
  amazon: "https://www.amazon.com/dp/B0DGGKQPNY",
  alibaba: "https://www.alibaba.com/product-detail/New-JYH-Stainless-Steel-3-Ton_1601975312010.html?spm=a2700.shop_pl.41413.14.a7fa23aeqM2Q2r",
},
"crp-series-tank-transporters": {
  amazon: "https://www.amazon.com/dp/B0F211PG7X",
  alibaba: "https://www.alibaba.com/product-detail/JIN-YANG-HU-Steel-New-CRP_1601686004188.html?spm=a2700.shop_plser.41413.2.13c44c0bx8O5nf",
  taobao: "https://detail.tmall.com/item.htm?abbucket=0&id=1049340233029&mi_id=0000kn3iMa02zD1EVlA769kggwIE3npxs9GbkVPIrQAnkbU&ns=1&skuId=6242779686889&spm=a21xtw.29978516.product_shelf.116.39571f34wrDNVk&xxc=taobaoSearch",
},
"crq-series-tank-transporters": {
  amazon: "https://www.amazon.com/dp/B0HNZQDMHH",
  alibaba: "https://www.alibaba.com/product-detail/360-Degree-5T-Universal-Tank-Heavy_1601656419820.html?spm=a2700.shop_plser.41413.8.13c44c0b5un84t",
  taobao: "https://detail.tmall.com/item.htm?id=1049340233029&spm=a21dvs.23580594.0.0.4fee2c1bjJQzBA",
},
"crm-series-tank-transporters": {
  amazon: "https://www.amazon.com/dp/B0F21SZLCJ",
  aliexpress: "https://it.aliexpress.com/item/1005012204582390.html?gatewayAdapt=glo2ita",
  alibaba: "https://www.alibaba.com/product-detail/CRA-Type-Mechanical-Movers-4T-6T_1601873441132.html?spm=a2700.shop_plser.41413.1.c7804c0bpu2yGJ",
  taobao: "https://detail.tmall.com/item.htm?abbucket=0&id=853285512178&mi_id=00003M3aJ2x60M-sT2Gj2JJPJ31nBEwlcJ5M7flahTfl9hw&ns=1&skuId=5650989856920&spm=a21xtw.29178619.product_shelf.91.7ce91f347zN4PX&xxc=taobaoSearch",
},
"crf-series-tank-transporters": {
  amazon: "https://www.amazon.com/dp/B0HP8VMDJ7",
  alibaba: "https://www.alibaba.com/product-detail/CRA-Type-Mechanical-Movers-4T-6T_1601873441132.html?spm=a2700.shop_plser.41413.1.c7804c0bkwoGxm",
  taobao: "https://detail.tmall.com/item.htm?id=1027007496325&spm=a21dvs.23580594.0.0.4fee2c1bHVVzJ9",
},
};

const productOrder: Record<string, string[]> = {
  "electric-heavy-duty-load-skates": [
    "ja-series-electric-tank-transporters",
    "ja-b-series-electric-tank-transporters",
    "js-series-electric-tank-transporters",
    "jd-series-electric-tank-transporters",
    "jx-series-electric-machinery-skate-dolly",
    "jz-series-electric-pallet-truck",
    "jq-series-low-profile-tank-transporters",
  ],

  "manual-load-skates": [
    "cra-series-tank-transporters",
    "cwa-series-tank-transporters",
    "crd-series-tank-transporters",
    "cx-y-series-tank-transporters",
    "crp-series-tank-transporters",
    "crq-series-tank-transporters",
    "crm-series-tank-transporters",
    "crf-series-tank-transporters",
    "crw-series-tank-transporters",
  ],

  "equipment-jacks": [
    "ma-series-dual-purpose-claw-jacks",
    "mb-series-multi-stage-claw-jacks",
    "mc-series-single-stage-claw-jacks",
    "md-series-manual-claw-jacks",
    "me-series-remote-operated-claw-jacks",
    "mf-series-hydraulic-lifters",
    "mg-series-wedge-jacks",
    "mh-series-remote-operated-jacks",
    "mi-series-hand-operated-toe-jacks",
    "mj-series-low-profile-hand-operated-toe-jacks",
    "mk-series-multi-position-adjustable-toe-jacks",
  ],
};
export default async function ProductPage({
  params,
}: {
  params: Promise<{
    category: string;
    product: string;
  }>;
}) {
  const { category, product } = await params;

  const categoryLabel =
  category === "jacks"
    ? "Jacks"
    : category === "stair-climbing-carts"
      ? "Stair-Climbing Carts"
      : category === "manual-heavy-duty-movers"
        ? "Manual Heavy-Duty Movers"
        : category === "electric-heavy-duty-movers"
          ? "Electric Heavy-Duty Movers"
          : "Industrial Equipment";

  const currentProduct =
  productData[product as keyof typeof productData];

const currentOptions =
  currentProduct &&
  "options" in currentProduct
    ? (currentProduct.options as {
        defaultCapacity?: string;
        capacities: {
          value: string;
          label: string;
          description: string;
          tooltip?: string;
        }[];
        aboutItems: {
          title: string;
          text: string;
        }[];
      })
    : null;

const currentProductInfo =
  currentProduct &&
  "productInfo" in currentProduct
    ? (currentProduct.productInfo as {
        features: {
          label: string;
          value: string;
        }[];
        additionalDetails: {
          label: string;
          value: string;
        }[];
        style: {
          label: string;
          value: string;
        }[];
      })
    : null;
const currentSpecTable =
  currentProduct &&
  "specTable" in currentProduct
    ? (currentProduct.specTable as {
        columns: string[];
        rows: string[][];
        commonSpecs: {
          label: string;
          value: string;
        }[];
      })
    : null;
const categoryProducts = productOrder[category] || [];

const currentIndex = categoryProducts.indexOf(product);

const previousProduct =
  currentIndex >= 0
    ? categoryProducts[
        (currentIndex - 1 + categoryProducts.length) %
          categoryProducts.length
      ]
    : null;

const nextProduct =
  currentIndex >= 0
    ? categoryProducts[(currentIndex + 1) % categoryProducts.length]
    : null;

const currentPurchaseLinks = purchaseLinks[product] || {};
const t = await getTranslations("home");
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
  <div className="mx-auto max-w-7xl px-6 pt-8">
  <div className="flex items-center justify-between gap-4">
    {previousProduct ? (
      <a
        href={`/products/${category}/${previousProduct}`}
        className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-bold text-white transition hover:border-orange-500 hover:text-orange-500"
      >
        <span>←</span>
        Previous Product
      </a>
    ) : (
      <div />
    )}

    {nextProduct && (
      <a
        href={`/products/${category}/${nextProduct}`}
        className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-bold text-white transition hover:border-orange-500 hover:text-orange-500"
      >
        Next Product
        <span>→</span>
      </a>
    )}
  </div>
</div>

  <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-6 lg:grid-cols-2 lg:items-start">
          {/* LEFT */}
          <ProductGallery images={currentProduct.gallery} />

          {/* RIGHT */}
          <div className="lg:pt-4">
            <div className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
              {categoryLabel}
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
{/* PURCHASE LINKS */}
{(currentPurchaseLinks.amazon ||
  currentPurchaseLinks.aliexpress ||
  currentPurchaseLinks.alibaba ||
  currentPurchaseLinks.taobao) && (
  <div className="mb-8 mt-8">
    <p className="mb-4 text-sm font-bold uppercase tracking-wider text-orange-500">
      Purchase Online
    </p>

    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

      {currentPurchaseLinks.amazon && (
        <a
          href={currentPurchaseLinks.amazon}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 font-bold text-white transition hover:border-orange-500 hover:bg-zinc-800"
        >
          Amazon
        </a>
      )}

      {currentPurchaseLinks.aliexpress && (
        <a
          href={currentPurchaseLinks.aliexpress}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 font-bold text-white transition hover:border-orange-500 hover:bg-zinc-800"
        >
          AliExpress
        </a>
      )}

      {currentPurchaseLinks.alibaba && (
        <a
          href={currentPurchaseLinks.alibaba}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 font-bold text-white transition hover:border-orange-500 hover:bg-zinc-800"
        >
          Alibaba
        </a>
      )}

      {currentPurchaseLinks.taobao && (
        <a
          href={currentPurchaseLinks.taobao}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 font-bold text-white transition hover:border-orange-500 hover:bg-zinc-800"
        >
          Taobao
        </a>
      )}

    </div>
  </div>
)}

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

{currentOptions && (
  <ProductOptions
    productName={currentProduct.name}
    capacities={currentOptions.capacities}
    aboutItems={currentOptions.aboutItems}
    defaultCapacity={currentOptions.defaultCapacity}
  />
)}

      {/* KEY FEATURES */}
      {/* PRODUCT SPECIFICATIONS TABLE */}
{currentSpecTable && (
  <section className="bg-zinc-100">
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
          Technical Data
        </p>

        <h2 className="mt-3 text-3xl font-black text-zinc-900 md:text-4xl">
          Product Specifications
        </h2>

        <p className="mt-3 max-w-2xl text-zinc-600">
          Compare available models and technical specifications.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-[1100px] w-full border-collapse text-sm">
            <thead>
              <tr className="bg-orange-500 text-white">
                {currentSpecTable.columns.map((column) => (
                  <th
                    key={column}
                    className="whitespace-nowrap border-r border-orange-400 px-5 py-4 text-left font-black last:border-r-0"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {currentSpecTable.rows.map((row, rowIndex) => (
                <tr
                  key={row[0]}
                  className={
                    rowIndex % 2 === 0
                      ? "bg-white"
                      : "bg-zinc-50"
                  }
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${row[0]}-${cellIndex}`}
                      className={`whitespace-nowrap border-b border-r border-zinc-200 px-5 py-4 last:border-r-0 ${
                        cellIndex === 0
                          ? "font-black text-orange-600"
                          : "text-zinc-700"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid border-t border-zinc-200 md:grid-cols-2 lg:grid-cols-5">
          {currentSpecTable.commonSpecs.map((item) => (
            <div
              key={item.label}
              className="border-b border-r border-zinc-200 p-5 last:border-r-0 md:border-b-0"
            >
              <p className="text-xs font-black uppercase tracking-wider text-zinc-500">
                {item.label}
              </p>

              <p className="mt-2 font-bold leading-relaxed text-zinc-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)}
      {/* PRODUCT INFORMATION */}
{/* PRODUCT INFORMATION */}
{currentProductInfo && (
  <section className="bg-zinc-100">
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
          Product Details
        </p>

        <h2 className="mt-3 text-3xl font-black text-zinc-900 md:text-4xl">
          Product Information
        </h2>
      </div>

      <div className="grid overflow-hidden rounded-3xl border border-zinc-200 bg-white lg:grid-cols-3">

        {/* FEATURES & SPECS */}
        <div>
          <div className="border-b border-orange-600 bg-orange-500 px-6 py-4">
            <h3 className="text-xl font-black text-white">
              Features & Specs
            </h3>
          </div>

          {currentProductInfo.features.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-[140px_1fr] border-b border-zinc-200 px-6 py-4 last:border-b-0"
            >
              <span className="font-bold text-zinc-600">
                {item.label}
              </span>

              <span className="text-zinc-900">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* ADDITIONAL DETAILS */}
        <div>
          <div className="border-b border-orange-600 bg-orange-500 px-6 py-4">
            <h3 className="text-xl font-black text-white">
              Additional Details
            </h3>
          </div>

          {currentProductInfo.additionalDetails.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-[140px_1fr] border-b border-zinc-200 px-6 py-4 last:border-b-0"
            >
              <span className="font-bold text-zinc-600">
                {item.label}
              </span>

              <span className="text-zinc-900">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* STYLE */}
        <div>
          <div className="border-b border-orange-600 bg-orange-500 px-6 py-4">
            <h3 className="text-xl font-black text-white">
              Style
            </h3>
          </div>

          {currentProductInfo.style.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-[140px_1fr] border-b border-zinc-200 px-6 py-4 last:border-b-0"
            >
              <span className="font-bold text-zinc-600">
                {item.label}
              </span>

              <span className="text-zinc-900">
                {item.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
)}
      {/* FOOTER */}
            <footer className="bg-zinc-950 text-zinc-400">
              <div className="mx-auto max-w-7xl px-6 py-14">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                  {/* COMPANY */}
                  <div>
                    <a href="/">
                      <Image
                        src="/jin-yang-hu-logo.png"
                        alt="JIN YANG HU"
                        width={180}
                        height={70}
                        className="h-auto w-[170px] brightness-0 invert"
                      />
                    </a>
      
                    <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
                      {t("footer.companyDescription")}
                    </p>
                  </div>
      
                  {/* QUICK LINKS */}
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {t("footer.quickLinks")}
                    </h3>
      
                    <div className="mt-4 flex flex-col gap-3 text-sm">
                      <a
                        href="/"
                        className="transition hover:text-orange-500"
                      >
                        {t("footer.home")}
                      </a>
      
                      <a
                        href="/#about"
                        className="transition hover:text-orange-500"
                      >
                        {t("footer.aboutUs")}
                      </a>
      
                      <a
                        href="/#contact"
                        className="transition hover:text-orange-500"
                      >
                        {t("footer.contact")}
                      </a>
                    </div>
                  </div>
      
                  {/* FEATURED PRODUCT */}
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {t("footer.featuredProducts")}
                    </h3>
      
                    <div className="mt-4 flex flex-col gap-3 text-sm">
                      <a
                        href="/products/electric-heavy-duty-movers/ja-series-electric-tank-transporters"
                        className="transition hover:text-orange-500"
                      >
                        {t("footer.jaSeries")}
                      </a>
      
                      <a
                        href="/products/electric-heavy-duty-movers/ja-b-series-electric-tank-transporters"
                        className="transition hover:text-orange-500"
                      >
                        {t("footer.jaBSeries")}
                      </a>
      
                      <a
                        href="/products/electric-heavy-duty-movers/js-series-electric-tank-transporters"
                        className="transition hover:text-orange-500"
                      >
                        {t("footer.jsSeries")}
                      </a>
                    </div>
                  </div>
      
                  {/* CONTACT */}
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {t("footer.contact")}
                    </h3>
      
                    <div className="mt-4 space-y-4 text-sm">
                      <div className="flex items-center gap-3">
                        <Icon
                          icon="mdi:email-outline"
                          className="text-xl text-orange-500"
                        />
      
                        <span>sales@jinyanghu.com</span>
                      </div>
      
                      <div className="flex items-center gap-3">
                        <Icon
                          icon="mdi:phone-outline"
                          className="text-xl text-orange-500"
                        />
      
                        <span>+86 XXX XXXX XXXX</span>
                      </div>
      
                      <div className="flex items-start gap-3">
                        <Icon
                          icon="mdi:map-marker-outline"
                          className="mt-0.5 text-xl text-orange-500"
                        />
      
                        <span>China</span>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="mt-10 border-t border-zinc-800 pt-6">
                  <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
                    <div>
                      © {t("footer.copyright")}
                    </div>
      
                    <div className="flex gap-5">
                      <a
                        href="#"
                        className="transition hover:text-orange-500"
                      >
                        {t("footer.privacyPolicy")}
                      </a>
      
                      <a
                        href="#"
                        className="transition hover:text-orange-500"
                      >
                        {t("footer.terms")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </main>
        );
      }
