// components/VirtualProductList.jsx
// this file implements a virtualized product list using react-window and Zustand for state management.
// This allows for efficient rendering of large lists by only rendering items that are currently visible in the viewport.
// It also integrates with a Zustand store to manage the cart state.

import React, { useRef } from "react";
import { FixedSizeList as List } from "react-window";
import { useCartStore } from "../../stores/cartStore";

const products = Array.from({ length: 1000 }).map((_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 1000) + 50,
}));

const Row = ({ index, style }) => {
  const product = products[index];
  const addToCart = useCartStore((state) => state.addItem);
  //   console.log(`Rendering row ${index}`);

  function checkVirtualizedRow() {
    return
    // console.log(`Row ${index} is being rendered`);
  }

  return (
    <div
      style={style}
      className="grid grid-cols-3 px-4 py-2 border-b items-center text-sm"
      onClick={checkVirtualizedRow()}
    >
      <span>{product.name}</span>
      <span>${product.price}</span>
      <button
        onClick={() => addToCart(product)}
        className="text-center max-w-[100px] mx-auto text-blue-600 hover:cursor-pointer hover:bg-green-500 hover:text-white border border-solid p-2 text-sm"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default function VirtualProductList() {
  const listRef = useRef();
  return (
    <div className="bg-white shadow rounded-lg h-[500px]">
      <h2 className="text-xl font-bold p-4 border-b">
        ⚡ Virtualized Product List
      </h2>
      <div className="grid grid-cols-3 px-4 py-2 bg-gray-50 text-gray-600 font-medium text-sm border-b sticky top-12 z-10">
        <span>Product</span>
        <span>Price</span>
        <span className="text-center">Action</span>
      </div>

      <List ref={listRef} height={430} itemCount={products.length} itemSize={48} width="100%">
        {Row}
      </List>
      <button
        onClick={() => {
          console.log("Scrolling to item 500");
          if (listRef.current) {
            listRef.current.scrollToItem(500);
          }
        }}
        className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-blue-700 hover transition-colors"
      >
        Scroll to Top
      </button>
    </div>
  );
}
