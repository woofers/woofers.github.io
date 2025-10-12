export const camelCaseToPascalCase = (value: string) =>
  value.replace(/(^.|-(.))/g, g => g.replace(/-/g, ' ').toUpperCase())
