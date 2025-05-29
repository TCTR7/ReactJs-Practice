// src/pages/hooks/UsePreviousDemo.jsx
import { useState } from 'react';
import usePrevious from '../../hooks/usePrevious';

export default function UsePreviousDemo() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg border border-slate-300">
      <h2 className="text-xl font-bold mb-4 whitespace-nowrap truncate">🕒 usePrevious Example</h2>
      <p className="mb-2">Current count: <strong>{count}</strong></p>
      <p className="mb-4 text-slate-600">Previous count: <em>{prevCount ?? 'N/A'}</em></p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Tăng
      </button>
    </div>
  );
}
