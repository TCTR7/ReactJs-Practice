import React, { useState } from "react";
import Login from "../components/zustand/Login";
import Cart from "../components/zustand/Cart";
import ProductList from "../components/zustand/ProductList";
import { useCartStore } from "../stores/cartStore";

export default function ZustandPage() {
  const [exampleType, setExampleType] = useState(null);
  const { items } = useCartStore();
  function getExampleComponent(exampleType) {
    switch (exampleType) {
      case "login":
        return <Login />;
      case "productList":
        return <ProductList />;
      default:
        return (
          <div className="text-center text-gray-500">
            Please select an example to view.
          </div>
        );
    }
  }
  return (
    <div className="min-h-screen bg-white p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Zustand Store Example
      </h1>
      <select
        className="border border-gray-300 rounded p-2 mb-4 w-full"
        value={exampleType || ""}
        onChange={(e) => setExampleType(e.target.value)}
      >
        <option value="">SELECT EXAMPLE</option>
        <option value="login">Login</option>
        <option value="productList">Product List</option>
      </select>
      {getExampleComponent(exampleType)}
      {items.length > 0 && (
        <div className="mt-8">
          <Cart />
        </div>
      )}
    </div>
  );
}
