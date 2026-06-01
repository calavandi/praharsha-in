# Running Praharsha Site with Docker

No need to install Ruby or Jekyll on your laptop! Use Docker to run the site.

## Prerequisites

- Docker installed ([Get Docker](https://docs.docker.com/get-docker/))
- Docker Compose (usually comes with Docker Desktop)

## Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Navigate to the jekyll-site directory
cd jekyll-site

# Build and start the container
docker-compose up

# Or run in background
docker-compose up -d

# View logs (if running in background)
docker-compose logs -f

# Stop the container
docker-compose down
```

### Option 2: Using Docker Commands

```bash
# Navigate to the jekyll-site directory
cd jekyll-site

# Build the Docker image
docker build -t praharsha-jekyll .

# Run the container
docker run -p 4000:4000 -v $(pwd):/site praharsha-jekyll

# Or run in background
docker run -d -p 4000:4000 -v $(pwd):/site --name praharsha-jekyll praharsha-jekyll

# Stop the container
docker stop praharsha-jekyll

# Remove the container
docker rm praharsha-jekyll
```

## Accessing the Site

Once the container is running, open your browser to:

**http://localhost:4000**

## Features

✅ **Auto-reload**: Changes to files automatically refresh the browser  
✅ **No local dependencies**: Everything runs in the container  
✅ **Volume mounting**: Edit files on your laptop, see changes instantly  
✅ **Port forwarding**: Access site at localhost:4000

## Common Commands

### View running containers
```bash
docker ps
```

### View all containers (including stopped)
```bash
docker ps -a
```

### View logs
```bash
# Using docker-compose
docker-compose logs -f

# Using docker
docker logs -f praharsha-jekyll
```

### Rebuild after Gemfile changes
```bash
# Using docker-compose
docker-compose down
docker-compose build --no-cache
docker-compose up

# Using docker
docker stop praharsha-jekyll
docker rm praharsha-jekyll
docker build --no-cache -t praharsha-jekyll .
docker run -p 4000:4000 -v $(pwd):/site praharsha-jekyll
```

### Access container shell (if needed)
```bash
# Using docker-compose
docker-compose exec jekyll /bin/bash

# Using docker
docker exec -it praharsha-jekyll /bin/bash
```

### Build production site
```bash
# This creates _site/ folder with static files
docker-compose run jekyll bundle exec jekyll build
```

## Troubleshooting

### Port already in use
If port 4000 is already taken:

**Option 1: Use different port**
```bash
# Edit docker-compose.yml and change:
# ports:
#   - "4001:4000"

# Or for docker command:
docker run -p 4001:4000 -v $(pwd):/site praharsha-jekyll
# Then access at http://localhost:4001
```

**Option 2: Kill process on port 4000**
```bash
# On Mac/Linux
lsof -ti:4000 | xargs kill -9

# On Windows
netstat -ano | findstr :4000
taskkill /PID <PID> /F
```

### Container won't start
```bash
# Check logs
docker-compose logs

# Or
docker logs praharsha-jekyll
```

### Changes not reflecting
```bash
# Restart the container
docker-compose restart

# Or
docker restart praharsha-jekyll
```

### Clean rebuild
```bash
# Stop and remove everything
docker-compose down -v

# Remove the image
docker rmi praharsha-jekyll

# Rebuild from scratch
docker-compose up --build
```

## Windows Users

If using PowerShell, replace `$(pwd)` with `${PWD}` or use absolute path:

```powershell
# PowerShell
docker run -p 4000:4000 -v ${PWD}:/site praharsha-jekyll

# Or use absolute path
docker run -p 4000:4000 -v C:\Users\YourName\path\to\jekyll-site:/site praharsha-jekyll
```

## What's Happening Inside

1. **Ruby 3.1** image provides the base environment
2. **Bundler** installs all Jekyll dependencies from Gemfile
3. **Volume mount** (`-v`) syncs your local files with the container
4. **Port forward** (`-p 4000:4000`) exposes Jekyll server to your laptop
5. **LiveReload** automatically refreshes browser when files change

## File Structure

```
jekyll-site/
├── Dockerfile           ← Docker image definition
├── docker-compose.yml   ← Easy orchestration
├── .dockerignore        ← Files to exclude from image
├── Gemfile              ← Ruby dependencies
├── _config.yml          ← Jekyll configuration
├── _books/              ← Book markdown files
├── _authors/            ← Author markdown files
├── _layouts/            ← HTML templates
├── _includes/           ← Reusable components
├── assets/              ← CSS, JS, images
└── index.html           ← Homepage
```

## Development Workflow

1. **Start container**: `docker-compose up`
2. **Edit files**: Make changes in your editor (VS Code, etc.)
3. **See changes**: Browser auto-refreshes with LiveReload
4. **Stop container**: `Ctrl+C` or `docker-compose down`

## Production Build

When ready to deploy:

```bash
# Build static files
docker-compose run jekyll bundle exec jekyll build

# Static site is now in _site/ directory
# Upload _site/ contents to GitHub Pages or any static host
```

## Next Steps

1. ✅ Run the container
2. ✅ Open http://localhost:4000
3. ✅ Edit markdown files in `_books/` or `_authors/`
4. ✅ See changes instantly in browser
5. ✅ When satisfied, follow DEPLOYMENT_GUIDE.md to deploy to GitHub Pages

---

**Need help?** Check the main README.md or DEPLOYMENT_GUIDE.md for more information.
