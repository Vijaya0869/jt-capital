import Chapter, { Heading, Lede } from './ui/Chapter.jsx'
import { process } from '../data/content.js'

export default function Process() {
  return (
    <Chapter id="process" numeral={process.numeral} eyebrow={process.eyebrow}>
      <Heading>{process.heading}</Heading>
      <Lede>{process.lede}</Lede>
      <ol className="mt-6 list-none border-t border-rule p-0">
        {process.steps.map((s) => (
          <li key={s.n} className="grid grid-cols-[58px_1fr] gap-[22px] border-b border-rule py-5">
            <span className="pt-1 font-mono text-[11px] tracking-[0.1em] text-brass">{s.n}</span>
            <div>
              <h3 className="mb-[5px] text-base font-semibold">{s.title}</h3>
              <p className="m-0 max-w-[62ch] text-[14.5px] text-ink-2">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Chapter>
  )
}
