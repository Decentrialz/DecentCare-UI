# XSL Sitemap Styling Guide

## Overview
All XML sitemaps are automatically styled with XSL (Extensible Stylesheet Language) for beautiful browser viewing while remaining machine-readable for search engines.

## 🎨 Visual Design

### Color Palette (DecentCare Theme)
```
Background Gradient: 
  - Start: hsl(191, 78%, 20%) - Deep Teal
  - End:   hsl(173, 58%, 39%) - Teal Accent

Primary Elements:
  - Headers:      hsl(191, 78%, 20%) - Deep Teal
  - Links:        hsl(174, 62%, 47%) - Teal Accent
  - Hover BG:     hsl(190, 50%, 97%) - Light Teal
  - Text:         hsl(195, 20%, 45%) - Muted Gray

Priority Colors:
  - High (≥0.9):  hsl(142, 76%, 36%) - Green
  - Medium (≥0.7): hsl(45, 100%, 51%) - Yellow
  - Low (<0.7):   hsl(217, 91%, 60%) - Blue
```

### Layout Components

#### 1. Header Section
- **Logo Badge:** "DC" in gradient circle
- **Title:** Large, bold "XML Sitemap" or "XML Sitemap Index"
- **Subtitle:** Description with URL count
- **Background:** White card with shadow

#### 2. Statistics Cards
- **Grid Layout:** 2-3 cards per row
- **Content:**
  - Total URLs/Sitemaps count
  - Sitemap type (URLset/Index)
  - Last updated date
- **Style:** Gradient background, rounded corners

#### 3. Info Box (URL Sitemaps Only)
- **Content:** "What is a sitemap?" explanation
- **Style:** Light gradient with teal left border

#### 4. Data Table
- **Columns (URL Sitemap):**
  - # (Row number)
  - URL (Clickable link)
  - Last Modified (Date)
  - Change Frequency
  - Priority (Color-coded)

- **Columns (Index):**
  - # (Row number)
  - Sitemap URL (Clickable link)
  - Last Modified (Date)

- **Header:** Dark teal background, white text
- **Rows:** White with hover effects

#### 5. Footer
- **Content:** DecentCare branding and tagline
- **Style:** Semi-transparent white on gradient

### Interactions

#### Hover Effects
```css
URL Rows:
  - Background: Light teal gradient
  - Border-left: 4px teal accent
  - Slight padding shift
  - Smooth 0.3s transition

Links:
  - Color darkens
  - Underline appears
  - Translates 4px right
```

#### Responsive Breakpoints
```
Desktop (>968px):
  - 5 columns (full table)
  - All info visible

Tablet (640px - 968px):
  - 3 columns (hide freq/priority)
  - Compressed padding

Mobile (<640px):
  - 2 columns (# and URL only)
  - Hide dates
  - Stack vertically
```

## 🔧 Technical Implementation

### XSL Files

#### sitemap.xsl (For URL Sitemaps)
**Path:** `/public/sitemap.xsl`

**Used By:**
- /sitemap-main.xml
- /sitemap-blog.xml
- /sitemap-services.xml

**Features:**
- Displays all URL properties
- Color-coded priorities
- Change frequency indicators
- Explanatory info box

#### sitemap-index.xsl (For Sitemap Index)
**Path:** `/public/sitemap-index.xsl`

**Used By:**
- /sitemap.xml

**Features:**
- Lists child sitemaps
- Simpler 3-column layout
- No priority/frequency columns

### How to Apply XSL to New Sitemaps

Add this processing instruction to your XML output:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- URLs here -->
</urlset>
```

For sitemap index:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Sitemaps here -->
</sitemapindex>
```

## 🌐 Browser Support

