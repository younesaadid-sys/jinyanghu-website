export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* HERO */}
      <section className="border-b border-zinc-200 bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
            Legal Information
          </p>

          <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
            These Terms & Conditions govern the use of the JIN YANG HU website
            and information provided through it.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="space-y-12 text-zinc-700">
            <section>
              <h2 className="text-2xl font-black text-zinc-900">
                1. Website Use
              </h2>

              <p className="mt-4 leading-8">
                This website is provided for general product information,
                business inquiries and communication with potential customers,
                distributors and partners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-900">
                2. Product Information
              </h2>

              <p className="mt-4 leading-8">
                We make reasonable efforts to keep product descriptions,
                specifications, images and technical information accurate.
                However, specifications, appearance, configurations and
                availability may change as products are improved or customized.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-900">
                3. Quotations and Pricing
              </h2>

              <p className="mt-4 leading-8">
                Prices displayed or discussed through the website are not
                automatically binding unless confirmed in an official
                quotation, proforma invoice, contract or other written sales
                document issued by the company.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-900">
                4. Orders
              </h2>

              <p className="mt-4 leading-8">
                An inquiry or Request a Quote submission does not constitute a
                confirmed order. Orders are subject to confirmation of product
                specifications, quantity, price, payment terms, production
                schedule, shipping terms and other commercial conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-900">
                5. Product Customization
              </h2>

              <p className="mt-4 leading-8">
                Customized products may be subject to additional technical
                confirmation, minimum order quantities, production time and
                commercial conditions agreed before production.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-900">
                6. Shipping and Delivery
              </h2>

              <p className="mt-4 leading-8">
                Shipping terms, delivery times, freight charges, insurance,
                customs responsibilities and Incoterms will be determined
                according to the specific quotation or sales agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-900">
                7. Intellectual Property
              </h2>

              <p className="mt-4 leading-8">
                Website content, including product photographs, graphics,
                branding, text and other materials, may not be copied,
                reproduced or commercially distributed without authorization,
                except where otherwise permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-900">
                8. Third-Party Marketplaces
              </h2>

              <p className="mt-4 leading-8">
                Our website may link to third-party marketplaces or external
                platforms. Purchases made through those platforms may also be
                subject to the platform&apos;s own rules, payment conditions and
                policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-900">
                9. Limitation of Liability
              </h2>

              <p className="mt-4 leading-8">
                To the extent permitted by applicable law, JIN YANG HU is not
                responsible for indirect losses resulting solely from reliance
                on general website information. Product selection and use
                should follow confirmed specifications, operating instructions
                and appropriate safety procedures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-zinc-900">
                10. Changes to These Terms
              </h2>

              <p className="mt-4 leading-8">
                These terms may be updated from time to time. The latest
                version published on this website will apply to future use of
                the website.
              </p>
            </section>

            <section className="rounded-3xl bg-zinc-100 p-8">
              <h2 className="text-2xl font-black text-zinc-900">
                Contact
              </h2>

              <p className="mt-4 leading-8">
                For questions regarding products, quotations or these terms,
                contact:
              </p>

              <a
                href="mailto:genefen@jcsqz.com"
                className="mt-3 inline-block font-bold text-orange-600 hover:text-orange-700"
              >
                genefen@jcsqz.com
              </a>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}