// 🔁 DebounceThrottle.jsx
// Purpose: Demonstrate the difference between debounce and throttle in input handling.
// Debounce: Delays the function call until a certain time has passed since the last input.
// Throttle: Ensures the function is called at most once within a specified time frame.

import { useState, useEffect, useCallback } from "react";
import useDebounce from "../hooks/useDebounce";
import useThrottle from "../hooks/useThrottle";
import debounceData from "../data/debounceData"; // Assuming you have some data to filter

export default function DebounceThrottle() {
  const [query, setQuery] = useState("");
  const [debounceDelay, setDebounceDelay] = useState(500);
  const [throttleDelay, setThrottleDelay] = useState(300);
  const [searchResults, setSearchResults] = useState(debounceData);
  const debouncedQuery = useDebounce(query, debounceDelay);

  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScrollPosition = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  const handleScroll = useThrottle(updateScrollPosition, throttleDelay);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Fake search API
  useEffect(() => {
    if (!debouncedQuery) {
      console.log("No query, resetting search results to initial data.");
      setSearchResults(debounceData);
      return;
    }
    const results = debounceData.filter((item) => {
      if (!item.name || !item.category) {
        console.warn("Item missing name or category:", item);
        return false;
      }
      return (
        item.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
    });
    console.log("Search results:", results);
    setSearchResults(results);
  }, [debouncedQuery]);

  return (
    <div className="min-h-screen p-6 bg-white text-slate-800">
      <h1 className="text-2xl font-bold mb-4">⏱️ Debounce vs Throttle</h1>

      {/* Controls for delay times */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label className="block font-medium mb-1">Debounce Delay (ms):</label>
          <input
            type="number"
            min="0"
            max="2000"
            step="100"
            value={debounceDelay}
            onChange={(e) => setDebounceDelay(Number(e.target.value))}
            className="w-full border px-3 py-2 rounded shadow-sm border-slate-300"
          />
        </div>
        <div className="flex-1">
          <label className="block font-medium mb-1">Throttle Delay (ms):</label>
          <input
            type="number"
            min="0"
            max="2000"
            step="100"
            value={throttleDelay}
            onChange={(e) => setThrottleDelay(Number(e.target.value))}
            className="w-full border px-3 py-2 rounded shadow-sm border-slate-300"
          />
        </div>
      </div>

      {/* Debounce Example */}
      <div className="mb-8">
        <label className="block font-medium mb-2">
          🔍 Search (Debounced {debounceDelay}ms):
        </label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or category..."
          className="w-full border px-4 py-2 rounded shadow-sm border-slate-300 focus:ring-2 focus:ring-indigo-500"
        />

        {/* Results table */}
        <div className="mt-4 overflow-x-auto">
          {searchResults.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {searchResults.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${item.price.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            debouncedQuery && (
              <p className="text-sm text-gray-500 mt-2">
                No results found for "{debouncedQuery}"
              </p>
            )
          )}
        </div>
      </div>

      {/* Throttle Example */}
      <div className="fixed bottom-4 right-4 bg-indigo-600 text-white text-sm px-4 py-2 rounded shadow-md">
        Scroll Position: {Math.round(scrollPosition)}px (Throttled{" "}
        {throttleDelay}ms)
      </div>

      {/* Long content to enable scroll */}
      <div className="h-[2000px] mt-20 bg-gradient-to-b from-white to-slate-100"></div>
    </div>
  );
}
