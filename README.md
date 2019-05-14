

# [jaxson.vandoorn.ca](https://jaxson.vandoorn.ca)

A [Gatsby](https://www.gatsbyjs.org/) based site built using static [Org Mode](https://orgmode.org/) content with [Orga](https://github.com/xiaoxinghu/orgajs).

Automated deploy to [Github Pages](https://pages.github.com/) is configured using [GitHub Actions](https://github.com/features/actions).

[![Build Status](https://wdp9fww0r9.execute-api.us-west-2.amazonaws.com/production/badge/woofers/woofers.github.io?branch=development)](https://wdp9fww0r9.execute-api.us-west-2.amazonaws.com/production/results/woofers/woofers.github.io?branch=development)


# Goals

1.  Be easy to update and maintain content.  Ideally with simple [Org Mode](https://orgmode.org/) markup.
2.  Take full-advantage of wide screen sizes while still scaling to a wide-variety of screen sizes.
3.  Load quickly; nothing is worse than a *slow* site.


# Modules

This sites uses a variety of open-source modules to keep the lights on.  Here are some of the key plug-ins:

-   [Gatsby](https://www.gatsbyjs.org/) provides an extremely easy [React](https://reactjs.org/) + [Webpack](https://webpack.js.org/) with a great plug-in ecosystem allowing content to be pulled in any format.
-   [Orga](https://github.com/xiaoxinghu/orgajs) allows [Org Mode](https://orgmode.org/) parsing using the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/).  A useful example and the skeleton of this site can be found [here](https://github.com/xiaoxinghu/gatsby-orga).
-   Code highlighting on posts is powered by [Prism](https://prismjs.com/).
-   [emotion](https://emotion.sh/) dynamically generate CSS for different components.
-   [Font Awesome](https://github.com/danawoodman/react-fontawesome) is used to easily add vector icons.
-   [typography.js](https://github.com/KyleAMathews/typography.js) handles font styling.


# Usage


### Running Locally

Running locally for development can be done with:

-   `yarn install` or `npm install` to install the required modules.
-   `yarn dev` or `npm dev` to host locally in development mode.

Now going to [localhost:8000](http://localhost:8000) will display the site.


## Building for Deployment

Building the static site can be done with:

-   `yarn build` or `npm build`.

A `public` folder will be generated with the created bundle.
