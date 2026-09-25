import Chapter, { Heading, Lede } from './ui/Chapter.jsx'
import { strategy } from '../data/content.js'

export default function Strategy() {
  return (
    <Chapter id="strategy" numeral={strategy.numeral} eyebrow={strategy.eyebrow}>
      <Heading>{strategy.heading}</Heading>
      <Lede>{strategy.lede}</Lede>
      <div className="mt-6 border-t border-rule">
        {strategy.items.map((s) => (
          <div
            key={s.key}
            className="grid grid-cols-[58px_1fr] gap-[22px] border-b border-rule py-5"
          >
            <span className="pt-1 font-mono text-[11px] tracking-[0.1em] text-brass">{s.key}</span>
            <div>
              <h3 className="mb-[5px] text-base font-semibold">{s.title}</h3>
              <p className="m-0 max-w-[62ch] text-[14.5px] text-ink-2">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
      <blockquote className="mt-10 max-w-[27ch] border-l-2 border-brass pl-6 font-display text-[clamp(21px,2.7vw,29px)] font-light italic leading-[1.36]">
        {strategy.pullQuote}
      </blockquote>
    </Chapter>
  )
}
