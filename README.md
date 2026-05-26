# Candra Ardianto — Portfolio

Personal portfolio site built with Next.js 15, TypeScript, and Tailwind CSS.

## Deploy (Free with GitHub Education)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io
git push -u origin main
```

### 2. Deploy on Vercel (recommended)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project** → import your repo
3. Click **Deploy** — done!

### 3. Or use GitHub Pages
1. In your repo settings → Pages → Source: GitHub Actions
2. Add the workflow in `.github/workflows/deploy.yml`

### 4. Custom domain (free via GitHub Education)
1. Claim your free `.me` domain at [Namecheap via Student Pack](https://education.github.com/pack)
2. Add it in Vercel → Project Settings → Domains

## Local Development
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Customize
- Edit content in each component under `/components`
- Colors are in `app/globals.css` CSS variables
- Add case study pages under `app/case-studies/`
