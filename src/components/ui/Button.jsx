export default function Button({ href, primary = false, children, ...rest }) {
  const base = 'inline-block rounded-memo border px-[22px] py-3 text-sm no-underline transition-colors'
  const styles = primary
    ? 'border-brass bg-brass font-semibold text-[color:var(--on-brass)] hover:border-brass-soft hover:bg-brass-soft'
    : 'border-rule-strong bg-transparent text-ink hover:border-brass hover:text-brass'
  return (
    <a href={href} className={`${base} ${styles}`} {...rest}>
      {children}
    </a>
  )
}
