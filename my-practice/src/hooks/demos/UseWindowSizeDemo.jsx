import React from "react";
import { useWindowSize } from "../useWindowSize";

export default function UseWindowSizeDemo() {
  const { windowSize } = useWindowSize();
  return (
    <div className="bg-white p-6 shadow-md rounded-lg border border-slate-300">
      <h1 className="text-xl font-bold mb-2 whitespace-nowrap truncate">🗃️ useWindowSize Demo</h1>
      <div className="p-4 flex flex-col items-start space-y-2 text-slate-600">
        <p className="text-lg">Window Size:</p>
        <p className="text-sm">Width: {windowSize.width}px</p>
        <p className="text-sm">Height: {windowSize.height}px</p>
      </div>
    </div>
  );
}
