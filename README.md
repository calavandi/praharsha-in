# Praharsha Publication Website

A minimalist, markdown-driven Jekyll website for Praharsha publication house.

## Features

- **Markdown-Driven Content**: All books and authors are managed through simple markdown files
- **Fixed Sidebar**: Left-side panel with logo and social links that stays visible while scrolling
- **Clean URLs**: No `.md` or `.html` extensions exposed in URLs
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Contact Form**: Integrated contact form for visitor inquiries
- **Traditional Publishing Aesthetic**: Calm, sophisticated design with serif typography
- **Docker Support**: Run without installing Ruby/Jekyll locally

## Local Development

### Option 1: Using Docker (Recommended - No Setup Required!)

**Fastest way to preview without installing anything:**

```bash
# Navigate to the project directory
cd jekyll-site

# Start the site (Mac/Linux)
./start.sh

# Or on Windows
start.bat

# Or manually with docker-compose
docker-compose up
```

Open your browser to `http://localhost:4000`

**Stop the site:**
```bash
./stop.sh
# Or: Ctrl+C if running in foreground
```

📚 **See [DOCKER_GUIDE.md](DOCKER_GUIDE.md) for complete Docker documentation**

### Option 2: Native Ruby Installation

**Prerequisites:**
- Ruby 2.7 or higher
- Bundler

**Setup:**

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   bundle install
   ```

4. Run the local server:
   ```bash
   bundle exec jekyll serve
   ```

5. Open your browser to `http://localhost:4000`

## Deploying to GitHub Pages

### Option 1: Using GitHub Pages Directly

1. Create a new repository on GitHub (e.g., `praharsha-website`)
2. Push this code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/praharsha-website.git
   git push -u origin main
   ```

3. Go to repository Settings > Pages
4. Under "Source", select the `main` branch and `/ (root)` folder
5. Click Save
6. Your site will be published at `https://YOUR_USERNAME.github.io/praharsha-website/`

### Option 2: Using Custom Domain (praharsha.in)

1. Follow steps 1-5 from Option 1
2. In your repository, create a file named `CNAME` in the root directory with content:
   ```
   praharsha.in
   ```
3. In your domain registrar (where you bought praharsha.in), add these DNS records:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   YOUR_USERNAME.github.io
   ```
4. In GitHub repository Settings > Pages, enter `praharsha.in` in the Custom domain field
5. Enable "Enforce HTTPS"

## Content Management

### Adding a New Book

1. Create a new markdown file in `_books/` directory (e.g., `_books/new-book-title.md`)
2. Add front matter and content:
   ```markdown
   ---
   title: Book Title
   author: Author Name
   image: /assets/images/books/book-cover.jpg
   price: ₹499
   isbn: 978-93-12345-67-8
   ---
   
   Book description goes here...
   ```
3. Add the book cover image to `assets/images/books/`
4. The book will automatically appear on the Books page with URL: `/books/book-title/`

### Adding a New Author

1. Create a new markdown file in `_authors/` directory (e.g., `_authors/author-name.md`)
2. Add front matter and content:
   ```markdown
   ---
   title: Author Full Name
   image: /assets/images/authors/author-photo.jpg
   ---
   
   Author biography goes here...
   ```
3. Add the author photo to `assets/images/authors/`
4. The author will automatically appear on the Authors page with URL: `/authors/author-name/`

### Updating Social Media Links

Edit `_config.yml` and update the social section:
```yaml
social:
  twitter: "https://twitter.com/your-handle"
  facebook: "https://facebook.com/your-page"
  instagram: "https://instagram.com/your-profile"
```

### Updating the Logo

1. Replace the logo placeholder in `_includes/sidebar.html`
2. Add your logo image to `assets/images/`
3. Update the sidebar include:
   ```html
   <div class="logo-section">
       <a href="{{ '/' | relative_url }}">
           <img src="{{ '/assets/images/logo.png' | relative_url }}" alt="Praharsha" class="logo">
       </a>
   </div>
   ```

### Setting Up the Contact Form

1. Sign up at [Formspree](https://formspree.io) (free plan available)
2. Create a new form
3. Copy your form endpoint ID
4. Edit `contact.html` and replace `YOUR_FORM_ID` with your actual Formspree form ID:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## Project Structure

```
.
├── _authors/           # Author markdown files
├── _books/             # Book markdown files
├── _includes/          # Reusable components (sidebar, etc.)
├── _layouts/           # Page templates
├── assets/
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── images/         # Images (books, authors, etc.)
├── _config.yml         # Jekyll configuration
├── index.html          # Home page
├── books.html          # Books listing page
├── authors.html        # Authors listing page
├── contact.html        # Contact page
└── Gemfile             # Ruby dependencies
```

## Customization

### Colors

Edit the CSS variables in `assets/css/main.css`:
```css
:root {
    --color-bg: #F8F6F3;           /* Background color */
    --color-text: #2C2C2C;         /* Text color */
    --color-accent: #5F6F52;       /* Accent color */
    --color-accent-light: #8A9A7F; /* Light accent */
    --color-border: #D4C5B9;       /* Border color */
    --color-white: #FFFFFF;        /* White */
}
```

### Fonts

To change fonts, update the Google Fonts import in `_layouts/default.html` and the CSS variables:
```css
:root {
    --font-serif: 'Your Serif Font', serif;
    --font-body: 'Your Body Font', serif;
}
```

## Support

For issues or questions, please open an issue on GitHub or contact through the website's contact form.

## License

All rights reserved © 2026 Praharsha