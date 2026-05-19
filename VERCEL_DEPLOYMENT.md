# Vercel Deployment Guide

## 🔧 Manual Fix for 404 Error

If you're still seeing 404, follow these steps:

### Option 1: Set Environment Variables in Vercel
1. Go to **Vercel Dashboard** → Your Project → **Settings**
2. Click **Environment Variables**
3. Add these two variables:
   - Name: `VITE_SUPABASE_URL` → Value: `https://jlzywwupllrxtsexkhah.supabase.co`
   - Name: `VITE_SUPABASE_ANON_KEY` → Value: `sb_publishable_hsXC-wouNV_U6acqlZe6Sw_lr9OWjU7`
4. **Redeploy** your project

### Option 2: Force Full Rebuild
1. Go to **Vercel Dashboard** → Your Project → **Deployments**
2. Click on latest deployment → **Redeploy**
3. Choose "Redeploy with cache disabled"

### Option 3: Check Build Output
1. Go to **Deployments** → Latest deployment
2. Click **Build Logs** → Review for errors
3. Common issues:
   - ❌ "Cannot find module" → missing `npm install`
   - ❌ "ENOENT dist/index.html" → build failed
   - ❌ "SyntaxError" → JavaScript error in code

### Verify Configuration
Your config files are correct:
- ✅ `vite.config.js` - Build output to `dist/`
- ✅ `vercel.json` - Tells Vercel to run `npm run build`
- ✅ `package.json` - Has build script
- ✅ `index.html` - Entry point exists

### If Still Failing:
```bash
# Test build locally
npm install
npm run build
npm run preview

# Check dist folder
ls -la dist/

# Verify index.html exists
cat dist/index.html
```

### Deployment URL
After successful deployment, your site will be at:
`https://pyacademy.vercel.app` (or custom domain)

