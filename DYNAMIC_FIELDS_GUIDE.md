# Dynamic Book Fields Guide

## Current Book Fields

Your books now support the following fields (all optional except title):

### Required:
- `title` - Book title

### Standard Fields:
- `subtitle` - Book subtitle
- `author` - Author name
- `image` - Path to book cover image
- `year_of_publication` - Publication year (number)
- `cost` - Price (e.g., ₹499)
- `isbn` - ISBN number
- `pages` - Number of pages (number)
- `size` - Physical dimensions
- `binding` - Type of binding (Paperback, Hardcover, etc.)
- `extras` - Additional information

### List Fields (can have multiple values):
- `categories` - List of categories
- `languages` - List of languages
- `genres` - List of genres
- `publishers` - List of publishers

## Example Book File

```markdown
---
title: The Silent Mountains
subtitle: A Journey Through Solitude
categories:
  - Fiction
  - Philosophy
  - Adventure
author: Rajesh Kumar
image: /assets/images/books/silent-mountains.jpg
year_of_publication: 2023
languages:
  - English
  - Hindi
genres:
  - Literary Fiction
  - Philosophical Novel
publishers:
  - Praharsha Publications
size: "5.5 x 8.5 inches"
pages: 384
binding: Paperback
cost: ₹499
isbn: 978-93-12345-67-8
extras: "Includes author interview and discussion guide"
---

Your book description goes here. This is the main content that appears on the book detail page.

You can have multiple paragraphs, and use markdown formatting like **bold** and *italic*.
```

## How to Add a New Book Field

### Step 1: Add field to book markdown file

In your book's `.md` file (e.g., `_books/my-book.md`), add the new field in the front matter:

```markdown
---
title: My Book
author: Author Name
new_field: "Value here"
---
```

### Step 2: Update the book layout

Edit `_layouts/book.html` and add a section to display your field:

```html
{% if page.new_field %}
<div class="meta-item">
    <strong>New Field Label:</strong> {{ page.new_field }}
</div>
{% endif %}
```

Place this inside the `<div class="book-meta">` section where you want it to appear.

### Step 3: Add to book card (optional)

If you want the field to show on the books listing page, edit `books.html`:

```html
{% if book.new_field %}
<p class="book-card-new-field">{{ book.new_field }}</p>
{% endif %}
```

### Step 4: Add to sorting (optional)

To make the field sortable:

1. **Edit `books.html`** - Add data attribute to book card:
```html
<article class="book-card" 
         data-new-field="{{ book.new_field | default: '' | downcase }}"
         ...>
```

2. **Add sort option** in the select dropdown:
```html
<option value="new-field">New Field (A-Z)</option>
```

3. **Edit `assets/js/main.js`** - Add case to sortBooks function:
```javascript
case 'new-field':
    return a.dataset.newField.localeCompare(b.dataset.newField);
```

## Field Types

### Text Fields
Simple text values:
```yaml
field_name: "Text value"
```

### Number Fields
Numbers (for sorting by cost, year, pages):
```yaml
pages: 384
year_of_publication: 2023
```

### List Fields
Multiple values:
```yaml
genres:
  - Fiction
  - Mystery
  - Thriller
```

### Long Text
Use quotes for multi-line text:
```yaml
extras: "This book includes bonus content, author interview, and reading guide"
```

## Displaying Lists

To display list fields, use Jekyll's join filter:

```html
{{ page.genres | join: ', ' }}
```

This will output: "Fiction, Mystery, Thriller"

## Sorting by New Fields

Books can be sorted by:
- Title (A-Z or Z-A)
- Author (A-Z or Z-A)
- Year (Newest or Oldest)
- Cost (Low to High or High to Low)
- Language (A-Z)
- Genre (A-Z)
- Publisher (A-Z)

To add sorting for a new field, follow Step 4 above.

## Example: Adding a "Series" Field

### 1. Add to book markdown:
```yaml
---
title: Book Three
series: "The Great Trilogy"
series_number: 3
---
```

### 2. Add to book.html layout:
```html
{% if page.series %}
<div class="meta-item">
    <strong>Series:</strong> {{ page.series }}
    {% if page.series_number %}
    (Book {{ page.series_number }})
    {% endif %}
</div>
{% endif %}
```

### 3. Add to books.html for display:
```html
{% if book.series %}
<p class="book-card-series">{{ book.series }}</p>
{% endif %}
```

### 4. Add sorting:

In books.html:
```html
<article class="book-card" 
         data-series="{{ book.series | default: '' | downcase }}"
         ...>
```

Add dropdown option:
```html
<option value="series">Series (A-Z)</option>
```

In main.js:
```javascript
case 'series':
    return a.dataset.series.localeCompare(b.dataset.series);
```

## Tips

1. **Always use lowercase with hyphens** for field names (e.g., `year_of_publication` not `Year Of Publication`)

2. **Use quotes** for text with special characters or colons:
   ```yaml
   subtitle: "A Journey: Through Time"
   ```

3. **Lists need proper indentation**:
   ```yaml
   genres:
     - Fiction
     - Mystery
   ```

4. **Optional fields** - If a field is empty, it won't display (thanks to `{% if %}` checks)

5. **Test on detail page first** - Make sure the field displays correctly on the book detail page before adding it to listings

## Common Issues

**Field not showing?**
- Check spelling in markdown front matter
- Make sure you added the `{% if page.field_name %}` check in the layout
- Rebuild Jekyll: `docker compose restart`

**Sorting not working?**
- Check data attribute name matches (use lowercase, no underscores in data attributes)
- Make sure the case statement in main.js matches the select option value

**List showing weird?**
- Use `| join: ', '` to display lists properly
- For first item only: `{{ page.genres | first }}`

---

**All fields are optional and dynamic - add as many as you need!**
