const videos = [
  {
    title: "Electric Stair-Climbing Machine",
    category: "Heavy Load Moving",
    src: "/videos/company-factory.mp4",
  },
  {
    title: "AGV Automated Guided Vehicle",
    category: "AGV",
    src: "/videos/company-factory.mp4",
  },
  {
    title: "Manual Heavy-Duty Load Skates",
    category: "Heavy Load Moving",
    src: "/videos/company-factory.mp4",
  },
];

export default function ProductVideosPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-zinc-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            JIN YANG HU
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Product Videos
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
            See our industrial lifting and transport equipment in action.
            Explore product demonstrations, operating videos, and real
            application scenarios.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-zinc-900">
              Machines in Action
            </h2>

            <p className="mt-3 text-zinc-600">
              Watch our equipment performance, movement, and operation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {videos.map((video, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-video bg-black">
                  <video
                    controls
                    preload="metadata"
                    className="h-full w-full object-cover"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                    {video.category}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-zinc-900">
                    {video.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Watch this product in operation and see its performance in
                    industrial material handling applications.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-3xl bg-zinc-950 px-8 py-12 text-center text-white md:px-16">
          <h2 className="text-3xl font-bold">
            Need More Product Information?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
            Contact our team for specifications, product recommendations, and
            quotation support.
          </p>

          <a
            href="/#contact"
            className="mt-7 inline-flex rounded-xl bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}