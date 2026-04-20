#!/bin/bash

echo "Installing dependencies..."
npm install

echo "Building..."
npm run build

echo "Deploying..."
rsync -avz --delete dist/ lucas@192.168.1.124:/var/www/athas/

echo "Done!"
