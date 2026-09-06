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

/** Trimmed, trailing-slash-stripped env value, or "" if missing/invalid. */
export function getPaymentApiUrl(): string {
  const raw = (
    import.meta.env.PUBLIC_PAYMENT_API_URL?.toString().trim() ?? ""
  ).replace(/\/$/, "");
  return isValidPaymentApiUrl(raw) ? raw : "";
}
