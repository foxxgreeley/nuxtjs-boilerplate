# Nuxt Boilerplate (Tailwind + Essentials)

<img src="https://nuxt.com/assets/design-kit/logo/icon-white.svg" alt="White Nuxt Logo" width="150">

A simple boilerplate for Nuxt 3 projects using DevTools, Tailwind CSS, Prettier, and TypeScript.

## Essentials

| Utility  | Description |
| ------------- | ------------- |
| [Nuxt Devtools](https://devtools.nuxt.com/) | for debugging and inspecting your Nuxt application. |
| [TailwindCSS](https://tailwindcss.com/)  | for utility-first CSS. |
| [Prettier](https://prettier.io/) | is included and orders Tailwind classes using the [TailwindCSS Prettier Plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) |
| [ESLint](https://eslint.org/) | for linting JavaScript and TypeScript. |
| [Inter Font](https://fonts.google.com/specimen/Inter) | is set as the default for this project (included head of `nuxt.config.ts`). |

`<Icon name="NuxtIcon" />` is a dynamic component that can be passed any icon code from the [Icones Library](https://icones.js.org/) to render a SVG.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment#presets) for more information.
