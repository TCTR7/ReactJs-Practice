// components/Cart.jsx
import { useCartStore } from "../../stores/cartStore";
import React from "react";

export default function Cart() {
  const { items, totalPrice, removeItem, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <p className="text-gray-500">🛒 Cart is empty, Please add item to cart</p>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <div className="sticky top-0 bg-white pb-4 z-10">
        <h2 className="text-xl font-bold mb-4">🛍️ Your Cart</h2>
      </div>

      <div className="overflow-x-auto overflow-y-auto max-h-96">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 border-b">Product</th>
              <th className="text-right px-4 py-2 border-b">Price</th>
              <th className="text-right px-4 py-2 border-b">Quantity</th>
              <th className="text-right px-4 py-2 border-b">Subtotal</th>
              <th className="text-center px-4 py-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{item.name}</td>
                <td className="px-4 py-2 text-right border-b">
                  ${item.price.toFixed(2)}
                </td>
                <td className="px-4 py-2 text-right border-b">
                  {item.quantity}
                </td>
                <td className="px-4 py-2 text-right border-b">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="px-4 py-2 text-center border-b">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50">
              <td
                colSpan="3"
                className="px-4 py-2 text-right font-bold border-t"
              >
                Total:
              </td>
              <td className="px-4 py-2 text-right font-bold border-t">
                ${totalPrice().toFixed(2)}
              </td>
              <td className="px-4 py-2 text-center border-t">
                <button
                  onClick={clearCart}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Clear All
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
