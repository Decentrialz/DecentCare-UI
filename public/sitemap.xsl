<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">

<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>XML Sitemap - DecentCare</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #ffffff;
            min-height: 100vh;
            padding: 0;
            color: #1e293b;
        }
        
        .header {
            background: linear-gradient(135deg, #0891b2 0%, #17b978 100%);
            padding: 50px 0;
            color: white;
            width: 100%;
        }
        
        .header-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 80px;
        }
        
        .title-wrapper h1 {
            color: white;
            font-size: 1.75rem;
            font-weight: 600;
            margin-bottom: 12px;
            letter-spacing: -0.01em;
        }
        
        .subtitle {
            color: rgba(255, 255, 255, 0.95);
            font-size: 0.9375rem;
            font-weight: 400;
            line-height: 1.5;
        }
        
        .subtitle strong {
            font-weight: 600;
        }
        
        .stats {
            background: #f8f9fa;
            padding: 50px 0;
            width: 100%;
        }
        
        .stats-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 80px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 60px;
        }
        
        .stat-card {
            text-align: left;
        }
        
        .stat-label {
            color: #94a3b8;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 10px;
        }
        
        .stat-value {
            color: #0891b2;
            font-size: 2.25rem;
            font-weight: 600;
            line-height: 1;
        }
        
        .stat-value-text {
            color: #0891b2;
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 1;
        }
        
        .info-box {
            background: #f8f9fa;
            padding: 30px 0;
            width: 100%;
        }
        
        .info-box-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 80px;
            border-left: 4px solid #0891b2;
            padding-left: 80px;
        }
        
        .info-box p {
            color: #475569;
            font-size: 0.9375rem;
            line-height: 1.6;
            font-weight: 400;
        }
        
        .info-box strong {
            color: #1e293b;
            font-weight: 600;
        }
        
        .sitemap-content {
            background: white;
            padding: 0;
            width: 100%;
        }
        
        .sitemap-wrapper {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 80px 80px;
        }
        
        .table-header {
            display: grid;
            grid-template-columns: 80px 1fr 180px;
            padding: 20px 0;
            background: #0891b2;
            color: white;
            font-weight: 600;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            position: sticky;
            top: 0;
            z-index: 10;
        }
        
        .table-header > div {
            padding: 0 20px;
        }
        
        .url-row {
            display: grid;
            grid-template-columns: 80px 1fr 180px;
            padding: 22px 0;
            border-bottom: 1px solid #e5e7eb;
            transition: background-color 0.2s ease;
            align-items: center;
        }
        
        .url-row > div {
            padding: 0 20px;
        }
        
        .url-row:hover {
            background: #f9fafb;
        }
        
        .url-row:last-child {
            border-bottom: none;
        }
        
        .row-number {
            color: #6b7280;
            font-size: 0.9375rem;
            font-weight: 500;
        }
        
        .url-link {
            color: #0891b2;
            text-decoration: none;
            font-size: 0.9375rem;
            font-weight: 500;
            word-break: break-all;
            transition: color 0.2s ease;
        }
        
        .url-link:hover {
            color: #17b978;
            text-decoration: underline;
        }
        
        .date-cell {
            color: #6b7280;
            font-size: 0.9375rem;
            font-weight: 400;
        }
        
        .footer {
            text-align: center;
            padding: 60px 20px 40px;
            background: white;
            color: #6b7280;
        }
        
        .footer a {
            color: #0891b2;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.2s ease;
        }
        
        .footer a:hover {
            color: #17b978;
        }
        
        .footer-tagline {
            font-size: 0.875rem;
            margin-top: 8px;
        }
        
        @media (max-width: 968px) {
            .header-content {
                padding: 0 30px;
            }
            
            .title-wrapper h1 { 
                font-size: 1.5rem; 
            }
            
            .subtitle {
                font-size: 0.875rem;
            }
            
            .stats-content {
                padding: 0 30px;
                gap: 40px;
            }
            
            .stat-value,
            .stat-value-text {
                font-size: 1.875rem;
            }
            
            .info-box-content {
                padding: 0 30px;
                padding-left: 34px;
            }
            
            .sitemap-wrapper {
                padding: 0 30px 40px;
            }
            
            .table-header,
            .url-row {
                grid-template-columns: 60px 1fr 120px;
            }
        }
        
        @media (max-width: 640px) {
            .header-content {
                padding: 0 20px;
            }
            
            .stats-content {
                padding: 0 20px;
            }
            
            .info-box-content {
                padding: 0 20px;
                padding-left: 24px;
            }
            
            .sitemap-wrapper {
                padding: 0 20px 30px;
            }
            
            .table-header,
            .url-row {
                grid-template-columns: 50px 1fr;
            }
            
            .date-cell {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="header-content">
            <div class="title-wrapper">
                <h1>XML Sitemap</h1>
                <p class="subtitle">
                    This sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs</strong> for search engines to crawl and index. Generated automatically for optimal SEO performance.
                </p>
            </div>
        </div>
    </div>
    
    <div class="stats">
        <div class="stats-content">
            <div class="stat-card">
                <div class="stat-label">Total URLs</div>
                <div class="stat-value">
                    <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Sitemap Type</div>
                <div class="stat-value-text">URLs</div>
            </div>
        </div>
    </div>

    <div class="sitemap-content">
        <div class="sitemap-wrapper">
            <div class="table-header">
                <div>#</div>
                <div>URL</div>
                <div>LAST MODIFIED</div>
            </div>
            
            <xsl:for-each select="sitemap:urlset/sitemap:url">
                <div class="url-row">
                    <div class="row-number">
                        <xsl:value-of select="position()"/>
                    </div>
                    <div>
                        <a class="url-link" href="{sitemap:loc}">
                            <xsl:value-of select="sitemap:loc"/>
                        </a>
                    </div>
                    <div class="date-cell">
                        <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/>
                    </div>
                </div>
            </xsl:for-each>
        </div>
    </div>
    
    <div class="footer">
        <p>Generated by <a href="https://decentcare.com">DecentCare</a></p>
        <p class="footer-tagline">AI-Powered Healthcare Marketing &amp; Technology Platform</p>
    </div>
</body>
</html>
</xsl:template>

</xsl:stylesheet>
