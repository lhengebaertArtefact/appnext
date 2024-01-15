"use client";

import { createProduct } from "@/app/actions";

export default function Button() {
  const newProductData = {
    id: "9",
    name: "Nouveau produit",
    description: "Description du nouveau produit",
    price: "49.99",
  };

  return (
    <div>
      <button onClick={() => createProduct(newProductData)}>
        Create a new product
      </button>
    </div>
  );
}
