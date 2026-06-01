# 🎉 YOUR COMMANDS TO RUN THE SITE

## Location
All files are in: `/app/jekyll-site/`

## Commands to Test on Your Laptop

### Prerequisites
Install Docker from: https://docs.docker.com/get-docker/

### Step-by-Step

```bash
# 1. Navigate to the jekyll-site directory
cd /path/to/jekyll-site

# 2. Start the site (choose one method)

# Method A: Easy way (Mac/Linux)
./start.sh

# Method B: Easy way (Windows)
start.bat

# Method C: Manual way (all platforms)
docker-compose up

# 3. Open your browser
# Go to: http://localhost:4000

# 4. Stop the site
# Press Ctrl+C
# Or run: ./stop.sh
```

## That's It!

The site will:
- ✅ Build automatically
- ✅ Run on port 4000
- ✅ Auto-reload when you edit files
- ✅ Show the sidebar on the LEFT (as you requested!)

## Port Forwarding Explained

When you run `docker-compose up`:
- Jekyll runs **inside** the Docker container on port 4000
- Docker **forwards** port 4000 from container to your laptop
- You access the site at: **http://localhost:4000**

```
Container (port 4000) → Your Laptop (port 4000) → Your Browser
```

No special port forwarding commands needed - Docker handles it automatically!

## Testing the Setup

```bash
# 1. Start container
./start.sh

# Expected output:
# 🚀 Starting Praharsha Jekyll Site with Docker...
# ✅ Docker is installed
# ✅ Docker Compose is installed
# Starting with docker-compose...
# [+] Building...
# Server address: http://0.0.0.0:4000/
# Server running... press ctrl-c to stop.

# 2. Open browser to http://localhost:4000
# You should see the Praharsha site with:
#    - Sidebar on the LEFT
#    - Logo placeholder
#    - Navigation links
#    - Featured books
#    - Social icons

# 3. Test navigation
# Click "Books" → Should show all books
# Click "Authors" → Should show all authors
# Click on a book → Should show book details
# Click "Contact" → Should show contact form

# 4. Test editing
# In another terminal:
cd _books
nano monsoon-memories.md
# Make a small change
# Save file
# Browser should auto-refresh and show your change!

# 5. Stop
# Press Ctrl+C in the terminal running docker-compose
```

## Common Docker Commands

```bash
# Start (foreground - see logs)
docker-compose up

# Start (background - detached)
docker-compose up -d

# Stop (if running in background)
docker-compose down

# View logs (if running in background)
docker-compose logs -f

# Restart
docker-compose restart

# Rebuild
docker-compose build --no-cache
docker-compose up

# Check running containers
docker ps

# Access container shell
docker-compose exec jekyll bash

# Build production site
docker-compose run jekyll bundle exec jekyll build
# Static files will be in _site/
```

## Quick Troubleshooting

### Port 4000 already in use?
```bash
# Find and kill the process
lsof -ti:4000 | xargs kill -9

# Or change port in docker-compose.yml:
# ports:
#   - "4001:4000"
# Then access at http://localhost:4001
```

### Docker not starting?
```bash
# Check if Docker is running
docker ps

# If not, start Docker Desktop
# On Mac: Open Docker Desktop app
# On Windows: Open Docker Desktop app
# On Linux: sudo systemctl start docker
```

### Container won't build?
```bash
# Clean rebuild
docker-compose down -v
docker rmi praharsha-jekyll
docker-compose build --no-cache
docker-compose up
```

## File Structure

```
jekyll-site/
├── Dockerfile              ← Defines container
├── docker-compose.yml      ← Orchestrates everything
├── .dockerignore          ← Optimizes build
├── start.sh               ← Quick start (Mac/Linux)
├── start.bat              ← Quick start (Windows)
├── stop.sh                ← Quick stop
├── _books/                ← Book markdown files
├── _authors/              ← Author markdown files
├── assets/                ← Images, CSS, JS
└── _config.yml            ← Jekyll configuration
```

## Documentation Available

- **DOCKER_QUICKSTART.md** - Fast 2-minute guide
- **DOCKER_GUIDE.md** - Complete documentation
- **DOCKER_SETUP_COMPLETE.md** - What's been added
- **docker-commands.sh** - Command reference (run it!)
- **DEPLOYMENT_GUIDE.md** - Deploy to GitHub Pages

## Next Steps

1. ✅ Test locally with Docker
2. ✅ Edit content and see live changes
3. ✅ When ready, deploy to GitHub Pages
4. ✅ Point your domain (praharsha.in) to GitHub Pages

## Support

Run this for quick command reference:
```bash
./docker-commands.sh
```

Or read the guides:
- Quick: DOCKER_QUICKSTART.md
- Complete: DOCKER_GUIDE.md

---

**🐳 Docker + 💎 Jekyll + 📚 Praharsha = Ready to Go!**
