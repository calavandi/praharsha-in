# How to Edit Buy Information

## Location of Buy Section

**File:** `_layouts/book.html`

This is the file that controls what appears on every book detail page, including the "How to Buy" section.

## What to Edit

### 1. Email Address

**Find this line (around line 120):**
```html
<a href="mailto:orders@praharsha.in">orders@praharsha.in</a>
```

**Change to your email:**
```html
<a href="mailto:your-email@praharsha.in">your-email@praharsha.in</a>
```

### 2. WhatsApp Number

**Find this line (around line 130):**
```html
<a href="https://wa.me/919XXXXXXXXX?text=Hi!%20I%20want%20to%20buy%20{{ page.title | url_encode }}" 
```

**Replace with your WhatsApp number:**
```html
<a href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20buy%20{{ page.title | url_encode }}"
```

**Format:** `919876543210` (country code + number, no spaces or symbols)

### 3. WhatsApp QR Code

**Current placeholder:**
```html
<img src="{{ '/assets/images/whatsapp-qr.png' | relative_url }}" alt="WhatsApp QR Code">
```

**Steps to add your QR code:**

#### Option 1: Generate WhatsApp QR Code

1. **Go to:** https://wa.me/qr or https://api.qrserver.com/v1/create-qr-code/
2. **For wa.me/qr:**
   - Open WhatsApp Web
   - Click "Link a device"
   - Or use WhatsApp Business app to get your QR code

3. **Or generate manually:**
   - Visit: `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://wa.me/919876543210`
   - Replace `919876543210` with your number
   - Right-click and save image

4. **Save the QR code as:**
   - File name: `whatsapp-qr.png`
   - Location: `assets/images/whatsapp-qr.png`
   - Size: 400x400px recommended

#### Option 2: Use WhatsApp Business QR

If you have WhatsApp Business:
1. Open WhatsApp Business app
2. Go to Settings → Business Tools → Short Link
3. Download your QR code
4. Save as `whatsapp-qr.png` in `assets/images/`

### 4. Shipping Terms

**Find this section (around line 140):**
```html
<div class="shipping-info">
    <h5>Shipping & Delivery</h5>
    <ul>
        <li>Free shipping across India for orders above ₹500</li>
        <li>Delivery within 5-7 business days</li>
        <li>Cash on Delivery available for select locations</li>
    </ul>
</div>
```

**Edit as needed:**
- Change minimum order for free shipping
- Update delivery timeframe
- Add/remove shipping options

## Current Purchase Methods (2 Cards)

### Card 1: Email
- Direct email link
- Shows your email address

### Card 2: WhatsApp
- QR code for scanning
- Direct WhatsApp link (click to chat)
- Auto-fills message with book title

## Adding More Methods (Optional)

If you want to add phone or office visit back:

**Add after the WhatsApp card:**
```html
<div class="purchase-method">
    <h5><i class="fas fa-phone"></i> Via Phone</h5>
    <p>Call us at <strong>+91-1234-567890</strong> (Mon-Sat, 10 AM - 6 PM IST)</p>
</div>
```

## Quick Reference

| Item | Location | What to Change |
|------|----------|----------------|
| **File** | `_layouts/book.html` | Main file to edit |
| **Email** | Line ~120 | Replace `orders@praharsha.in` |
| **WhatsApp Number** | Line ~130 | Replace `919XXXXXXXXX` |
| **QR Code** | `assets/images/whatsapp-qr.png` | Add your QR image here |
| **Shipping Terms** | Line ~140 | Edit list items |

## Testing Your Changes

1. Edit `_layouts/book.html`
2. Add your QR code to `assets/images/whatsapp-qr.png`
3. Restart Jekyll: `docker compose restart`
4. Go to any book detail page
5. Click "How to Buy This Book"
6. Verify:
   - Email link works
   - WhatsApp number is correct
   - QR code appears
   - "Click here to message" link works

## WhatsApp Link Format

**Basic format:**
```
https://wa.me/COUNTRY_CODE_PHONE_NUMBER
```

**With pre-filled message:**
```
https://wa.me/919876543210?text=Your%20message%20here
```

**Current implementation:**
```
https://wa.me/919XXXXXXXXX?text=Hi!%20I%20want%20to%20buy%20{{ page.title | url_encode }}
```

This automatically includes the book title in the message!

## Example Setup

```html
<!-- Email -->
<a href="mailto:sales@praharsha.in">sales@praharsha.in</a>

<!-- WhatsApp -->
<a href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20buy%20{{ page.title | url_encode }}">

<!-- QR Code -->
<img src="{{ '/assets/images/whatsapp-qr.png' | relative_url }}" alt="WhatsApp QR">
```

## Tips

1. **Test WhatsApp link** - Click it to make sure it opens WhatsApp with your number
2. **QR Code size** - Keep it 400x400px for best quality
3. **Keep it simple** - 2 methods (Email + WhatsApp) is cleaner than 4+
4. **Update regularly** - If you change phone numbers, update both the link AND QR code

## Need Help?

- File location: `/app/jekyll-site/_layouts/book.html`
- QR code location: `/app/jekyll-site/assets/images/whatsapp-qr.png`
- After editing, restart: `docker compose restart`

---

**Your buy section now has just 2 clean methods with WhatsApp QR code support!**
