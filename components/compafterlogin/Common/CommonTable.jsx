// A reusable table for admin sub-pages
// Pass columns (array of {label, key, render?}), data (array), and actions (array of {label, onClick, className})

const CommonTable = ({ columns, data, actions }) => (
  <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
    <table className="min-w-full text-sm">
      <thead>
        <tr className="text-gray-500 text-left border-b">
          {columns.map(col => (
            <th key={col.key} className="py-3 px-2 font-semibold">{col.label}</th>
          ))}
          {actions && actions.length > 0 && <th className="py-3 px-2 font-semibold">Actions</th>}
        </tr>
      </thead>
      <tbody>
  {data.length === 0 ? (
    <tr>
      <td colSpan={columns.length + (actions?.length > 0 ? 1 : 0)} className="py-6 px-2 text-center text-gray-400">
        No data available in table
      </td>
    </tr>
  ) : (
    data.map((row, idx) => (
      <tr key={`${row.date}-${row.patient}-${idx}`} className="border-b last:border-b-0">
        {columns.map(col => (
          <td key={col.key} className="py-3 px-2">
            {col.render ? col.render(row) : row[col.key]}
          </td>
        ))}
        {actions?.length > 0 && (
          <td className="py-3 px-2">
            <div className="flex gap-2">
              {actions.map((action, aidx) => (
                <button
                  key={aidx}
                  className={action.className}
                  onClick={() => action.onClick(row, idx)} // also send idx here if needed
                >
                  {action.label}
                </button>
              ))}
            </div>
          </td>
        )}
      </tr>
    ))
  )}
</tbody>

    </table>
  </div>
);

export default CommonTable;
