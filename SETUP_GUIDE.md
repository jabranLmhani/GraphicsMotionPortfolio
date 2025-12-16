# Portfolio Setup Guide

## Quick Start

Your portfolio is ready to use! Follow these simple steps:

### 1. Development Server

The development server is already running at:
- **Local**: http://localhost:3000
- **Network**: http://192.168.100.17:3000

If you need to restart it:
```bash
npm run dev
```

### 2. Customization Checklist

#### Update Social Links (Already Done ✓)
- LinkedIn: https://www.linkedin.com/in/jabran-lmhani
- GitHub: https://github.com/jabranLmhani

#### Update Contact Information
Edit `components/Contact.tsx`:
- Email: jabran.lmhani@um6p.ma
- Phone: +212 661 570080
- Location: Rabat, Morocco

#### Add Project Links (Optional)
Edit `components/Projects.tsx` to add:
- Live demo links
- GitHub repository links
- Project screenshots

### 3. Content Customization

All content is extracted from your CV and organized in these files:

| Section | File | What to Update |
|---------|------|----------------|
| Hero | `components/Hero.tsx` | Name, tagline, description |
| About | `components/About.tsx` | Profile, quick facts |
| Experience | `components/Experience.tsx` | Work history, descriptions |
| Projects | `components/Projects.tsx` | Project details, links |
| Skills | `components/Skills.tsx` | Technologies, proficiency levels |
| Education | `components/Education.tsx` | Degrees, institutions |
| Contact | `components/Contact.tsx` | Contact info, form |

### 4. Color Scheme

The current color scheme uses:
- **Primary**: Blue (#3b82f6) - Technology/Development
- **Secondary**: Purple (#8b5cf6) - Creativity/VR
- **Accent**: Green (#10b981) - Data Science/Growth

To change colors, edit `app/globals.css`:
```css
:root {
  --primary: #3b82f6;
  --secondary: #8b5cf6;
  --accent: #10b981;
}
```

### 5. Adding Images

To add your photo or project images:

1. Place images in the `public/` folder
2. Use Next.js Image component:
```tsx
import Image from 'next/image';

<Image 
  src="/your-image.jpg" 
  alt="Description"
  width={500}
  height={500}
/>
```

### 6. Building for Production

When ready to deploy:

```bash
# Build the production version
npm run build

# Test the production build locally
npm start
```

### 7. Deployment Options

#### Option A: Vercel (Recommended - Free)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Your site will be live in minutes with a free `.vercel.app` domain!

#### Option B: Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repo
5. Deploy

#### Option C: Custom Domain
After deploying to Vercel or Netlify:
1. Purchase a domain (e.g., jabranlmhani.com)
2. Add the domain in your hosting platform settings
3. Update DNS records as instructed

### 8. SEO Optimization

The portfolio includes:
- ✓ Meta tags for search engines
- ✓ Open Graph tags for social media
- ✓ Semantic HTML structure
- ✓ Fast loading times
- ✓ Mobile-responsive design

To improve SEO further:
1. Add a custom domain
2. Submit sitemap to Google Search Console
3. Add Google Analytics (optional)

### 9. Performance Tips

The site is already optimized, but you can:
- Compress images before adding them
- Use WebP format for images
- Keep animations smooth but not excessive
- Test on [PageSpeed Insights](https://pagespeed.web.dev/)

### 10. Troubleshooting

**Port already in use?**
```bash
# Kill the process on port 3000
npx kill-port 3000
# Then restart
npm run dev
```

**Build errors?**
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

**Styling not updating?**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache

## Next Steps

1. ✅ Review the portfolio at http://localhost:3000
2. ✅ Customize content as needed
3. ✅ Add project screenshots/images
4. ✅ Test on mobile devices
5. ✅ Deploy to Vercel/Netlify
6. ✅ Share your portfolio link!

## Support

For questions or issues:
- Check the main README.md
- Review Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS docs: https://tailwindcss.com/docs

---

**Your portfolio is ready to impress potential clients! 🚀**

