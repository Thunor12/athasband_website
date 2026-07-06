/**
 * Cover images for Instagram update posts.
 *
 * When adding a new post under src/content/updates/:
 * 1. Save the image to src/assets/updates/<entry-id>.<ext>
 * 2. Import it below and add a map entry keyed by the markdown filename (without .md)
 *
 * Example: src/content/updates/2026-06-20-my-post.md → key "2026-06-20-my-post"
 */
import type { ImageMetadata } from "astro";
import albumTracking from "../assets/updates/2026-05-29-album-tracking-progress.jpg";
import shadowAnnouncement from "../assets/updates/2026-05-25-shadow-announcement.webp";
import siegeBegins from "../assets/updates/2026-05-28-siege-begins.webp";
import studioVocals from "../assets/updates/2026-06-01-studio-vocals-dni.webp";
import finishedTracking from "../assets/updates/2026-06-02-finished-tracking.jpg";
import angloSaxonsDarkFantasy from "../assets/updates/2026-06-08-anglo-saxons-dark-fantasy.webp";
import nameOfAthas from "../assets/updates/2026-06-11-name-of-athas.jpg";
import albumVocalSnippet from "../assets/updates/2026-06-16-album-vocal-snippet.jpg";

export const updateCoverImages: Record<string, ImageMetadata> = {
  "2026-05-25-shadow-announcement": shadowAnnouncement,
  "2026-05-28-siege-begins": siegeBegins,
  "2026-05-29-album-tracking-progress": albumTracking,
  "2026-06-01-studio-vocals-dni": studioVocals,
  "2026-06-02-finished-tracking": finishedTracking,
  "2026-06-08-anglo-saxons-dark-fantasy": angloSaxonsDarkFantasy,
  "2026-06-11-name-of-athas": nameOfAthas,
  "2026-06-16-album-vocal-snippet": albumVocalSnippet,
};
