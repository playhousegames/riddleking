# Riddle King — CLAUDE.md

Next.js 14 riddle website deployed on Vercel, connected to GitHub repo `playhousegames/riddleking`, custom domain `riddleking.co.uk`.

## Project goals
- Expand 50 best riddles with longform content to pass Google AdSense 2026 quality bar
- Other ~271 riddles remain as-is (no longform field)
- Keep backwards compatibility in pages/riddles/[slug].js

## Content structure
Each expanded riddle has a `longform` field on the riddle object:
- why_it_works (120-150 words)
- origins (100-130 words)  
- how_to_solve (80-100 words)
- trivia (array of 3 strings)

## Conventions
- Existing riddles are single-line objects in data/riddles.js
- Longform-expanded riddles can span multiple lines for readability
- Brand colours: gold #E8B84B, royal purple, cream #FAF6EE
- No ad placements anywhere in code (waiting for AdSense approval)

## Deploy
git push origin main → Vercel auto-deploys in ~1 minute