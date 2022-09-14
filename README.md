

# [jaxs.onl](https://jaxs.onl)

[![img](https://github.com/woofers/woofers.github.io/workflows/build/badge.svg)](https://github.com/woofers/woofers.github.io/actions)

A [Next.js](https://nextjs.org/) based site built using static [Org Mode](https://orgmode.org/) content with [Orga](https://github.com/xiaoxinghu/orgajs).

Automated deploy to [Github Pages](https://pages.github.com/) is configured using [GitHub Actions](https://github.com/features/actions).


# Goals

1.  Be easy to update and maintain content.  Ideally with simple [Org Mode](https://orgmode.org/) markup.
2.  Take full-advantage of wide screen sizes while still scaling to a wide-variety of screen sizes.
3.  Load quickly; nothing is worse than a *slow* site.

# Usage


### Running Locally

Running locally for development can be done with:

-   `yarn install` or `npm install` to install the required modules.
-   `yarn dev` or `npm dev` to host locally in development mode.

Now going to [localhost:3000](http://localhost:3000) will display the site.


## Building for Deployment

Building the static site can be done with:

-   `yarn build` or `npm build`.

A `out` folder will be generated with the created bundle.
