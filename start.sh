#!/bin/bash

# Quick start script for Praharsha Jekyll site

echo "🚀 Starting Praharsha Jekyll Site with Docker..."
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed!"
    echo "Please install Docker from: https://docs.docker.com/get-docker/"
    exit 1
fi

echo "✅ Docker is installed"

# Check if docker-compose is available
if command -v docker-compose &> /dev/null; then
    echo "✅ Docker Compose is installed"
    echo ""
    echo "Starting with docker-compose..."
    docker-compose up
elif docker compose version &> /dev/null; then
    echo "✅ Docker Compose (plugin) is installed"
    echo ""
    echo "Starting with docker compose..."
    docker compose up
else
    echo "⚠️  Docker Compose not found, using docker commands..."
    echo ""
    echo "Building image..."
    docker build -t praharsha-jekyll .
    echo ""
    echo "Starting container..."
    docker run -p 4000:4000 -p 35729:35729 -v $(pwd):/site praharsha-jekyll
fi