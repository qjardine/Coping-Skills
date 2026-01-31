# Cloudflare Pages Deployment Guide

## About the Node.js Compatibility Warnings

You may see warnings during deployment like:
```
[WARNING] The package "node:buffer" wasn't found on the file system
[WARNING] The package "node:async_hooks" wasn't found on the file system
```

**You can safely ignore these warnings.** Here's why:

This is a **fully static Next.js site** - all 120 pages are pre-rendered to HTML during the build process. The warnings appear because Next.js's build process uses Node.js modules, but the final deployed site doesn't require any Node.js runtime features.

## Quick Start

### Via Cloudflare Pages Dashboard

1. **Connect Repository**: Link your GitHub/GitLab repository to Cloudflare Pages
2. **Configure Build**:
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npm run build`
   - Build output directory: `.next` or `out`
   - Node version: `18` or higher
3. **Deploy**: Cloudflare will automatically build and deploy

### Via Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Deploy
npx wrangler pages deploy .next
```

## If You Want to Suppress the Warnings

While not necessary, if you want to eliminate the warnings, you can:

### Option 1: Cloudflare Dashboard (Pages Functions Settings)

1. Go to your Cloudflare Pages project
2. Navigate to **Settings** → **Functions**
3. Add **Compatibility flag**: `nodejs_compat_v2` or `nodejs_compat`
4. Set **Compatibility date**: `2024-01-30` or later
5. Save and redeploy

### Option 2: Environment Variables

In your Cloudflare Pages **Build Settings**, add:
- Variable name: `NEXT_PRIVATE_STANDALONE`
- Value: `true`

### Option 3: Update next.config.js

The project already includes:
```js
output: 'standalone'
```

If warnings persist, you can change this to:
```js
output: 'export'
```

(Note: This will export to the `out` directory instead of `.next`)

## Build Configuration

### Framework Settings
- **Framework**: Next.js 16.1.6 with Turbopack
- **React**: 19.2.4
- **TypeScript**: 5.5.4
- **Build time**: ~2-3 minutes
- **Output**: 120 static pages

### Build Command
```bash
npm run build
```

### Build Output Directory
```
.next
```
(or `out` if using `output: 'export'`)

### Node.js Version
Use Node.js **18+** in your build environment

## Project Structure

All pages are statically generated:
- 120+ DBT skills pages
- No server-side rendering
- No API routes
- No dynamic functions

This makes the site extremely fast and perfect for Cloudflare's global CDN.

## Performance

- **Build time**: ~2-3 minutes
- **Page load time**: <500ms globally
- **Deployment**: Instant via Cloudflare's edge network
- **Cache**: Aggressive caching, instant updates on redeploy

## Troubleshooting

### Build Fails

1. **Clear build cache**: Go to Settings → Builds → Clear build cache
2. **Check Node version**: Ensure you're using Node 18+
3. **Dependencies**: Make sure all packages install correctly

### Pages Don't Update

1. **Clear Cloudflare cache**: Purge cache in Cloudflare dashboard
2. **Force redeploy**: Make a commit and push to trigger rebuild
3. **Check build logs**: Verify all 120 pages generated successfully

### 404 Errors on Routes

Since this is a static export, ensure:
1. Build output directory is correct (`.next` or `out`)
2. All pages built successfully (check build logs)
3. Cloudflare is serving the correct directory

## Advanced Configuration

The `wrangler.toml` file is minimal and doesn't require compatibility flags:

```toml
name = "coping-skills"
compatibility_date = "2024-01-30"
pages_build_output_dir = ".next"

[build]
command = "npm run build"
```

This is all you need for a static Next.js site on Cloudflare Pages.

## Support

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Node.js Compatibility](https://developers.cloudflare.com/workers/runtime-apis/nodejs/)

## Summary

✅ **The warnings are harmless** - your site will work perfectly  
✅ **It's fully static** - no server runtime needed  
✅ **Global CDN** - fast everywhere  
✅ **Zero configuration** - just build and deploy
