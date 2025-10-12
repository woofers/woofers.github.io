export const updateThemeColor = (
  localStorageKey: string,
  defaultTheme: string
) => {
  try {
    let key = localStorage.getItem(localStorageKey) || defaultTheme
    let value =
      'system' === key
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : key
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      if (value === 'dark') {
        meta.setAttribute('content', '#14120b')
      } else {
        meta.setAttribute('content', '#f9f9f9')
      }
    }
  } catch (a) {}
}

const getInlineThemeColorScript = () => `
  (${updateThemeColor.toString()})('theme', 'system')`

export const ThemeColorMetaScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: getInlineThemeColorScript()
    }}
  />
)
