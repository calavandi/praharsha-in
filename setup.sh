#!/bin/bash

# Quick setup script for Praharsha Jekyll site

echo "Setting up Praharsha Jekyll website..."
echo ""

# Check if Ruby is installed
if ! command -v ruby &> /dev/null; then
    echo "Error: Ruby is not installed. Please install Ruby 2.7 or higher."
    echo "Visit: https://www.ruby-lang.org/en/documentation/installation/"
    exit 1
fi

echo "Ruby version: $(ruby -v)"
echo ""

# Check if Bundler is installed
if ! command -v bundle &> /dev/null; then
    echo "Installing Bundler..."
    gem install bundler
fi

echo "Bundler version: $(bundle -v)"
echo ""

# Install dependencies
echo "Installing Jekyll and dependencies..."
bundle install

echo ""
echo "Setup complete!"
echo ""
echo "To start the local development server, run:"
echo "  bundle exec jekyll serve"
echo ""
echo "Then open your browser to: http://localhost:4000"
echo ""