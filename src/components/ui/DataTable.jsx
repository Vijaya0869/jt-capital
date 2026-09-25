/**
 * Wide content scrolls inside its own container so the page body never scrolls
 * sideways. The right-hand column is the figure column: brass, monospaced,
 * tabular.
 */
export default function DataTable({ caption, columns, rows }) {
  return (
    <div className="mt-6 overflow-x-auto border border-rule bg-panel">
      <table className="w-full min-w-[560px] border-collapse text-[14.5px]">
        <caption className="label border-b border-rule px-5 py-[15px] text-left">
          {caption}
        </caption>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th
                key={c}
                scope="col"
                className={`label border-b border-rule px-5 py-[13px] font-medium tracking-[0.13em] ${
                  i === columns.length - 1 ? 'text-right' : 'text-left'
                }`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              <td className="border-b border-rule px-5 py-3.5 align-top font-medium text-ink last:border-b-0">
                {r[0]}
              </td>
              <td className="border-b border-rule px-5 py-3.5 align-top text-ink-2">{r[1]}</td>
              <td className="tnum whitespace-nowrap border-b border-rule px-5 py-3.5 text-right align-top font-mono text-brass">
                {r[2]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
