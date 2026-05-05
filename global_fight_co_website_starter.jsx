# Global Fight Co — Next.js Starter Project (Deploy Ready)

This is a **full working Next.js + Tailwind project** version of your original website design, simplified so it can be deployed immediately on Vercel.

---

# 📁 Project Structure

```
app/
  layout.tsx
  page.tsx
  globals.css

package.json
next.config.js
tailwind.config.js
postcss.config.js
```

---

# 📦 package.json
```json
{
  "name": "global-fight-co",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "autoprefixer": "latest",
    "postcss": "latest",
    "tailwindcss": "latest"
  }
}
```

---

# ⚙️ next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = nextConfig;
```

---

# 🎨 tailwind.config.js
```js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
```

---

# 🎨 app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background: black;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}
```

---

# 🧠 app/layout.tsx
```tsx
export const metadata = {
  title: "Global Fight Co",
  description: "Combat sports apparel brand"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

# 🥊 app/page.tsx (YOUR WEBSITE)
```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAV */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-zinc-800">
        <h1 className="text-xl font-bold tracking-widest">
          GLOBAL FIGHT CO
        </h1>
        <nav className="space-x-6 text-sm text-zinc-400">
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#drops">Drops</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          TRAIN. FIGHT. EVOLVE.
        </h2>
        <p className="mt-6 text-zinc-400 max-w-xl">
          A modern combat sports brand built on discipline, mindset, and performance.
        </p>

        <button className="mt-8 px-6 py-3 bg-white text-black font-semibold hover:bg-zinc-200">
          Shop Latest Drop
        </button>
      </section>

      {/* DROPS */}
      <section id="drops" className="px-8 py-20">
        <h3 className="text-2xl font-semibold mb-8">Latest Drop</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 border border-zinc-800">
            <h4 className="font-bold">DISCIPLINE OVERSIZED TEE</h4>
            <p className="text-zinc-400 mt-2">Heavyweight cotton / oversized fit</p>
            <p className="mt-4 font-semibold">$59.00</p>
          </div>

          <div className="bg-zinc-900 p-6 border border-zinc-800">
            <h4 className="font-bold">SPARRING CLUB HOODIE</h4>
            <p className="text-zinc-400 mt-2">Fleece lined / relaxed fit</p>
            <p className="mt-4 font-semibold">$89.00</p>
          </div>

          <div className="bg-zinc-900 p-6 border border-zinc-800">
            <h4 className="font-bold">FIGHT MINDSET TEE</h4>
            <p className="text-zinc-400 mt-2">Minimal front / graphic back</p>
            <p className="mt-4 font-semibold">$59.00</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-8 py-24 border-t border-zinc-800">
        <h3 className="text-2xl font-semibold">About Global Fight Co</h3>
        <p className="mt-4 text-zinc-400 max-w-2xl">
          Built for fighters, grinders, and those who live the combat lifestyle.
          Focused on discipline, training culture, and minimal streetwear design.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-10 border-t border-zinc-800 text-zinc-500 text-sm">
        © {new Date().getFullYear()} Global Fight Co. All rights reserved.
      </footer>
    </div>
  );
}
```

---

# 🚀 HOW TO RUN IT

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```

### 3. Open
```
http://localhost:3000
```

---

# 🌐 DEPLOY (1 CLICK)

1. Push this project to GitHub
2. Go to https://vercel.com
3. Import repository
4. Click **Deploy**

Done — your Global Fight Co website is live.

---

# 🧠 NEXT UPGRADES (when you're ready)
- Add Shopify or Stripe checkout
- Add email capture (drops list)
- Add product pages
- Add animations + cinematic scroll
- Add drop countdown system

---

If you want next step, I can turn this into a **full e-commerce store with checkout + product database + drop system (Boxraw-level build)**
