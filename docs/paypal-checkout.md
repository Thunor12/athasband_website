# Shop ↔ payment store (local)

The site is static; PayPal secrets live only in `band_payment_store`.

1. Start payment store (`cargo run` on `test/paypal-sandbox`) with sandbox `.env`.
2. In this repo, copy `.env.example` → `.env` (`PUBLIC_PAYMENT_API_URL=http://127.0.0.1:3000`).
3. `npm run dev` → open `/shop`:
   - **Donation (primary):** email + EUR amount + billing/shipping → `POST {PUBLIC_PAYMENT_API_URL}/api/donations` with `{ customer_email, amount_cents, billing_address, shipping_same_as_billing | shipping_address }` → PayPal approve URL.
   - Gift tiers (defaults): €10 patch, €25 CD, €50 CD+T-shirt when available — mirrored in shop copy; stored server-side as `gift_tier`.
   - Address line 1 typeahead via `GET {PUBLIC_PAYMENT_API_URL}/api/address-suggest` (Nominatim proxy; OSM attribution on the form).
   - **Merch placeholders:** listed as coming soon (not purchasable).
4. Optional merch checkout (when a catalog item is available): `/checkout?variantId=1` → client reads `variantId` from the query string (static build) → `POST /api/orders` (same address shape; prices in EUR cents from the catalog).

Donation amount bounds must match the payment store (`DONATION_MIN_CENTS` / `DONATION_MAX_CENTS`, defaults €1–€5,000). Currency is **EUR**.

After PayPal approval, the **payment store** handles `GET /success` (Pending→Capturing→Completed). There is no browser call to a capture API. Stuck Capturing rows are reconciled by the payment store TTL sweeper.

No PayPal client id/secret is embedded in the Astro build. Checkout remains accountless.
