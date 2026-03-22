import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg flex flex-col">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-2" />
      <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
      <p className="text-blue-700 font-bold mb-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-300 text-white py-2 rounded hover:bg-blue-500"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;