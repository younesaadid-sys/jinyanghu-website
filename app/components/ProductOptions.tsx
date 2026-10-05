"use client";
import QuoteModal from "@/app/components/QuoteModal";
import { useState } from "react";
import { Icon } from "@iconify/react";

const capacities = [
  {
    value: "10T",
    label: "10T Capacity",
    description: "For medium industrial loads",
  },
  {
    value: "20T",
    label: "20T Capacity",
    description: "Heavy machinery transport",
  },
  {
    value: "25T",
    label: "25T Capacity",
    description: "Industrial equipment moving",
  },
  {
    value: "30T",
    label: "30T Capacity",
    description: "Factory heavy-load handling",
  },
  {
    value: "50T",
    label: "50T Capacity",
    description: "High-capacity industrial use",
  },
  {
    value: "60T",
    label: "60T Capacity",
    description: "Maximum heavy-load configuration",
  },
];

const specifications = [
  {
    icon: "mdi:factory",
    label: "Brand",
    value: "JIN YANG HU",
  },
  {
    icon: "mdi:steel",
    label: "Material",
    value: "Manganese Steel",
  },
  {
    icon: "mdi:palette-outline",
    label: "Color",
    value: "Yellow",
  },
  {
    icon: "mdi:cog-outline",
    label: "Drive Type",
    value: "Electric",
  },
  {
    icon: "mdi:rotate-360",
    label: "Platform",
    value: "360° Rotation",
  },
  {
    icon: "mdi:remote",
    label: "Control",
    value: "Remote Control",
  },
  {
    icon: "mdi:car-tire-alert",
    label: "Wheel Type",
    value: "Polyurethane / Steel",
  },
  {
    icon: "mdi:warehouse",
    label: "Application",
    value: "Industrial Heavy Load Moving",
  },
];

export default function ProductOptions() {
  const [selectedCapacity, setSelectedCapacity] = useState("20T");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
            Available Configurations
          </p>

          <h2 className="mt-3 text-3xl font-black text-zinc-900 md:text-4xl">
            Choose the load capacity for your application
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            Select the required load capacity. Our sales team can recommend the
            most suitable configuration for your working environment and
            application.
          </p>
        </div>

        {/* SELECTED CAPACITY */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-zinc-500">
            Selected:
          </span>

          <span className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-bold text-white">
            {selectedCapacity}
          </span>
        </div>

        {/* CAPACITY OPTIONS */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {capacities.map((capacity) => {
            const active = selectedCapacity === capacity.value;

            return (
              <button
                key={capacity.value}
                type="button"
                onClick={() => setSelectedCapacity(capacity.value)}
                className={`group relative min-h-[145px] rounded-2xl border-2 p-4 text-left transition duration-300 ${
                  active
                    ? "border-orange-500 bg-orange-50 shadow-lg shadow-orange-500/10"
                    : "border-zinc-200 bg-white hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
                }`}
              >
                {active && (
                  <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white">
                    <Icon icon="mdi:check" className="text-base" />
                  </div>
                )}

                <div
                  className={`text-2xl font-black ${
                    active ? "text-orange-500" : "text-zinc-900"
                  }`}
                >
                  {capacity.value}
                </div>

                <div className="mt-2 text-sm font-bold text-zinc-900">
                  {capacity.label}
                </div>

                <div className="mt-2 text-xs leading-5 text-zinc-500">
                  {capacity.description}
                </div>

                <div
                  className={`mt-3 text-xs font-bold ${
                    active ? "text-orange-500" : "text-zinc-400"
                  }`}
                >
                  Request Quote
                </div>
              </button>
            );
          })}
        </div>

        {/* SPECS */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
          <div className="border-b border-zinc-200 bg-zinc-950 px-6 py-5 text-white">
            <div className="flex items-center gap-3">
              <Icon
                icon="mdi:clipboard-text-outline"
                className="text-2xl text-orange-500"
              />

              <div>
                <h3 className="text-xl font-black">
                  Product Specifications
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  JA Series Electric Tank Transporter
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            {specifications.map((spec, index) => (
              <div
                key={spec.label}
                className={`flex items-center gap-4 border-zinc-200 px-6 py-5 ${
                  index < specifications.length - 2
                    ? "border-b"
                    : ""
                } md:[&:nth-child(odd)]:border-r`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100">
                  <Icon
                    icon={spec.icon}
                    className="text-2xl text-orange-500"
                  />
                </div>

                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    {spec.label}
                  </div>

                  <div className="mt-1 font-bold text-zinc-900">
                    {spec.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SMALL CTA */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-orange-500 p-6 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-black">
              Need the {selectedCapacity} configuration?
            </h3>

            <p className="mt-1 text-sm text-orange-100">
              Contact our sales team for technical details and quotation.
            </p>
          </div>

         <QuoteModal
  buttonText={`Request Price for ${selectedCapacity}`}
  product="JA Series Electric Tank Transporter"
  capacity={selectedCapacity}
/>
        </div>
      </div>
    </section>
  );
}