### Fully Supported
- ✅ Chrome/Edge (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (all versions)
- ✅ Opera (all versions)

### Search Engine Crawlers
- ✅ Googlebot: Ignores XSL, reads XML
- ✅ Bingbot: Ignores XSL, reads XML
- ✅ All crawlers: Only parse XML structure

## 📊 Performance

### Load Times
- **XSL File Size:** ~6KB (sitemap.xsl), ~4KB (sitemap-index.xsl)
- **Transform Time:** <50ms in modern browsers
- **No JavaScript:** Pure XSL transformation
- **Cached:** XSL files cached by browser

### SEO Impact
- **Zero impact:** Search engines ignore XSL
- **XML remains standard:** Fully compliant with sitemap protocol
- **Validation:** Passes all sitemap validators

## 🎯 Customization Guide

### Changing Colors

Edit the XSL files in `/public/`:

```xsl
<style>
  body {
    /* Change gradient colors */
    background: linear-gradient(135deg, YOUR_COLOR_1, YOUR_COLOR_2);
  }
  
  h1 {
    /* Change title color */
    color: YOUR_PRIMARY_COLOR;
  }
  
  .url-link {
    /* Change link color */
    color: YOUR_ACCENT_COLOR;
  }
</style>
```

### Adding New Columns

To add a new column to the URL sitemap:

1. Update table header in XSL:
```xsl
<div class="table-header">
  <div>#</div>
  <div>URL</div>
  <div>Your New Column</div>
  <!-- ... -->
</div>
```

2. Add data cell:
```xsl
<div class="url-row">
  <div><xsl:value-of select="position()"/></div>
  <a><xsl:value-of select="sitemap:loc"/></a>
  <div><xsl:value-of select="sitemap:yourfield"/></div>
  <!-- ... -->
</div>
```

3. Update grid columns:
```css
grid-template-columns: 60px 1fr 150px /* your width */;
```

### Changing Logo

Edit the logo section:
```xsl
<div class="logo">DC</div>
<!-- Change to your initials or icon -->
```

Or replace with image:
```xsl
<img src="/your-logo.svg" alt="Logo" style="width: 50px;"/>
```

## 📱 Mobile Experience

### Mobile Optimizations
- **Touch-friendly:** Large tap targets
- **Readable:** Appropriate font sizes
- **Fast:** No heavy assets
- **Simplified:** Hides non-essential columns
- **Vertical scroll:** Table adapts to narrow screens

### Tested On
- iPhone (Safari, Chrome)
- Android (Chrome, Firefox)
- iPad (Safari)
- Tablets (various)

## 🔍 Testing Your Styled Sitemaps

### Local Testing
1. Run: `npm run dev` or `npm start`
2. Visit: http://localhost:3000/sitemap.xml
3. Visit: http://localhost:3000/sitemap-main.xml
4. Visit: http://localhost:3000/sitemap-blog.xml

### Production URLs
```
Main Index:  https://decentcare.com/sitemap.xml
Main Pages:  https://decentcare.com/sitemap-main.xml
Blog Posts:  https://decentcare.com/sitemap-blog.xml
Services:    https://decentcare.com/sitemap-services.xml
```

### Validation
- **XML Validation:** https://www.xmlvalidation.com/
- **Sitemap Validation:** Google Search Console
- **Browser Test:** Open in Chrome/Firefox/Safari
- **Mobile Test:** Use browser dev tools device emulation

## 💡 Best Practices

### Do's
- ✅ Keep XSL files in `/public/` for easy access
- ✅ Use relative paths for XSL references
- ✅ Test in multiple browsers
- ✅ Keep styling responsive
- ✅ Match your brand colors

### Don'ts
- ❌ Don't add JavaScript to XSL (breaks in some browsers)
- ❌ Don't use external CSS files (keep styles inline)
- ❌ Don't make XSL files too large (impacts transform speed)
- ❌ Don't modify XML structure for styling (breaks SEO)

## 🚀 Advanced Features

### Future Enhancements
- Search/filter functionality
- Sorting by date/priority
- Export options
- Dark mode toggle
- Language switching

### Adding Images
```xsl
<xsl:if test="image:image">
  <img src="{image:image/image:loc}" alt="Image" />
</xsl:if>
```

### Adding Videos
```xsl
<xsl:if test="video:video">
  <div class="video-info">
    <xsl:value-of select="video:video/video:title"/>
  </div>
</xsl:if>
```

## 📚 Resources

- **XSL Tutorial:** https://www.w3schools.com/xml/xsl_intro.asp
- **Sitemap Protocol:** https://www.sitemaps.org/protocol.html
- **Google Guidelines:** https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **XSL Validator:** https://www.freeformatter.com/xsl-transformer.html

---

**Created:** July 8, 2026  
**Theme:** DecentCare Teal Palette  
**Files:** 2 XSL stylesheets, 4 styled sitemaps
