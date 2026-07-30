# Vendored third-party assets

These are served from our own CDN rather than a public one. Anything referenced
by a tenant loader executes on that tenant's site, so a third-party host in that
position is both an availability risk (corporate networks and some regions block
public CDNs) and a supply-chain one.

Paths are immutable and version-pinned. To update, upload a **new** version and
change the reference in `_defaults.json` — never overwrite an existing path.

## FingerprintJS

| | |
| --- | --- |
| Version | `3.4.2` |
| Source | `https://cdn.jsdelivr.net/npm/@fingerprintjs/fingerprintjs@3/dist/fp.min.js` |
| Retrieved | 2026-07-30 |
| Size | 33,780 bytes |
| SHA-256 | `99dc3803d1f19c8103f79f834044b2afd4c8af5b7927efbd36b1052d528b40ae` |
| Hosted at | `https://cdn.dev.decentcare.ai/vendor/fingerprintjs/3.4.2/fp.min.js` |

Verify what we serve still matches what was published:

```bash
curl -s https://cdn.dev.decentcare.ai/vendor/fingerprintjs/3.4.2/fp.min.js | shasum -a 256
```

Note the previous reference was the floating `@3` tag, which meant tenant sites
silently picked up new minor versions of a fingerprinting library as jsdelivr
published them. The pin is deliberate.
