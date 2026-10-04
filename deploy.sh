#!/bin/bash
set -euo pipefail

echo "Installing dependencies..."
npm install

echo "Building (production payment store)..."
PUBLIC_PAYMENT_API_URL="${PUBLIC_PAYMENT_API_URL:-https://band-payment-store.thunor97.net}" \
  npm run build

echo "Deploying to Cloudflare Workers..."
npx wrangler deploy

echo "Done!"
