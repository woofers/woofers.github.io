import inject from '@rollup/plugin-inject'
import swc from 'rollup-plugin-swc'
import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import path from 'path'
import pkg from './package.json'

const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss']
})

const projectRootDir = path.resolve(__dirname)

const makePath = module => ({
  find: `${module}`,
  replacement: path.resolve(projectRootDir, `src/${module}`)
})

export default {
  input: './index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {})
  ],
  plugins: [
    alias({
      entries: [
        makePath('components'),
        makePath('features'),
        makePath('layout'),
        makePath('pages'),
        makePath('stitches')
      ],
      customResolver
    }),
    resolve(),
    swc({
      rollup: {
        exclude: 'node_modules'
      },
      jsc: {
        target: 'es2018',
        parser: {
          syntax: 'ecmascript',
          jsx: true,
          numericSeparator: false,
          classPrivateProperty: false,
          privateMethod: false,
          classProperty: false,
          functionBind: false,
          decorators: false,
          decoratorsBeforeExport: false
        },
        transform: {
          react: {
            pragma: 'React.createElement',
            pragmaFrag: 'React.Fragment',
            throwIfNamespace: true,
            development: false,
            useBuiltins: false
          }
        }
      }
    }),
    inject({
      React: 'react'
    })
  ]
}
