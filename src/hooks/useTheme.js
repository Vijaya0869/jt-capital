import { useEffect, useState, useCallback } from 'react'

const KEY = 'theme-preference'
const ORDER = ['system', 'light', 'dark']

/**
 * Three-state theme: 'system' (no attribute, follows prefers-color-scheme),
 * 'light' and 'dark' (stamps data-theme on <html> so the choice wins in both
 * directions). Never define a colour only inside a media query — see index.css.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(KEY)
      return ORDER.includes(saved) ? saved : 'system'
    } catch {
      return 'system'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'system') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', theme)
    try { localStorage.setItem(KEY, theme) } catch { /* private mode */ }
  }, [theme])

  const cycle = useCallback(() => {
    setTheme((t) => ORDER[(ORDER.indexOf(t) + 1) % ORDER.length])
  }, [])

  return { theme, setTheme, cycle }
}
