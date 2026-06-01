# Praharsha Publication Website - Quick Start

## What You Have

A complete Jekyll website ready to deploy to GitHub Pages!

## Next Steps

### 1. Test Locally (Optional)

If you have Ruby installed:
```bash
cd /app/jekyll-site
chmod +x setup.sh
./setup.sh
bundle exec jekyll serve
```

### 2. Deploy to GitHub Pages

**Step 1:** Create a new GitHub repository
- Go to https://github.com/new
- Name it: `praharsha-website` (or any name you prefer)
- Make it public
- Don't initialize with README

**Step 2:** Push your code
```bash
cd /app/jekyll-site
git init
git add .
git commit -m "Initial commit - Praharsha website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/praharsha-website.git
git push -u origin main
```

**Step 3:** Enable GitHub Pages
- Go to your repository on GitHub
- Click Settings > Pages
- Under "Source", select `main` branch and `/ (root)` folder
- Click Save
- Your site will be live at: `https://YOUR_USERNAME.github.io/praharsha-website/`

**Step 4:** Set up custom domain (praharsha.in)
- In GitHub Settings > Pages, enter `praharsha.in` in Custom domain field
- In your domain registrar, add these DNS records:
  ```
  A     @     185.199.108.153
  A     @     185.199.109.153
  A     @     185.199.110.153
  A     @     185.199.111.153
  CNAME www   YOUR_USERNAME.github.io
  ```
- Wait for DNS propagation (can take up to 24 hours)
- Enable "Enforce HTTPS" in GitHub Pages settings

### 3. Customize Content

**Add your logo:**
- Replace the placeholder in `_includes/sidebar.html`
- Add your logo image to `assets/images/`

**Update social links:**
- Edit `_config.yml` and update the `social:` section with your actual URLs

**Add book covers and author photos:**
- Add images to `assets/images/books/` and `assets/images/authors/`
- The markdown files already reference these paths

**Set up contact form:**
- Sign up at https://formspree.io (free)
- Replace `YOUR_FORM_ID` in `contact.html` with your Formspree form ID

### 4. Add More Content

**To add a new book:**
```bash
cd _books
cp the-silent-mountains.md your-new-book.md
# Edit with your book details
```

**To add a new author:**
```bash
cd _authors
cp rajesh-kumar.md your-new-author.md
# Edit with author details
```

## Need Help?

Check the full README.md for detailed instructions.

## Site Structure

- Home page: Shows featured books and authors
- Books page: Lists all books
- Authors page: Lists all authors
- Individual book pages: Clean URLs like `/books/book-title/`
- Individual author pages: Clean URLs like `/authors/author-name/`
- Contact page: Form for visitor inquiries
- Fixed sidebar: Logo, navigation, and social links

## Files Location

All files are in: `/app/jekyll-site/`

You can download this entire directory and push it to GitHub!