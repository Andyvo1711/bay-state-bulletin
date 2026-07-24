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
 * Each section gets a distinct hue drawn from the Maryland palette
 * (Chesapeake navy, historic brick red, maritime gold) plus two
 * complementary accents for scannability across five sections.
 */
export const CATEGORIES: Category[] = [
  {
    slug: "education",
    name: "Education",
    tagline:
      "Johns Hopkins, the University of Maryland, and the schools shaping the Old Line State's next generation.",
    badgeClass: "bg-[#14395c]/10 text-[#14395c]",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline:
      "Johns Hopkins Medicine, UMMS, and the health systems keeping Maryland well.",
    badgeClass: "bg-[#8a2c2c]/10 text-[#8a2c2c]",
  },
  {
    slug: "business-leaders",
    name: "Business Leaders",
    tagline:
      "The entrepreneurs and executives driving Maryland forward, from Baltimore to Bethesda.",
    badgeClass: "bg-[#c9982f]/15 text-[#7a5a17]",
  },
  {
    slug: "finance-economy",
    name: "Finance & Economy",
    tagline:
      "The Port of Baltimore, the biotech corridor, and the economic pulse of the DC-Baltimore metro.",
    badgeClass: "bg-cyan-700/10 text-cyan-800",
  },
  {
    slug: "beauty-wellness",
    name: "Beauty & Wellness",
    tagline:
      "Spas, self-care, and the wellness rituals trending from Annapolis to Rockville.",
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
