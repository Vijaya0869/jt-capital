import Wrap from './ui/Wrap.jsx'
import Button from './ui/Button.jsx'
import { offering } from '../data/content.js'

export default function Offering() {
  return (
    <section id="offering" className="border-b border-rule bg-panel">
      <Wrap>
        <div className="flex flex-wrap items-end justify-between gap-6 pt-16">
          <div>
            <span className="inline-flex items-center gap-2.5 rounded-memo border border-brass px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-brass">
              <span className="h-1.5 w-1.5 rounded-full bg-brass" aria-hidden="true" />
              {offering.status}
            </span>
            <h2 className="mt-4 font-display text-[clamp(30px,4vw,44px)] leading-[1.1] tracking-[-0.015em]">
              {offering.title}
            </h2>
          </div>
          <Button href={offering.cta.href} primary>
            {offering.cta.label}
          </Button>
        </div>

        <p className="mt-5 max-w-lede text-[17px] text-ink-2">{offering.lede}</p>

        <div className="hairgrid mt-8 grid md:grid-cols-2">
          {offering.assets.map((a) => (
            <article key={a.name} className="bg-bg px-[26px] pb-7 pt-[26px]">
              <h3 className="font-display text-[23px] leading-[1.2]">{a.name}</h3>
              <p className="label mb-4 mt-2.5 text-brass">{a.meta}</p>
              <p className="mb-[18px] text-[14.5px] text-ink-2">{a.body}</p>
              <dl className="hairgrid grid grid-cols-2">
                {a.facts.map((f) => (
                  <div key={f.term} className="bg-bg py-3">
                    <dt className="label mb-1 text-[9px] tracking-[0.13em]">{f.term}</dt>
                    <dd className="tnum m-0 text-[15px] font-semibold">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <dl className="hairgrid grid grid-cols-2 border-t-0 lg:grid-cols-4">
          {offering.returns.map((r) => (
            <div key={r.label} className="bg-panel-2 px-6 pb-6 pt-[22px]">
              <dd className="tnum font-display text-[32px] leading-none text-brass">{r.value}</dd>
              <dt className="label mt-[11px] text-[9px] tracking-[0.14em]">{r.label}</dt>
            </div>
          ))}
        </dl>

        <div className="flex flex-wrap items-center justify-between gap-5 pb-16 pt-[30px]">
          <p className="m-0 max-w-[62ch] text-[12.5px] leading-[1.6] text-ink-3">
            <strong className="font-semibold text-brass">Illustrative.</strong>{' '}
            {offering.disclosure}
          </p>
          <Button href="#structure">Read the structure</Button>
        </div>
      </Wrap>
    </section>
  )
}
