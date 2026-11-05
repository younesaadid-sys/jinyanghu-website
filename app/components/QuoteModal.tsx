"use client";

import {
  FormEvent,
  useEffect,
  useState,
} from "react";

type QuoteModalProps = {
  buttonText?: string;
  product?: string;
  capacity?: string;

  // Optional controlled mode
  open?: boolean;
  onClose?: () => void;
};

export default function QuoteModal({
  buttonText = "Request a Quote",
  product = "",
  capacity = "",
  open,
  onClose,
}: QuoteModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);

  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : internalOpen;

  const closeModal = () => {
    if (isControlled) {
      onClose?.();
    } else {
      setInternalOpen(false);
    }
  };

  const openModal = () => {
    if (!isControlled) {
      setInternalOpen(true);
    }
  };

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product,
    capacity,
    message: "",
  });

  const [sending, setSending] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      product,
      capacity,
    }));
  }, [product, capacity]);

  const updateField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSending(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to send request."
        );
      }

      setStatus({
        type: "success",
        message:
          "Thank you. Your quote request has been sent successfully.",
      });

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        product,
        capacity,
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* BUTTON */}
      {!isControlled && (
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
        >
          {buttonText}
        </button>
      )}

      {/* MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="relative max-h-[95vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-7 text-zinc-900 shadow-2xl md:p-9">
            <button
              onClick={closeModal}
              type="button"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-2xl text-zinc-500 transition hover:bg-zinc-200 hover:text-black"
            >
              ×
            </button>

            <div className="mb-7">
              <div className="text-sm font-bold uppercase tracking-wider text-orange-600">
                Business Inquiry
              </div>

              <h2 className="mt-2 text-3xl font-black">
                Request a Quote
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-zinc-500">
                Tell us what equipment you need and our
                sales team will contact you with product
                recommendations and quotation details.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Name *
                  </span>

                  <input
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-zinc-300 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Company
                  </span>

                  <input
                    name="company"
                    value={form.company}
                    onChange={updateField}
                    placeholder="Company name"
                    className="w-full rounded-xl border border-zinc-300 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Email *
                  </span>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    required
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-zinc-300 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Phone / WhatsApp
                  </span>

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={updateField}
                    placeholder="+86..."
                    className="w-full rounded-xl border border-zinc-300 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Product / Model
                  </span>

                  <input
                    name="product"
                    value={form.product}
                    onChange={updateField}
                    placeholder="e.g. JA Series"
                    className="w-full rounded-xl border border-zinc-300 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Required Load Capacity
                  </span>

                  <input
                    name="capacity"
                    value={form.capacity}
                    onChange={updateField}
                    placeholder="e.g. 20 tons"
                    className="w-full rounded-xl border border-zinc-300 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-semibold">
                  Message *
                </span>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  required
                  rows={5}
                  placeholder="Tell us about your application, quantity and requirements..."
                  className="w-full resize-none rounded-xl border border-zinc-300 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </label>

              {status.message && (
                <div
                  className={`mt-5 rounded-xl px-4 py-3 text-sm font-semibold ${
                    status.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending
                  ? "Sending..."
                  : "✈ Send Quote Request"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}