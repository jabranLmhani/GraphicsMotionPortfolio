# Deployment Guide - Jabran Lmhani Portfolio

## 🚀 Quick Deployment to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy your Next.js portfolio. It's **FREE** and takes less than 5 minutes!

### Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
```bash
cd portfolio
git init
git add .
git commit -m "Initial commit - Professional portfolio"
```

2. **Create a GitHub Repository**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it: `portfolio` or `jabran-lmhani-portfolio`
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/jabranLmhani/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub"

2. **Import Your Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure (Usually Auto-detected)**:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

### Step 3: Get Your URL

Your portfolio will be available at:
```
https://your-project-name.vercel.app
```

Example: `https://jabran-lmhani-portfolio.vercel.app`

---

## 🌐 Custom Domain Setup (Optional)

### Option 1: Free Vercel Subdomain
Your site already has a free `.vercel.app` domain!

### Option 2: Custom Domain (Recommended for Professional Use)

1. **Purchase a Domain**:
   - [Namecheap](https://www.namecheap.com) - ~$10/year
   - [GoDaddy](https://www.godaddy.com)
   - [Google Domains](https://domains.google)
   
   Suggested domains:
   - `jabranlmhani.com`
   - `jabran.dev`
   - `lmhani.dev`

2. **Add Domain to Vercel**:
   - Go to your project in Vercel
   - Click "Settings" → "Domains"
   - Enter your domain name
   - Click "Add"

3. **Update DNS Records**:
   Vercel will show you the DNS records to add. In your domain registrar:
   
   **For root domain (jabranlmhani.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
   
   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Wait for DNS Propagation** (5 minutes - 48 hours, usually ~1 hour)

5. **SSL Certificate**: Automatically provided by Vercel (HTTPS enabled)

---

## 🔄 Automatic Deployments

Every time you push to GitHub, Vercel automatically:
1. Detects the changes
2. Builds your site
3. Deploys the new version
4. Updates your live site

### To Update Your Portfolio:

```bash
# Make your changes
git add .
git commit -m "Update project descriptions"
git push
```

That's it! Your site updates automatically in ~2 minutes.

---

## 📊 Alternative Deployment Options

### Option 2: Netlify

1. **Sign up at [netlify.com](https://netlify.com)**
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Option 3: GitHub Pages (Static Export)

1. **Update `next.config.ts`**:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. **Build and export**:
```bash
npm run build
```

3. **Deploy to GitHub Pages**:
```bash
npm install -g gh-pages
gh-pages -d out
```

---

## 🔧 Environment Variables (If Needed)

If you add features that need API keys (analytics, contact form backend, etc.):

1. **In Vercel**:
   - Go to Settings → Environment Variables
   - Add your variables
   - Redeploy

2. **In your code**:
```typescript
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
```

---

## 📈 Post-Deployment Checklist

After deployment, verify:

- [ ] All sections load correctly
- [ ] 3D animations work smoothly
- [ ] Contact form functions properly
- [ ] All links work (LinkedIn, GitHub)
- [ ] Mobile responsiveness
- [ ] Page load speed (use [PageSpeed Insights](https://pagespeed.web.dev/))
- [ ] SEO meta tags (view page source)

---

## 🎯 Sharing Your Portfolio

Once deployed, share your portfolio:

1. **Update LinkedIn**:
   - Add to "Featured" section
   - Include in "About" section
   - Add to experience descriptions

2. **Update GitHub Profile**:
   - Pin the repository
   - Add website link to profile
   - Include in README

3. **Business Cards/Resume**:
   - Add your portfolio URL
   - Include QR code (optional)

4. **Social Media**:
   - Share on LinkedIn
   - Tweet about it
   - Add to email signature

---

## 🐛 Troubleshooting

### Build Fails on Vercel

**Check the build logs**:
- Look for error messages
- Common issues:
  - Missing dependencies
  - TypeScript errors
  - Import path issues

**Solution**:
```bash
# Test build locally first
npm run build

# If it works locally, push again
git add .
git commit -m "Fix build issues"
git push
```

### 3D Elements Not Loading

- Check browser console for errors
- Ensure Three.js dependencies are installed
- Verify WebGL support in browser

### Slow Loading

- Optimize images (compress before uploading)
- Use WebP format
- Check Vercel Analytics for insights

---

## 📞 Support

If you encounter issues:

1. **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
2. **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
3. **Community**: [Next.js Discord](https://nextjs.org/discord)

---

## ✅ Success!

Your portfolio is now live and accessible worldwide! 🌍

**Next Steps**:
1. Share your portfolio URL
2. Monitor analytics (optional)
3. Keep content updated
4. Add new projects as you complete them

---

**Your Portfolio URL**: `https://your-project.vercel.app`  
**Deployment Status**: Ready to Deploy  
**Estimated Time**: 5-10 minutes

