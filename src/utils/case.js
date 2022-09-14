export const camelCaseToPascalCase = string =>
  string.replace(/(^.|-(.))/g, g => g.replace(/-/g, ' ').toUpperCase())
