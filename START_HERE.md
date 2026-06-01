# 📚 Praharsha Publication Website - Documentation Index

Welcome! Your Jekyll website is ready. Choose your starting point:

## 🚀 Quick Start (First Time Users)

**Start here if this is your first time:**

### Want to Preview Locally First?

**🐳 EASIEST: Use Docker (No Ruby Installation!)**
1. **[DOCKER_QUICKSTART.md](DOCKER_QUICKSTART.md)** - Preview in 2 minutes
   - Just need Docker installed
   - Run `./start.sh` and open http://localhost:4000
   - No Ruby, no Jekyll, no dependencies needed!

**📦 Traditional: Install Ruby/Jekyll**
2. **[QUICKSTART.md](QUICKSTART.md)** - Deploy directly to GitHub Pages
   - 5-minute overview
   - Essential steps only
   - Perfect for beginners

## 📖 Detailed Guides

2. **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Complete deployment instructions
   - Step-by-step GitHub Pages setup
   - Custom domain configuration
   - Post-deployment tasks
   - Content management guide
   - Troubleshooting section

3. **[HOW_IT_WORKS.md](HOW_IT_WORKS.md)** - Understanding your website
   - Site architecture diagrams
   - How Jekyll processes content
   - File organization explained
   - Update workflow
   - Maintenance checklist

4. **[README.md](README.md)** - Technical reference
   - Project structure
   - Local development setup
   - Customization options
   - API references

## 🎯 Quick Reference by Task

### "I want to deploy my site"
→ [QUICKSTART.md](QUICKSTART.md) or [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

### "I want to add a new book"
→ [DEPLOYMENT_GUIDE.md - Content Management](DEPLOYMENT_GUIDE.md#adding-a-new-book)

### "I want to add a new author"
→ [DEPLOYMENT_GUIDE.md - Content Management](DEPLOYMENT_GUIDE.md#adding-a-new-author)

### "I want to understand how it works"
→ [HOW_IT_WORKS.md](HOW_IT_WORKS.md)

### "I want to change colors/design"
→ [DEPLOYMENT_GUIDE.md - Customization](DEPLOYMENT_GUIDE.md#changing-colors)

### "I want to set up the contact form"
→ [DEPLOYMENT_GUIDE.md - Post-Deployment](DEPLOYMENT_GUIDE.md#2-set-up-contact-form)

### "I want to add my logo"
→ [DEPLOYMENT_GUIDE.md - Post-Deployment](DEPLOYMENT_GUIDE.md#3-add-your-logo)

### "My site isn't working"
→ [DEPLOYMENT_GUIDE.md - Troubleshooting](DEPLOYMENT_GUIDE.md#troubleshooting)

## 📁 What's Included

### Sample Content
- ✅ 6 sample books with descriptions
- ✅ 4 sample authors with biographies
- ✅ All pages fully functional
- ✅ Responsive design working

### Features
- ✅ Fixed right sidebar with logo and social links
- ✅ Markdown-driven content management
- ✅ Clean URLs (no .html or .md visible)
- ✅ Contact form ready (needs Formspree setup)
- ✅ Traditional, minimalist design
- ✅ Mobile responsive
- ✅ GitHub Pages ready
- ✅ Custom domain ready (praharsha.in)

## 🔧 Files You'll Edit Most

```
_books/              ← Add/edit book markdown files
_authors/            ← Add/edit author markdown files
assets/images/       ← Add book covers and author photos
_config.yml          ← Update social links and site settings
contact.html         ← Add Formspree form ID
_includes/sidebar.html ← Update logo
```

## 🎨 Design Specifications

- **Style:** Minimalist, traditional publishing aesthetic
- **Colors:** Warm cream background, charcoal text, muted olive accents
- **Fonts:** Crimson Text (headings), Libre Baskerville (body)
- **Layout:** Content area with fixed right sidebar

## ⚡ Quick Commands

```bash
# Test locally (optional - requires Ruby)
bundle install
bundle exec jekyll serve

# Deploy updates
git add .
git commit -m "Update content"
git push
```

## 📞 Need Help?

1. Check [DEPLOYMENT_GUIDE.md - Troubleshooting](DEPLOYMENT_GUIDE.md#troubleshooting)
2. Review [HOW_IT_WORKS.md](HOW_IT_WORKS.md) for architecture
3. Consult [README.md](README.md) for technical details

## ✅ Pre-Launch Checklist

Before making your site public:

- [ ] Read QUICKSTART.md or DEPLOYMENT_GUIDE.md
- [ ] Push code to GitHub
- [ ] Enable GitHub Pages
- [ ] Set up custom domain (praharsha.in)
- [ ] Update social media links
- [ ] Set up Formspree contact form
- [ ] Add your logo
- [ ] Replace sample content with real content
- [ ] Add real book covers and author photos
- [ ] Test on mobile devices
- [ ] Test contact form

## 🚢 Ready to Launch!

Your complete Jekyll website is in `/app/jekyll-site/`

**Next Step:** Open [QUICKSTART.md](QUICKSTART.md) and follow the deployment instructions!

---

**Built for:** Praharsha Publications (praharsha.in)  
**Type:** Jekyll static site  
**Hosting:** GitHub Pages (recommended)  
**Status:** ✅ Ready to deploy
