import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.string(),
    banner_text: z.string(),
    bookingEmail: z.string().email(),
    socials: z.array(
      z.object({
        name: z.string(),
        url: z.string().url(),
      }),
    ),
    seoTitle: z.string(),
    seoDescription: z.string(),
  }),
});

const releases = defineCollection({
  loader: glob({ base: "./src/content/releases", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      format: z.string(),
      status: z.string(),
      releaseDate: z.string(),
      artworkImage: image().optional(),
      artworkAlt: z.string().optional(),
      bandcampUrl: z.string().url().optional(),
    }),
});

const updates = defineCollection({
  loader: glob({ base: "./src/content/updates", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      summary: z.string(),
      coverImage: image().optional(),
      coverAlt: z.string().optional(),
      instagramUrl: z.string().url().optional(),
      instagramReelUrl: z.string().url().optional(),
      format: z.enum(["post", "reel", "carousel"]).optional(),
    }),
});

const merch = defineCollection({
  loader: glob({ base: "./src/content/merch", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kind: z.enum(["apparel", "music", "accessory", "other"]),
      price: z.string(),
      status: z.enum(["available", "coming-soon", "sold-out"]).default("coming-soon"),
      buyUrl: z.string().url().optional(),
      /** Flat product photo, or the print design when `mockup` is set. */
      image: image().optional(),
      imageAlt: z.string().optional(),
      /** Project `image` onto a blank product mockup. */
      mockup: z.enum(["tee", "digipack"]).optional(),
      /** Override the default blank tee / digipack photo. */
      mockupTemplate: image().optional(),
      /** Print size on the chest (tees only, 0.4–1). Default 0.72. */
      printScale: z.number().min(0.4).max(1).optional(),
      order: z.number().optional(),
    }),
});

export const collections = {
  pages,
  releases,
  updates,
  merch,
};
