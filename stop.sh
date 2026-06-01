#!/bin/bash

echo "🛑 Stopping Praharsha Jekyll Site..."
echo ""

if command -v docker-compose &> /dev/null; then
    docker-compose down
elif docker compose version &> /dev/null; then
    docker compose down
else
    docker stop praharsha-jekyll 2>/dev/null
    docker rm praharsha-jekyll 2>/dev/null
fi

echo "✅ Stopped successfully!"
echo ""