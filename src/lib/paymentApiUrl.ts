/** Live payment store (PayPal lives there; never embed PayPal secrets in this site). */
export const PRODUCTION_PAYMENT_API_URL =
  "https://band-payment-store.thunor97.net";

/** True when `url` is a bare http(s) origin (no path/query/hash/credentials). */
export function isValidPaymentApiUrl(url: string): boolean {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return false;
    }
    if (parsed.username || parsed.password) return false;
    if (parsed.pathname !== "/" && parsed.pathname !== "") return false;
    if (parsed.search || parsed.hash) return false;
    return Boolean(parsed.hostname);
  } catch {
    return false;
  }
}

function isLoopbackPaymentApiUrl(url: string): boolean {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return host === "localhost" || host === "127.0.0.1" || host === "::1";
  } catch {
    return false;
  }
}

/**
 * Trimmed, trailing-slash-stripped env value.
 * Production builds use the live payment store when unset, invalid, or pointed
 * at loopback (Cloudflare deploys do not ship `.env`; local `.env` must not
 * bake sandbox into prod). Local `astro dev` stays unconfigured unless `.env`
 * points at a local payment store.
 */
export function getPaymentApiUrl(): string {
  const raw = (
    import.meta.env.PUBLIC_PAYMENT_API_URL?.toString().trim() ?? ""
  ).replace(/\/$/, "");
  if (import.meta.env.PROD) {
    if (isValidPaymentApiUrl(raw) && !isLoopbackPaymentApiUrl(raw)) {
      return raw;
    }
    return PRODUCTION_PAYMENT_API_URL;
  }
  return isValidPaymentApiUrl(raw) ? raw : "";
}
