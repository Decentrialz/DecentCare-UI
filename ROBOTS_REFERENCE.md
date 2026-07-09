# Robots.txt Output Reference

## Generated robots.txt Format

When accessed at `/robots.txt`, the following content is served:

```
User-agent: *
Allow: /
Allow: /about
Allow: /blog
Allow: /blog/*
Allow: /services
Allow: /services/*
Allow: /success
Allow: /contact
Allow: /luxHospital
Disallow: /api/*
Disallow: /staff/*
Disallow: /qr
Disallow: /tracking
Disallow: /*.json$
Disallow: /*?*utm_*

User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

Sitemap: https://decentcare.com/sitemap.xml
```

## What This Means

### For Search Engines (Google, Bing, etc.)
- ✅ **Can crawl**: Homepage, about, blog posts, services, success stories, contact
- ❌ **Cannot crawl**: API routes, staff pages, QR codes, tracking pages, JSON files, UTM-tagged URLs

### For AI Bots
- ❌ **Blocked completely**: GPTBot (OpenAI), ChatGPT-User, CCBot (Common Crawl), Anthropic AI
- Protects content from being used for AI training without permission

### Sitemap Reference
- Points search engines to `/sitemap.xml` for complete site structure
- Automatically updated when new blog posts are published

## Verification Checklist

After deployment, verify:

- [ ] `/robots.txt` is accessible
- [ ] `/sitemap.xml` is accessible and contains all pages
- [ ] No important pages are accidentally blocked
- [ ] Sitemap includes recent blog posts
- [ ] Google Search Console recognizes robots.txt
- [ ] No crawl errors in Search Console

## Quick Test Commands

```bash
# Check robots.txt locally
curl http://localhost:3000/robots.txt

# Check sitemap locally
curl http://localhost:3000/sitemap.xml

# Check robots.txt in production
curl https://decentcare.com/robots.txt

# Check sitemap in production
curl https://decentcare.com/sitemap.xml
```

## Expected HTTP Headers

```
Content-Type: text/plain; charset=utf-8
Cache-Control: public, max-age=0, must-revalidate
```

## Common Issues & Solutions

### Issue: 404 on /robots.txt
**Solution**: Ensure `app/robots.ts` exists and build was successful

### Issue: Wrong site URL in sitemap
**Solution**: Set `NEXT_PUBLIC_SITE_URL` in `.env.local`

### Issue: Missing blog posts in sitemap
**Solution**: Check Sanity connection and query in `sitemap.ts`

### Issue: Robots.txt cached with old content
**Solution**: Clear CDN cache (Vercel/Cloudflare) or wait for cache expiry

---

**Note**: Changes to `robots.ts` or `sitemap.ts` require a rebuild (`npm run build`) to take effect.
