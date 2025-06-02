import React, { useState } from "react";
import VirtualProductList from "../components/virtualized_list/VirtualProductList";
import VirtualTableApp from "../components/virtualized_list/VirtualTableApp";

export default function VirtualizedListPage() {
  const [pageType, setPageType] = useState("products"); // 'products' or 'table'
  const togglePageType = () => {
    setPageType((prev) => (prev === "products" ? "table" : "products"));
  };
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📋 Virtualized List Page</h1>
      <button
        onClick={togglePageType}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:cursor-pointer transition-colors"
      >
        Toggle to {pageType === "products" ? "Table" : "Product List"}
      </button>
      {pageType === "products" ? <VirtualProductList /> : <VirtualTableApp />}
    </div>
  );
}
