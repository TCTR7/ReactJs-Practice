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
    <div className="bg-white shadow rounded-lg p-4 mt-6 sm:w-[700px] md:w-[800px] lg:w-[900px]">
      <div className="bg-white pb-4 z-10">
        <h2 className="text-xl font-bold mb-4">🛍️ Your Cart</h2>
      </div>

      <div className="overflow-x-auto overflow-y-auto max-h-96">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100 text-center">
            <tr>
              <th className="p-2 border-b border border-solid">Product</th>
              <th className="p-2 border-b border border-solid">Price</th>
              <th className="p-2 border-b border border-solid">Quantity</th>
              <th className="p-2 border-b border border-solid">Subtotal</th>
              <th className="p-2 border-b border border-solid">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 border border-solid text-center">
                <td className="p-2 border-b border border-solid">{item.name}</td>
                <td className="p-2 border-b border border-solid">
                  ${item.price.toFixed(2)}
                </td>
                <td className="p-2 border-b border border-solid">
                  {item.quantity}
                </td>
                <td className="p-2 border-b border border-solid">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="p-2 border-b">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:cursor-pointer hover:bg-red-300 border border-solid p-2 text-sm"
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
                  className="text-blue-600 hover:underline text-sm hover:cursor-pointer"
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
