import Wrap from './ui/Wrap.jsx'
import { firm, disclaimer } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="pb-11 pt-[34px]">
      <Wrap>
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-5 text-[12.5px] text-ink-3">
          <p className="m-0">
            © {new Date().getFullYear()} {firm.name}. {firm.location}. An affiliate of{' '}
            {firm.operatingArm}.
          </p>
          <p className="m-0">
            <a
              href={`mailto:${firm.email}`}
              className="text-ink-2 no-underline transition-colors hover:text-brass"
            >
              {firm.email}
            </a>{' '}
            ·{' '}
            <a href="#top" className="text-ink-2 no-underline transition-colors hover:text-brass">
              Back to top
            </a>
          </p>
        </div>
        {/* Required disclaimer — do not shorten or remove. */}
        <p className="m-0 max-w-[92ch] text-xs leading-[1.7] text-ink-3">{disclaimer}</p>
      </Wrap>
    </footer>
  )
}
