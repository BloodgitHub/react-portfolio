# React Portfolio — Bleond Neziri

A responsive personal portfolio built with React, Vite, React Router, and CSS. It includes reusable components, state-managed project cards, a validated contact form, and a persistent light/dark theme toggle.

## Features

- React components: Header, Hero, Projects, Skills, Contact, Footer
- React Router pages: Home, Projects, Contact
- Projects stored in React state with category filtering
- Contact form with required-field, email, and message-length validation
- Light/dark theme saved in `localStorage`
- Responsive layout for mobile, tablet, and desktop
- Accessible labels, focus styles, and reduced-motion support

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Create a production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Publish to GitHub

Create a public repository named **react-portfolio**, then run these commands from this project folder:

```bash
git init
git add .
git commit -m "Build responsive React portfolio"
git branch -M main
git remote add origin https://github.com/BloodgitHub
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## Deploy on Vercel

1. Push this project to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and choose **Add New → Project**.
3. Import `react-portfolio`.
4. Keep the detected Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**.

Every new push to the connected `main` branch will trigger a redeployment.

## Customize before submitting

- Update your name, email, GitHub, and LinkedIn links in `src/data/portfolio.js`.
- Replace the sample project descriptions and links with your real GitHub projects and demos.
- Review the skills list so it accurately reflects your current level.
- Submit both public URLs: the GitHub repository URL and the deployed live URL.

## Contact form note

The form currently performs client-side validation and displays a success message. It does not send email yet. To receive real messages, connect a form service (for example Formspree) or add a backend/API endpoint.
# react-portfolio
