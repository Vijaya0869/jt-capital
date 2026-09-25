import Chapter, { Heading, Lede, Note } from './ui/Chapter.jsx'
import Button from './ui/Button.jsx'
import { contact } from '../data/content.js'

export default function Contact() {
  return (
    <Chapter id="contact" numeral={contact.numeral} eyebrow={contact.eyebrow}>
      <div className="grid gap-8 lg:grid-cols-[1fr_330px] lg:gap-12">
        <div className="max-w-prose">
          <Heading>{contact.heading}</Heading>
          <Lede>{contact.lede}</Lede>
          <div className="mt-[26px] flex flex-wrap gap-3">
            {contact.actions.map((a) => (
              <Button key={a.label} href={a.href} primary={a.primary}>
                {a.label}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <dl className="border-t border-rule">
            {contact.details.map((d) => (
              <div
                key={d.term}
                className="flex justify-between gap-4 border-b border-rule py-[13px] text-sm"
              >
                <dt className="label pt-[3px] tracking-[0.13em]">{d.term}</dt>
                <dd className="m-0 text-right text-ink">
                  {d.href ? (
                    <a
                      href={d.href}
                      className="border-b border-brass-wash text-brass no-underline transition-colors hover:border-brass"
                    >
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <Note {...contact.note} />
        </div>
      </div>
    </Chapter>
  )
}
