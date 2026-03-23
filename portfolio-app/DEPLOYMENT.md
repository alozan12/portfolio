# Deployment Guide

## Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js portfolio.

### Method 1: Vercel Dashboard (Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Modern portfolio with animations"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

That's it! Your portfolio will be live in minutes at `your-project.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Link to existing project or create new one
   - Vercel will automatically detect Next.js
   - Your site will be deployed!

4. **Deploy to production:**
   ```bash
   vercel --prod
   ```

## Custom Domain

After deployment on Vercel:

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables

If you need environment variables:

1. Create `.env.local` for local development:
   ```
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

2. Add variables in Vercel dashboard:
   - Project Settings → Environment Variables
   - Add each variable for Production, Preview, and Development

## Build Commands

The following commands are available:

```bash
# Development
npm run dev

# Production build (test locally)
npm run build
npm start

# Lint
npm run lint
```

## Deployment Checklist

Before deploying, make sure:

- [ ] All images are in the `public/` folder
- [ ] Project data is updated in components
- [ ] Contact information is correct
- [ ] All links work properly
- [ ] Build completes without errors: `npm run build`
- [ ] Test locally: `npm run build && npm start`
- [ ] Check responsive design on mobile devices

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Ensure all images are in `/public` folder
- Use relative paths: `/image.png` not `./image.png`
- Check image file names match exactly (case-sensitive)

### Vercel Deployment Issues

- Check build logs in Vercel dashboard
- Verify Node.js version (should be 18+)
- Ensure all dependencies are in package.json

## Performance Optimization

Your portfolio already includes:

- ✅ Image optimization (Next.js)
- ✅ Code splitting
- ✅ Font optimization
- ✅ CSS purging in production
- ✅ Lazy loading
- ✅ Server-side rendering

## Monitoring

After deployment:

1. **Analytics**: Add Vercel Analytics
   ```bash
   npm install @vercel/analytics
   ```
   Then add to `app/layout.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react';

   // In the JSX
   <Analytics />
   ```

2. **Performance**: Check Vercel Speed Insights in dashboard

3. **Errors**: Monitor deployment logs in Vercel

## Updates

To update your live site:

```bash
git add .
git commit -m "Update content"
git push
```

Vercel will automatically redeploy on every push to main branch.

## Alternative Platforms

### Netlify

```bash
npm run build
# Deploy the .next folder
```

### Self-Hosted

```bash
npm run build
npm start
# Run on port 3000
```

Use PM2 for process management:
```bash
pm2 start npm --name "portfolio" -- start
```

## Support

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- GitHub Issues: Report any bugs in your repository

---

**Your portfolio is ready to deploy! 🚀**

Visit http://localhost:3000 to preview before deployment.
