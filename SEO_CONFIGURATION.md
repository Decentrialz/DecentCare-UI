# SEO Configuration - Robots.txt & Sitemap

## Overview
This document describes the robots.txt and sitemap implementation for the DecentCare website, ensuring proper search engine crawling and SEO compliance.

## Files Created

### 1. `/app/robots.ts`
Dynamic robots.txt generator using Next.js Metadata API.

**Features:**
- ✅ Accessible at `/robots.txt`
- ✅ Configures crawl directives for search engines
- ✅ Blocks non-indexable sections (API routes, staff pages, QR codes, tracking)
- ✅ Blocks AI scraping bots (GPTBot, ChatGPT-User, CCBot, anthropic-ai)
- ✅ References sitemap URL
- ✅ Environment-based site URL configuration

**Allowed Routes:**
- `/` - Homepage
- `/about` - About page
- `/blog` and `/blog/*` - All blog posts
- `/services` and `/services/*` - All service pages
- `/success` - Success stories
- `/contact` - Contact page
- `/luxHospital` - Hospital showcase

**Blocked Routes:**
- `/api/*` - API endpoints
- `/staff/*` - Staff-only pages
- `/qr` - QR code generation
- `/tracking` - Internal tracking pages
- `/*.json$` - JSON files
- `/*?*utm_*` - URLs with UTM parameters

### 2. `/app/sitemap.ts`
Dynamic sitemap generator that includes static and dynamic content.

**Features:**
- ✅ Accessible at `/sitemap.xml`
- ✅ Includes all static pages with appropriate priorities
- ✅ Dynamically fetches blog posts from Sanity CMS
- ✅ Revalidates every hour (3600 seconds)
- ✅ Includes lastModified dates for all URLs
- ✅ Sets changeFrequency for search engine hints
- ✅ SEO priority levels configured per page type

**Priority Levels:**
- **1.0** - Homepage
- **0.9** - Blog listing, Services overview
- **0.8** - About, Individual services, Success stories
- **0.7** - Contact, Blog posts, Case studies

### 3. `/.env.example`
Environment variable template including the site URL configuration.

## Configuration

### Environment Variables
Add to your `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://decentcare.com
```

**Note:** If not set, defaults to `https://decentcare.com`

### Customization

#### Update Allowed Routes
Edit `/app/robots.ts`:
```typescript
allow: [
  '/',
  '/your-new-page',
  // Add more routes
],
```

#### Add Static Pages to Sitemap
Edit `/app/sitemap.ts`:
```typescript
{
  url: `${baseUrl}/your-new-page`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
},
```

## Validation

### Local Testing
1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. Access the files:
   - Robots.txt: http://localhost:3000/robots.txt
   - Sitemap: http://localhost:3000/sitemap.xml

### Production Testing
- Robots.txt: https://decentcare.com/robots.txt
- Sitemap: https://decentcare.com/sitemap.xml

### Validation Tools
- **Google Search Console**: Submit sitemap and monitor indexing
- **Bing Webmaster Tools**: Submit sitemap
- **Robots.txt Tester**: Use Google Search Console's robots.txt Tester
- **Online Validators**:
  - https://www.google.com/webmasters/tools/robots-testing-tool
  - https://technicalseo.com/tools/robots-txt/

## SEO Best Practices Implemented

✅ **Proper Crawl Directives**: Clear allow/disallow rules
✅ **Sitemap Discovery**: Robots.txt references sitemap
✅ **Dynamic Content**: Blog posts automatically included
✅ **Change Frequency**: Hints for search engine crawl scheduling
✅ **Priority Signals**: Guides search engines on important pages
✅ **AI Bot Protection**: Blocks content scraping bots
✅ **Clean URLs**: Excludes tracking parameters from indexing
✅ **API Protection**: Prevents API endpoint indexing
✅ **Hourly Revalidation**: Fresh sitemap with new blog posts

## Monitoring & Maintenance

### Google Search Console Setup
1. Add property for your domain
2. Submit sitemap: `https://decentcare.com/sitemap.xml`
3. Monitor:
   - Coverage reports
   - Index status
   - Crawl errors
   - Mobile usability

### Regular Checks
- **Weekly**: Check crawl errors in Search Console
- **Monthly**: Verify sitemap includes new pages
- **Quarterly**: Review robots.txt for new routes to block/allow

### When to Update

**Update robots.ts when:**
- Adding new public pages that should be indexed
- Adding new restricted areas that should be blocked
- Changing URL structure

**Update sitemap.ts when:**
- Adding new static pages
- Adding new dynamic content types
- Changing URL structure

## Troubleshooting

### Robots.txt Not Accessible
- Ensure build was successful
- Check no middleware is blocking the route
- Verify no conflicting static file in `/public/robots.txt`

### Sitemap Errors
- Check Sanity connection if blog posts missing
- Verify environment variables are set
- Check console for error messages during build

### Pages Not Being Indexed
- Verify robots.txt allows the route
- Check sitemap includes the URL
- Use Google Search Console's URL Inspection tool
- Ensure meta tags don't have `noindex` directive

## Additional Resources

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)
- [Google Robots.txt Specifications](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- [Sitemap Protocol](https://www.sitemaps.org/protocol.html)
- [Search Console Help](https://support.google.com/webmasters/)

## Support

For issues or questions:
1. Check build logs for errors
2. Validate syntax using online tools
3. Review Next.js documentation
4. Contact dev team

---

**Last Updated:** July 8, 2026
**Version:** 1.0.0
