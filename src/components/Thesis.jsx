import Chapter, { Heading, Lede } from './ui/Chapter.jsx'
import { thesis } from '../data/content.js'

export default function Thesis() {
  return (
    <Chapter id="thesis" numeral={thesis.numeral} eyebrow={thesis.eyebrow}>
      <Heading>{thesis.heading}</Heading>
      <Lede>{thesis.lede}</Lede>
      <div className="hairgrid mt-7 grid md:grid-cols-2">
        {thesis.points.map((p) => (
          <article key={p.tag} className="bg-panel px-6 pb-[26px] pt-6">
            <p className="label mb-3 text-brass">{p.tag}</p>
            <h3 className="mb-2 text-[17px] font-semibold tracking-[-0.005em]">{p.title}</h3>
            <p className="m-0 text-[14.5px] leading-[1.58] text-ink-2">{p.body}</p>
          </article>
        ))}
      </div>
    </Chapter>
  )
}
