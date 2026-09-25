/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        'panel-2': 'var(--panel-2)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        'ink-3': 'var(--ink-3)',
        rule: 'var(--rule)',
        'rule-strong': 'var(--rule-strong)',
        brass: 'var(--brass)',
        'brass-soft': 'var(--brass-soft)',
        'brass-wash': 'var(--brass-wash)',
        'on-brass': 'var(--on-brass)',
        steel: 'var(--steel)',
      },
      fontFamily: {
        display: ['Spectral', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Archivo', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        memo: '1180px',
        prose: '66ch',
        lede: '64ch',
      },
      borderRadius: {
        memo: '1px',
      },
    },
  },
  plugins: [],
}
