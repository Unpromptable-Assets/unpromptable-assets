# Unpromptable Assets

Landing page for Unpromptable Assets — a WaaS (Workflow as a Service) consultancy that builds custom AI-powered automations for businesses.

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **Tailwind CSS v4**
- **TypeScript**

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design Tokens

All colors and fonts are centralized in `src/app/globals.css`:

```css
--color-background: #F5F5F5;
--color-card: #FFFFFF;
--color-foreground: #1A1A1A;
--color-muted: #666666;
--color-gold: #B08D57;
--font-serif: Georgia, "Times New Roman", Times, serif;
```

Change the gold accent or any color in one place — the entire site updates.

## Deployment

Auto-deploys to Vercel on push to `main`.
