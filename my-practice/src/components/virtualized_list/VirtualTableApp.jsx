// This component demonstrates a virtualized table using react-window
// and a search filter to efficiently display and search through a large dataset of user information.
// It includes a search input that filters the displayed rows based on user input.
// This is useful for applications that need to handle large datasets without performance issues.

import { useState, useCallback, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import faker from "faker";
import SearchFilter from "./SearchFilter";
import VirtualTableRow from "./VirtualTableRow";
import useDebounce from "../../hooks/useDebounce";

// Generate 5000 fake rows
const generateData = (n) => {
  return Array.from({ length: n }, (_, id) => ({
    id,
    name: faker.name.findName(),
    email: faker.internet.email(),
    country: faker.address.country(),
  }));
};

const allData = generateData(5000);

export default function VirtualTableApp() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(allData);
  const debouncedSearch = useDebounce(search, 1000);

  const handleSearchData = useCallback(() => {
    return allData.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.country.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  useEffect(() => {
    if (debouncedSearch) {
      console.log("Search query:", debouncedSearch);
      const filteredData = handleSearchData();
      console.log("Filtered data length:", filteredData.length);
      setSearchResults(filteredData);
    } else {
      console.log("Resetting to all data");
      setSearchResults(allData);
    }
  }, [debouncedSearch, handleSearchData]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📋 Virtualized User Table</h1>
      <SearchFilter search={search} setSearch={setSearch} />
      <div className="mt-4 border rounded overflow-hidden">
        <div className="grid grid-cols-4 bg-gray-100 font-semibold px-4 py-2">
          <div>ID</div>
          <div className="whitespace-nowrap truncate">Name</div>
          <div className="whitespace-nowrap truncate">Email</div>
          <div className="whitespace-nowrap truncate">Country</div>
        </div>
        <List
          height={500}
          itemCount={searchResults.length}
          itemSize={50}
          width={"100%"}
          itemData={searchResults}
        >
          {VirtualTableRow}
        </List>
      </div>
    </div>
  );
}
