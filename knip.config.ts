import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  workspaces: {
    '.': {
      entry: ['apps/site/next.config.js', 'apps/site/next.config.mjs', 'apps/site/next.config.ts'],
      project: ['apps/site/**/*.{js,jsx,ts,tsx}', 'packages/@jaxson/**/*.{js,jsx,ts,tsx}'],
    },
    'apps/site': {
      entry: [
        'apps/site/next.config.{js,ts,mjs}',
        'apps/site/middleware.{js,ts}',
        'apps/site/src/app/**/*.{js,jsx,ts,tsx}',
        'apps/site/src/pages/**/*.{js,jsx,ts,tsx}',
        'apps/site/src/middleware.{js,ts}',
        'apps/site/contentlayer.config.{js,ts}',
        'apps/site/next-env.d.ts',
        'apps/site/tailwind.config.{js,ts}',
        'apps/site/postcss.config.{js,ts}',
        'apps/site/vercel.json',
        'apps/site/netlify.toml',
        'apps/site/remix.config.{js,ts}',
        'apps/site/vite.config.{js,ts}',
        'apps/site/vitest.config.{js,ts}',
        'apps/site/jest.config.{js,ts}',
        'apps/site/jest.setup.{js,ts}',
        'apps/site/types.d.ts',
        'apps/site/nuxt.config.{js,ts}',
        'apps/site/svelte.config.{js,ts}',
        'apps/site/svelte-kit.config.{js,ts}',
        'apps/site/windi.config.{js,ts}',
        'apps/site/uno.config.{js,ts}',
        'apps/site/eslint.config.{js,ts}',
        'apps/site/playwright.config.{js,ts}',
        'apps/site/rollup.config.{js,ts}',
        'apps/site/vue.config.{js,ts}',
        'apps/site/astro.config.{js,ts,mjs}',
        'apps/site/contentlayer.config.{js,ts}',
        'apps/site/dist-games.sh',
        'apps/site/server.js',
      ],
      project: ['apps/site/**/*.{js,jsx,ts,tsx}'],
    },
    'packages/@jaxson/ui': {
      entry: ['packages/@jaxson/ui/src/index.ts'],
      project: ['packages/@jaxson/ui/src/**/*.{js,jsx,ts,tsx}'],
    },
    'packages/@jaxson/hooks': {
      entry: ['packages/@jaxson/hooks/src/index.ts'],
      project: ['packages/@jaxson/hooks/src/**/*.{js,jsx,ts,tsx}'],
    },
  },
  ignore: [
    'apps/site/public/**',
    'apps/site/.next/**',
    'apps/site/out/**',
    'node_modules/**',
    'packages/@jaxson/tsconfig/**',
  ],
  ignoreDependencies: [
    // These are likely used by Next.js or other build tools
    'eslint',
    'eslint-config-next',
    'serve',
    'serve-handler',
  ],
};

export default config;
