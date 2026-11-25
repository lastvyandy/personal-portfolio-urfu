# Personal Portfolio

A personal portfolio website built with React for a university programming assignment. It presents my background, technical skills and software projects.

## Live website

[View the portfolio](https://personal-portfolio-urfu.vercel.app/)

## Technologies

- React and JavaScript
- React Router
- Vite
- CSS

## Run locally

Install Node.js 20 or newer, then run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

To build and preview the production version:

```bash
npm run build
npm run preview
```

## Pages

- Home: /
- About Me: /about
- Projects: /projects
- Contact: /contact

Pages are stored in src/pages, reusable components in src/components, and the shared layout in src/layouts.

The contact form validates inputs and shows a local confirmation. It does not send messages to a server.

## Deployment

The project can be deployed on Vercel using the Vite preset. The vercel.json file configures client-side route fallback so direct URLs and browser refreshes work.
