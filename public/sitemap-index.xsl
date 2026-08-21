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
    <title>XML Sitemap Index - DecentCare</title>
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
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
        
        .sitemap-list {
            background: white;
            padding: 0;
            width: 100%;
        }
        
        .sitemap-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 80px 80px;
        }
        
        .sitemap-header {
            display: grid;
            grid-template-columns: 80px 1fr 200px;
            padding: 20px 0;
            background: #0891b2;
            color: white;
            font-weight: 600;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 0;
        }
        
        .sitemap-header > div {
            padding: 0 20px;
        }
        
        .sitemap-item {
            display: grid;
            grid-template-columns: 80px 1fr 200px;
            padding: 22px 0;
            border-bottom: 1px solid #e5e7eb;
            transition: background-color 0.2s ease;
            align-items: center;
        }
        
        .sitemap-item > div {
            padding: 0 20px;
        }
        
        .sitemap-item:hover {
            background: #f9fafb;
        }
        
        .sitemap-item:last-child {
            border-bottom: none;
        }
        
        .item-number {
            color: #6b7280;
            font-size: 0.9375rem;
            font-weight: 500;
        }
        
        .sitemap-url {
            color: #0891b2;
            text-decoration: none;
            font-size: 0.9375rem;
            font-weight: 500;
            transition: color 0.2s ease;
            word-break: break-all;
        }
        
        .sitemap-url:hover {
            color: #17b978;
            text-decoration: underline;
        }
        
        .sitemap-date {
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
        
        @media (max-width: 768px) {
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
            
            .stat-value {
                font-size: 1.875rem;
            }
            
            .sitemap-content {
                padding: 0 30px 40px;
            }
            
            .sitemap-header {
                grid-template-columns: 60px 1fr;
            }
            
            .sitemap-item {
                grid-template-columns: 60px 1fr;
            }
            
            .sitemap-date {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="header-content">
            <div class="title-wrapper">
                <h1>XML Sitemap Index</h1>
                <p class="subtitle">
                    This sitemap index contains <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps</strong>. Click any sitemap to view its contents.
                </p>
            </div>
        </div>
    </div>
    
    <div class="stats">
        <div class="stats-content">
            <div class="stat-card">
                <div class="stat-label">Total Sitemaps</div>
                <div class="stat-value">
                    <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Sitemap Type</div>
                <div class="stat-value">Index</div>
            </div>
        </div>
    </div>
    
    <div class="sitemap-list">
        <div class="sitemap-content">
            <div class="sitemap-header">
                <div>#</div>
                <div>SITEMAP URL</div>
                <div>LAST MODIFIED</div>
            </div>
            
            <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                <div class="sitemap-item">
                    <div class="item-number">
                        <xsl:value-of select="position()"/>
                    </div>
                    <div>
                        <a class="sitemap-url" href="{sitemap:loc}">
                            <xsl:value-of select="sitemap:loc"/>
                        </a>
                    </div>
                    <div class="sitemap-date">
                        <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/>
                    </div>
                </div>
            </xsl:for-each>
        </div>
    </div>
    
</body>
</html>
</xsl:template>

</xsl:stylesheet>
