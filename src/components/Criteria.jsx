import Chapter, { Heading, Lede } from './ui/Chapter.jsx'
import { criteria } from '../data/content.js'

export default function Criteria() {
  return (
    <Chapter id="criteria" numeral={criteria.numeral} eyebrow={criteria.eyebrow}>
      <Heading>{criteria.heading}</Heading>
      <Lede>{criteria.lede}</Lede>
      <div className="hairgrid mt-6 grid lg:grid-cols-3">
        {criteria.columns.map((c) => (
          <div key={c.title} className="bg-panel px-[22px] pb-6 pt-[22px]">
            <p className="label mb-3.5">{c.title}</p>
            <ul className="m-0 list-disc pl-[18px] text-[14.5px] text-ink-2 marker:text-brass">
              {c.items.map((i) => (
                <li key={i} className="mb-2">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Chapter>
  )
}
