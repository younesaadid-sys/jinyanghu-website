"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";

type QuoteModalProps = {
  buttonText?: string;
  product?: string;
  capacity?: string;
};

export default function QuoteModal({
  buttonText = "Request a Quote",
  product = "",
  capacity = "",
}: QuoteModalProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isPriceRequest = buttonText.toLowerCase().includes("price");

  const modal =
    open && mounted ? (
      <div
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-4"
        onClick={() => setOpen(false)}
      >
        <div
          className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition hover:bg-zinc-200 hover:text-black"
            aria-label="Close"
          >
            <Icon icon="mdi:close" className="text-2xl" />
          </button>

          {/* HEADER */}
          <div className="mb-7 pr-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              {isPriceRequest ? "Price Inquiry" : "Business Inquiry"}
            </p>

            <h2 className="mt-2 text-3xl font-black text-zinc-900">
              {buttonText}
            </h2>

            <p className="mt-3 leading-7 text-zinc-600">
              {isPriceRequest
                ? "Your selected product configuration is already included below. Complete your contact details and our sales team will contact you with pricing and availability."
                : "Tell us what equipment you need and our sales team will contact you with product recommendations and quotation details."}
            </p>
          </div>

          {/* SELECTED CONFIGURATION */}
          {(product || capacity) && (
            <div className="mb-7 rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-orange-600">
                <Icon icon="mdi:check-circle-outline" className="text-xl" />
                Selected Configuration
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {product && (
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Product
                    </div>
                    <div className="mt-1 font-bold text-zinc-900">
                      {product}
                    </div>
                  </div>
                )}

                {capacity && (
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Load Capacity
                    </div>
                    <div className="mt-1 text-xl font-black text-orange-500">
                      {capacity}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* FORM */}
          <form
            className="grid gap-5 md:grid-cols-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">
                Name *
              </label>

              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">
                Company
              </label>

              <input
                type="text"
                placeholder="Company name"
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">
                Email *
              </label>

              <input
                type="email"
                required
                placeholder="name@company.com"
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">
                Phone / WhatsApp
              </label>

              <input
                type="text"
                placeholder="+86..."
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">
                Product / Model
              </label>

              <input
                type="text"
                defaultValue={product}
                placeholder="e.g. JA Series"
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">
                Required Load Capacity
              </label>

              <input
                type="text"
                defaultValue={capacity}
                placeholder="e.g. 20 tons"
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-orange-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-zinc-700">
                Message *
              </label>

              <textarea
                required
                rows={4}
                placeholder="Tell us about your application, quantity and requirements..."
                className="w-full resize-none rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-orange-500"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                <Icon icon="mdi:send-outline" className="text-xl" />

                {isPriceRequest
                  ? `Send Price Request${capacity ? ` for ${capacity}` : ""}`
                  : "Send Quote Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    ) : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
      >
        {buttonText}
      </button>

      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}