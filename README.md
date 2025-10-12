

# 🌐 [jaxs.onl](https://jaxs.onl)

[![img](https://github.com/woofers/woofers.github.io/workflows/build/badge.svg)](https://github.com/woofers/woofers.github.io/actions)

A [Next.js](https://nextjs.org/) ⚡ based site built using static Markdown content with [Contentlayer](https://www.contentlayer.dev/). 📝

Automated deploy to [Github Pages](https://pages.github.com/) 🚀 is configured using [GitHub Actions](https://github.com/features/actions). ⚙️


## 🎯 Goals

1.  📝 Be easy to update and maintain content. Ideally with simple Markdown markup.
2.  📱 Take full-advantage of wide screen sizes while still scaling to a wide-variety of screen sizes.
3.  ⚡ Load quickly; nothing is worse than a *slow* site.

## 🚀 Usage


### 🏠 Running Locally

Running locally for development can be done with:

-   `pnpm install` to install the required modules.
-   `pnpm dev` to host locally in development mode.

Now going to [localhost:3000](http://localhost:3000) will display the site.


## 🏗️ Building for Deployment

Building the static site can be done with:

-   `pnpm build`.

A `out` folder will be generated with the created bundle.

## 🛠️ Features

- **🎨 Styling**: [Vanilla Extract CSS](https://vanilla-extract.style/) for type-safe CSS-in-JS
- **🔤 Typography**: [Inter font](https://rsms.me/inter/) with advanced OpenType features including:
  - **Disambiguation**: Automatic character disambiguation for ambiguous characters (0/O, 1/l/I)
  - **Ligatures**: Contextual ligatures for improved readability
- **✨ Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth animations and [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) for seamless page transitions
