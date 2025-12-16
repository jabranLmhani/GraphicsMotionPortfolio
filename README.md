# Jabran Lmhani - Professional Portfolio

An exceptional, modern portfolio website showcasing expertise as a Lead Developer, Data Scientist, and VR Developer. Built with cutting-edge web technologies to demonstrate technical excellence and creative capabilities.

## 🌟 Features

- **Custom Loading Screen**: Animated loading experience with vectorized name animation
- **3D Hero Section**: Immersive Three.js background with animated particles and geometric shapes
- **Smooth Animations**: Framer Motion powered scroll-triggered animations and transitions
- **Glassmorphism Design**: Modern UI with backdrop blur effects and gradient overlays
- **Interactive Timeline**: Professional experience displayed in an engaging timeline format
- **Skills Visualization**: Animated skill bars with proficiency indicators
- **Project Showcase**: Featured projects with detailed descriptions and tech stacks
- **Contact Form**: Unique, creative contact section with form validation
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **SEO Optimized**: Proper meta tags and semantic HTML for better search engine visibility

## 🚀 Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**:
  - Framer Motion (page transitions, scroll animations)
  - React Three Fiber (3D graphics)
  - Three.js (3D rendering)
- **Icons**: React Icons
- **Form Handling**: React Hook Form
- **Fonts**: Geist Sans & Geist Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and theme
├── components/
│   ├── LoadingScreen.tsx   # Custom loading animation
│   ├── Navigation.tsx      # Responsive navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Hero3DBackground.tsx # 3D animated background
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills visualization
│   ├── Education.tsx       # Education section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer component
└── public/                 # Static assets
```

## 🎨 Customization

### Colors
Edit the color scheme in `app/globals.css`:
```css
:root {
  --primary: #3b82f6;
  --secondary: #8b5cf6;
  --accent: #10b981;
}
```

### Content
Update personal information in the respective component files:
- **Hero.tsx**: Name, title, description
- **About.tsx**: Profile information
- **Experience.tsx**: Work experience
- **Projects.tsx**: Project details
- **Skills.tsx**: Technical skills
- **Education.tsx**: Educational background
- **Contact.tsx**: Contact information

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- **Lazy Loading**: Components and images load on demand
- **Code Splitting**: Automatic code splitting by Next.js
- **Image Optimization**: Next.js Image component for optimized images
- **Font Optimization**: Automatic font optimization with next/font

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Jabran Lmhani**
- LinkedIn: [linkedin.com/in/jabran-lmhani](https://www.linkedin.com/in/jabran-lmhani)
- GitHub: [github.com/jabranLmhani](https://github.com/jabranLmhani)
- Email: jabran.lmhani@um6p.ma

## 🙏 Acknowledgments

Built with modern web technologies and best practices to showcase professional expertise and attract freelance opportunities.

---

Made with ❤️ using Next.js
