import { useTheme } from '../../hooks/useTheme.js'

const LABEL = { system: 'System', light: 'Light', dark: 'Dark' }

export default function ThemeToggle() {
  const { theme, cycle } = useTheme()
  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Theme: ${LABEL[theme]}. Click to change.`}
      title={`Theme: ${LABEL[theme]}`}
      className="label rounded-memo border border-rule-strong px-2.5 py-1.5 transition-colors hover:border-brass hover:text-brass"
    >
      {LABEL[theme]}
    </button>
  )
}
