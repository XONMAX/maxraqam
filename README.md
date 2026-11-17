# MaxRaqam — This is just the beginning (;

Official interactive web experience for **MaxRaqam** — a next-generation developer platform uniting learning, coding, short-form developer reels, community posts, real-time developer chat, and an interconnected builder network.

---

## ✨ Features & Architecture

- **Interactive Multi-Scene Scroll Experience**: Powered by **GSAP** + **ScrollTrigger** and **Lenis** smooth scrolling across pinned interactive scenes:
  1. **Hero Scene**: Animated orbital particle rings, SVG network web, and live digital countdown timer to launch (`2027-01-16`).
  2. **Create / Learn Scene**: Interactive orbital capability nodes with animated SVG mesh connections and code streams.
  3. **Developers Programming (Reels)**: Desktop fanned card stack and mobile swipeable carousel with live animated code/chart visuals.
  4. **Developers Posts**: Glassmorphic social feed with interactive reaction bursts (`Like`, `Comment`, `Share`).
  5. **Developers Chat**: Automated real-time typing simulation for team collaboration.
  6. **Developers Community**: Connected node graph with live status indicators.
  7. **Everything Connects**: 360° rotating orbit transition and CTA footer.
- **Day & Night Theme Toggle**: Persistent theme switching (`localStorage`) with adaptive CSS custom properties and transparent brand logo support across both light and dark themes.
- **Self-Hosted Typography & Assets**:
  - `Plus Jakarta Sans` (`Regular`, `Medium`, `SemiBold`, `Bold`, `ExtraBold` TTF fonts in `/public/Plus_Jakarta_Sans/static/`)
  - `DS-Digital` (`Regular`, `Bold` WOFF fonts in `/public/fonts/`)
  - Transparent brand logo (`/public/assets/aistudio/image_deffa9df.png` and `/public/img/logo.png`)

---

## 📁 Project Structure

```text
├── index.html                                         # Main application entry point (HTML, CSS, GSAP/Lenis JS)
├── public/
│   ├── assets/
│   │   └── aistudio/
│   │       └── image_deffa9df.png                     # MaxRaqam transparent PNG brand logo & favicon
│   ├── fonts/
│   │   ├── DS-DIGI.woff                               # Digital countdown font (Regular)
│   │   └── DS-DIGIB.woff                              # Digital countdown font (Bold)
│   ├── img/
│   │   └── logo.png                                   # MaxRaqam transparent PNG brand logo
│   └── Plus_Jakarta_Sans/
│       └── static/
│           ├── PlusJakartaSans-Regular.ttf            # Weight 400
│           ├── PlusJakartaSans-Medium.ttf             # Weight 500
│           ├── PlusJakartaSans-SemiBold.ttf           # Weight 600
│           ├── PlusJakartaSans-Bold.ttf               # Weight 700
│           └── PlusJakartaSans-ExtraBold.ttf          # Weight 800
├── package.json                                       # Build & dev scripts (Vite)
├── vercel.json                                        # Vercel routing, rewrites & asset cache headers
├── vite.config.ts                                     # Vite configuration
└── README.md                                          # Project documentation
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js** (v18+ recommended)
- **npm** (or `yarn` / `pnpm` / `bun`)

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
```
This outputs the production-ready static bundle to the `dist/` directory. You can preview the production build locally using:
```bash
npm run preview
```

---

## 🌐 Deploying to GitHub & Vercel

### Step 1: Publish to GitHub
1. Create a new repository on [GitHub](https://github.com/new) (do **not** initialize with an existing README or `.gitignore`).
2. Initialize Git in your project folder and push the code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: production-ready MaxRaqam website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
   *(Alternatively, upload the extracted project files directly via the GitHub web interface).*

### Step 2: Deploy on Vercel
1. Log in to [Vercel](https://vercel.com/) and click **Add New... → Project**.
2. Import your newly created **GitHub repository**.
3. Vercel will automatically read `vercel.json` and `package.json`:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your site will build and go live automatically with full support for direct URLs, page refreshes, and cached static fonts/images.
