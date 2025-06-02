import useDebounce from "../../hooks/useDebounce";
import { useEffect } from "react";

export default function SearchFilter({ search, setSearch }) {
  const debouncedSearch = useDebounce(search, 3000);

  useEffect(() => {
    if (debouncedSearch) {
      setSearch(debouncedSearch);
    }
  }, [debouncedSearch, setSearch]);
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search name, email, or country..."
      className="w-full border px-3 py-2 rounded shadow"
    />
  );
}
