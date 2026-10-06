# Sanjay Ram M — Portfolio

React + Vite portfolio. Dark-first, theme-togglable, with a pixel cat that chases the cursor.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

## Where things live

| What | Where |
|---|---|
| **All content** (experience, projects, education, skills) | `src/data/content.js` |
| Design tokens, palette, every component style | `src/styles/global.css` |
| oneko cursor cat | `src/components/Oneko.jsx` + `public/oneko.gif` |
| Page transition wrapper | `src/components/Page.jsx` |
| Colourful horizontal project rail | `src/components/ProjectRail.jsx` |
| Logos & campus images | `public/logos/` |
| Résumé PDF | `public/Resume_Sanjay.pdf` |

Edit `src/data/content.js` to change any copy — nothing is hardcoded in the pages.

## Notes

- **oneko** respects `prefers-reduced-motion` and disables itself when set.
- Theme choice persists in `localStorage` under `theme`, defaulting to dark.
- Project card colours come from the `tint` field on each project in `content.js`.

## Deploy

Static build — any host works. For Vercel/Netlify, add an SPA rewrite so client-side
routes resolve:

```
/*  /index.html  200
```
