# Coping Skills

An interactive DBT (Dialectical Behavior Therapy) coping skills application with 120+ pages covering mindfulness, distress tolerance, emotional regulation, interpersonal skills, and crisis support.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

For deploying to Cloudflare Pages, see [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md) for detailed instructions on configuring Node.js compatibility flags.

## Project Structure

- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Skills Flowchart page (home page)
  - `about/page.tsx` - About the Skills page
  - `layout.tsx` - Root layout with navbar
- `components/shared/` - Shared React components
  - `Header.tsx` - Navigation bar component

## Features

- **Skills Flowchart**: An interactive experience starting with a feelings wheel and word cloud
- **About the Skills**: Information page about the coping skills and strategies

## Next Steps

The app is set up with placeholder content. You can now:

1. Implement the interactive feelings wheel component
2. Add the word cloud functionality
3. Create the screen-by-screen navigation flow
4. Add the options screen for working on selected feelings
5. Populate the About page with detailed information

