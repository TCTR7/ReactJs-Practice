import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../useOnClickOutside.js";

export default function UseOnClickOutsideDemo() {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useOnClickOutside(ref, () => {
    setCount((prevCount) => prevCount + 1);
  });
  return (
    <div
      ref={ref}
      className="bg-white p-6 shadow-md rounded-lg border border-slate-300"
    >
      <h1 className="text-xl font-bold mb-2 whitespace-nowrap truncate">🗃️ useOnClickOutside Demo</h1>
      <div className="p-4 flex flex-col gap-2 text-slate-600">
        <p className="text-lg">
          This demo will show how to use the useOnClickOutside hook.
        </p>
        <p className="text-sm">Click outside the box to see the effect.</p>
        <p className="text-sm">
          Clicks outside the box: <span className="font-bold">{count}</span>
        </p>
      </div>
    </div>
  );
}
