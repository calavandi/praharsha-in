# Praharsha Jekyll Website - Complete Package

## What's in This Archive

Complete Jekyll website for Praharsha Publications with:
- ✅ Sidebar on the LEFT (as requested)
- ✅ Full Docker support (no Ruby installation needed!)
- ✅ 6 sample books
- ✅ 4 sample authors
- ✅ Markdown-driven content
- ✅ Responsive design
- ✅ Contact form ready
- ✅ GitHub Pages ready

## Archive Info

- **Filename**: jekyll-site-praharsha.tar.gz
- **Size**: 81 KB
- **Location**: /app/jekyll-site-praharsha.tar.gz
- **Contents**: Complete jekyll-site/ directory

## Quick Start

### 1. Extract the archive

```bash
# Extract
tar -xzf jekyll-site-praharsha.tar.gz

# Navigate
cd jekyll-site
```

### 2. Run with Docker (Recommended)

**Prerequisites**: Docker only!
- Download: https://docs.docker.com/get-docker/

**Start the site:**
```bash
# Mac/Linux
./start.sh

# Windows
start.bat

# Or manually
docker-compose up
```

**Access**: http://localhost:4000

**Stop**: Press Ctrl+C or run `./stop.sh`

### 3. Or Run with Ruby/Jekyll

**Prerequisites**: Ruby 2.7+, Bundler

```bash
bundle install
bundle exec jekyll serve
```

**Access**: http://localhost:4000

## What's Included

### Docker Files (No Ruby installation needed!)
- `Dockerfile` - Container image
- `docker-compose.yml` - Easy orchestration  
- `start.sh` / `start.bat` - Quick start scripts
- `stop.sh` - Stop script
- `.dockerignore` - Build optimization

### Site Content
- `_books/` - 6 sample books (markdown)
- `_authors/` - 4 sample authors (markdown)
- `_layouts/` - HTML templates
- `_includes/` - Reusable components (sidebar)
- `assets/` - CSS, JS, images
- `index.html` - Homepage
- `books.html` - Books listing
- `authors.html` - Authors listing
- `contact.html` - Contact form

### Configuration
- `_config.yml` - Jekyll settings
- `Gemfile` - Ruby dependencies
- `CNAME` - Custom domain (praharsha.in)

### Documentation (9 guides!)
1. `START_HERE.md` - Begin here
2. `COMMANDS_TO_RUN.md` - Exact commands
3. `DOCKER_QUICKSTART.md` - Docker in 2 minutes
4. `DOCKER_GUIDE.md` - Complete Docker reference
5. `DOCKER_SETUP_COMPLETE.md` - What's included
6. `QUICKSTART.md` - GitHub Pages deployment
7. `DEPLOYMENT_GUIDE.md` - Full deployment guide
8. `HOW_IT_WORKS.md` - Architecture explanation
9. `README.md` - Technical reference

### Helper Scripts
- `docker-commands.sh` - Command reference
- `setup.sh` - Ruby/Jekyll setup

## Features

✅ **Sidebar on LEFT** - Logo, navigation, social icons  
✅ **Fixed position** - Stays visible while scrolling  
✅ **Markdown-driven** - Easy content management  
✅ **Clean URLs** - No .html or .md in URLs  
✅ **Responsive** - Mobile, tablet, desktop  
✅ **Docker ready** - One command to run  
✅ **Auto-reload** - See changes instantly  
✅ **GitHub Pages ready** - Free hosting  

## Design

- **Style**: Minimalist, traditional publishing aesthetic
- **Colors**: Warm cream background, charcoal text, muted olive accents
- **Fonts**: Crimson Text (headings), Libre Baskerville (body)
- **Layout**: Fixed left sidebar + scrollable content area

## Testing Locally

### With Docker (easiest):
```bash
cd jekyll-site
./start.sh
# Open http://localhost:4000
```

### With Ruby:
```bash
cd jekyll-site
bundle install
bundle exec jekyll serve
# Open http://localhost:4000
```

## Deploying to GitHub Pages

1. Create GitHub repository
2. Push code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```
3. Enable GitHub Pages in repo settings
4. Configure custom domain (praharsha.in)

**Full instructions**: See `DEPLOYMENT_GUIDE.md`

## File Count

- **Total files**: 42+
- **Documentation**: 9 guides
- **Books**: 6 samples
- **Authors**: 4 samples
- **Layouts**: 4 templates
- **Docker files**: 5 files

## Support

- Read `START_HERE.md` first
- For Docker: `DOCKER_QUICKSTART.md`
- For deployment: `DEPLOYMENT_GUIDE.md`
- Run `./docker-commands.sh` for command reference

## Next Steps

1. Extract this archive
2. Read `START_HERE.md`
3. Run `./start.sh` to preview locally
4. Edit content in `_books/` and `_authors/`
5. Deploy to GitHub Pages when ready

## Requirements

**For Docker preview:**
- Docker Desktop only

**For native preview:**
- Ruby 2.7+
- Bundler

**For deployment:**
- GitHub account
- Domain (optional, praharsha.in ready)

## Updates Made

This archive includes:
- ✅ Sidebar moved to LEFT side
- ✅ Complete Docker support added
- ✅ All documentation updated
- ✅ Built and tested
- ✅ Ready to deploy

## Archive Contents Summary

```
jekyll-site/
├── Docker Setup (5 files)
├── Documentation (9 guides)
├── Content (_books, _authors)
├── Templates (_layouts, _includes)
├── Assets (CSS, JS, images)
├── Configuration files
└── Helper scripts
```

---

**Version**: Latest (with Docker + Left Sidebar)  
**Date**: 2026  
**Status**: Production Ready  
**Deploy to**: praharsha.in via GitHub Pages

🚀 **Ready to go! Extract and run `./start.sh`**
