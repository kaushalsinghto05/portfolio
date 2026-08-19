# Kaushal Singh — Creative Developer Portfolio Website 🚀

A modern, production-ready personal developer portfolio built with **React 18**, **Three.js** (`@react-three/fiber` + `@react-three/drei`), **Framer Motion**, **Lenis Smooth Scroll**, **Tailwind CSS**, and **React Parallax Tilt**.

Designed for seamless deployment on **Vercel** with zero configuration issues.

---

## ✨ Features & Architecture

- ⚡ **Lightning Fast**: Built on Vite + React 18 with optimized chunking and lazy 3D loading.
- 🎨 **Vibrant Cyber Aesthetic**: High-energy gradient accents (electric cyan, cyber purple, neon pink, energetic teal), glassmorphism cards, and dark/light theme switch.
- 🪐 **Interactive 3D Hero Scene**: Rotating Three.js geometric cyber core reacting to mouse hover with graceful fallback for low-power devices.
- 📜 **Smooth Inertia Scrolling**: Powered by Lenis for buttery-smooth page navigation.
- 🎯 **3D Parallax Tilt Cards**: Projects and key cards tilt realistically with glowing neon highlights on hover.
- ⌨️ **Dynamic Typewriter Tagline**: Animated role typewriter in the Hero section (`react-type-animation`).
- 🌟 **Canvas Starfield Background**: Lightweight particle network dynamically reacting to theme mode.
- 🖱️ **Gen-Z Glowing Custom Cursor**: Reactive trailing ring and glowing center dot that magnifies over interactive elements (desktop-only; auto-disabled on touch devices).
- 🏆 **Interactive LeetCode Stats Widget**: Problem-solving breakdown (Easy, Medium, Hard, Acceptance rate) and direct profile link.
- 📬 **Working Contact Form**: Ready for Formspree / EmailJS integration with fallback mailto trigger, copy-to-clipboard actions, and toast alerts.
- 📱 **Fully Responsive**: Flawless experience across mobile phones, tablets, laptops, and ultra-wide screens.

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── assets/
│   │   ├── profile.jpg           # 👈 REPLACE WITH YOUR PHOTO (Suit/Glasses)
│   │   └── resume.pdf            # 👈 REPLACE WITH YOUR RESUME PDF
│   ├── favicon.svg               # Custom neon KS logo favicon
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   └── Hero3DScene.jsx   # Three.js 3D glowing cyber core
│   │   ├── common/
│   │   │   ├── CustomCursor.jsx  # Glowing reactive cursor
│   │   │   ├── ParticleBackground.jsx # Canvas particle effect
│   │   │   ├── Preloader.jsx     # Splash intro loader
│   │   │   ├── SectionHeader.jsx # Shimmer gradient section header
│   │   │   ├── ThemeToggle.jsx   # Animated Sun/Moon switcher
│   │   │   └── Toast.jsx         # Interactive toast notification
│   │   ├── layout/
│   │   │   ├── Navbar.jsx        # Glassmorphic nav with active link pill & mobile drawer
│   │   │   └── Footer.jsx        # Footer with back-to-top, quick links, copyright
│   │   └── sections/
│   │       ├── Hero.jsx          # Hero section with 3D, type animation, social links, CTAs
│   │       ├── About.jsx         # Academic summary, bio, interactive stat cards, hobbies
│   │       ├── Skills.jsx        # Categorized glowing skill cards & proficiency tags
│   │       ├── Projects.jsx      # Filterable grid (All, Web Dev, AI-ML, Cybersecurity) + 3D Tilt
│   │       ├── Achievements.jsx  # LeetCode stats card widget, hackathons, milestones
│   │       ├── Certifications.jsx# 3 customizable placeholder cards
│   │       ├── Education.jsx     # UIT Prayagraj & High School interactive timeline
│   │       └── Contact.jsx       # Working form, direct contact cards, copy-to-clipboard
│   ├── context/
│   │   └── ThemeContext.jsx      # Dark/Light theme manager with localStorage
│   ├── data/
│   │   └── portfolioData.js      # 👈 EDIT ALL CONTENT & PROFILE DATA HERE
│   ├── hooks/
│   │   ├── useActiveSection.js   # Active navbar scroll highlight
│   │   └── useWindowSize.js      # Responsive breakpoint listener
│   ├── App.jsx                   # Root component with Lenis smooth scroll provider
│   ├── index.css                 # Custom scrollbar, Tailwind directives, glassmorphism
│   └── main.jsx                  # React DOM entry point
├── index.html                    # SEO meta tags, Google Fonts
├── package.json                  # Pinned dependencies
├── postcss.config.js             # PostCSS config
├── tailwind.config.js            # Custom colors, shadows, and keyframes
├── vercel.json                   # Vercel SPA routing rewrite config
└── README.md                     # Documentation
```

---

## 🛠️ Step-by-Step Local Setup

1. **Open terminal** in the project folder:
   ```bash
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Test production build locally**:
   ```bash
   npm run build
   npm run preview
   ```

---

## 🚀 How to Deploy on Vercel

### Option 1: Deploy via GitHub (Recommended)
1. Push this folder to your GitHub repository (e.g. `https://github.com/kaushalsinghto05/portfolio`):
   ```bash
   git init
   git add .
   git commit -m "Initial commit of creative developer portfolio"
   git branch -M main
   git remote add origin https://github.com/kaushalsinghto05/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** -> **Import your `portfolio` repository**.
4. Framework Preset will auto-detect as **Vite**.
5. Click **"Deploy"**. Your site will be live on a global CDN in under 1 minute!

### Option 2: Deploy using Vercel CLI
```bash
npm i -g vercel
vercel
# Follow the interactive prompts and choose production
vercel --prod
```

---

## 📝 Customization Guide (Drop-in Replacements)

### 1. Replace Your Profile Photo & Resume
- Place your suit headshot image at:
  📁 `public/assets/profile.jpg`
- Place your actual Resume PDF at:
  📁 `public/assets/resume.pdf`

### 2. Update Content & Links in `src/data/portfolioData.js`
All website content is centralized in **`src/data/portfolioData.js`**:
- **LeetCode Handle**: Update `leetcode: "https://leetcode.com/YOUR_USERNAME"` and `leetcodeWidget.username`.
- **Certifications**: Edit the 3 placeholder cards with your real certificate titles, issuers, and URLs.
- **Projects**: Add any new projects or adjust GitHub/Live URLs.

### 3. Contact Form (Optional Formspree Integration)
In `src/components/sections/Contact.jsx`:
- Create a free form at [formspree.io](https://formspree.io).
- Replace `YOUR_FORMSPREE_ID` with your Formspree ID (e.g. `https://formspree.io/f/mqkvzopq`).

---

## 📄 License

Created for **Kaushal Singh**. Open for personal and commercial portfolio showcase.
