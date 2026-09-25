import Wrap from './ui/Wrap.jsx'
import Button from './ui/Button.jsx'
import { hero } from '../data/content.js'

export default function Hero() {
  return (
    <div className="border-b border-rule pt-20">
      <Wrap>
        <p className="mb-[26px] font-mono text-[11px] uppercase tracking-[0.2em] text-brass">
          {hero.kicker}
        </p>
        <h1 className="max-w-[20ch] font-display text-[clamp(34px,5.4vw,60px)] font-light leading-[1.1] tracking-[-0.018em]">
          {hero.headlineBefore}
          <em className="italic text-brass">{hero.emphasis}</em>
          {hero.headlineAfter}
        </h1>
        <p className="mt-6 max-w-[62ch] text-lg text-ink-2">{hero.standfirst}</p>
        <div className="mb-14 mt-8 flex flex-wrap gap-3">
          {hero.actions.map((a) => (
            <Button key={a.label} href={a.href} primary={a.primary}>
              {a.label}
            </Button>
          ))}
        </div>
      </Wrap>

      <Wrap>
        <dl className="grid grid-cols-2 border-t border-rule lg:grid-cols-4">
          {hero.terms.map((t, i) => (
            <div
              key={t.label}
              className={[
                'py-6 pr-[26px]',
                i < hero.terms.length - 1 ? 'lg:border-r lg:border-rule' : '',
                i % 2 === 0 ? 'border-r border-rule lg:border-r' : '',
                i >= 2 ? 'border-t border-rule lg:border-t-0' : '',
              ].join(' ')}
            >
              <dd className="tnum font-display text-[33px] leading-none">{t.value}</dd>
              <dt className="label mt-3 text-[9.5px]">{t.label}</dt>
            </div>
          ))}
        </dl>
      </Wrap>
    </div>
  )
}
