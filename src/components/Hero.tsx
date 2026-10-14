import Image from "next/image";
import Link from "next/link";
import type { ArticleMeta } from "@/types/article";
import { getCategoryBadgeClass, getCategoryName } from "@/lib/categories";

/** The single lead story at the top of the homepage: text left, image right. No date shown. */
export default function Hero({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group grid overflow-hidden rounded-xl border border-border bg-surface md:grid-cols-2"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden md:order-2 md:aspect-auto md:min-h-[420px]">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-center gap-4 p-6 sm:p-8 md:order-1 md:p-10 lg:p-12">
        <div className="flex items-center gap-3">
          <span
            className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${getCategoryBadgeClass(
              article.category,
            )}`}
          >
            {getCategoryName(article.category)}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brick">
            Lead Story
          </span>
        </div>

        <h1 className="font-display text-2xl font-black leading-tight text-foreground transition-colors group-hover:text-accent sm:text-3xl lg:text-4xl xl:text-[2.75rem]">
          {article.title}
        </h1>

        <p className="text-sm leading-relaxed text-muted sm:text-base">
          {article.excerpt}
        </p>

        <span className="mt-2 text-sm font-semibold text-accent">
          Read the full story <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
