# Complete Deployment Guide for Praharsha Website

## Overview

Your Jekyll website is complete and ready to deploy! This guide will walk you through every step.

## What's Been Built

✅ **Jekyll site structure** with markdown-driven content  
✅ **Fixed right sidebar** with logo placeholder and social links  
✅ **Books section** - 6 sample books with individual pages  
✅ **Authors section** - 4 sample authors with individual pages  
✅ **Contact form** - Ready to connect with Formspree  
✅ **Clean URLs** - No `.md` or `.html` extensions visible  
✅ **Responsive design** - Works on all devices  
✅ **Traditional publishing aesthetic** - Minimalist, calm colors, serif typography

## Color Scheme Used

- Background: Warm cream (#F8F6F3)
- Text: Deep charcoal (#2C2C2C)
- Accent: Muted olive green (#5F6F52)
- Borders: Soft beige (#D4C5B9)

## Deployment Options

### Option A: Deploy to GitHub Pages (Recommended)

This is the easiest and free option that works perfectly with Jekyll.

#### Step 1: Prepare Your GitHub Account

1. If you don't have a GitHub account, create one at https://github.com/join
2. Install Git on your computer if not already installed

#### Step 2: Create a New Repository

1. Go to https://github.com/new
2. Repository name: `praharsha-website` (or `praharsha.github.io` for user site)
3. Description: "Official website for Praharsha Publications"
4. Make it **Public**
5. **Do NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

#### Step 3: Push Your Code

Open terminal/command prompt and run:

```bash
# Navigate to your site directory
cd /app/jekyll-site

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Praharsha publication website"

# Rename branch to main
git branch -M main

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/praharsha-website.git

# Push to GitHub
git push -u origin main
```

#### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top right)
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **main** and **/ (root)**
   - Click **Save**
5. Wait 1-2 minutes for deployment
6. Your site will be live at: `https://YOUR_USERNAME.github.io/praharsha-website/`

#### Step 5: Set Up Custom Domain (praharsha.in)

1. **In GitHub:**
   - Go to Settings > Pages
   - Under "Custom domain", enter: `praharsha.in`
   - Click Save
   - Check "Enforce HTTPS" (may take a few minutes to become available)

2. **In Your Domain Registrar** (GoDaddy, Namecheap, etc.):
   
   Add these DNS records:
   
   ```
   Type  Name  Value               TTL
   A     @     185.199.108.153     3600
   A     @     185.199.109.153     3600
   A     @     185.199.110.153     3600
   A     @     185.199.111.153     3600
   CNAME www   YOUR_USERNAME.github.io.  3600
   ```
   
   **Important:** Replace `YOUR_USERNAME` with your actual GitHub username

3. **Wait for DNS Propagation:**
   - Can take 5 minutes to 24 hours
   - Check status at: https://www.whatsmydns.net/

4. **Verify:**
   - Visit `https://praharsha.in`
   - The site should load with HTTPS

### Option B: Deploy to Netlify (Alternative)

Netlify offers more features and easier setup for custom domains.

1. Go to https://netlify.com and sign up
2. Click "Add new site" > "Import an existing project"
3. Connect your GitHub account
4. Select your repository
5. Build settings:
   - Build command: `jekyll build`
   - Publish directory: `_site`
6. Click "Deploy site"
7. For custom domain: Site settings > Domain management > Add custom domain

## Post-Deployment Tasks

### 1. Update Social Media Links

Edit `_config.yml`:

```yaml
social:
  twitter: "https://twitter.com/YOUR_HANDLE"
  facebook: "https://facebook.com/YOUR_PAGE"
  instagram: "https://instagram.com/YOUR_PROFILE"
```

### 2. Set Up Contact Form

1. Go to https://formspree.io and create a free account
2. Click "New Project" and create a project
3. Add a new form, name it "Praharsha Contact"
4. Copy your form endpoint (looks like: `https://formspree.io/f/xyzabc123`)
5. Edit `contact.html` and replace the form action:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
6. Commit and push changes:
   ```bash
   git add contact.html
   git commit -m "Update contact form with Formspree"
   git push
   ```

### 3. Add Your Logo

1. Create or obtain your logo image (PNG or SVG recommended)
2. Save it as `/app/jekyll-site/assets/images/logo.png`
3. Edit `_includes/sidebar.html`, replace the logo section:
   ```html
   <div class="logo-section">
       <a href="{{ '/' | relative_url }}">
           <img src="{{ '/assets/images/logo.png' | relative_url }}" alt="Praharsha" style="max-width: 100%; height: auto;">
       </a>
   </div>
   ```
4. Commit and push:
   ```bash
   git add assets/images/logo.png _includes/sidebar.html
   git commit -m "Add official logo"
   git push
   ```

### 4. Add Book Covers and Author Photos

1. Add your images to:
   - Book covers: `assets/images/books/`
   - Author photos: `assets/images/authors/`

2. The markdown files already reference these paths:
   - `assets/images/books/silent-mountains.jpg`
   - `assets/images/authors/rajesh-kumar.jpg`
   - etc.

3. Recommended sizes:
   - Book covers: 600x900px (2:3 aspect ratio)
   - Author photos: 500x500px (square)

4. Commit and push:
   ```bash
   git add assets/images/
   git commit -m "Add book covers and author photos"
   git push
   ```

## Content Management

### Adding a New Book

1. Create a new file in `_books/` directory:
   ```bash
   cd /app/jekyll-site/_books
   nano new-book-title.md
   ```

2. Add this content (modify as needed):
   ```markdown
   ---
   title: Your Book Title
   author: Author Name
   image: /assets/images/books/your-book.jpg
   price: ₹499
   isbn: 978-93-12345-67-8
   ---
   
   Your book description here. Can be multiple paragraphs.
   
   More details about the book...
   ```

3. Add the book cover image to `assets/images/books/`

4. Commit and push:
   ```bash
   git add _books/new-book-title.md assets/images/books/your-book.jpg
   git commit -m "Add new book: Your Book Title"
   git push
   ```

5. The book will automatically appear at: `/books/new-book-title/`

### Adding a New Author

1. Create a new file in `_authors/` directory:
   ```bash
   cd /app/jekyll-site/_authors
   nano author-name.md
   ```

2. Add this content:
   ```markdown
   ---
   title: Author Full Name
   image: /assets/images/authors/author-name.jpg
   ---
   
   Author biography here. Multiple paragraphs are fine.
   
   More about the author...
   ```

3. Add the author photo to `assets/images/authors/`

4. Commit and push:
   ```bash
   git add _authors/author-name.md assets/images/authors/author-name.jpg
   git commit -m "Add new author: Author Name"
   git push
   ```

5. The author will automatically appear at: `/authors/author-name/`

### Editing Existing Content

1. Simply edit the markdown file in `_books/` or `_authors/`
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update book/author information"
   git push
   ```

## Testing Locally (Optional)

If you want to preview changes before pushing to GitHub:

### Prerequisites

- Ruby 2.7 or higher
- Bundler

### Setup and Run

```bash
cd /app/jekyll-site

# First time only: Install dependencies
bundle install

# Start local server
bundle exec jekyll serve

# Or use the included setup script
./setup.sh
```

Visit `http://localhost:4000` in your browser.

## Troubleshooting

### Site not updating after push

- GitHub Pages can take 1-2 minutes to rebuild
- Check the Actions tab in your repository for build status
- Clear your browser cache

### Custom domain not working

- Verify DNS records are correct
- Wait for DNS propagation (up to 24 hours)
- Ensure CNAME file exists in repository root with just: `praharsha.in`

### Images not showing

- Check file paths are correct (case-sensitive on GitHub Pages)
- Ensure images are committed and pushed to repository
- Check image file formats (JPG, PNG, GIF, SVG supported)

### Contact form not working

- Verify Formspree form ID is correct in `contact.html`
- Check Formspree dashboard for submissions
- Ensure form action URL is complete: `https://formspree.io/f/YOUR_ID`

## Customization

### Changing Colors

Edit `assets/css/main.css`:

```css
:root {
    --color-bg: #F8F6F3;        /* Page background */
    --color-text: #2C2C2C;      /* Main text */
    --color-accent: #5F6F52;    /* Links, buttons */
    --color-border: #D4C5B9;    /* Borders */
}
```

### Changing Fonts

1. Visit [Google Fonts](https://fonts.google.com)
2. Choose your fonts
3. Update the import in `_layouts/default.html`
4. Update CSS variables in `assets/css/main.css`

### Modifying Layout

- Sidebar: Edit `_includes/sidebar.html`
- Page templates: Edit files in `_layouts/`
- Styles: Edit `assets/css/main.css`

## Maintenance

### Regular Updates

```bash
# Pull latest changes (if working with others)
git pull

# Make your changes to content

# Commit and push
git add .
git commit -m "Describe your changes"
git push
```

### Backing Up

Your GitHub repository IS your backup! But you can also:

```bash
# Clone to another location
git clone https://github.com/YOUR_USERNAME/praharsha-website.git backup-folder
```

## Support and Resources

- **Jekyll Documentation:** https://jekyllrb.com/docs/
- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **Formspree Documentation:** https://help.formspree.io/
- **Markdown Guide:** https://www.markdownguide.org/

## Site Features Summary

✨ **What's Working:**
- Responsive design (desktop, tablet, mobile)
- Fixed sidebar with navigation and social links
- Clean URLs for all pages
- Markdown-driven content management
- Ready for GitHub Pages deployment
- Contact form integration ready
- SEO-friendly structure

📝 **Sample Content Included:**
- 6 sample books with descriptions
- 4 sample author biographies
- Fully functional navigation
- Contact page with form

🎨 **Design Features:**
- Minimalist clean aesthetic
- Traditional publishing feel
- Subtle, calm color palette
- Beautiful typography (Crimson Text, Libre Baskerville)
- Smooth hover effects and transitions
- Professional card-based layouts

## Quick Reference Commands

```bash
# Deploy/update site
git add .
git commit -m "Update content"
git push

# Test locally
bundle exec jekyll serve

# Add new book
cp _books/the-silent-mountains.md _books/new-book.md
# Edit file, add image, commit, push

# Add new author
cp _authors/rajesh-kumar.md _authors/new-author.md
# Edit file, add image, commit, push
```

---

**Your Jekyll site is located at:** `/app/jekyll-site/`

**Ready to deploy!** Follow the steps above to get your site live on GitHub Pages.
