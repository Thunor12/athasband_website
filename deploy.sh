#!/bin/bash
set -euo pipefail

echo "Installing dependencies..."
npm install

echo "Building..."
npm run build

echo "Deploying to Cloudflare Workers..."
npx wrangler deploy

echo "Done!"
