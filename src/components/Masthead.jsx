import Wrap from './ui/Wrap.jsx'
import ThemeToggle from './ui/ThemeToggle.jsx'
import { firm, nav } from '../data/content.js'

export default function Masthead() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg">
      <Wrap className="flex min-h-[66px] items-center justify-between gap-5">
        <a href="#top" className="flex items-baseline gap-2 no-underline">
          <span className="font-display text-[22px] tracking-[0.06em] text-brass">JR</span>
          <span className="font-display text-[22px] tracking-[0.02em]">Capital</span>
          <span className="label ml-1.5 hidden text-[9.5px] tracking-[0.16em] sm:inline">
            {firm.tagline}
          </span>
        </a>

        <nav className="flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden border-b border-transparent py-[5px] text-[13px] text-ink-2 no-underline transition-colors hover:border-brass hover:text-ink xl:block"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-memo border border-brass bg-brass px-4 py-2 text-[13px] font-semibold text-[color:var(--on-brass)] no-underline transition-colors hover:border-brass-soft hover:bg-brass-soft"
          >
            Investor inquiries
          </a>
        </nav>
      </Wrap>
    </header>
  )
}
