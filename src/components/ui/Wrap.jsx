export default function Wrap({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-memo px-[30px] ${className}`}>{children}</div>
}
