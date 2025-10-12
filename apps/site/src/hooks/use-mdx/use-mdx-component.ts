/**
 * Adapted from mdx-bundler and Contentlayer + contentlayer2 fork
 * Modified to return other MDX exports
 *
 * https://github.com/kentcdodds/mdx-bundler/blob/1fac27347d7139dab27bcd96d0a89d8432a44fce/src/client/jsx.js
 * https://github.com/timlrx/contentlayer2/blob/main/packages/next-contentlayer/src/hooks/useMDXComponent.ts
 */
import type { MDXComponents } from 'mdx/types'
import * as React from 'react'
import * as _jsx_runtime from 'react/jsx-runtime'
import * as ReactDOM from 'react-dom'

export type MDXContentProps = {
  [props: string]: unknown
  components?: MDXComponents
}

export type MDXComponent = (props: MDXContentProps) => React.JSX.Element

function getMDXComponentOriginal(
  code: string,
  jsxGlobals: Record<string, unknown>,
  globals?: Record<string, unknown>
): [MDXComponent, { [key: string]: unknown }] {
  const mdxExport = getMDXExports(code, jsxGlobals, globals)
  return [mdxExport.default, { ...mdxExport, default: undefined }]
}

function getMDXExports(
  code: string,
  jsxGlobals: Record<string, unknown>,
  globals?: Record<string, unknown>
) {
  const scope = { ...jsxGlobals, ...globals }
  const fn = new Function(...Object.keys(scope), code)
  return fn(...Object.values(scope)) as {
    default: MDXComponent
    [key: string]: unknown
  }
}

// Pass in the React module into the evaluated code instead of having the evaluated code import React
// See https://github.com/timlrx/contentlayer2/issues/66
const defaultRuntime = {
  React,
  ReactDOM,
  _jsx_runtime
}

export const getMDXComponent = (
  code: string,
  globals: Record<string, unknown> = {}
) => {
  const options = {
    ...defaultRuntime,
    ...globals
  }
  return getMDXComponentOriginal(code, options)
}

export const useMDXComponentWithOtherExports = (
  code: string,
  globals: Record<string, unknown> = {}
) => {
  return React.useMemo(() => getMDXComponent(code, globals), [code, globals])
}
