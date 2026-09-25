/**
 * The identity of the brand: a roman numeral inside a keyline square, in a
 * sticky left rail. The same motif appears in the offering deck — keep them
 * matched. Chapters are numbered because a capital raise genuinely is a
 * sequence (thesis, strategy, structure, criteria, process), not for decoration.
 */
import Wrap from './Wrap.jsx'

export default function Chapter({ id, numeral, eyebrow, children, className = '' }) {
  return (
    <section id={id} className={`border-b border-rule ${className}`}>
      <Wrap>
        <div className="grid gap-6 py-13 py-[52px] lg:grid-cols-[170px_1fr] lg:gap-11 lg:py-[70px]">
          <div className="self-start lg:sticky lg:top-24">
            <span className="grid h-[66px] w-[66px] place-items-center border border-brass font-display text-[26px] leading-none text-brass">
              {numeral}
            </span>
            <span className="label mt-3.5 block tracking-[0.18em]">{eyebrow}</span>
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </Wrap>
    </section>
  )
}

export function Heading({ children }) {
  return (
    <h2 className="max-w-[21ch] font-display text-[clamp(25px,3.2vw,35px)] leading-[1.2] tracking-[-0.012em]">
      {children}
    </h2>
  )
}

export function Lede({ children }) {
  return <p className="mt-4 max-w-lede text-[17px] text-ink-2">{children}</p>
}

export function Note({ title, body }) {
  return (
    <div className="mt-6 max-w-[68ch] border border-rule-strong bg-panel-2 px-[18px] py-4">
      <p className="label mb-2 font-medium text-steel">{title}</p>
      <p className="m-0 text-[13.5px] text-ink-2">{body}</p>
    </div>
  )
}
