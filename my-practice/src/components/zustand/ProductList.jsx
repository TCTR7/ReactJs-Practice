import React from "react";
import { useCartStore } from "../../stores/cartStore";

const products = [
  { id: 1, name: "MacBook Pro", price: 1999 },
  { id: 2, name: "iPhone 14", price: 999 },
  { id: 3, name: "iPad Pro", price: 1199 },
  { id: 4, name: "AirPods Max", price: 549 },
  { id: 5, name: "Apple Watch", price: 399 },
  { id: 6, name: "Magic Keyboard", price: 129 },
  { id: 7, name: "Studio Display", price: 1599 },
  { id: 8, name: "Apple TV", price: 179 },
  { id: 9, name: "HomePod", price: 299 },
  { id: 10, name: "AirTag", price: 29 },
];
export default function ProductList() {
  const { addItem } = useCartStore();

  return (
    <div className="bg-white shadow rounded-lg h-[500px] overflow-y-auto p-4">
      <h2 className="text-xl font-bold mb-4">🛍️ Product List</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-600 border-b">
            <th className="py-2">Product</th>
            <th className="py-2">Price</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="py-2">{p.name}</td>
              <td className="py-2">${p.price}</td>
              <td className="py-2">
                <button
                  onClick={() => addItem(p)}
                  className="text-blue-600 hover:cursor-pointer border border-solid p-2 text-sm "
                >
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
