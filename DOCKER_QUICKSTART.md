# 🐳 Docker Quick Start - Super Easy!

## Prerequisites

**Only Docker!** No Ruby, no Jekyll, no headaches.

📥 **Install Docker:**
- Mac: [Docker Desktop for Mac](https://docs.docker.com/desktop/install/mac-install/)
- Windows: [Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)
- Linux: [Docker Engine](https://docs.docker.com/engine/install/)

## Step-by-Step Guide

### Step 1: Navigate to the Directory

```bash
cd path/to/jekyll-site
```

### Step 2: Start the Site

#### 🍎 Mac / 🐧 Linux

```bash
./start.sh
```

#### 🪟 Windows

Double-click `start.bat` or run in PowerShell:
```powershell
.\start.bat
```

#### 💡 Manual (All Platforms)

```bash
docker-compose up
```

### Step 3: Open Your Browser

**http://localhost:4000**

That's it! 🎉

---

## What You'll See

```
Starting Praharsha Jekyll Site with Docker...

Docker is installed ✅
Docker Compose is installed ✅

Starting with docker-compose...
[+] Building 45.2s (12/12) FINISHED
[+] Running 1/1
✔ Container praharsha-jekyll  Started
...
Server address: http://0.0.0.0:4000/
Server running... press ctrl-c to stop.
```

## Stopping the Site

Press `Ctrl+C` in the terminal

Or run:
```bash
./stop.sh
```

Or manually:
```bash
docker-compose down
```

---

## Complete Commands Reference

### Start Site
```bash
# Easy way
./start.sh              # Mac/Linux
start.bat               # Windows

# Manual way
docker-compose up       # Foreground
docker-compose up -d    # Background
```

### Stop Site
```bash
# Easy way
./stop.sh               # Mac/Linux
Ctrl+C                  # If running in foreground

# Manual way
docker-compose down     # Stop and remove
```

### View Site
```
http://localhost:4000
```

### View Logs
```bash
docker-compose logs -f
```

### Restart After Changes
```bash
docker-compose restart
```

### Rebuild Container
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up
```

### Build for Production
```bash
docker-compose run jekyll bundle exec jekyll build
# Static files will be in _site/
```

---

## Port Forwarding Explained

When you run the container:
- Port `4000` inside container → Port `4000` on your laptop
- Port `35729` inside container → Port `35729` on your laptop (LiveReload)

You access the site at: **http://localhost:4000**

Docker handles all the port forwarding automatically!

---

## File Editing Workflow

1. **Start container**: `./start.sh`
2. **Open site**: http://localhost:4000
3. **Edit files**: Use any editor (VS Code, Sublime, etc.)
4. **See changes**: Browser auto-refreshes! ✨
5. **Stop container**: `Ctrl+C`

Changes you make on your laptop are **instantly visible** in the container thanks to volume mounting!

---

## Example: Adding a New Book

```bash
# 1. Start the site
./start.sh

# 2. In another terminal, create a new book file
cd _books
nano my-new-book.md

# 3. Add content:
---
title: My New Book
author: John Doe
image: /assets/images/books/my-book.jpg
price: ₹599
---

Book description here...

# 4. Save file (Ctrl+X, Y, Enter in nano)

# 5. Browser automatically refreshes and shows new book!
```

---

## Troubleshooting

### Port 4000 already in use?

**Option 1: Kill the process**
```bash
# Mac/Linux
lsof -ti:4000 | xargs kill -9

# Windows (PowerShell as Admin)
Get-Process -Id (Get-NetTCPConnection -LocalPort 4000).OwningProcess | Stop-Process -Force
```

**Option 2: Use different port**

Edit `docker-compose.yml`:
```yaml
ports:
  - "4001:4000"  # Change 4000 to 4001
```

Then access at: http://localhost:4001

### Container won't start?

```bash
# Check what's wrong
docker-compose logs

# Try clean rebuild
docker-compose down -v
docker-compose build --no-cache
docker-compose up
```

### Changes not showing?

```bash
# Force restart
docker-compose restart

# Or full rebuild
docker-compose down
docker-compose up --build
```

### Docker not installed?

Get it from:
- https://docs.docker.com/get-docker/

---

## What's Happening Behind the Scenes?

```
┌─────────────────────────────────────────┐
│  YOUR LAPTOP                             │
│                                          │
│  ┌────────────────────────────────┐     │
│  │  jekyll-site/ folder           │     │
│  │  - Edit files here             │     │
│  │  - Use any editor              │     │
│  └────────────────────────────────┘     │
│           │                              │
│           │ Volume Mount (sync)          │
│           ↓                              │
│  ┌────────────────────────────────┐     │
│  │  DOCKER CONTAINER              │     │
│  │                                │     │
│  │  ✓ Ruby 3.1                    │     │
│  │  ✓ Jekyll + dependencies       │     │
│  │  ✓ Running on port 4000        │     │
│  │  ✓ LiveReload enabled          │     │
│  └────────────────────────────────┘     │
│           │                              │
│           │ Port Forward                 │
│           ↓                              │
│  ┌────────────────────────────────┐     │
│  │  BROWSER                       │     │
│  │  http://localhost:4000         │     │
│  └────────────────────────────────┘     │
│                                          │
└─────────────────────────────────────────┘
```

1. **You edit files** on your laptop (in jekyll-site/ folder)
2. **Docker syncs** changes to container (volume mount)
3. **Jekyll detects** changes and rebuilds
4. **LiveReload** refreshes your browser
5. **You see updates** instantly!

---

## Files You Got

```
jekyll-site/
├── Dockerfile              ← Container image definition
├── docker-compose.yml      ← Easy orchestration config
├── .dockerignore          ← Files to exclude
├── start.sh               ← Quick start (Mac/Linux)
├── start.bat              ← Quick start (Windows)
├── stop.sh                ← Quick stop
├── docker-commands.sh     ← Command reference
└── DOCKER_GUIDE.md        ← Full documentation
```

---

## Next Steps

1. ✅ Start container: `./start.sh`
2. ✅ Open browser: http://localhost:4000
3. ✅ Edit some markdown files
4. ✅ See changes live!
5. ✅ When happy, deploy to GitHub Pages

---

## Need More Help?

- **Full Guide**: [DOCKER_GUIDE.md](DOCKER_GUIDE.md)
- **Command Reference**: Run `./docker-commands.sh`
- **Deployment**: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

---

**🎉 Enjoy your Docker-powered Jekyll site!**

No Ruby installation. No dependency hell. Just Docker and you're good to go! 🚀
