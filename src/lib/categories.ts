import type { CategorySlug } from "@/types/article";

export interface Category {
  slug: CategorySlug;
  name: string;
  /** Short blurb used in the footer and category headers */
  tagline: string;
  /** Tailwind utility classes used for the category's accent badge */
  badgeClass: string;
}

/**
 * Order here is intentional and drives the homepage section order and nav.
 * Each section gets a distinct hue drawn from the Massachusetts palette
 * (Boston Harbor navy, Beacon Hill brick, Liberty gold) plus two
 * complementary accents for scannability across five sections.
 */
export const CATEGORIES: Category[] = [
  {
    slug: "education",
    name: "Education",
    tagline:
      "Harvard, MIT, and the schools shaping the Bay State's next generation.",
    badgeClass: "bg-[#14395c]/10 text-[#14395c]",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline:
      "Mass General Brigham, Boston Children's, and the systems keeping Massachusetts well.",
    badgeClass: "bg-[#8a2c2c]/10 text-[#8a2c2c]",
  },
  {
    slug: "business-leaders",
    name: "Business Leaders",
    tagline:
      "The entrepreneurs and executives driving Massachusetts forward, from Boston to Cambridge.",
    badgeClass: "bg-[#c9982f]/15 text-[#7a5a17]",
  },
  {
    slug: "finance-economy",
    name: "Finance & Economy",
    tagline:
      "Boston's financial sector, the Route 128 tech corridor, and the economic pulse of New England.",
    badgeClass: "bg-cyan-700/10 text-cyan-800",
  },
  {
    slug: "beauty-wellness",
    name: "Beauty & Wellness",
    tagline:
      "Spas, self-care, and the wellness rituals trending from Back Bay to the Cape.",
    badgeClass: "bg-rose-500/10 text-rose-700",
  },
];

export function getCategoryName(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}

export function getCategoryBadgeClass(slug: string): string {
  return (
    CATEGORIES.find((c) => c.slug === slug)?.badgeClass ??
    "bg-slate-500/10 text-slate-700"
  );
}
