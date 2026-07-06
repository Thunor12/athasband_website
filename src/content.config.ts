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
      coverAlt: z.string().optional(),
      instagramUrl: z.string().url().optional(),
      instagramReelUrl: z.string().url().optional(),
      format: z.enum(["post", "reel", "carousel"]).optional(),
    }),
});

export const collections = {
  pages,
  releases,
  updates,
};
