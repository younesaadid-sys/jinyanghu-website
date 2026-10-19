import newsData from "@/data/news.json";
import { notFound } from "next/navigation";

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const article = Array.isArray(newsData)
    ? newsData.find((item) => item.slug === slug)
    : undefined;

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-5 flex flex-wrap items-center gap-4">
          <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-orange-500">
            {article.category}
          </span>

          <span className="text-sm text-zinc-400">
            {article.date}
          </span>
        </div>

        <h1 className="text-4xl font-black leading-tight text-zinc-900 md:text-5xl">
          {article.title}
        </h1>

        <div className="mt-10 whitespace-pre-line text-lg leading-8 text-zinc-700">
          {article.content}
        </div>

        <a
          href="/"
          className="mt-12 inline-flex font-bold text-orange-500 transition hover:text-orange-600"
        >
          ← Back to Home
        </a>
      </article>
    </main>
  );
}