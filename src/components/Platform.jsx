import Chapter, { Heading, Lede, Note } from './ui/Chapter.jsx'
import DataTable from './ui/DataTable.jsx'
import { platform } from '../data/content.js'

export default function Platform() {
  return (
    <Chapter id="platform" numeral={platform.numeral} eyebrow={platform.eyebrow}>
      <Heading>{platform.heading}</Heading>
      <Lede>{platform.lede}</Lede>

      <div className="hairgrid mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {platform.arms.map((a) => (
          <article key={a.n} className="bg-panel px-[22px] pb-6 pt-[22px]">
            <p className="m-0 font-display text-xl text-brass">{a.n}</p>
            <h3 className="mb-[7px] mt-1.5 text-[15.5px] font-semibold">{a.title}</h3>
            <p className="m-0 text-[13.5px] leading-[1.55] text-ink-2">{a.body}</p>
          </article>
        ))}
      </div>

      <DataTable {...platform.table} />
      <Note {...platform.note} />
    </Chapter>
  )
}
