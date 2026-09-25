import Chapter, { Heading, Lede, Note } from './ui/Chapter.jsx'
import DataTable from './ui/DataTable.jsx'
import { structure } from '../data/content.js'

export default function Structure() {
  return (
    <Chapter id="structure" numeral={structure.numeral} eyebrow={structure.eyebrow}>
      <div className="max-w-prose">
        <Heading>{structure.heading}</Heading>
        <Lede>{structure.lede}</Lede>
      </div>

      <div className="mt-6 border-t border-rule">
        {structure.stack.map((l) => (
          <div
            key={l.who}
            className="grid items-baseline gap-1.5 border-b border-rule py-[18px] md:grid-cols-[170px_1fr_auto] md:gap-[22px]"
          >
            <span className="text-[15px] font-semibold">{l.who}</span>
            <span className="text-[14.5px] text-ink-2">{l.what}</span>
            <span className="tnum whitespace-nowrap font-mono text-[12.5px] text-brass md:text-right">
              {l.amt}
            </span>
          </div>
        ))}
      </div>

      <DataTable {...structure.waterfall} />
      <DataTable {...structure.capitalization} />
      <Note {...structure.note} />
    </Chapter>
  )
}
