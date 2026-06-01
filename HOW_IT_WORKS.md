# Praharsha Website - How It Works

## Site Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     PRAHARSHA WEBSITE                        │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────┬──────────────────────────────────┐
│     MAIN CONTENT AREA    │      FIXED RIGHT SIDEBAR         │
│                          │                                  │
│  ┌────────────────────┐  │  ┌────────────────────────────┐ │
│  │   Homepage         │  │  │  PRAHARSHA (Logo)          │ │
│  │   - Hero section   │  │  └────────────────────────────┘ │
│  │   - Featured books │  │                                  │
│  │   - Featured authors│ │  ┌────────────────────────────┐ │
│  └────────────────────┘  │  │  Navigation                │ │
│                          │  │  • Home                     │ │
│  ┌────────────────────┐  │  │  • Books                   │ │
│  │   Books Page       │  │  │  • Authors                 │ │
│  │   - Grid of books  │  │  │  • Contact                 │ │
│  └────────────────────┘  │  └────────────────────────────┘ │
│                          │                                  │
│  ┌────────────────────┐  │  ┌────────────────────────────┐ │
│  │   Authors Page     │  │  │  Social Links              │ │
│  │   - Grid of authors│  │  │  🐦 Twitter                │ │
│  └────────────────────┘  │  │  📘 Facebook               │ │
│                          │  │  📷 Instagram              │ │
│  ┌────────────────────┐  │  └────────────────────────────┘ │
│  │   Contact Page     │  │                                  │
│  │   - Contact form   │  │  ┌────────────────────────────┐ │
│  └────────────────────┘  │  │  © 2026 Praharsha          │ │
│                          │  └────────────────────────────┘ │
└──────────────────────────┴──────────────────────────────────┘
```

## URL Structure

```
praharsha.in/
├── /                          → Homepage
├── /books/                    → All books listing
│   ├── /books/the-silent-mountains/
│   ├── /books/echoes-of-tomorrow/
│   ├── /books/the-collectors-dilemma/
│   ├── /books/monsoon-memories/
│   ├── /books/the-algorithm-of-desire/
│   └── /books/homecoming/
├── /authors/                  → All authors listing
│   ├── /authors/rajesh-kumar/
│   ├── /authors/priya-sharma/
│   ├── /authors/anil-desai/
│   └── /authors/kavita-nair/
└── /contact/                  → Contact form
```

**Note:** URLs are clean - no `.html` or `.md` extensions!

## Content Flow

```
┌─────────────────────┐
│  Markdown Files     │
│  (_books/*.md)      │
│  (_authors/*.md)    │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│  Jekyll Engine      │
│  (Processes MD)     │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│  HTML Templates     │
│  (_layouts/*.html)  │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│  Static HTML Pages  │
│  (_site/ directory) │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│  GitHub Pages       │
│  (praharsha.in)     │
└─────────────────────┘
```

## How Collections Work

### Books Collection

**File:** `_books/the-silent-mountains.md`

```markdown
---
title: The Silent Mountains
author: Rajesh Kumar
image: /assets/images/books/silent-mountains.jpg
price: ₹499
isbn: 978-93-12345-67-8
---

Book description here...
```

**Becomes:** `/books/the-silent-mountains/`

**Displays:**
- On homepage (if featured)
- In books grid at `/books/`
- Individual page with full details

### Authors Collection

**File:** `_authors/rajesh-kumar.md`

```markdown
---
title: Rajesh Kumar
image: /assets/images/authors/rajesh-kumar.jpg
---

Author biography here...
```

**Becomes:** `/authors/rajesh-kumar/`

**Displays:**
- On homepage (if featured)
- In authors grid at `/authors/`
- Individual page with full bio

## Design System

### Color Palette

```
┌─────────────────────────────────────────────┐
│ Background (#F8F6F3) - Warm Cream           │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                             │
│ Text (#2C2C2C) - Deep Charcoal              │
│ ████████████████████████████████████████    │
│                                             │
│ Accent (#5F6F52) - Muted Olive Green        │
│ ████████████████████                        │
│                                             │
│ Border (#D4C5B9) - Soft Beige               │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                        │
└─────────────────────────────────────────────┘
```

### Typography

- **Headings:** Crimson Text (Serif)
- **Body Text:** Libre Baskerville (Serif)
- **Style:** Traditional, literary, elegant

### Layout

- **Desktop:** Content (left) + Fixed Sidebar (right)
- **Mobile:** Stacked content + Bottom navigation bar

## File Organization

```
jekyll-site/
│
├── Content Management
│   ├── _books/              ← Add book markdown files here
│   ├── _authors/            ← Add author markdown files here
│   └── assets/images/       ← Add images here
│       ├── books/           ← Book covers
│       └── authors/         ← Author photos
│
├── Design & Layout
│   ├── _layouts/            ← HTML templates
│   │   ├── default.html     ← Base template
│   │   ├── book.html        ← Book page template
│   │   ├── author.html      ← Author page template
│   │   └── page.html        ← Generic page template
│   ├── _includes/           ← Reusable components
│   │   └── sidebar.html     ← Fixed sidebar
│   └── assets/css/          ← Stylesheets
│       └── main.css         ← All styles
│
├── Pages
│   ├── index.html           ← Homepage
│   ├── books.html           ← Books listing
│   ├── authors.html         ← Authors listing
│   └── contact.html         ← Contact form
│
└── Configuration
    ├── _config.yml          ← Site settings
    ├── Gemfile              ← Ruby dependencies
    └── CNAME                ← Custom domain
```

## Update Workflow

```
┌─────────────────────────────────────────────────────┐
│  1. MAKE CHANGES LOCALLY                             │
│  • Edit markdown files in _books/ or _authors/      │
│  • Add/update images in assets/images/              │
│  • Modify styles in assets/css/main.css             │
└────────────────────┬────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────┐
│  2. TEST LOCALLY (Optional)                          │
│  $ bundle exec jekyll serve                         │
│  Visit: http://localhost:4000                       │
└────────────────────┬────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────┐
│  3. COMMIT CHANGES                                   │
│  $ git add .                                        │
│  $ git commit -m "Add new book"                     │
└────────────────────┬────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────┐
│  4. PUSH TO GITHUB                                   │
│  $ git push                                         │
└────────────────────┬────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────┐
│  5. GITHUB PAGES AUTO-BUILDS                         │
│  • Jekyll runs automatically                        │
│  • Site updates in 1-2 minutes                      │
│  • Live at praharsha.in                             │
└─────────────────────────────────────────────────────┘
```

## Key Features

### ✅ What You Get

1. **Markdown-Driven**
   - Easy content management
   - No HTML knowledge needed
   - Version controlled

2. **Fixed Sidebar**
   - Always visible while scrolling
   - Logo/branding
   - Navigation links
   - Social media icons
   - Responsive (becomes bottom bar on mobile)

3. **Clean URLs**
   - `/books/book-title/` instead of `/books/book-title.html`
   - Professional appearance
   - SEO friendly

4. **Responsive Design**
   - Desktop: Side-by-side layout
   - Tablet: Optimized spacing
   - Mobile: Stacked with bottom nav

5. **GitHub Pages Ready**
   - Free hosting
   - Custom domain support (praharsha.in)
   - HTTPS enabled
   - Automatic deployments

## Maintenance Tasks

### Daily/Weekly
- Check contact form submissions (Formspree dashboard)
- Respond to inquiries

### As Needed
- Add new books (create .md file, add cover image)
- Add new authors (create .md file, add photo)
- Update existing content (edit .md files)

### Monthly
- Review and update featured content on homepage
- Check analytics (if set up)
- Update social media links if changed

### Annually
- Renew domain (praharsha.in)
- Review and update design if needed
- Archive old content if necessary

## Success Checklist

Before launch:
- [ ] Update social media links in `_config.yml`
- [ ] Set up Formspree for contact form
- [ ] Add your logo to sidebar
- [ ] Add real book cover images
- [ ] Add real author photos
- [ ] Update sample content with real content
- [ ] Test on mobile devices
- [ ] Set up custom domain DNS
- [ ] Enable HTTPS on GitHub Pages
- [ ] Test contact form submission

After launch:
- [ ] Submit to search engines
- [ ] Share on social media
- [ ] Monitor contact form submissions
- [ ] Gather feedback from users
- [ ] Plan content updates

## Quick Tips

💡 **Content Tips:**
- Keep book descriptions engaging but concise
- Use high-quality images (600x900px for books)
- Author bios should be personal and interesting
- Update regularly to keep site fresh

💡 **Technical Tips:**
- Always test locally before pushing (if possible)
- Keep commits small and descriptive
- Back up images separately
- Monitor GitHub Actions for build errors

💡 **Design Tips:**
- Maintain consistent image sizes
- Use the established color palette
- Don't overcrowd pages
- Let whitespace work for you

---

**Ready to launch your beautiful publication website!** 🚀
